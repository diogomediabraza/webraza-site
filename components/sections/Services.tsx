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
    image: '', // e.g. '/images/ops/mediabraza.jpg'
    color: 'from-orange-600/20',
  },
  {
    number: 'NO.02',
    name: 'WeDigitalBranding',
    tagline: 'Crescimento digital com método.',
    description: 'Mídia paga, performance e aceleração comercial orientada por dados. A WeDigitalBranding transforma digital em resultado real de negócio — com a clareza de quem sabe a diferença entre vaidade de métricas e tração.',
    tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Performance', 'Aceleração Comercial'],
    stat: { value: '4.8x', label: 'ROI médio das campanhas' },
    image: '', // e.g. '/images/ops/wedigital.jpg'
    color: 'from-blue-600/20',
  },
  {
    number: 'NO.03',
    name: 'Braza Connecta',
    tagline: 'Influência com operação. Não com improviso.',
    description: 'Conecta marcas e creators com estratégia, organização e inteligência de operação. A Braza Connecta conta com plataforma própria de ativação e mensuração — para que nenhuma campanha de influência fique sem rastreio.',
    tags: ['Influencer Marketing', 'Curadoria de Creators', 'Plataforma Própria', 'UGC', 'Branded Content'],
    stat: { value: '50+', label: 'Criadores na rede' },
    image: '', // e.g. '/images/ops/connecta.jpg'
    color: 'from-purple-600/20',
  },
  {
    number: 'NO.04',
    name: 'Braphic',
    tagline: 'Produção que serve à estratégia.',
    description: 'Produtora independente que integra o ecossistema WeBraza. Captação, edição, campanhas e conteúdo visual de alta qualidade — para o grupo, para agências e para projectos independentes.',
    tags: ['Audiovisual', 'Captação', 'Edição', 'Campanhas em Vídeo', 'Brand Content'],
    stat: { value: '200+', label: 'Peças produzidas/mês' },
    image: '', // e.g. '/images/ops/braphic.jpg'
    color: 'from-red-600/20',
  },
  {
    number: 'NO.05',
    name: 'EmBraza',
    tagline: 'Onde a WeBraza pensa em voz alta.',
    description: 'O podcast do grupo. Uma plataforma de conteúdo, autoridade e relacionamento — com conversas sobre empreendedorismo, mercado, lifestyle e os bastidores de quem está a construir marcas de verdade.',
    tags: ['Podcast', 'Conteúdo Editorial', 'Autoridade', 'Empreendedorismo', 'Lifestyle'],
    stat: { value: '100%', label: 'Consistência editorial' },
    image: '', // e.g. '/images/ops/embraca.jpg'
    color: 'from-amber-600/20',
  },
]

// ── Placeholder icons per operation (used when no image provided) ──
const operationIcons: Record<string, JSX.Element> = {
  'NO.01': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
  'NO.02': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  'NO.03': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  'NO.04': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  'NO.05': <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
}

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

              <div className="lg:pt-16 space-y-6 sm:space-y-8">

                {/* ── Operation Visual ── */}
                <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${op.color} to-black`}>
                  {op.image ? (
                    <img
                      src={op.image}
                      alt={`${op.name} — ${op.tagline}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      {operationIcons[op.number]}
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/15 mt-4">Imagem da operação</p>
                      <p className="font-mono text-[8px] text-white/10 mt-1">800 × 600 px recomendado</p>
                    </div>
                  )}
                </div>

                {/* ── Stat Card ── */}
                <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-10">
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
