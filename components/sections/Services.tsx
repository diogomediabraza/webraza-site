'use client'

import { useRef, useEffect, useState } from 'react'

const operationsData = [
  {
    number: 'NO.01',
    name: 'MediaBraza',
    tagline: 'A marca começa aqui.',
    description: 'Posicionamento, narrativa, tom de voz e presença estratégica. A MediaBraza trabalha o que determina como uma marca é lembrada, diferenciada e escolhida — antes mesmo de abrir a boca.',
    tags: ['Posicionamento', 'Narrativa de Marca', 'Tom de Voz', 'Linha Editorial', 'Brand Strategy'],
    stat: { value: '16+', label: 'Marcas posicionadas' },
  },
  {
    number: 'NO.02',
    name: 'WeDigitalBranding',
    tagline: 'Crescimento digital com método.',
    description: 'Mídia paga, performance e aceleração comercial orientada por dados. A WeDigitalBranding transforma digital em resultado real de negócio — com a clareza de quem sabe a diferença entre vaidade de métricas e tração.',
    tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Performance', 'Aceleração Comercial'],
    stat: { value: '4.8x', label: 'ROI médio das campanhas' },
  },
  {
    number: 'NO.03',
    name: 'Braza Connecta',
    tagline: 'Influência com operação. Não com improviso.',
    description: 'Conecta marcas e creators com estratégia, organização e inteligência de operação. A Braza Connecta conta com plataforma própria de ativação e mensuração — para que nenhuma campanha de influência fique sem rastreio.',
    tags: ['Influencer Marketing', 'Curadoria de Creators', 'Plataforma Própria', 'UGC', 'Branded Content'],
    stat: { value: '50+', label: 'Criadores na rede' },
  },
  {
    number: 'NO.04',
    name: 'Braphic',
    tagline: 'Produção que serve à estratégia.',
    description: 'Produtora independente que integra o ecossistema WeBraza. Captação, edição, campanhas e conteúdo visual de alta qualidade — para o grupo, para agências e para projectos independentes.',
    tags: ['Audiovisual', 'Captação', 'Edição', 'Campanhas em Vídeo', 'Brand Content'],
    stat: { value: '200+', label: 'Peças produzidas/mês' },
  },
  {
    number: 'NO.05',
    name: 'EmBraza',
    tagline: 'Onde a WeBraza pensa em voz alta.',
    description: 'O podcast do grupo. Uma plataforma de conteúdo, autoridade e relacionamento — com conversas sobre empreendedorismo, mercado, lifestyle e os bastidores de quem está a construir marcas de verdade.',
    tags: ['Podcast', 'Conteúdo Editorial', 'Autoridade', 'Empreendedorismo', 'Lifestyle'],
    stat: { value: '100%', label: 'Consistência editorial' },
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

      <div className="bg-white py-10 sm:py-16 border-b border-black/5" data-theme="light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/30 mb-3 sm:mb-4">O ecossistema</p>
          <h2 className="font-display text-black" style={{ fontSize: 'clamp(40px, 8vw, 120px)' }}>
            OPERAÇÕES
          </h2>
        </div>
      </div>

      <div className="sticky top-14 sm:top-24 z-20 bg-white/90 backdrop-blur border-b border-black/5 py-2.5 sm:py-3" data-theme="light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
          {operationsData.map((s, i) => (
            <button
              key={s.number}
              className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] px-2.5 sm:px-3 py-1.5 rounded-full transition-colors whitespace-nowrap min-h-[36px] ${
                activeIndex === i ? 'bg-brand-orange text-white' : 'text-black/30 hover:text-black/60'
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

      {operationsData.map((op, i) => (
        <section
          key={op.number}
          className="service-slide bg-white border-b border-black/5 py-14 sm:py-24"
          data-theme="light"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-orange mb-3 sm:mb-4">
                  {op.number}
                </p>
                <h3
                  className="font-display text-black mb-4 sm:mb-6"
                  style={{ fontSize: 'clamp(32px, 6vw, 80px)' }}
                >
                  {op.name.toUpperCase()}
                </h3>
                <p className="font-body text-black/80 text-lg sm:text-xl font-light leading-snug mb-4 sm:mb-6">
                  {op.tagline}
                </p>
                <p className="font-body text-black/50 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  {op.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {op.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.1em] px-2.5 sm:px-3 py-1.5 bg-black/5 rounded-full text-black/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:pt-16">
                <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-6 sm:mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mb-3 sm:mb-4">
                    {op.stat.label}
                  </p>
                  <span
                    className="font-display text-white"
                    style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}
                  >
                    {op.stat.value}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-black/5"
                    style={{ fontSize: 'clamp(60px, 15vw, 180px)' }}
                  >
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <a
                    href="/servicos"
                    className="inline-flex items-center gap-2 bg-brand-orange text-white font-body font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-brand-orange-light transition-colors text-sm min-h-[44px]"
                  >
                    Saber mais →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

    </div>
  )
}
