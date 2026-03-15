import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Menu, X } from 'lucide-react'

const links = [
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Financials', href: '#charts' },
  { name: 'NPV', href: '#features' },
  { name: 'About', href: '#mission' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(3,0,20,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        transition: 'all 0.4s',
      }}
    >
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ position: 'relative' }}>
            <Rocket style={{ width: 22, height: 22, color: '#818cf8', position: 'relative', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'rgba(99,102,241,0.2)', filter: 'blur(10px)' }} />
          </div>
          <span className="font-display" style={{ fontSize: 19, fontWeight: 700, color: '#fff' }}>AstroVoyage</span>
        </a>

        <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {links.map(l => (
            <a key={l.name} href={l.href}
              style={{ padding: '7px 16px', fontSize: 13, fontWeight: 500, color: '#71717a', borderRadius: 8, transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.background = 'transparent' }}
            >{l.name}</a>
          ))}
        </div>

        <a href="#dashboard" className="hidden md:inline-flex"
          style={{ padding: '9px 24px', borderRadius: 9999, fontSize: 13, fontWeight: 600, background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff', boxShadow: '0 0 20px rgba(99,102,241,0.3), 0 4px 12px rgba(0,0,0,0.3)', transition: 'box-shadow 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.5), 0 4px 16px rgba(0,0,0,0.4)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.3), 0 4px 12px rgba(0,0,0,0.3)'}
        >Explore</a>

        <button onClick={() => setOpen(!open)} className="md:hidden" style={{ color: '#71717a', background: 'none', border: 'none', cursor: 'pointer' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ background: 'rgba(3,0,20,0.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '12px 32px' }}>
          {links.map(l => <a key={l.name} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: 15, color: '#a1a1aa' }}>{l.name}</a>)}
        </div>
      )}
    </motion.nav>
  )
}
