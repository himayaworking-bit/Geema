import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Compass, Clock3, Building2, HeadphonesIcon } from 'lucide-react'

const stats = [
  { icon: Users, value: 3500, suffix: '+', label: 'Happy Travelers' },
  { icon: Compass, value: 48, suffix: '+', label: 'Destinations' },
  { icon: Clock3, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Building2, value: 120, suffix: '+', label: 'Partner Hotels' },
  { icon: HeadphonesIcon, value: 24, suffix: '/7', label: 'Support' },
]

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: '#F7F2E6' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold" style={{ color: '#121212' }}>
            Soul Trail{' '}
            <span style={{ color: '#1A48BB', fontStyle: 'italic' }}>by the Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="text-center p-6 rounded-2xl"
                style={{ background: '#ffffff', boxShadow: '0 2px 16px rgba(26,72,187,0.06)' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: '#EEF4FB' }}
                >
                  <Icon size={22} style={{ color: '#1A48BB' }} />
                </div>
                <div
                  className="font-serif text-3xl lg:text-4xl font-bold"
                  style={{ color: '#1A48BB' }}
                >
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
