// Yöntek Teknik Servis - PHP sayfalarını Node üzerinde çalıştıran küçük sunucu.
// Site dosyaları public/ klasöründedir; .php sayfalar gerçek PHP (WebAssembly) ile işlenir,
// css/js/görseller doğrudan dosyadan verilir. Render'daki mevcut Node ayarları
// (npm install / npm run build / npm start) değişmeden çalışır.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { PHP, PHPRequestHandler } from '@php-wasm/universal';
import { loadNodeRuntime, createNodeFsMountHandler } from '@php-wasm/node';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, 'public');
const PORT = Number(process.env.PORT) || 5000;
const DOCROOT = '/www';
let processCounter = 0;

const MIME = {
  '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.gif': 'image/gif', '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.html': 'text/html; charset=utf-8', '.pdf': 'application/pdf',
};
const LONG_CACHE = new Set(['.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico', '.woff', '.woff2']);
const COMPRESSIBLE = /^(text\/|application\/(json|xml|javascript)|image\/svg)/;

// .htaccess'teki güvenlik başlıklarının karşılığı
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

const handler = new PHPRequestHandler({
  documentRoot: DOCROOT,
  absoluteUrl: process.env.SITE_URL || `http://localhost:${PORT}`,
  maxPhpInstances: 2,
  phpFactory: async () => {
    const php = new PHP(await loadNodeRuntime('8.3', { emscriptenOptions: { processId: ++processCounter } }));
    php.mkdir(DOCROOT);
    await php.mount(DOCROOT, createNodeFsMountHandler(ROOT));
    return php;
  },
});

function send(req, res, status, headers, body) {
  const type = String(headers['content-type'] || '');
  const accepts = /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (accepts && body.length > 1024 && COMPRESSIBLE.test(type)) {
    body = zlib.gzipSync(body);
    headers['Content-Encoding'] = 'gzip';
    headers['Vary'] = 'Accept-Encoding';
  }
  headers['Content-Length'] = body.length;
  res.writeHead(status, { ...SECURITY_HEADERS, ...headers });
  res.end(req.method === 'HEAD' ? undefined : body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (c) => {
      size += c.length;
      if (size > 2e6) { reject(new Error('too large')); req.destroy(); } else chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

async function runPhp(req, res, url, scriptPath) {
  const headers = {};
  for (const [k, v] of Object.entries(req.headers)) headers[k] = Array.isArray(v) ? v.join(', ') : v;
  const body = ['GET', 'HEAD'].includes(req.method) ? undefined : new Uint8Array(await readBody(req));
  const response = await handler.request({
    url: scriptPath + url.search,
    method: req.method === 'HEAD' ? 'GET' : req.method,
    headers,
    body,
  });
  const out = {};
  for (const [k, v] of Object.entries(response.headers)) {
    const key = k.toLowerCase();
    if (['content-length', 'transfer-encoding', 'x-powered-by'].includes(key)) continue;
    out[key] = v.length === 1 ? v[0] : v;
  }
  if (!out['content-type']) out['content-type'] = 'text/html; charset=UTF-8';
  if (response.errors) console.error('[php]', url.pathname, response.errors);
  send(req, res, response.httpStatusCode, out, Buffer.from(response.bytes));
}

function notFound(req, res) {
  send(req, res, 404, { 'content-type': 'text/html; charset=utf-8' },
    Buffer.from('<!doctype html><meta charset="utf-8"><title>Sayfa bulunamadı</title><p>Sayfa bulunamadı. <a href="/">Ana sayfaya dön</a></p>'));
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://x');
    let rel;
    try { rel = decodeURIComponent(url.pathname); } catch { return notFound(req, res); }
    if (rel.endsWith('/')) rel += 'index.php';
    const file = path.normalize(path.join(ROOT, rel));
    if (!file.startsWith(ROOT + path.sep)) return notFound(req, res);

    // includes/ klasörü ve gizli dosyalar (.htaccess vb.) dışarıya kapalı
    const relPosix = path.relative(ROOT, file).split(path.sep).join('/');
    if (relPosix.startsWith('includes/') || relPosix.split('/').some((p) => p.startsWith('.'))) return notFound(req, res);

    let stat = null;
    try { stat = fs.statSync(file); } catch {}
    if (stat && stat.isDirectory()) {
      if (fs.existsSync(path.join(file, 'index.php'))) {
        res.writeHead(301, { Location: url.pathname.replace(/\/?$/, '/') + url.search });
        return res.end();
      }
      return notFound(req, res);
    }
    // /iletisim gibi uzantısız adresler -> iletisim.php
    if (!stat && !path.extname(file) && fs.existsSync(file + '.php')) return await runPhp(req, res, url, '/' + relPosix + '.php');
    if (!stat) return notFound(req, res);

    const ext = path.extname(file).toLowerCase();
    if (ext === '.php') return await runPhp(req, res, url, '/' + relPosix);
    if (!['GET', 'HEAD'].includes(req.method)) {
      return send(req, res, 405, { 'content-type': 'text/plain; charset=utf-8' }, Buffer.from('Method Not Allowed'));
    }
    send(req, res, 200, {
      'content-type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': LONG_CACHE.has(ext) ? 'public, max-age=31536000' : 'public, max-age=2592000',
      'Last-Modified': stat.mtime.toUTCString(),
    }, fs.readFileSync(file));
  } catch (err) {
    console.error(err);
    if (!res.headersSent) send(req, res, 500, { 'content-type': 'text/plain; charset=utf-8' }, Buffer.from('Sunucu hatası'));
  }
});

server.listen(PORT, () => console.log(`Yöntek sitesi hazır: http://localhost:${PORT}`));
