export default function About() {
  return (
    <section id="sobre" data-theme="dark" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-12">
          O grupo
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(48px, 8vw, 110px)' }}
            >
              NÃO<br />
              É<br />
              AGÊNCIA.<br />
              É<br />
              <span className="text-brand-orange">ESTRUTURA.</span>
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="font-body text-white/70 text-lg font-light leading-relaxed mb-6">
              A WeBraza é um grupo criativo e estratégico com cinco operações integradas. Não terceirizamos o que sabemos fazer. Não generalizamos o que exige especialidade.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed mb-6">
              Cada frente tem território próprio, equipa própria e foco próprio — e todas compartilham a mesma visão de negócio: clareza estratégica, execução integrada e resultado mensurável.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed mb-10">
              Quando branding, performance, influência, produção e conteúdo operam sob uma mesma visão, a coerência aparece em tudo. Isso não é promessa de pitch — é a forma como o grupo foi construído.
            </p>
            <a
              href="/sobre"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-body font-medium px-6 py-3 rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
            >
              Conhecer o grupo →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            {
              title: 'Integrado',
              text: 'As cinco operações falam a mesma língua estratégica. Não existe perda de briefing entre uma frente e outra — a coerência está na arquitectura.',
            },
            {
              title: 'Especializado',
              text: 'Cada frente tem profundidade real no seu território. Branding não generaliza. Performance não improvisa. Influência não é achismo.',
            },
            {
              title: 'Autêntico',
              text: 'O EmBraza existe porque a WeBraza acredita em construir autoridade com consistência. Fazemos o que pregamos — e isso aparece em tudo o que entregamos.',
            },
          ].map(({ title, text }) => (
            <div key={title} className="bg-black p-8 md:p-10">
              <h3 className="font-display text-brand-orange text-4xl mb-4">{title.toUpperCase()}</h3>
              <p className="font-body text-white/50 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
