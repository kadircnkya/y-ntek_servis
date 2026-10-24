import StarBackground from './components/StarBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'
import { site } from './config.js'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  telephone: site.phoneDisplay,
  address: site.address,
  openingHours: site.hours,
  url: typeof window !== 'undefined' ? window.location.origin : undefined,
}

export default function App() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
