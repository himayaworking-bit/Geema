import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wind, Droplets, Sun, Cloud, CloudRain, CloudDrizzle } from 'lucide-react'

const cities = [
  {
    name: 'Colombo',
    temp: 31,
    condition: 'Sunny',
    humidity: 78,
    wind: 14,
    best: 'City & Culture',
    icon: Sun,
    color: '#F59E0B',
    bg: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(26,72,187,0.08) 100%)',
  },
  {
    name: 'Kandy',
    temp: 26,
    condition: 'Partly Cloudy',
    humidity: 83,
    wind: 9,
    best: 'Cultural Tours',
    icon: Cloud,
    color: '#7AABDF',
    bg: 'linear-gradient(135deg, rgba(122,171,223,0.15) 0%, rgba(26,72,187,0.08) 100%)',
  },
  {
    name: 'Nuwara Eliya',
    temp: 18,
    condition: 'Misty',
    humidity: 91,
    wind: 11,
    best: 'Tea Country',
    icon: CloudDrizzle,
    color: '#6EE7B7',
    bg: 'linear-gradient(135deg, rgba(110,231,183,0.15) 0%, rgba(26,72,187,0.08) 100%)',
  },
  {
    name: 'Galle',
    temp: 29,
    condition: 'Sunny',
    humidity: 75,
    wind: 17,
    best: 'Beaches',
    icon: Sun,
    color: '#F59E0B',
    bg: 'linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(176,204,239,0.12) 100%)',
  },
  {
    name: 'Jaffna',
    temp: 34,
    condition: 'Clear',
    humidity: 65,
    wind: 20,
    best: 'Heritage Sites',
    icon: Sun,
    color: '#FB923C',
    bg: 'linear-gradient(135deg, rgba(251,146,60,0.12) 0%, rgba(26,72,187,0.08) 100%)',
  },
]

function WeatherCard({ city, index }: { city: (typeof cities)[0]; index: number }) {
  const Icon = city.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative rounded-3xl p-6 flex flex-col gap-4 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.6)',
        boxShadow: '0 4px 24px rgba(26,72,187,0.08)',
      }}
    >
      {/* Bg tint */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ background: city.bg, opacity: 0.7 }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="text-sm font-semibold text-gray-500 mb-0.5">{city.name}</div>
          <div className="text-4xl font-bold font-serif" style={{ color: '#121212' }}>
            {city.temp}°
          </div>
          <div className="text-sm text-gray-600 mt-1">{city.condition}</div>
        </div>
        <motion.div
          animate={{ rotate: [0, 10, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        >
          <Icon size={42} strokeWidth={1.5} style={{ color: city.color }} />
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2">
        <div
          className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium"
          style={{ background: 'rgba(26,72,187,0.07)', color: '#1A48BB' }}
        >
          <Droplets size={12} /> {city.humidity}% humidity
        </div>
        <div
          className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium"
          style={{ background: 'rgba(26,72,187,0.07)', color: '#1A48BB' }}
        >
          <Wind size={12} /> {city.wind} km/h
        </div>
      </div>

      <div
        className="relative z-10 text-xs font-semibold px-3 py-2 rounded-xl self-start"
        style={{ background: '#1A48BB', color: '#ffffff' }}
      >
        Best for: {city.best}
      </div>
    </motion.div>
  )
}

export default function WeatherSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F7F2E6 0%, #EEF4FB 60%, #ffffff 100%)' }}
    >
      {/* Sri Lanka outline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <svg width="320" height="400" viewBox="0 0 320 400" fill="none">
          <path
            d="M160 20 C220 30 270 80 280 140 C295 200 290 260 270 310 C250 360 210 385 175 390 C145 393 115 375 95 350 C70 318 55 275 50 230 C42 175 50 115 75 75 C100 35 130 18 160 20Z"
            fill="#1A48BB"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#1A48BB' }}>
              Year-Round Sunshine
            </span>
            <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#121212' }}>
            Weather Across Sri Lanka
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            No matter when you visit, there's always sunshine somewhere on the island.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cities.map((city, i) => (
            <WeatherCard key={city.name} city={city} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
