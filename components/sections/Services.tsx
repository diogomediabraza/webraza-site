'use client'

import { useRef, useEffect, useState } from 'react'

const servicesData = [
  {
    number: 'NO.01',
    name: 'Tráfego Pago',
    tagline: 'Mais alcance. Menos desperdício. Campanhas que pagam por si mesmas.',
    description: 'Meta Ads, Google Ads e TikTok Ads geridos com estratégia de performance real. Cada euro investido tem destino definido e resultado mensurável.',
    tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Retargeting'],
    stat: { value: '4.8x', label: 'ROI médio das campanhas' },
  },
  {
    number: 'NO.02',
    name: 'Influencer Marketing',
    tagline: '50+ criadores. Europa inteira. Audiências reais, não métricas de vaidade.',
    description: 'A rede Braza Conecta cobre Portugal, Espanha, Alemanha e Brasil. Matchmaking estratégico entre marca e criador para campanhas que convertem.',
    tags: ['Braza Conecta', 'Micro-creators', 'Macro-creators', 'UGC', 'Branded Content'],
    stat: { value: '50+', label: 'Criadores activados' },
  },
  {
    number: 'NO.03',
    name: 'Gestão de Redes Sociais',
    tagline: 'Presença consistente. Conteúdo com propósito. Comunidade que cresce.',
    description: 'Estratégia editorial, produção de conteúdo, gestão de comunidade e relatórios mensais de performance para Instagram, TikTok e LinkedIn.',
    tags: ['Instagram', 'TikTok', 'LinkedIn', 'Editorial', 'Community Management'],
    stat: { value: '98%', label: 'Retenção de clientes' },
  },
  {
    number: 'NO.04',
    name: 'Produção de Conteúdo',
    tagline: 'Do conceito ao entregável. Vídeo, foto e copy que fazem a marca mover.',
    description: 'Equipa criativa completa: direção de arte, redação, gravação e edição. Produção de conteúdo para redes sociais, campanhas e brand content.',
    tags: ['Vídeo', 'Fotografia', 'Copywriting', 'Motion', 'Brand Content'],
    stat: { value: '200+', label: 'Peças produzidas/mês' },
  },
  {
    number: 'NO.05',
    name: 'Branding & Identidade',
    tagline: 'Marcas que não se esquecem. Identidade que abre portas antes de falar.',
    description: 'Naming, identidade visual, tom de voz e brand guidelines. Construção de marca do zero ou reposicionamento estratégico.',
    tags: ['Naming', 'Visual Identity', 'Brand Guidelines', 'Tom de Voz', 'Rebranding'],
    stat: { value: '100%', label: 'Projectos entregues no prazo' },
  },
  {
    number: 'NO.06',
    name: 'Consultoria Estratégica',
    tagline: 'Clareza antes da execução. Estratégia que alinha marketing com negócio.',
    description: 'Diagnóstico de presença digital, plano de 90 dias, análise de concorrência e definição de KPIs. Para marcas que querem crescer com direção.',
    tags: ['Diagnóstico', 'Plano 90 dias', 'OKRs', 'Análise Concorrência', 'KPIs'],
    stat: { value: '90', label: 'Dias para primeiros resultados' },
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let ctx: any
    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const slides = gsap.utils.toArray<HTMLElement>('.service-slide')
        slides.forEach((slide, i) => {
          ScrollTrigger.create({
            trigger: slide,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          })
        })
      }, sectionRef)
    }
    initGSAP()
    return () => { ctx?.revert() }
  }, [])

  return (
    <div ref={sectionRef} id="servicos">
      {/* Section heading */}
      <div className="bg-white py-16 border-b border-black/5" data-theme="light">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/30 mb-4">O que fazemos</p>
          <h2 className="font-display text-black" style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}>
            SERVIÇOS
          </h2>
        </div>
      </div>

      {/* Sticky progress indicator */}
      <div className="sticky top-24 z-20 bg-white/90 backdrop-blur border-b border-black/5 py-3" data-theme="light">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {servicesData.map((s, i) => (
            <button
              key={s.number}
              className={`font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                activeIndex === i
                  ? 'bg-brand-orange text-white'
                  : 'text-black/30 hover:text-black/60'
              }`}
              onClick={() => {
                document.querySelectorAll('.service-slide')[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {s.number} {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Service slides */}
      {servicesData.map((service, i) => (
        <section
          key={service.number}
          className="service-slide bg-white border-b border-black/5 py-24"
          data-theme="light"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-orange mb-4">
                  {service.number}
                </p>
                <h3 className="font-display text-black mb-6"
                  style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
                >
                  {service.name.toUpperCase()}
                </h3>
                <p className="font-body text-black/80 text-xl font-light leading-snug mb-6">
                  {service.tagline}
                </p>
                <p className="font-body text-black/50 text-base leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 bg-black/5 rounded-full text-black/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: stat + CTA */}
              <div className="lg:pt-16">
     0           <div className="bg-black rounded-3xl p-10 mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mb-4">
                    {service.stat.label}
                  </p>
                  <span className="font-display text-white"
                    style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}
                   >
                    {service.stat.value}
                  </span>
                </div>
                {/* Large decorative number */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-black/5"
                    style={{ fontSize: 'clamp(80px, 15vw, 180px)' }}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <a
                    href="/servicos"
                    className="inline-flex items-center gap-2 bg-brand-orange text-white font-body font-medium px-6 py-3 rounded-full hover:bw-brand-orange-light transition-colors text-sm"
                  >
                    Saber mais →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div
  )
}
