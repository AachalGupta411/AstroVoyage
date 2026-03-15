import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Rocket, Brain, Globe, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Space Tourism Innovation', desc: 'Pioneering reusable rocket technology to make space accessible for everyone.' },
  { icon: Brain, title: 'AI Flight Monitoring', desc: 'Real-time AI-powered systems ensuring passenger safety and optimal trajectories.' },
  { icon: Globe, title: 'Global Collaboration', desc: 'Partnering with international space agencies and private sector leaders.' },
  { icon: ShieldCheck, title: 'Safety Systems', desc: 'Triple-redundant protocols exceeding aviation industry standards.' },
]

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mission" ref={ref} style={{ padding: '120px 0', position: 'relative' }}>
      {/* Section glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(34,211,238,0.04), transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="tag" style={{ marginBottom: 24 }}>Our Purpose</span>
            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.15, color: '#fff', marginBottom: 20 }}>
              Our Mission to Expand <span className="accent-text">Space Tourism</span>
            </h2>
            <p style={{ fontSize: 16, color: '#71717a', lineHeight: 1.7, marginBottom: 36 }}>
              Through reusable rockets, AI monitoring, and unparalleled safety systems,
              we're building a future where space travel is accessible, sustainable, and extraordinary.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="#dashboard" style={{ padding: '12px 28px', borderRadius: 9999, fontSize: 14, fontWeight: 600, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa' }}>
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass"
                style={{ padding: '24px 20px', textAlign: 'center' }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 12, margin: '0 auto 14px',
                  background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.icon style={{ width: 18, height: 18, color: '#818cf8' }} />
                </div>
                <h3 className="font-display" style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 12, color: '#52525b', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
