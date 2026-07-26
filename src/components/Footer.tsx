import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import logo from '@/imports/logo2.png'

const quickLinks = ['Home', 'Tour Packages', 'Gallery', 'News', 'Contact']
const aboutLinks = ['About Us', 'About Sri Lanka', 'Sustainability', 'Testimonials', 'FAQ']
const infoLinks = ['Visa Guide', 'Weather', 'Best Time to Visit', 'Travel Tips', 'Terms & Conditions']

const socialSVGs: Record<string, string> = {
  Facebook: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  Instagram: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M6.5 6.5h11A2.5 2.5 0 0 1 20 9v6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 15V9A2.5 2.5 0 0 1 6.5 6.5z',
}

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0E0E0E' }} className="relative overflow-hidden">
      {/* Subtle silhouette background */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 200 Q180 80 360 120 Q480 150 600 80 Q720 10 840 60 Q960 110 1080 70 Q1200 30 1440 90 L1440 200 Z"
            fill="#B0CCEF"
          />
        </svg>
      </div>

      {/* Top CTA bar */}
      <div
        className="px-6 lg:px-10 py-10 relative"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">
              Your Journey
              <span style={{ color: '#B0CCEF', fontStyle: 'italic' }}> Begins Here.</span>
            </h2>
            <p className="text-white/50 mt-2 text-sm">
              Let Soul Trail create your unforgettable Sri Lankan adventure.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-4 rounded-full text-white text-sm font-semibold transition-all hover:scale-105"
            style={{ background: '#1A48BB', boxShadow: '0 4px 20px rgba(26,72,187,0.40)' }}
          >
            Plan My Trip
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 lg:grid-cols-5 gap-10 relative">
        {/* Brand column */}
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Soul Trail" className="h-10 w-auto" />
            <div>
              <div className="font-serif text-lg font-bold text-white">Soul Trail</div>
              <div className="text-[10px] tracking-widest text-white/40 uppercase">Travel With Purpose</div>
            </div>
          </div>
          <p className="text-white/45 text-xs leading-relaxed mb-5">
            Crafting authentic, sustainable, and luxurious Sri Lanka experiences for discerning
            travelers since 2010.
          </p>
          <div className="flex gap-3">
            {socials.map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {label === 'Facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                  {label === 'Instagram' && (<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>)}
                  {label === 'YouTube' && (<><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></>)}
                  {label === 'LinkedIn' && (<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>)}
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <div className="text-white/50 text-xs mb-2 font-medium">Newsletter</div>
            <div className="flex rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2.5 text-xs text-white/70 outline-none placeholder:text-white/30"
              />
              <button
                className="px-4 py-2.5 text-xs font-semibold text-white flex-shrink-0"
                style={{ background: '#1A48BB' }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="About" links={aboutLinks} />
        <FooterColumn title="Travel Info" links={infoLinks} />

        {/* Contact column */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-5">Contact</h4>
          <div className="space-y-4">
            {[
              { icon: Phone, text: '+94 77 123 4567' },
              { icon: Mail, text: 'hello@soultrail.lk' },
              { icon: MapPin, text: 'Colombo 03, Sri Lanka' },
              { icon: MessageCircle, text: 'WhatsApp Us' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-2.5 text-white/50 text-xs hover:text-white/75 transition-colors cursor-pointer">
                <Icon size={13} className="flex-shrink-0 mt-0.5" />
                {text}
              </div>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs text-[#B0CCEF] hover:text-white transition-colors mt-1"
            >
              <MapPin size={11} /> View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 lg:px-10 py-5 relative"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © 2026 Soul Trail. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'PP'].map((p) => (
              <div
                key={p}
                className="px-3 py-1 rounded text-[10px] font-bold"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}
              >
                {p}
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-white/35 text-xs">
            {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-white text-sm font-semibold mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white/45 text-xs hover:text-white/80 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
