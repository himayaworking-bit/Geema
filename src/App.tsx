import { useState, useEffect, useRef } from 'react'

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { id: 1, name: 'Water Bottles', desc: 'Stay hydrated, waste-free', img: 'https://images.unsplash.com/photo-1605274280925-9dd1baacb97b?w=600&h=400&fit=crop&auto=format', count: 24 },
  { id: 2, name: 'Coffee Cups', desc: 'Your daily brew, greener', img: 'https://images.unsplash.com/photo-1701983430857-c4110a465a27?w=600&h=400&fit=crop&auto=format', count: 18 },
  { id: 3, name: 'Food Containers', desc: 'Freshness sealed naturally', img: 'https://images.unsplash.com/photo-1633878353697-f751870d1d76?w=600&h=400&fit=crop&auto=format', count: 32 },
  { id: 4, name: 'Lunch Boxes', desc: 'Pack it right, eat right', img: 'https://images.unsplash.com/photo-1633878353720-7a49a4a3d0ec?w=600&h=400&fit=crop&auto=format', count: 15 },
  { id: 5, name: 'Shopping Bags', desc: 'Carry with purpose', img: 'https://images.unsplash.com/photo-1694531604356-3e98c0caee3b?w=600&h=400&fit=crop&auto=format', count: 21 },
  { id: 6, name: 'Bamboo Cutlery', desc: 'Eat beautifully, sustainably', img: 'https://images.unsplash.com/photo-1633878353628-5fc8b983325c?w=600&h=400&fit=crop&auto=format', count: 28 },
]

const products = [
  { id: 1, name: 'Stainless Steel Water Bottle 750ml', price: 1850, originalPrice: 2400, rating: 4.8, reviews: 234, badge: 'SALE', img: 'https://images.unsplash.com/photo-1605274280925-9dd1baacb97b?w=500&h=500&fit=crop&auto=format', category: 'Water Bottles', inStock: true },
  { id: 2, name: 'Bamboo Cutlery Travel Set', price: 950, originalPrice: null, rating: 4.9, reviews: 189, badge: 'NEW', img: 'https://images.unsplash.com/photo-1633878353628-5fc8b983325c?w=500&h=500&fit=crop&auto=format', category: 'Bamboo Cutlery', inStock: true },
  { id: 3, name: 'Reusable Coffee Cup 350ml', price: 1250, originalPrice: null, rating: 4.7, reviews: 156, badge: null, img: 'https://images.unsplash.com/photo-1701983430857-c4110a465a27?w=500&h=500&fit=crop&auto=format', category: 'Coffee Cups', inStock: true },
  { id: 4, name: 'Eco Lunch Box — 3 Compartments', price: 2100, originalPrice: 2750, rating: 4.6, reviews: 98, badge: 'SALE', img: 'https://images.unsplash.com/photo-1633878353720-7a49a4a3d0ec?w=500&h=500&fit=crop&auto=format', category: 'Lunch Boxes', inStock: true },
  { id: 5, name: 'Organic Cotton Tote Bag', price: 650, originalPrice: null, rating: 4.8, reviews: 312, badge: 'NEW', img: 'https://images.unsplash.com/photo-1621466550398-ac8062907657?w=500&h=500&fit=crop&auto=format', category: 'Shopping Bags', inStock: true },
  { id: 6, name: 'Glass Food Container Set (3pc)', price: 3200, originalPrice: 3900, rating: 4.9, reviews: 67, badge: 'SALE', img: 'https://images.unsplash.com/photo-1633878353697-f751870d1d76?w=500&h=500&fit=crop&auto=format', category: 'Food Containers', inStock: false },
  { id: 7, name: 'Bamboo Brush Set', price: 780, originalPrice: null, rating: 4.5, reviews: 143, badge: null, img: 'https://images.unsplash.com/photo-1633878351657-d5188a7ce7b1?w=500&h=500&fit=crop&auto=format', category: 'Bamboo Cutlery', inStock: true },
  { id: 8, name: 'Wicker Utensil Basket', price: 1450, originalPrice: null, rating: 4.7, reviews: 89, badge: 'NEW', img: 'https://images.unsplash.com/photo-1633878353830-a42d014bf55c?w=500&h=500&fit=crop&auto=format', category: 'Kitchen Essentials', inStock: true },
]

const testimonials = [
  { id: 1, name: 'Dilini Perera', location: 'Colombo', rating: 5, text: 'GREEN NEST has completely transformed my daily routine. The stainless steel bottles are exceptional quality and I love knowing every purchase helps our environment. Highly recommend to every Sri Lankan family!', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format' },
  { id: 2, name: 'Kasun Jayawardena', location: 'Kandy', rating: 5, text: 'Ordered the bamboo cutlery set and lunch box together — both arrived beautifully packaged and the quality is outstanding. Fast delivery to Kandy too. This is exactly what Sri Lanka needs more of.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format' },
  { id: 3, name: 'Amaya Fernando', location: 'Galle', rating: 5, text: 'I am obsessed with the reusable coffee cup. It keeps my morning tea hot for hours and looks so elegant. GREEN NEST proves that sustainable living can be stylish and affordable at the same time.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format' },
  { id: 4, name: 'Ruwan Silva', location: 'Negombo', rating: 5, text: 'I have been using GREEN NEST products for 6 months now. The food containers are BPA-free, leak-proof, and genuinely durable. My family has reduced our plastic waste dramatically. Worth every rupee!', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format' },
]

const blogs = [
  { id: 1, title: '10 Simple Ways to Reduce Plastic Waste in Sri Lanka', author: 'Nimesha Perera', date: 'July 18, 2026', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1633878353649-66a04593751f?w=600&h=400&fit=crop&auto=format', category: 'Lifestyle' },
  { id: 2, title: 'Why Reusable Products Matter for Our Oceans', author: 'Ashan Dias', date: 'July 10, 2026', readTime: '4 min read', img: 'https://images.unsplash.com/photo-1633878353733-01fb3e3bceaf?w=600&h=400&fit=crop&auto=format', category: 'Environment' },
  { id: 3, title: 'Sustainable Kitchen Essentials for Every Home', author: 'Dilini Rathnayake', date: 'July 2, 2026', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1633878353830-a42d014bf55c?w=600&h=400&fit=crop&auto=format', category: 'Tips' },
]

const stats = [
  { value: '500,000+', label: 'Plastic Bottles Saved', icon: '♻️' },
  { value: '25,000+', label: 'Happy Customers', icon: '🌿' },
  { value: '100%', label: 'Recyclable Packaging', icon: '🌱' },
  { value: '1M+', label: 'Single-Use Plastics Replaced', icon: '🌍' },
]

const features = [
  { icon: '🌿', title: 'Eco-Friendly Materials', desc: 'All products crafted from BPA-free, food-safe, and sustainably sourced materials' },
  { icon: '🚚', title: 'Fast Island-Wide Delivery', desc: 'Next-day delivery to Colombo, 2–3 days to all other districts across Sri Lanka' },
  { icon: '🚫', title: 'Plastic-Free Living', desc: 'Every product replaces single-use plastics — one purchase, lasting impact' },
  { icon: '⭐', title: 'Premium Quality', desc: 'Rigorously tested for durability, safety, and everyday performance' },
]

// ─── Components ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.166a1 1 0 00.951-.69l1.286-3.967z" />
        </svg>
      ))}
    </span>
  )
}

function ProductCard({ product, wishlist, onWishlist, onCart }: { product: typeof products[0]; wishlist: Set<number>; onWishlist: (id: number) => void; onCart: (name: string) => void }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-lift group border border-gray-100">
      <div className="relative overflow-hidden bg-[#F7F3E8] aspect-square img-zoom">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        {product.badge && (
          <span className={product.badge === 'SALE' ? 'badge-sale absolute top-3 left-3' : 'badge-new absolute top-3 left-3'}>
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-500 bg-white px-4 py-1.5 rounded-full border">Out of Stock</span>
          </div>
        )}
        <button
          onClick={() => onWishlist(product.id)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Wishlist"
        >
          <svg className={`w-4 h-4 ${wishlist.has(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`} fill={wishlist.has(product.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-[#98A66D] font-semibold uppercase tracking-wide mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[#667F49] font-bold text-lg">Rs. {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-gray-400 text-sm line-through ml-2">Rs. {product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
        <button
          onClick={() => onCart(product.name)}
          disabled={!product.inStock}
          className="mt-3 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 bg-[#667F49] text-white hover:bg-[#556B3F] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
        >
          {product.inStock ? 'Add to Cart' : 'Notify Me'}
        </button>
      </div>
    </div>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [wishlist, setWishlist] = useState<Set<number>>(new Set())
  const [cart, setCart] = useState<string[]>([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [toast, setToast] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (testimonials.length <= 1) return
    const t = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const showToast = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 2800)
  }

  const toggleWishlist = (id: number) => {
    setWishlist(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id); showToast('Removed from wishlist') }
      else { next.add(id); showToast('Added to wishlist ♥') }
      return next
    })
  }

  const addToCart = (name: string) => {
    setCart(prev => [...prev, name])
    showToast(`"${name.slice(0, 28)}..." added to cart`)
  }

  const filters = ['All', 'Water Bottles', 'Bamboo Cutlery', 'Coffee Cups', 'Lunch Boxes', 'Shopping Bags', 'Food Containers']
  const filtered = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter)

  const scrollCarousel = (dir: number) => {
    if (carouselRef.current) carouselRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#556B3F] text-white text-sm font-medium px-6 py-3 rounded-full shadow-xl z-[100] animate-fadeInUp">
          {toast}
        </div>
      )}

      {/* ── Announcement Bar ── */}
      <div className="bg-[#667F49] text-white text-center text-xs py-2 font-medium tracking-wide">
        🌿 Free Island-Wide Delivery on Orders Over Rs. 2,500 — Shop Now &amp; Save the Planet
      </div>

      {/* ── Navigation ── */}
      <nav className={`fixed top-[32px] left-0 right-0 z-50 transition-all duration-400 px-6 py-3 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#667F49] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" opacity=".2" />
                <path d="M9 12c0-3 2.5-5 5.5-5C15 9.5 13 12.5 9 12z" fill="currentColor" />
                <path d="M12 12c-3 0-5-2.5-5-5.5C9.5 6 12.5 8 12 12z" fill="currentColor" />
              </svg>
            </div>
            <span className={`text-xl font-black tracking-tight ${scrolled ? 'text-[#1a1a1a]' : 'text-white drop-shadow'}`}>
              GREEN <span className="text-[#98A66D]">NEST</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {['Home', 'Shop', 'Categories', 'About Us', 'Blog'].map(item => (
              <a key={item} href="#" className={`text-sm font-medium transition-colors duration-200 hover:text-[#98A66D] ${scrolled ? 'text-gray-700' : 'text-white drop-shadow'}`}>
                {item}
              </a>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-600' : 'text-white'} hover:text-[#98A66D]`}>Sign In</button>
            {/* Wishlist */}
            <button className={`relative p-2 rounded-full transition-colors hover:bg-white/20 ${scrolled ? 'text-gray-600' : 'text-white'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlist.size > 0 && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">{wishlist.size}</span>}
            </button>
            {/* Cart */}
            <button className={`relative p-2 rounded-full transition-colors hover:bg-white/20 ${scrolled ? 'text-gray-600' : 'text-white'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-9-4h4" />
              </svg>
              {cart.length > 0 && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#667F49] text-white text-[9px] font-bold rounded-full flex items-center justify-center">{cart.length}</span>}
            </button>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 mt-2 rounded-2xl shadow-xl px-6 py-4">
            {['Home', 'Shop', 'Categories', 'About Us', 'Sustainability', 'Blog', 'Contact'].map(item => (
              <a key={item} href="#" onClick={() => setMobileOpen(false)} className="block py-3 text-gray-700 font-medium border-b border-gray-50 last:border-0 hover:text-[#667F49] transition-colors">
                {item}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-2.5 border border-[#667F49] text-[#667F49] rounded-xl text-sm font-semibold">Sign In</button>
              <button className="flex-1 py-2.5 bg-[#667F49] text-white rounded-xl text-sm font-semibold">Register</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633878353628-5fc8b983325c?w=1600&h=900&fit=crop&auto=format"
            alt="Eco-friendly reusable bamboo products on a wooden kitchen table"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e12]/80 via-[#2a4a1a]/55 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="max-w-xl">
            <span className="hero-badge inline-block bg-[#98A66D]/30 backdrop-blur-sm border border-[#98A66D]/40 text-[#D8C9A8] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              🌿 Sri Lanka's Premier Eco Brand
            </span>
            <h1 className="hero-text text-5xl md:text-7xl font-black text-white leading-[0.95] mb-6 tracking-tight">
              GREEN<br />IS OUR<br />FUTURE.
            </h1>
            <p className="hero-sub text-lg text-[#D8C9A8] leading-relaxed mb-10 max-w-md">
              GREEN NEST offers premium reusable products designed to reduce waste, protect Sri Lanka's environment, and inspire sustainable living for every family.
            </p>
            <div className="hero-btns flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#667F49] text-white font-bold rounded-xl hover:bg-[#556B3F] transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-[#667F49]/40 shadow-lg">
                Shop Now
              </button>
              <button className="px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white hover:text-[#667F49] transition-all duration-300">
                Explore Collection
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="bg-[#F7F3E8] py-5 border-y border-[#D8C9A8]/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Zero Waste Philosophy', 'BPA-Free Certified', '330+ Eco Products', '25,000+ Satisfied Customers'].map(item => (
              <div key={item} className="flex items-center justify-center gap-2 text-[#556B3F]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#98A66D]" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-7 rounded-2xl border border-gray-100 hover:border-[#98A66D]/40 card-lift hover:bg-[#F7F3E8] transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by Category ── */}
      <section className="py-20 px-6 bg-[#F7F3E8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#98A66D] text-xs font-bold uppercase tracking-widest">Explore</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 section-heading">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map(cat => (
              <div key={cat.id} className="relative group rounded-2xl overflow-hidden cursor-pointer img-zoom card-lift aspect-[4/3] bg-[#D8C9A8]">
                <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e12]/80 via-[#1a2e12]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg leading-tight">{cat.name}</h3>
                  <p className="text-[#D8C9A8] text-xs mt-0.5 mb-3">{cat.desc} · {cat.count} products</p>
                  <span className="inline-block text-xs font-bold text-[#667F49] bg-white px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#98A66D] text-xs font-bold uppercase tracking-widest">Handpicked for You</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 section-heading">Featured Products</h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === f ? 'bg-[#667F49] text-white shadow-md' : 'bg-[#F7F3E8] text-gray-600 hover:bg-[#D8C9A8]'}`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} wishlist={wishlist} onWishlist={toggleWishlist} onCart={addToCart} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 border-2 border-[#667F49] text-[#667F49] font-bold rounded-xl hover:bg-[#667F49] hover:text-white transition-all duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Choose GREEN NEST ── */}
      <section className="py-20 bg-[#F7F3E8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] img-zoom bg-[#D8C9A8] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1761839258657-457dda39b5cc?w=700&h=900&fit=crop&auto=format"
                alt="Family enjoying sustainable lifestyle in a lush garden"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e12]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#667F49] rounded-full flex items-center justify-center text-white text-lg">🌿</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">500,000+ Plastics Saved</p>
                      <p className="text-gray-500 text-xs">Thanks to our amazing community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-[#98A66D] text-xs font-bold uppercase tracking-widest">Our Promise</span>
              <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6 leading-tight">
                Why Choose<br />GREEN NEST?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are a proudly Sri Lankan brand on a mission to make sustainable living accessible, beautiful, and affordable for every household — from Colombo to Jaffna.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '✅', title: 'BPA-Free & Food-Safe', desc: 'Every product certified safe for food contact and your family' },
                  { icon: '💧', title: 'Leak-Proof Design', desc: 'Engineered for active Sri Lankan lifestyles — office, school, travel' },
                  { icon: '♻️', title: 'Eco-Friendly Packaging', desc: 'All packaging is 100% recyclable — zero plastic in our supply chain' },
                  { icon: '💚', title: 'Affordable Premium Quality', desc: 'Premium materials at prices that work for every Sri Lankan family' },
                  { icon: '🏅', title: 'Trusted by 25,000+ Customers', desc: 'Rated 4.9/5 across thousands of genuine reviews' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sustainability Stats ── */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2a4a1a 0%, #667F49 60%, #98A66D 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #D8C9A8 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F7F3E8 0%, transparent 40%)' }} />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-14">
            <span className="text-[#D8C9A8] text-xs font-bold uppercase tracking-widest">Our Impact</span>
            <h2 className="text-4xl font-black text-white mt-2">Sustainability in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
                <div className="text-[#D8C9A8] text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white text-center mb-8">Our Sustainable Journey</h3>
            <div className="grid md:grid-cols-4 gap-0 relative">
              <div className="absolute top-4 left-[12.5%] right-[12.5%] h-0.5 bg-white/20 hidden md:block" />
              {[
                { year: '2019', label: 'GREEN NEST Founded', desc: 'Started with 5 reusable products in Colombo' },
                { year: '2021', label: '10,000 Customers', desc: 'Expanded island-wide delivery network' },
                { year: '2023', label: '100% Eco Packaging', desc: 'Eliminated all plastic from operations' },
                { year: '2026', label: '1M+ Plastics Replaced', desc: 'Leading Sri Lanka\'s green revolution' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center px-4 relative">
                  <div className="w-8 h-8 rounded-full bg-[#98A66D] border-4 border-white flex items-center justify-center mb-3 z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-[#D8C9A8] text-xs font-bold mb-1">{step.year}</span>
                  <span className="text-white font-bold text-sm mb-1">{step.label}</span>
                  <span className="text-[#D8C9A8] text-xs leading-relaxed">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Sellers Carousel ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[#98A66D] text-xs font-bold uppercase tracking-widest">Most Loved</span>
              <h2 className="text-4xl font-black text-gray-900 mt-2">Best Sellers</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scrollCarousel(-1)} className="w-10 h-10 rounded-full border-2 border-[#667F49] text-[#667F49] flex items-center justify-center hover:bg-[#667F49] hover:text-white transition-all duration-300">
                ←
              </button>
              <button onClick={() => scrollCarousel(1)} className="w-10 h-10 rounded-full border-2 border-[#667F49] text-[#667F49] flex items-center justify-center hover:bg-[#667F49] hover:text-white transition-all duration-300">
                →
              </button>
            </div>
          </div>
        </div>
        <div ref={carouselRef} className="carousel-track px-6 max-w-6xl mx-auto">
          {[...products, ...products.slice(0, 4)].map((p, i) => (
            <div key={i} className="carousel-item w-56">
              <div className="bg-white rounded-2xl border border-gray-100 card-lift overflow-hidden">
                <div className="aspect-square bg-[#F7F3E8] img-zoom overflow-hidden rounded-t-2xl">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 truncate">{p.name}</p>
                  <p className="text-[#667F49] font-bold text-sm mt-1">Rs. {p.price.toLocaleString()}</p>
                  <StarRating rating={p.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-6 bg-[#F7F3E8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#98A66D] text-xs font-bold uppercase tracking-widest">Real Stories</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 section-heading">What Our Customers Say</h2>
          </div>

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-between transition-all duration-500 ${i === testimonialIdx ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => <span key={j} className="text-amber-400 text-xl">★</span>)}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#98A66D]" />
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-[#98A66D] text-sm font-medium">{t.location}, Sri Lanka</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 dot ${i === testimonialIdx ? 'w-6 bg-[#667F49] active' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#98A66D] text-xs font-bold uppercase tracking-widest">Insights</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 section-heading">From Our Green Blog</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map(post => (
              <article key={post.id} className="card-lift rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer">
                <div className="aspect-[16/9] img-zoom bg-[#D8C9A8] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-[#667F49] uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-3 leading-snug text-base group-hover:text-[#667F49] transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="mt-4 text-[#667F49] text-sm font-bold hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 px-6 relative overflow-hidden bg-[#F7F3E8]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 10% 50%, #98A66D 0%, transparent 40%), radial-gradient(circle at 90% 50%, #667F49 0%, transparent 40%)' }} />
        <div className="max-w-2xl mx-auto text-center relative">
          <span className="text-4xl mb-4 block">🌱</span>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Join Our Green Community</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Subscribe for exclusive offers, eco tips, and new product launches. Be part of Sri Lanka's sustainability movement.
          </p>
          {subscribed ? (
            <div className="bg-[#667F49] text-white rounded-2xl px-8 py-5 font-semibold text-lg">
              🎉 Welcome to the GREEN NEST family!
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setSubscribed(true) }} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 rounded-xl border-2 border-[#D8C9A8] bg-white text-sm focus:border-[#667F49] transition-colors"
              />
              <button type="submit" className="px-6 py-4 bg-[#667F49] text-white font-bold rounded-xl hover:bg-[#556B3F] transition-all duration-300 whitespace-nowrap hover:scale-105">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#98A66D] text-xs font-bold uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 section-heading">Contact Us</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="px-4 py-3.5 rounded-xl border-2 border-gray-100 text-sm w-full focus:border-[#667F49] transition-colors" />
                <input type="email" placeholder="Email Address" className="px-4 py-3.5 rounded-xl border-2 border-gray-100 text-sm w-full focus:border-[#667F49] transition-colors" />
              </div>
              <input type="tel" placeholder="Phone Number" className="px-4 py-3.5 rounded-xl border-2 border-gray-100 text-sm w-full focus:border-[#667F49] transition-colors" />
              <input type="text" placeholder="Subject" className="px-4 py-3.5 rounded-xl border-2 border-gray-100 text-sm w-full focus:border-[#667F49] transition-colors" />
              <textarea rows={5} placeholder="Your message..." className="px-4 py-3.5 rounded-xl border-2 border-gray-100 text-sm w-full focus:border-[#667F49] transition-colors resize-none" />
              <button type="submit" className="w-full py-4 bg-[#667F49] text-white font-bold rounded-xl hover:bg-[#556B3F] transition-all duration-300 hover:shadow-lg">
                Send Message →
              </button>
            </form>

            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Our Address', info: 'No. 45, Galle Road, Colombo 03, Sri Lanka' },
                { icon: '📞', title: 'Call Us', info: '+94 11 234 5678' },
                { icon: '📧', title: 'Email', info: 'hello@greennest.lk' },
                { icon: '🕐', title: 'Working Hours', info: 'Mon – Sat: 9:00 AM – 6:00 PM' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-[#F7F3E8] rounded-2xl">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-600 text-sm mt-0.5">{item.info}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 pt-2">
                {['Facebook', 'Instagram', 'WhatsApp'].map(social => (
                  <button key={social} className="flex-1 py-3 bg-[#667F49] text-white text-sm font-semibold rounded-xl hover:bg-[#556B3F] transition-colors">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1a2e12] text-white pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-[#667F49] flex items-center justify-center">
                  <span className="text-white text-lg">🌿</span>
                </div>
                <span className="text-xl font-black">GREEN <span className="text-[#98A66D]">NEST</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Sri Lanka's premier eco-friendly reusable products brand. Committed to a plastic-free future for our island.
              </p>
              <div className="flex gap-2">
                {['f', 'in', 'tw', 'yt'].map(s => (
                  <button key={s} className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#667F49] flex items-center justify-center text-xs font-bold transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Shop', links: ['Water Bottles', 'Coffee Cups', 'Food Containers', 'Lunch Boxes', 'Shopping Bags', 'Bamboo Cutlery'] },
              { title: 'Company', links: ['About Us', 'Sustainability', 'Blog', 'Reviews', 'Careers', 'Press'] },
              { title: 'Support', links: ['Contact Us', 'FAQ', 'Shipping Policy', 'Returns', 'Terms & Conditions', 'Privacy Policy'] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 text-sm hover:text-[#98A66D] transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 GREEN NEST. All rights reserved. Made with 💚 in Sri Lanka.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map(link => (
                <a key={link} href="#" className="text-gray-500 text-xs hover:text-[#98A66D] transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="#"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Contact on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </div>
  )
}
