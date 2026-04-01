'use client'

import { useEffect, useRef } from 'react'

interface HeroProps {
  onOpenModal?: () => void
}

export default function Hero({ onOpenModal }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animFrame: number, t = 0
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const draw = () => {
      t += 0.005; const w = canvas.width, h = canvas.height
      const gx = w*(0.65+Math.sin(t*0.7)*0.08), gy = h*(0.75+Math.cos(t*0.5)*0.08)
      const radius = Math.max(w,h)*(0.8+Math.sin(t)*0.1)
      const grad = ctx.createRadialGradient(gx,gy,0,gx,gy,radius)
      grad.addColorStop(0,'rgba(255,88,0,0.35)'); grad.addColorStop(0.3,'rgba(180,40,0,0.15)'); grad.addColorStop(1,'rgba(0,0,0,0)')
      ctx.clearRect(0,0,w,h); ctx.fillStyle=grad; ctx.fillRect(0,0,w,h)
      animFrame = requestAnimationFrame(draw)
    }; draw()
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener('resize',resize) }
  }, [])

  return (
    <section id="hero" data-theme="dark" className="relative min-h-screen bg-black flex flex-col justify-end pb-16 pt-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden={true}/>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-8">Ecossistema criativo e estratégico — Est. 2020</p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="flex-1">
            <p className="font-body text-white/80 text-3xl md:text-[49px] font-light leading-tight mb-4">Não é agência.<br/>É estrutura.</p>
            <h1 className="font-display uppercase leading-none text-white select-none" style={{ fontSize: 'clamp(80px,18vw,280px)' }}>MARCAS<br/><span className="text-brand-orange">INES</span>QUE<b>CÍVEIS</b></h1>
          </div>
          <div className="lg:max-w-sm lg:pb-4 lg:self-end">
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6">Cinco operações integradas sob uma mesma visão: branding, performance, influência, produção e conteúdo.</p>
            <p className="font-body text-white/80 text-lg font-light leading-relaxed mb-8">Um grupo criativo e estratégico baseado no Porto — construído para fazer cada coisa certa, com as pessoas certas, no lugar certo.</p>
            <div className="flex items-center gap-4">
              <button onClick={onOpenModal} className="bg-brand-orange text-white font-body font-medium px-7 py-3.5 rounded-full hover:bg-brand-orange-light transition-colors text-sm">Conhecer o ecossistema →</button>
              <a href="#sobre" className="font-body text-sm text-white/50 hover:text-white transition-colors">Saber mais ↓</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
          {[{value:'5',label:'Operações integradas'},{value:'50+',label:'Criadores na rede'},{value:'4 anos',label:'No mercado'}].map(({ value, label }) => (
            <div key={label}><span className="font-display text-3xl md:text-5xl text-white">{value}</span><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mt-1">{label}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}
