import Link from 'next/link'

const insightsData = [
  {
    slug: 'influencer-marketing-2025',
    category: 'Influencer',
    title: 'Influencer Marketing em 2025: o que funciona no mercado europeu',
    excerpt: 'Micro-creators com audiências de 10K–100K entregam ROI 6x superior. Veja os dados.',
    readTime: '7 min',
    date: 'Mar 2025',
  },
  {
    slug: 'meta-ads-sem-desperdicio',
    category: 'Tráfego Pago',
    title: 'Como cortámos o CPL em 60% sem aumentar o budget de Meta Ads',
    excerpt: 'A maior parte do budget é desperdiçado nos primeiros 3 dias. Como evitar.',
    readTime: '5 min',
    date: 'Fev 2025',
  },
  {
    slug: 'marca-portuguesa-europa',
    category: 'Estratégia',
    title: 'Como expandir uma marca portuguesa para Espanha e Alemanha',
    excerpt: 'Não é só traduzir o conteúdo. Adaptação cultural, creators locais e entrada por cidade.',
    readTime: '8 min',
    date: 'Jan 2025',
  },
]

export default function Insights() {
  return (
    <section id="insights" data-theme="light" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 gap-8 flex-wrap">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/30 mb-4">Insights</p>
            <h2 className="font-display text-black" style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}>
              DO QUE<br />
              <span className="text-brand-orange">FALAMOS.</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="font-body text-sm text-black/50 hover:text-brand-orange transition-colors shrink-0"
          >
            Ver todos os artigos →
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightsData.map((article, i) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group block"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-black/5 rounded-2xl mb-5 overflow-hidden relative">
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(135deg, #FF5800 0%, #1A1A1A 100%)'
                      : i === 1
                      ? 'linear-gradient(135deg, #1A1A1A 0%, #FF5800 100%)'
                      : 'linear-gradient(135deg, #FF7A2F 0%, #000 100%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-white/20 text-7xl">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-orange">
                  {article.category}
                </span>
                <span className="font-mono text-[10px] text-black/30">{article.date} · {article.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-body text-black font-semibold text-lg leading-snug mb-2 group-hover:text-brand-orange transition-colors">
                {article.title}
              </h3>
              <p className="font-body text-black/40 text-sm leading-relaxed">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
