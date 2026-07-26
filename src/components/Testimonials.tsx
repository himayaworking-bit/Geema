import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Olivia Richardson',
    country: 'United Kingdom',
    flag: '🇬🇧',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&auto=format',
    rating: 5,
    tour: 'Southern Luxury Coast',
    review:
      "Soul Trail completely exceeded our expectations. Every detail of our 8-day journey was meticulously arranged — from private transfers to boutique villa recommendations. Sri Lanka is already magical, but having experts who genuinely care makes it extraordinary.",
  },
  {
    name: 'Marco Santini',
    country: 'Italy',
    flag: '🇮🇹',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format',
    rating: 5,
    tour: 'Sigiriya & Ancient Kingdoms',
    review:
      "As a photography enthusiast, I needed guides who understood the light, the angles, and the access. Soul Trail delivered beyond anything I imagined. Sigiriya at sunrise with no crowds — that's the Soul Trail difference.",
  },
  {
    name: 'Priya Nair',
    country: 'India',
    flag: '🇮🇳',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format',
    rating: 5,
    tour: 'Tea Country Escape',
    review:
      "The tea country package was pure bliss. We stayed at a heritage plantation villa, hiked through misty hills, and discovered flavors I never knew existed. The train journey through Ella was cinematically beautiful. Highly recommended for couples.",
  },
  {
    name: 'James & Emma Carter',
    country: 'Australia',
    flag: '🇦🇺',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format',
    rating: 5,
    tour: 'Yala Safari & Whale Watching',
    review:
      "We saw four leopards, a blue whale from 20 meters, and hundreds of birds — all in four days. The wildlife knowledge of our guides was incredible. Soul Trail turned our dream safari into a reality we'll talk about for decades.",
  },
  {
    name: 'Sophie Beaumont',
    country: 'France',
    flag: '🇫🇷',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&auto=format',
    rating: 5,
    tour: 'Honeymoon in Paradise',
    review:
      "Our honeymoon was flawless. Every surprise they arranged, from candlelit dinners on the beach to private ayurveda spa sessions, felt deeply personal and thoughtful. Soul Trail understood us as a couple from the very first call.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A48BB 0%, #133890 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(176,204,239,0.15) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(247,242,230,0.10) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">
              Traveler Stories
            </span>
            <div className="w-8 h-px bg-white/30" />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            What Our Travelers Say
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-8 lg:p-12 relative"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <Quote
              size={48}
              className="absolute top-8 right-10 opacity-10"
              style={{ color: '#B0CCEF' }}
            />

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Reviewer info */}
              <div className="flex-shrink-0 flex flex-col items-center text-center lg:w-40">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                  style={{ border: '3px solid rgba(176,204,239,0.4)' }}
                />
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-white/60 text-xs mt-1">
                  {t.flag} {t.country}
                </div>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div
                  className="mt-3 text-xs px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(176,204,239,0.2)', color: '#B0CCEF' }}
                >
                  {t.tour}
                </div>
              </div>

              {/* Review text */}
              <div className="flex-1">
                <p className="text-white/85 text-base lg:text-lg leading-relaxed font-light italic">
                  "{t.review}"
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-1.5 rounded-full transition-all duration-400"
                style={{
                  width: i === current ? 28 : 8,
                  background: i === current ? '#ffffff' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
