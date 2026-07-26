import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  'Local Sri Lanka experts with 15+ years experience',
  'Fully personalized, bespoke itineraries',
  'Premium luxury transportation throughout',
  '24/7 in-destination support & assistance',
  'Committed to responsible, sustainable tourism',
  'Transparent pricing — no hidden fees',
  'Exclusive private tours & unique access',
  'Hand-selected best-in-class accommodations',
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" ref={ref}>
          {/* Left — imagery collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-52" style={{ background: '#B0CCEF' }}>
                  <img
                    src="https://images.unsplash.com/photo-1551350952-b53990fa38b4?w=600&h=420&fit=crop&auto=format"
                    alt="Elephants in Sri Lanka"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36" style={{ background: '#F7F2E6' }}>
                  <img
                    src="https://images.unsplash.com/photo-1584475400931-d2edca987cf7?w=600&h=290&fit=crop&auto=format"
                    alt="Sri Lanka beach sunset"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-36" style={{ background: '#EEF4FB' }}>
                  <img
                    src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&h=290&fit=crop&auto=format"
                    alt="Luxury resort pool"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-52" style={{ background: '#F7F2E6' }}>
                  <img
                    src="https://images.unsplash.com/photo-1775479788389-76251f360d9d?w=600&h=420&fit=crop&auto=format"
                    alt="Tea plantations"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl px-8 py-5 shadow-2xl text-center"
              style={{ background: '#1A48BB', minWidth: 200 }}
            >
              <div className="font-serif text-4xl font-bold text-white">15+</div>
              <div className="text-white/80 text-sm mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#1A48BB' }}>
                Why Soul Trail
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#121212' }}>
              Your Trusted Travel
              <span className="block" style={{ color: '#1A48BB', fontStyle: 'italic' }}>
                Partner in Sri Lanka
              </span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We go beyond travel. Soul Trail is a commitment to crafting transformative experiences
              that respect the land, support communities, and create memories that last a lifetime.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <motion.li
                  key={reason}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#1A48BB' }}
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
              style={{ background: '#1A48BB', boxShadow: '0 4px 20px rgba(26,72,187,0.28)' }}
            >
              Plan My Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
