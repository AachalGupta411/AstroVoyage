import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, TrendingUp, Satellite } from 'lucide-react'

const features = [
  { icon: BarChart3, title: 'Financial Feasibility', desc: 'Revenue projections, break-even analysis, and ROI calculations for space ventures.', color: '#818cf8' },
  { icon: TrendingUp, title: 'NPV Analysis', desc: 'Sensitivity testing across multiple discount rates and growth scenarios.', color: '#22d3ee' },
  { icon: Satellite, title: 'Flight Monitoring', desc: 'Real-time telemetry tracking spacecraft vitals, orbital params, and safety.', color: '#818cf8' },
]

export default function FeatureCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="features" ref={ref} style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', maxWidth: 600, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      <div className="wrap" style={{ textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="tag" style={{ marginBottom: 24, display: 'inline-flex' }}>Capabilities</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#fff', marginBottom: 56 }}>
            Powered by <span className="accent-text">Innovation</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass" style={{ padding: '36px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 2, background: `linear-gradient(90deg, transparent, ${f.color}40, transparent)`, borderRadius: 1 }} />

              <div style={{
                width: 48, height: 48, borderRadius: 14, margin: '0 auto 20px',
                background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <f.icon style={{ width: 22, height: 22, color: f.color }} />
              </div>
              <h3 className="font-display" style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.65 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
