'use client'

// ── CONFIG: Replace with your team photo path ──
const TEAM_PHOTO = '' // e.g. '/images/team-webraza.jpg'

export default function About() {
  return (
    <section id="sobre" data-theme="dark" className="bg-black py-16 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8 sm:mb-12">
          O grupo
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start mb-14 sm:mb-20">
          <div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(40px, 8vw, 110px)' }}
            >
              NÃO<br />
              É<br />
              AGÊNCIA.<br />
              É<br />
              <span className="text-brand-orange">ESTRUTURA.</span>
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="font-body text-white/70 text-base sm:text-lg font-light leading-relaxed mb-5 sm:mb-6">
              A WeBraza é um grupo criativo e estratégico com cinco operações integradas. Não terceirizamos o que sabemos fazer. Não generalizamos o que exige especialidade.
            </p>
            <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Cada frente tem território próprio, equipa própria e foco próprio — e todas compartilham a mesma visão de negócio: clareza estratégica, execução integrada e resultado mensurável.
            </p>
            <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Quando branding, performance, influência, produção e conteúdo operam sob uma mesma visão, a coerência aparece em tudo. Isso não é promessa de pitch — é a forma como o grupo foi construído.
            </p>
            <a
              href="/sobre"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-body font-medium px-6 py-3 rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors text-sm min-h-[48px]"
            >
              Conhecer o grupo →
            </a>
          </div>
        </div>

        {/* ── Team Photo Section ── */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-14 sm:mb-20 aspect-[21/9]">
          {TEAM_PHOTO ? (
            <img
              src={TEAM_PHOTO}
              alt="Equipa WeBraza Group"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/20">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">Foto da equipa</p>
                <p className="font-mono text-[9px] text-white/10 mt-1">2100 × 900 px recomendado</p>
              </div>
            </div>
          )}
          {/* Gradient overlay on team photo */}
          {TEAM_PHOTO && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange mb-4">
                  <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>
                </svg>
              ),
              title: 'Integrado',
              text: 'As cinco operações falam a mesma língua estratégica. Não existe perda de briefing entre uma frente e outra — a coerência está na arquitectura.',
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange mb-4">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ),
              title: 'Especializado',
              text: 'Cada frente tem profundidade real no seu território. Branding não generaliza. Performance não improvisa. Influência não é achismo.',
            },
            {
              icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange mb-4">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              ),
              title: 'Autêntico',
              text: 'O EmBraza existe porque a WeBraza acredita em construir autoridade com consistência. Fazemos o que pregamos — e isso aparece em tudo o que entregamos.',
            },
          ].map(({ icon, title, text }) => (
            <div key={title} className="bg-black p-6 sm:p-8 md:p-10">
              {icon}
              <h3 className="font-display text-brand-orange text-3xl sm:text-4xl mb-3 sm:mb-4">{title.toUpperCase()}</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
