import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import WelcomeSection from './components/WelcomeSection'
import WeatherSection from './components/WeatherSection'
import BookingProcess from './components/BookingProcess'
import FeaturedExperiences from './components/FeaturedExperiences'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import PlanJourney from './components/PlanJourney'
import BlogSection from './components/BlogSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />
      <main>
        <Hero />
        <WelcomeSection />
        <WeatherSection />
        <BookingProcess />
        <FeaturedExperiences />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <PlanJourney />
        <BlogSection />
        <GallerySection />
      </main>
      <Footer />

      {/* Mobile floating CTA */}
      <motion.a
        href="#contact"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-sm font-semibold shadow-2xl"
        style={{ background: '#1A48BB', boxShadow: '0 8px 30px rgba(26,72,187,0.45)' }}
      >
        Plan My Trip
      </motion.a>
    </div>
  )
}
