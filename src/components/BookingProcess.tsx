import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Map, CheckCircle, Plane } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Consultation',
    desc: "Share your travel dreams with our expert Sri Lanka specialists. We'll listen and understand exactly what you're looking for.",
    color: '#1A48BB',
  },
  {
    step: '02',
    icon: Map,
    title: 'Custom Itinerary',
    desc: "We craft a bespoke journey designed around your interests, budget, and travel style — no cookie-cutter packages.",
    color: '#2558D4',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Confirm & Book',
    desc: 'Review your itinerary, confirm details, and we handle every booking — hotels, transport, guides, and experiences.',
    color: '#B0CCEF',
  },
  {
    step: '04',
    icon: Plane,
    title: 'Experience Sri Lanka',
    desc: 'Arrive to a seamlessly arranged journey with our 24/7 support team by your side every step of the way.',
    color: '#F7F2E6',
  },
]

export default function BookingProcess() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#1A48BB' }}>
              How It Works
            </span>
            <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold" style={{ color: '#121212' }}>
            Your Journey in{' '}
            <span style={{ color: '#1A48BB', fontStyle: 'italic' }}>4 Simple Steps</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(to right, #1A48BB, #B0CCEF, #1A48BB)' }}>
            <motion.div
              className="absolute inset-y-0 left-0 right-0 origin-left"
              style={{ background: 'inherit', scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isFinal = i === steps.length - 1
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-6 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: isFinal ? '#1A48BB' : '#F7F2E6',
                      border: `2px solid ${isFinal ? '#1A48BB' : '#E8DFC8'}`,
                    }}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      style={{ color: isFinal ? '#ffffff' : '#1A48BB' }}
                    />
                    {/* Step number */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center"
                      style={{ background: '#1A48BB', color: '#ffffff' }}
                    >
                      {step.step}
                    </div>
                  </motion.div>

                  <h3 className="font-serif text-xl font-bold mb-3" style={{ color: '#121212' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl"
            style={{ background: '#1A48BB', boxShadow: '0 4px 20px rgba(26,72,187,0.30)' }}
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}
