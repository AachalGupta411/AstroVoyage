import { motion } from 'framer-motion'
import { Plane, Users, Rocket, IndianRupee } from 'lucide-react'
import { useEffect, useState } from 'react'

const EARTH = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg'

const stats = [
  { icon: Plane, end: 20, suffix: '', label: 'Flights / Year' },
  { icon: Users, end: 6, suffix: '', label: 'Passengers / Flight' },
  { icon: Rocket, end: 120, suffix: '', label: 'Annual Passengers' },
  { icon: IndianRupee, end: 600, suffix: ' Cr', label: 'Annual Revenue', prefix: '₹' },
]

function Counter({ end, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let start = 0
    const step = Math.max(1, Math.floor(end / 40))
    const id = setInterval(() => {
      start += step
      if (start >= end) { setVal(end); clearInterval(id) }
      else setVal(start)
    }, 30)
    return () => clearInterval(id)
  }, [end])
  return <>{prefix}{val}{suffix}</>
}

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80, paddingBottom: 40 }}>
      <div className="wrap" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left - Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tag" style={{ marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#818cf8', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              Space Tourism Initiative
            </span>

            <h1 className="font-display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.08, color: '#fff', marginBottom: 24 }}>
              Journey{' '}<br />
              <span className="accent-text">Beyond Earth</span>
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#71717a', maxWidth: 440, marginBottom: 36 }}>
              Exploring the future of commercial space tourism with AstroVoyage — where innovation meets the cosmos.
            </p>

            <div style={{ display: 'flex', gap: 14, marginBottom: 48 }}>
              <a href="#dashboard" style={{
                padding: '14px 32px', borderRadius: 9999, fontSize: 14, fontWeight: 700,
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)', color: '#fff',
                boxShadow: '0 0 30px rgba(99,102,241,0.35), 0 8px 24px rgba(0,0,0,0.3)',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 45px rgba(99,102,241,0.55), 0 8px 28px rgba(0,0,0,0.4)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(99,102,241,0.35), 0 8px 24px rgba(0,0,0,0.3)'}
              >View Dashboard</a>
              <a href="#mission" style={{
                padding: '14px 32px', borderRadius: 9999, fontSize: 14, fontWeight: 600,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >Our Mission</a>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {stats.map(s => (
                <div key={s.label} className="glass" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <s.icon style={{ width: 18, height: 18, color: '#818cf8' }} />
                  </div>
                  <div>
                    <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                      <Counter end={s.end} suffix={s.suffix} prefix={s.prefix} />
                    </div>
                    <div style={{ fontSize: 11, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, marginTop: 4 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Earth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
          >
            {/* Orbit rings */}
            <div style={{ position: 'absolute', width: 480, height: 480, borderRadius: '50%', border: '1px solid rgba(99,102,241,0.06)', animation: 'spin 80s linear infinite' }} />
            <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', border: '1px dashed rgba(34,211,238,0.05)', animation: 'spin 50s linear infinite reverse' }} />

            {/* Glow */}
            <div style={{ position: 'absolute', width: 450, height: 450, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)', filter: 'blur(40px)' }} />

            <motion.img
              src={EARTH}
              alt="Earth from space"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 320, height: 320, borderRadius: '50%', objectFit: 'cover', position: 'relative', zIndex: 1,
                boxShadow: '0 0 80px rgba(99,102,241,0.3), 0 0 200px rgba(99,102,241,0.1), inset -20px -20px 60px rgba(0,0,0,0.5)',
              }}
            />
          </motion.div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } } @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  )
}
