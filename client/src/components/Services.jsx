import { useState } from 'react'
import { useSection } from '../hooks/useSection.js'
import { WhatsAppIcon } from './Icons.jsx'
import { waLink } from '../config.js'
import './Appointment.css'

const serviceOptions = [
  'Çanak anten montajı',
  'Uydu alıcısı kurulumu',
  'Plazma TV onarımı',
  'LED değişimi',
  'Kamera sistemi kurulumu',
  'TV duvar montajı',
]

const districts = [
  'Kadıköy', 'Üsküdar', 'Ataşehir', 'Maltepe', 'Kartal', 'Pendik',
  'Tuzla', 'Sancaktepe', 'Sultanbeyli', 'Çekmeköy', 'Ümraniye', 'Beykoz',
  'Şile', 'Adalar',
]

const today = () => new Date().toISOString().slice(0, 10)

export default function Appointment() {
  const ref = useSection()
  const [f, setF] = useState({
    name: '', phone: '', service: serviceOptions[0], district: districts[0],
    date: '', time: '', note: '',
  })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const dateTxt = f.date ? f.date.split('-').reverse().join('.') : 'Fark etmez'
    const lines = [
      'Merhaba, randevu almak istiyorum.',
      '',
      `Ad Soyad: ${f.name}`,
      `Telefon: ${f.phone}`,
      `Hizmet: ${f.service}`,
      `İlçe: ${f.district} (İstanbul Anadolu Yakası)`,
      `Tarih: ${dateTxt}`,
      `Saat: ${f.time || 'Fark etmez'}`,
      f.note ? `Not: ${f.note}` : '',
    ].filter((l, i, a) => l !== '' || i === 1 || (i > 1 && a[i] !== ''))
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="randevu" ref={ref} className="section appt" aria-labelledby="appt-title">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Kat 02 <b>· Randevu</b></p>
          <h2 id="appt-title" className="h2">Hemen <em>randevu alın</em></h2>
          <p className="lede">
            Formu doldurun, bilgileriniz WhatsApp üzerinden bize ulaşsın. Yalnızca İstanbul Anadolu Yakası'na hizmet veriyoruz.
          </p>
        </header>

        <form className="appt-form glass reveal" onSubmit={submit} id="appt-form">
          <label className="appt-field">
            <span>Ad Soyad</span>
            <input id="appt-name" required value={f.name} onChange={set('name')} placeholder="Adınız Soyadınız" autoComplete="name" />
          </label>
          <label className="appt-field">
            <span>Telefon</span>
            <input id="appt-phone" required type="tel" inputMode="tel" value={f.phone} onChange={set('phone')} placeholder="05xx xxx xx xx" autoComplete="tel" />
          </label>
          <label className="appt-field">
            <span>Hizmet</span>
            <select id="appt-service" value={f.service} onChange={set('service')}>
              {serviceOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label className="appt-field">
            <span>İlçe (Anadolu Yakası)</span>
            <select id="appt-district" value={f.district} onChange={set('district')}>
              {districts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </label>
          <label className="appt-field">
            <span>Tarih</span>
            <input id="appt-date" type="date" min={today()} value={f.date} onChange={set('date')} />
          </label>
          <label className="appt-field">
            <span>Saat</span>
            <input id="appt-time" type="time" value={f.time} onChange={set('time')} />
          </label>
          <label className="appt-field appt-wide">
            <span>Not / Adres detayı</span>
            <textarea id="appt-note" rows="3" value={f.note} onChange={set('note')} placeholder="Mahalle, arıza veya isteğinizi kısaca yazın" />
          </label>
          <button id="appt-submit" type="submit" className="btn btn-wa btn-block appt-wide">
            <WhatsAppIcon /> Randevuyu WhatsApp ile gönder
          </button>
        </form>
      </div>
    </section>
  )
}
