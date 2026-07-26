import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?w=1920&h=1080&fit=crop&auto=format',
    label: 'Sigiriya Rock Fortress',
  },
  {
    url: 'https://images.unsplash.com/photo-1550679193-d8ec2f2c3a25?w=1920&h=1080&fit=crop&auto=format',
    label: 'Nine Arch Bridge',
  },
  {
    url: 'https://images.unsplash.com/photo-1775479788431-7801d72f6f5e?w=1920&h=1080&fit=crop&auto=format',
    label: 'Tea Country Highlands',
  },
  {
    url: 'https://images.unsplash.com/photo-1609242030544-f2a37bab739c?w=1920&h=1080&fit=crop&auto=format',
    label: 'Yala Wildlife Safari',
  },
  {
    url: 'https://images.unsplash.com/photo-1592230229292-095bbdcc016c?w=1920&h=1080&fit=crop&auto=format',
    label: 'Southern Beaches',
  },
  {
    url: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1920&h=1080&fit=crop&auto=format',
    label: 'Luxury Escapes',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-slate-900"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={slides[current].url}
            alt={slides[current].label}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(8,16,40,0.82) 0%, rgba(8,16,40,0.45) 55%, rgba(8,16,40,0.15) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-48"
        style={{
          background: 'linear-gradient(to top, rgba(8,16,40,0.6) 0%, transparent 100%)',
        }}
      />

      {/* Floating decorative orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26,72,187,0.18) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(176,204,239,0.2) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-px bg-[#B0CCEF]" />
              <span className="text-[#B0CCEF] text-xs font-semibold tracking-[0.22em] uppercase">
                Sri Lanka Luxury Travel
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[1.08]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              Discover the
              <br />
              <span style={{ color: '#B0CCEF', fontStyle: 'italic' }}>Island</span> of
              <br />
              Wonders
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-6 text-white/75 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              Experience Sri Lanka through handcrafted journeys connecting you
              with nature, wildlife, culture, history, luxury and authentic local life.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#experiences"
                className="group flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: '#1A48BB' }}
              >
                Explore Tours
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Play size={14} className="fill-white" />
                Plan My Journey
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: i === current ? 32 : 8,
              background: i === current ? '#ffffff' : 'rgba(255,255,255,0.35)',
            }}
            aria-label={s.label}
          />
        ))}
      </div>

      {/* Current scene label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-28 right-10 z-20 hidden lg:block"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            {slides[current].label}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="text-white/50" />
      </motion.div>
    </section>
  )
}
