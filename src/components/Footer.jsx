import { Rocket } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 0', textAlign: 'center' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Rocket style={{ width: 18, height: 18, color: '#818cf8' }} />
          <span className="font-display" style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>AstroVoyage</span>
        </a>
        <div style={{ display: 'flex', gap: 28 }}>
          {['Dashboard', 'Financials', 'NPV', 'About'].map(l => (
            <a key={l} href="#" style={{ fontSize: 13, color: '#3f3f46', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a1a1aa'}
              onMouseLeave={e => e.currentTarget.style.color = '#3f3f46'}
            >{l}</a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#27272a' }}>&copy; {new Date().getFullYear()} AstroVoyage. All rights reserved.</p>
      </div>
    </footer>
  )
}
