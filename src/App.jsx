import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import DashboardMetrics from './components/DashboardMetrics'
import Charts from './components/Charts'
import FeatureCards from './components/FeatureCards'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Starfield />
      {/* Gradient mesh blobs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '30%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent 65%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', top: '50%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.05), transparent 65%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.05), transparent 65%)', filter: 'blur(80px)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Mission />
        <DashboardMetrics />
        <Charts />
        <FeatureCards />
        <Footer />
      </div>
    </>
  )
}
