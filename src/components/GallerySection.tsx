import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const filters = ['All', 'Nature', 'Wildlife', 'Culture', 'Hotels', 'Beaches']

const images = [
  { id: 1, category: 'Nature', src: 'https://images.unsplash.com/photo-1775479788431-7801d72f6f5e?w=600&h=800&fit=crop&auto=format', alt: 'Tea plantations', tall: true },
  { id: 2, category: 'Culture', src: 'https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?w=600&h=400&fit=crop&auto=format', alt: 'Sigiriya rock fortress', tall: false },
  { id: 3, category: 'Wildlife', src: 'https://images.unsplash.com/photo-1609242030544-f2a37bab739c?w=600&h=400&fit=crop&auto=format', alt: 'Wild elephant', tall: false },
  { id: 4, category: 'Hotels', src: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&h=800&fit=crop&auto=format', alt: 'Luxury infinity pool', tall: true },
  { id: 5, category: 'Culture', src: 'https://images.unsplash.com/photo-1550679193-d8ec2f2c3a25?w=600&h=400&fit=crop&auto=format', alt: 'Nine Arch Bridge', tall: false },
  { id: 6, category: 'Beaches', src: 'https://images.unsplash.com/photo-1584475400931-d2edca987cf7?w=600&h=800&fit=crop&auto=format', alt: 'Beach sunset', tall: true },
  { id: 7, category: 'Nature', src: 'https://images.unsplash.com/photo-1775479788389-76251f360d9d?w=600&h=400&fit=crop&auto=format', alt: 'Rolling tea hills', tall: false },
  { id: 8, category: 'Wildlife', src: 'https://images.unsplash.com/photo-1551350952-b53990fa38b4?w=600&h=400&fit=crop&auto=format', alt: 'Elephants by water', tall: false },
  { id: 9, category: 'Hotels', src: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&h=400&fit=crop&auto=format', alt: 'Pool with palms', tall: false },
  { id: 10, category: 'Beaches', src: 'https://images.unsplash.com/photo-1592230229292-095bbdcc016c?w=600&h=400&fit=crop&auto=format', alt: 'Tropical beach', tall: false },
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxImg, setLightboxImg] = useState<(typeof images)[0] | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeFilter === 'All' ? images : images.filter((i) => i.category === activeFilter)

  return (
    <section id="gallery" className="py-24 lg:py-32" style={{ background: '#F7F2E6' }}>
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
              Visual Journey
            </span>
            <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#121212' }}>
            Sri Lanka Through
            <span style={{ color: '#1A48BB', fontStyle: 'italic' }}> Our Lens</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeFilter === f ? '#1A48BB' : '#ffffff',
                color: activeFilter === f ? '#ffffff' : '#8B8470',
                border: activeFilter === f ? 'none' : '1px solid #E8DFC8',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid mb-4"
              style={{ background: '#B0CCEF' }}
              onClick={() => setLightboxImg(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div
                className="absolute bottom-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(255,255,255,0.85)', color: '#1A48BB' }}
              >
                {img.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(8,16,40,0.92)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.src.replace('w=600', 'w=1200')}
                alt={lightboxImg.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.15)' }}
                onClick={() => setLightboxImg(null)}
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-4 text-white/70 text-sm">{lightboxImg.alt}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
