import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, Legend } from 'recharts'

const revData = [
  { year: '2026', revenue: 200, cost: 350 }, { year: '2027', revenue: 400, cost: 320 },
  { year: '2028', revenue: 550, cost: 310 }, { year: '2029', revenue: 600, cost: 300 },
  { year: '2030', revenue: 720, cost: 290 }, { year: '2031', revenue: 850, cost: 285 },
  { year: '2032', revenue: 980, cost: 280 },
]
const npvData = [
  { year: '2026', npv: -2000 }, { year: '2027', npv: -1650 }, { year: '2028', npv: -1200 },
  { year: '2029', npv: -700 }, { year: '2030', npv: -100 }, { year: '2031', npv: 500 },
  { year: '2032', npv: 1200 }, { year: '2033', npv: 1950 }, { year: '2034', npv: 2800 }, { year: '2035', npv: 3700 },
]

function Tip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'rgba(3,0,20,0.95)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 16px', boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
      <p style={{ fontSize: 11, color: '#52525b', fontWeight: 600, marginBottom: 4 }}>{label}</p>
      {payload.map(e => <p key={e.name} style={{ fontSize: 13, fontWeight: 700, color: e.color }}>{e.name}: ₹{e.value} Cr</p>)}
    </div>
  )
}

function Leg({ payload }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 12 }}>
      {payload?.map(e => (
        <div key={e.value} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: e.color }} />
          <span style={{ fontSize: 11, color: '#52525b' }}>{e.value}</span>
        </div>
      ))}
    </div>
  )
}

const ax = { fill: '#3f3f46', fontSize: 11 }

export default function Charts() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="charts" ref={ref} style={{ padding: '120px 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', maxWidth: 600, height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

      <div className="wrap" style={{ textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="tag" style={{ marginBottom: 24, display: 'inline-flex' }}>Analytics</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#fff', marginBottom: 56 }}>
            Financial <span className="accent-text">Projections</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 940, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="glass" style={{ padding: 28, textAlign: 'center' }}>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Revenue vs Cost</h3>
            <p style={{ fontSize: 12, color: '#52525b', marginBottom: 28 }}>Projected comparison (₹ Crores)</p>
            <div style={{ height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revData} barGap={4} barCategoryGap="25%">
                  <defs>
                    <linearGradient id="gR" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#4f46e5" /></linearGradient>
                    <linearGradient id="gC" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22d3ee" stopOpacity={0.7} /><stop offset="100%" stopColor="#0891b2" stopOpacity={0.4} /></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis dataKey="year" tick={ax} axisLine={{ stroke: 'rgba(255,255,255,0.04)' }} tickLine={false} />
                  <YAxis tick={ax} axisLine={false} tickLine={false} width={35} />
                  <Tooltip content={<Tip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                  <Legend content={<Leg />} />
                  <Bar dataKey="revenue" name="Revenue" fill="url(#gR)" radius={[6, 6, 1, 1]} />
                  <Bar dataKey="cost" name="Cost" fill="url(#gC)" radius={[6, 6, 1, 1]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="glass" style={{ padding: 28, textAlign: 'center' }}>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 600, color: '#fff', marginBottom: 4 }}>NPV Projection</h3>
            <p style={{ fontSize: 12, color: '#52525b', marginBottom: 28 }}>Net Present Value (₹ Crores)</p>
            <div style={{ height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={npvData}>
                  <defs>
                    <linearGradient id="nF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#818cf8" stopOpacity={0.25} /><stop offset="100%" stopColor="#818cf8" stopOpacity={0} /></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                  <XAxis dataKey="year" tick={ax} axisLine={{ stroke: 'rgba(255,255,255,0.04)' }} tickLine={false} />
                  <YAxis tick={ax} axisLine={false} tickLine={false} width={45} />
                  <Tooltip content={<Tip />} />
                  <Area type="monotone" dataKey="npv" name="NPV" stroke="#818cf8" strokeWidth={2.5} fill="url(#nF)"
                    dot={{ fill: '#6366f1', strokeWidth: 0, r: 3.5 }} activeDot={{ fill: '#818cf8', stroke: '#312e81', strokeWidth: 2, r: 6 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
