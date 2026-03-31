'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const casesData = [
  {
    number: '01',
    client: 'Casa do Porto',
    category: 'Social Media & Conteúdo',
    title: 'De restaurante local a referência gastronómica',
    metrics: [
      { label: 'Alcance mensal', value: '340K' },
      { label: 'Novos seguidores', value: '+8.2K' },
      { label: 'Reservas via DM', value: '+220%' },
    ],
    result: '+340% alcance orgânico em 6 meses',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  },
  {
    number: '02',
    client: 'Atlântico Studio',
    category: 'Influencer Marketing',
    title: 'Lançamento de marca de moda portuguesa',
    metrics: [
      { label: 'Impressões totais', value: '1.2M' },
      { label: 'Criadores activados', value: '12' },
      { label: 'ROI da campanha', value: '4.8x' },
    ],
    result: 'Coleção esgotada em 48 horas',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    number: '03',
    client: 'Konfidencial',
    category: 'Tráfego Pago B2B',
    title: 'Lead generation para startup de cibersegurança',
    metrics: [
      { label: 'Leads mensais', value: '147' },
      { label: 'Custo por lead', value: '€8.40' },
      { label: 'Taxa de conversão', value: '12.3%' },
    ],
    result: 'CPL 60% abaixo do benchmark',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
  },
]

export default function Cases() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: any
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      ctx = gsap.context(() => {
        const slides = gsap.utils.toArray<HTMLElement>('.case-slide')
        slides.forEach((slide, i) => {
          if (i === slides.length - 1) return
          ScrollTrigger.create({
            trigger: slide,
            start: 'top top',
            end: `+=${window.innerHeight * 0.9}`,
            pin: true,
            pinSpacing: false,
          })
        })
      }, sectionRef)
    }
    initGSAP()
    return () => { ctx?.revert() }
  }, [])

  return (
    <section ref={sectionRef} id="cases" data-theme="dark" className="bg-black">
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-8"><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">Cases em Destaque</p></div>
      {casesData.map((c, i) => (
        <div key={c.number} className="case-slide relative min-h-screen bg-black flex items-end pb-20" style={{zIndex: i+1}}>
          <div className="absolute inset-0"><Image src={c.image} alt={c.client} fill className="object-cover opacity-40" priority={i===0}/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"/></div>
          <span className="absolute top-12 right-8 font-display text-white/10 leading-none select-none" style={{fontSize:'clamp(120px,20vw,240px)'}}>{c.number}</span>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6"><div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end"><div className="lg:col-span-2"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange mb-3">{c.category}</p><h2 className="font-display text-white leading-tight" style={{fontSize:'clamp(32px,5vw,72px)'}}>{c.title.toUpperCase()}</h2><p className="font-body text-white/50 text-sm mt-3">{c.client}</p></div><div className="space-y-4">{c.metrics.map(({label,value})=>(<div key={label} className="border-t border-white/10 pt-4"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mb-1">{label}</p><p className="font-display text-white text-3xl">{value}</p></div>))}<div className="mt-6 px-4 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-xl"><p className="font-body text-brand-orange text-sm font-medium">{c.result}</p></div></div></div></div>
        </div>
      ))}
    </section>
  )
}
