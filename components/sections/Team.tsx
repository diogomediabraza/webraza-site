const teamData = [
  { name: 'Diogo Braza',     role: 'Founder & CEO',       initial: 'DB', quote: 'Construindo marcas que dominam o digital desde 2020.' },
  { name: 'Ana Ferreira',    role: 'Head de Estratégia',   initial: 'AF', quote: 'Ex-agência internacional. Growth para o mercado ibérico.' },
  { name: 'Miguel Santos',   role: 'Head de Paid Media',   initial: 'MS', quote: '€2M+ em media budget gerido. Google & Meta certified.' },
  { name: 'Sofia Rodrigues', role: 'Head de Conteúdo',     initial: 'SR', quote: 'Directora de arte + redatora. Conteúdo que converte.' },
  { name: 'João Costa',      role: 'Head de Influencer',   initial: 'JC', quote: 'Rede de 50+ criadores em Portugal, Espanha e Alemanha.' },
  { name: 'Marta Lima',      role: 'Account Manager',      initial: 'ML', quote: 'Cada cliente sente que é o único cliente.' },
]

export default function Team() {
  return (
    <section id="equipa" data-theme="light" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/30 mb-4">A equipa</p>
            <h2 className="font-display text-black" style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}>
              AS PESSOAS<br />
              <span className="text-brand-orange">POR DETRÁS.</span>
            </h2>
          </div>
          <p className="font-body text-black/50 text-base max-w-sm leading-relaxed">
            Um time pequeno e altamente especializado. Sem estagiários a gerir as tuas campanhas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map(({ name, role, initial, quote }) => (
            <div
              key={name}
              className="group relative bg-black/[0.03] rounded-3xl p-8 hover:bg-black/[0.06] transition-colors overflow-hidden"
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center mb-6">
                <span className="font-display text-white text-2xl">{initial}</span>
              </div>

              {/* Info */}
              <h3 className="font-body text-black font-semibold text-lg mb-1">{name}</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-orange mb-4">{role}</p>
              <p className="font-body text-black/40 text-sm leading-relaxed">{quote}</p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-orange/5 rounded-tl-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
