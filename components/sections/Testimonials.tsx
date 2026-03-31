'use client'

import { useState } from 'react'

const testimonialsData = [
  {
    author: 'Ricardo Mendes',
    role: 'CEO',
    company: 'Casa do Porto',
    quote: 'Em 3 meses a Media Braza transformou completamente a nossa presença digital. As reservas aumentaram 220% e somos agora referência no Instagram do Porto.',
    metric: '+220% reservas',
  },
  {
    author: 'Inês Carvalho',
    role: 'Founder',
    company: 'Atlântico Studio',
    quote: 'O lançamento foi um sonho. 12 criadores, 1.2M de impressões e coleção esgotada em 48 horas. A equipa Braza percebe mesmo de influencer marketing.',
    metric: 'Coleção esgotada em 48h',
  },
  {
    author: 'Pedro Azevedo',
    role: 'CMO',
    company: 'Konfidencial',
    quote: 'Viemos de uma situação onde gastávamos muito e sabíamos pouco. Hoje temos clareza total: cada euro investido tem ROI mensurável. Equipa excepcional.',
    metric: 'CPL -60%',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonialsData[active]

  return (
    <section id="testemunhos" data-theme="dark" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-16">
          O que dizem os clientes
        </p>

        {/* Quote display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="text-brand-orange font-display text-8xl leading-none mb-8 select-none">"</div>
            <blockquote className="font-body text-white text-xl md:text-2xl font-light leading-relaxed mb-8">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center">
                <span className="font-display text-white text-lg">{t.author[0]}</span>
              </div>
              <div>
                <p className="font-body text-white font-medium">{t.author}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>

          {/* Right: metric + navigation */}
          <div>
            <div className="bg-brand-orange rounded-3xl p-10 mb-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60 mb-2">Resultado</p>
              <p className="font-display text-white text-5xl">{t.metric}</p>
            </div>

            {/* Navigation dots */}
            <div className="flex items-center gap-3">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full ${
                    active === i ? 'w-8 h-2 bg-brand-orange' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
              <span className="font-mono text-[10px] text-white/30 ml-2">
                {active + 1} / {testimonialsData.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
