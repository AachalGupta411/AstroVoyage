import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Landmark } from 'lucide-react'

const metrics = [
  { icon: TrendingUp, label: 'Annual Revenue', value: '₹600 Cr', num: 600, prefix: '₹', suffix: ' Cr', trend: '+24%', up: true },
  { icon: TrendingDown, label: 'Operational Cost', value: '₹300 Cr', num: 300, prefix: '₹', suffix: ' Cr', trend: '-8%', up: false },
  { icon: DollarSign, label: 'Net Profit', value: '₹300 Cr', num: 300, prefix: '₹', suffix: ' Cr', trend: '+52%', up: true },
  { icon: Landmark, label: 'Initial Investment', value: '₹2000 Cr', num: 2000, prefix: '₹', suffix: ' Cr', trend: 'Fixed', up: null },
]

function AnimNum({ end, prefix = '', suffix = '', active }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) return
    let cur = 0
    const step = Math.max(1, Math.floor(end / 30))
    const id = setInterval(() => {
      cur += step
      if (cur >= end) { setV(end); clearInterval(id) } else setV(cur)
    }, 25)
    return () => clearInterval(id)
  }, [end, active])
  return <>{prefix}{v}{suffix}</>
}

export default function DashboardMetrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="dashboard" ref={ref} style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', maxWidth: 600, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      <div className="wrap" style={{ textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="tag" style={{ marginBottom: 24, display: 'inline-flex' }}>Financial Overview</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#fff', marginBottom: 56 }}>
            Dashboard <span className="accent-text">Metrics</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass" style={{ padding: '30px 20px', textAlign: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, margin: '0 auto 16px', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <m.icon style={{ width: 18, height: 18, color: '#818cf8' }} />
              </div>
              <div style={{ fontSize: 11, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, marginBottom: 10 }}>{m.label}</div>
              <div className="font-display" style={{ fontSize: 30, fontWeight: 700, color: '#fff', marginBottom: 14 }}>
                <AnimNum end={m.num} prefix={m.prefix} suffix={m.suffix} active={inView} />
              </div>
              <span style={{
                fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 9999,
                background: m.up === true ? 'rgba(52,211,153,0.1)' : m.up === false ? 'rgba(251,191,36,0.08)' : 'rgba(255,255,255,0.03)',
                color: m.up === true ? '#6ee7b7' : m.up === false ? '#fcd34d' : '#71717a',
              }}>{m.trend}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
