export default function About() {
  return (
    <section id="sobre" data-theme="dark" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-12">
          Quem somos
        </p>

        {/* Main heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(48px, 8vw, 110px)' }}
            >
              NÃO<br />
              SOMOS<br />
              UMA<br />
              AGÊNCIA<br />
              <span className="text-brand-orange">NORMAL.</span>
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="font-body text-white/70 text-lg font-light leading-relaxed mb-6">
              A maioria das agências faz tudo para todos. Nós escolhemos fazer muito bem para poucos — `marcas que querem crescer de verdade no mercado europeu.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed mb-6">
              Fundada em 2020, a Media Braza nasceu da frustração com agências que entregam relatórios bonitos mas resultados medíocres. Construímos um modelo diferente: equipa enxuta, responsabilidade real, acesso direto a quem decide.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed mb-10">
              Operamos do Porto, mas os nossos resultados chegam a Lisboa, Madrid, Berlim e São Paulo. A rede Braza Conecta — com 50+ criadores em 4 países —!é o nosso maior diferencial competitivo.
            </p>
            <a
              href="/sobre"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-body font-medium px-6 py-3 rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
            >
              Conhecer a equipa →
            </a>
          </div>
        </div>

        {/* Values row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            {
              title: 'Accountable',
              text: 'Cada euro investido tem dono. Relatórios com dados reais, sem métricas de vaidade.'
            },
            {
              title: 'Europeu',
              text: 'Entendemos o consumidor ibérico, alemã e além. Não adaptamos estratégias brasileiras — criamos estratégias europeias.'
            },
            {
              title: 'Parceiros',
              text: 'Não somos fornecedores. Somos o departamento de marketing que a tua empresa precisa, mas não tem internamente.'
            }
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
