import React from 'react'
import { createRoot } from 'react-dom/client'
// Self-host fontlar (font-display: swap). unicode-range sayesinde yalnızca latin + latin-ext dosyaları iner.
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import './styles/global.css'
import { getProfile } from './lib/device.js'
import App from './App.jsx'

// Düşük güçlü mobil cihazlarda dekoratif döngü animasyonlarını CSS tarafında kapatmak için işaret.
const p = getProfile()
if (p.lite) document.documentElement.classList.add('lite')
if (p.finePointer) document.documentElement.classList.add('fine')

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
