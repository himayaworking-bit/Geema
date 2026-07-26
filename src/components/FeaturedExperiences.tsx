import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react'

const categories = ['All', 'Luxury', 'Wildlife', 'Adventure', 'Culture', 'Wellness', 'Beach', 'Family', 'Honeymoon']

const tours = [
  {
    id: 1,
    title: 'Sigiriya & Ancient Kingdoms',
    category: 'Culture',
    duration: '5 Days',
    location: 'Cultural Triangle',
    price: 1280,
    rating: 4.9,
    reviews: 142,
    highlights: ['Sigiriya Rock', 'Dambulla Cave', 'Polonnaruwa'],
    image: 'https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?w=800&h=600&fit=crop&auto=format',
    badge: 'Most Popular',
  },
  {
    id: 2,
    title: "Yala Safari & Whale Watching",
    category: 'Wildlife',
    duration: '4 Days',
    location: 'South Sri Lanka',
    price: 1550,
    rating: 4.8,
    reviews: 98,
    highlights: ['Leopard Spotting', 'Whale Watching', 'Bird Watching'],
    image: 'https://images.unsplash.com/photo-1609242030544-f2a37bab739c?w=800&h=600&fit=crop&auto=format',
    badge: null,
  },
  {
    id: 3,
    title: 'Tea Country Escape',
    category: 'Wellness',
    duration: '3 Days',
    location: 'Nuwara Eliya',
    price: 960,
    rating: 4.9,
    reviews: 87,
    highlights: ['Tea Plantation Tour', 'Train Journey', 'Waterfall Hikes'],
    image: 'https://images.unsplash.com/photo-1775479788431-7801d72f6f5e?w=800&h=600&fit=crop&auto=format',
    badge: 'Editor\'s Choice',
  },
  {
    id: 4,
    title: 'Southern Luxury Coast',
    category: 'Beach',
    duration: '6 Days',
    location: 'Galle to Mirissa',
    price: 2100,
    rating: 5.0,
    reviews: 64,
    highlights: ['Galle Fort', 'Mirissa Beaches', 'Luxury Resorts'],
    image: 'https://images.unsplash.com/photo-1592230229292-095bbdcc016c?w=800&h=600&fit=crop&auto=format',
    badge: 'Luxury',
  },
  {
    id: 5,
    title: 'Honeymoon in Paradise',
    category: 'Honeymoon',
    duration: '8 Days',
    location: 'Island-Wide',
    price: 3400,
    rating: 5.0,
    reviews: 51,
    highlights: ['Private Dinners', 'Spa Treatments', 'Boutique Villas'],
    image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=600&fit=crop&auto=format',
    badge: 'Premium',
  },
  {
    id: 6,
    title: 'Nine Arch & Highlands',
    category: 'Adventure',
    duration: '4 Days',
    location: 'Ella & Surrounds',
    price: 890,
    rating: 4.7,
    reviews: 113,
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", 'Ravana Falls'],
    image: 'https://images.unsplash.com/photo-1550679193-d8ec2f2c3a25?w=800&h=600&fit=crop&auto=format',
    badge: null,
  },
]

function TourCard({ tour, index }: { tour: (typeof tours)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: '#ffffff',
        boxShadow: '0 2px 20px rgba(26,72,187,0.08)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 260, background: '#B0CCEF' }}>
        <motion.img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 40%, rgba(8,16,40,0.6) 100%)',
          }}
        />

        {/* Badge */}
        {tour.badge && (
          <div
            className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: '#1A48BB', color: '#ffffff' }}
          >
            {tour.badge}
          </div>
        )}

        {/* Category */}
        <div
          className="absolute top-4 right-4 text-xs font-medium px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          {tour.category}
        </div>

        {/* Bottom overlay info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-white text-xs font-medium">{tour.rating}</span>
            <span className="text-white/60 text-xs">({tour.reviews})</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/70 text-xs">
            <MapPin size={11} />
            {tour.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
          <Clock size={11} />
          {tour.duration}
        </div>
        <h3 className="font-serif text-xl font-bold mb-3" style={{ color: '#121212' }}>
          {tour.title}
        </h3>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tour.highlights.map((h) => (
            <span
              key={h}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: '#F7F2E6', color: '#8B8470' }}
            >
              {h}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-400">From</span>
            <span className="text-2xl font-bold font-serif ml-1" style={{ color: '#1A48BB' }}>
              ${tour.price}
            </span>
            <span className="text-xs text-gray-400 ml-1">/ person</span>
          </div>
          <motion.button
            whileHover={{ x: 3 }}
            className="flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: '#1A48BB' }}
          >
            View Details <ArrowRight size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedExperiences() {
  const [activeCategory, setActiveCategory] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeCategory === 'All' ? tours : tours.filter((t) => t.category === activeCategory)

  return (
    <section id="experiences" className="py-24 lg:py-32" style={{ background: '#F7F2E6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#1A48BB' }}>
              Curated Journeys
            </span>
            <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#121212' }}>
            Featured{' '}
            <span style={{ color: '#1A48BB', fontStyle: 'italic' }}>Experiences</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Handpicked journeys designed for the discerning traveler seeking authenticity, luxury, and unforgettable memories.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat ? '#1A48BB' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#8B8470',
                boxShadow: activeCategory === cat ? '0 4px 16px rgba(26,72,187,0.25)' : 'none',
                border: activeCategory === cat ? 'none' : '1px solid #E8DFC8',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{ border: '2px solid #1A48BB', color: '#1A48BB', background: 'transparent' }}
          >
            View All Tour Packages <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
