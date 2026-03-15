import { useEffect, useRef } from 'react'

export default function Starfield() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    let raf
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1.2 + 0.3, o: Math.random() * 0.5 + 0.1,
      t: Math.random() * Math.PI * 2, ts: 0.005 + Math.random() * 0.02,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      for (const s of stars) {
        s.t += s.ts
        const a = s.o * (0.5 + Math.sin(s.t) * 0.5)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}
