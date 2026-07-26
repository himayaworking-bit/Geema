import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send } from 'lucide-react'

const interests = ['Wildlife', 'Culture', 'Beaches', 'Adventure', 'Wellness', 'Luxury', 'Family', 'Honeymoon']
const budgets = ['$500 – $1,000', '$1,000 – $2,500', '$2,500 – $5,000', '$5,000+']

export default function PlanJourney() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleInterest = (i: string) =>
    setSelectedInterests((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1531201890865-fb64780d16e9?w=1920&h=1080&fit=crop&auto=format"
          alt="Sri Lanka aerial"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(8,16,40,0.88) 0%, rgba(26,72,187,0.72) 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">
                Get Started
              </span>
            </div>
            <h2 className="font-serif text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.6rem)' }}>
              Plan Your
              <br />
              <span style={{ color: '#B0CCEF', fontStyle: 'italic' }}>Dream Journey</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed max-w-sm">
              Tell us what excites you and our Sri Lanka specialists will craft a
              bespoke itinerary tailored precisely to your travel dreams.
            </p>

            {/* Guarantees */}
            <div className="mt-10 space-y-4">
              {[
                'Free consultation — no obligation',
                'Response within 24 hours',
                'No booking fees on enquiries',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(176,204,239,0.25)', border: '1px solid rgba(176,204,239,0.4)' }}
                  >
                    <span className="text-[#B0CCEF] text-xs">✓</span>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-7 lg:p-9"
            style={{
              background: 'rgba(255,255,255,0.10)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">🌴</div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/65 text-sm">We'll be in touch within 24 hours to start planning your Sri Lanka adventure.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField placeholder="Full Name" type="text" />
                  <FormField placeholder="Country" type="text" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField placeholder="Arrival Date" type="date" />
                  <FormField placeholder="Departure Date" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField placeholder="Email Address" type="email" />
                  <FormField placeholder="No. of Guests" type="number" />
                </div>

                {/* Interests */}
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleInterest(i)}
                        className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
                        style={{
                          background: selectedInterests.includes(i) ? '#1A48BB' : 'rgba(255,255,255,0.1)',
                          color: selectedInterests.includes(i) ? '#ffffff' : 'rgba(255,255,255,0.6)',
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="text-white/60 text-xs font-medium mb-2 block">Budget per person</label>
                  <select className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <option value="" className="text-gray-800 bg-white">Select budget</option>
                    {budgets.map((b) => <option key={b} value={b} className="text-gray-800 bg-white">{b}</option>)}
                  </select>
                </div>

                {/* Message */}
                <textarea
                  placeholder="Tell us about your dream Sri Lanka journey..."
                  rows={3}
                  className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.2)' }}
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: '#1A48BB', boxShadow: '0 4px 20px rgba(26,72,187,0.40)' }}
                >
                  <Send size={15} />
                  Send My Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FormField({ placeholder, type }: { placeholder: string; type: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-xl px-4 py-3 text-sm outline-none"
      style={{
        background: 'rgba(255,255,255,0.10)',
        color: 'rgba(255,255,255,0.85)',
        border: '1px solid rgba(255,255,255,0.20)',
      }}
    />
  )
}
