import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'

const articles = [
  {
    id: 1,
    category: 'Travel Tips',
    title: 'Best Time to Visit Sri Lanka for the Perfect Holiday',
    excerpt: "Planning your visit? We'll help you navigate Sri Lanka's two monsoon seasons and find the perfect window for your dream destination.",
    author: 'Nimal Fernando',
    date: 'July 14, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1653650311198-f1fb2d32b036?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 2,
    category: 'Wildlife',
    title: 'Top 5 Wildlife Parks in Sri Lanka for Safari Adventures',
    excerpt: 'From leopards at Yala to elephants at Udawalawe, discover the incredible wildlife that makes Sri Lanka a world-class safari destination.',
    author: 'Chamara De Silva',
    date: 'June 28, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1609242030544-f2a37bab739c?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 3,
    category: 'Culture',
    title: 'Hidden Beaches of Sri Lanka Only Locals Know About',
    excerpt: 'Beyond Mirissa and Unawatuna, lies a coastline of secluded coves, turquoise lagoons, and untouched shores waiting to be discovered.',
    author: 'Thisara Perera',
    date: 'June 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1584475400931-d2edca987cf7?w=800&h=500&fit=crop&auto=format',
  },
]

export default function BlogSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" className="py-24 lg:py-32" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: '#1A48BB' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#1A48BB' }}>
                Travel Journal
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold" style={{ color: '#121212' }}>
              Stories, Guides &{' '}
              <span style={{ color: '#1A48BB', fontStyle: 'italic' }}>Travel Inspiration</span>
            </h2>
          </div>
          <a
            href="#"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
            style={{ color: '#1A48BB' }}
          >
            Explore All Articles <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group cursor-pointer rounded-3xl overflow-hidden"
              style={{
                background: '#ffffff',
                boxShadow: '0 2px 20px rgba(26,72,187,0.07)',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 220, background: '#B0CCEF' }}>
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: '#1A48BB', color: '#ffffff' }}
                >
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-serif text-xl font-bold mb-3 leading-snug group-hover:text-[#1A48BB] transition-colors"
                  style={{ color: '#121212' }}
                >
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ background: '#1A48BB' }}
                    >
                      {article.author[0]}
                    </div>
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={10} />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
