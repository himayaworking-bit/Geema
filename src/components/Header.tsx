import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '@/imports/logo2.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tour Packages', href: '#experiences' },
  {
    label: 'About',
    href: '#',
    dropdown: [
      { label: 'About Us', href: '#about' },
      { label: 'About Sri Lanka', href: '#welcome' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'News', href: '#blog' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(26,72,187,0.10)' : 'none',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Soul Trail logo"
            className="h-11 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="font-serif text-xl font-bold tracking-wide transition-colors"
              style={{ color: scrolled ? '#1A48BB' : '#ffffff' }}
            >
              Soul Trail
            </span>
            <span
              className="text-[10px] font-medium tracking-[0.18em] uppercase transition-colors"
              style={{ color: scrolled ? '#8B8470' : 'rgba(255,255,255,0.75)' }}
            >
              Travel With Purpose
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-medium transition-colors"
                  style={{ color: scrolled ? '#1a1a1a' : 'rgba(255,255,255,0.9)' }}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 rounded-2xl overflow-hidden"
                      style={{
                        background: 'rgba(255,255,255,0.97)',
                        boxShadow: '0 8px 32px rgba(26,72,187,0.15)',
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1A48BB] transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: scrolled ? '#1a1a1a' : 'rgba(255,255,255,0.9)' }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: scrolled ? '#1A48BB' : 'rgba(255,255,255,0.15)',
              color: '#ffffff',
              border: scrolled ? 'none' : '1.5px solid rgba(255,255,255,0.5)',
              backdropFilter: scrolled ? 'none' : 'blur(8px)',
            }}
          >
            Book Your Journey
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg"
          style={{ color: scrolled ? '#1A48BB' : '#ffffff' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block py-3 text-gray-800 font-medium hover:text-[#1A48BB] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 border-l-2 border-blue-100 mb-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-[#1A48BB] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                className="mt-2 text-center py-3 rounded-full text-sm font-semibold text-white transition-all"
                style={{ background: '#1A48BB' }}
              >
                Book Your Journey
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
