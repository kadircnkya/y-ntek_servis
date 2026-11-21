import React, { useState, useEffect } from 'react'
import Topbar from './components/Topbar.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import UrgentBanner from './components/UrgentBanner.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import StatsSection from './components/StatsSection.jsx'
import BookingForm from './components/BookingForm.jsx'
import DistrictsSection from './components/DistrictsSection.jsx'
import ServicesDetailSection from './components/ServicesDetailSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import DistrictsPageSection from './components/DistrictsPageSection.jsx'
import PreFooterBanner from './components/PreFooterBanner.jsx'
import SeoTags from './components/SeoTags.jsx'
import Footer from './components/Footer.jsx'
import MobileBottomBar from './components/MobileBottomBar.jsx'
import { siteConfig } from './config.js'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  telephone: siteConfig.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kartal',
    addressRegion: 'İstanbul',
    addressCountry: 'TR'
  },
  openingHours: 'Mo-Su 00:00-24:00',
  description: 'İstanbul Anadolu Yakası çanak anten montajı, uydu sinyal ayarı, merkezi uydu sistemleri ve TV teknik servisi.'
}

export default function App() {
  const [activePage, setActivePage] = useState('anasayfa')
  const [bookingService, setBookingService] = useState('')
  const [bookingDistrict, setBookingDistrict] = useState('Kartal')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (['anasayfa', 'hizmetler', 'kurumsal', 'bolgeler', 'iletisim', 'randevu'].includes(hash)) {
        if (hash === 'randevu') {
          setActivePage('iletisim')
        } else {
          setActivePage(hash)
        }
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleOpenBooking = (serviceName = '', districtName = '') => {
    if (serviceName) setBookingService(serviceName)
    if (districtName) setBookingDistrict(districtName)
    setActivePage('iletisim')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectServiceOnHome = (serviceTitle) => {
    setBookingService(serviceTitle)
    const el = document.getElementById('randevu')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      setActivePage('iletisim')
    }
  }

  const handleSelectDistrict = (districtName) => {
    setBookingDistrict(districtName)
    const el = document.getElementById('randevu')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      setActivePage('iletisim')
    }
  }

  return (
    <>
      <Topbar />
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        {activePage === 'anasayfa' && (
          <>
            <Hero onOpenBooking={() => handleOpenBooking()} />
            <UrgentBanner />
            <ServicesSection
              onSelectService={handleSelectServiceOnHome}
              onViewAllServices={() => {
                setActivePage('hizmetler')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
            <StatsSection
              onOpenAbout={() => {
                setActivePage('kurumsal')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
            <BookingForm
              initialService={bookingService}
              initialDistrict={bookingDistrict}
            />
            <DistrictsSection
              onSelectDistrict={handleSelectDistrict}
              onViewAllDistricts={() => {
                setActivePage('bolgeler')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            />
            <PreFooterBanner />
            <SeoTags onSelectTag={() => handleOpenBooking()} />
          </>
        )}

        {activePage === 'hizmetler' && (
          <>
            <ServicesDetailSection onOpenBooking={(srv) => handleOpenBooking(srv)} />
            <UrgentBanner />
            <PreFooterBanner />
            <SeoTags onSelectTag={() => handleOpenBooking()} />
          </>
        )}

        {activePage === 'kurumsal' && (
          <>
            <AboutSection onOpenBooking={() => handleOpenBooking()} />
            <PreFooterBanner />
            <SeoTags onSelectTag={() => handleOpenBooking()} />
          </>
        )}

        {activePage === 'bolgeler' && (
          <>
            <DistrictsPageSection onSelectDistrict={(dist) => handleOpenBooking('', dist)} />
            <PreFooterBanner />
            <SeoTags onSelectTag={() => handleOpenBooking()} />
          </>
        )}

        {activePage === 'iletisim' && (
          <>
            <section className="page-header-banner">
              <div className="container">
                <nav className="breadcrumb-nav" aria-label="Ekmek Kırıntısı">
                  <span style={{ color: '#e0f2fe' }}>Ana Sayfa</span>
                  <span aria-hidden="true">/</span>
                  <span>İletişim & Randevu</span>
                </nav>
                <h1 className="page-header-title">İletişim & Servis Talebi</h1>
                <p className="page-header-sub">
                  Acil uydu arızası veya çanak anten montajı için 7/24 bizi arayabilir ya da aşağıdaki formu doldurarak anında randevu oluşturabilirsiniz.
                </p>
              </div>
            </section>
            <BookingForm
              initialService={bookingService}
              initialDistrict={bookingDistrict}
            />
            <PreFooterBanner />
            <SeoTags onSelectTag={() => handleOpenBooking()} />
          </>
        )}
      </main>

      <Footer onNavigate={(pageId) => setActivePage(pageId)} />
      <MobileBottomBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
