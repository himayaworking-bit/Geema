import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Leaf, Users, Award } from 'lucide-react'

const pillars = [
  { icon: Leaf, label: 'Sustainable Tourism' },
  { icon: Users, label: 'Local Communities' },
  { icon: Award, label: 'Award-Winning Service' },
]

export default function WelcomeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="welcome" className="py-24 lg:py-36 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" ref={ref}>
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: '4/5', background: '#B0CCEF' }}
            >
              <img
                src="https://images.unsplash.com/photo-1552055568-e9943cd2a08f?w=900&h=1100&fit=crop&auto=format"
                alt="Lush Sri Lanka landscape"
                className="w-full h-full object-cover"
              />
              {/* Overlay tint */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 50%, rgba(26,72,187,0.18) 100%)',
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl p-5 shadow-2xl"
              style={{
                background: '#1A48BB',
                minWidth: 180,
              }}
            >
              <div className="text-white/80 text-xs font-medium mb-1">Happy Travelers</div>
              <div className="text-white text-3xl font-bold font-serif">3,500+</div>
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-300 text-xs">★</span>
                ))}
              </div>
            </motion.div>

            {/* Decorative ivory accent */}
            <div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full -z-10"
              style={{ background: '#F7F2E6' }}
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#1A48BB' }}>
                Our Philosophy
              </span>
            </div>

            <h2
              className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6"
              style={{ color: '#121212' }}
            >
              Travel
              <span className="block" style={{ color: '#1A48BB', fontStyle: 'italic' }}>
                With Purpose
              </span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Sri Lanka is one of the world's most diverse islands. Within a few hours, travelers
              can experience tropical beaches, misty mountains, ancient kingdoms, wildlife safaris,
              tea plantations, vibrant cities, and rich cultural traditions.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              At Soul Trail, every journey is thoughtfully designed to create unforgettable memories
              while supporting sustainable tourism and local communities.
            </p>

            {/* Pillars */}
            <div className="flex flex-wrap gap-3 mb-10">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium"
                  style={{ background: '#F7F2E6', color: '#1A48BB' }}
                >
                  <Icon size={14} />
                  {label}
                </div>
              ))}
            </div>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-all"
              style={{ color: '#1A48BB' }}
            >
              Learn More
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
