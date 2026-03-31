import Link from 'next/link'

const services = [
  'Tráfego Pago',
  'Influencer Marketing',
  'Gestão de Redes',
  'Produção de Conteúdo',
  'Branding',
  'Consultoria',
]

const company = [
  { label: 'Sobre nós', href: '/sobre' },
  { label: 'Casos de sucesso', href: '/cases' },
  { label: 'Insights', href: '/insights' },
  { label: 'Braza Conecta', href: '/braza-conecta' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white" data-theme="dark">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="md:col-span-1">
            <span className="font-display text-3xl tracking-wide">
              MEDIA<span className="text-brand-orange">BRAZA</span>
            </span>
            <p className="font-body text-white/50 text-sm mt-4 leading-relaxed">
              Agência de marketing digital baseada no Porto.<br />
              Conectando marcas aos consumidores europeus.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com/mediabraza" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-orange hover:text-brand-orange transition-colors text-xs font-mono"
              >IG</a>
              <a href="https://linkedin.com/company/mediabraza" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-orange hover:text-brand-orange transition-colors text-xs font-mono"
              >LI</a>
              <a href="https://tiktok.com/@mediabraza" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-orange hover:text-brand-orange transition-colors text-xs font-mono"
              >TK</a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/40 mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/servicos" className="font-body text-sm text-white/60 hover:text-brand-orange transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/40 mb-6">Empresa</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-body text-sm text-white/60 hover:text-brand-orange transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-white/40 mb-6">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@mediabraza.com" className="font-body text-sm text-white/60 hover:text-brand-orange transition-colors">
                  hello@mediabraza.com
                </a>
              </li>
              <li>
                <a href="tel:+351900000000" className="font-body text-sm text-white/60 hover:text-brand-orange transition-colors">
                  +351 900 000 000
                </a>
              </li>
              <li className="font-body text-sm text-white/40">
                Porto, Portugal
              </li>
            </ul>
            <Link
              href="/falar-com-a-equipe"
              className="inline-flex mt-6 items-center gap-2 bg-brand-orange text-white font-body text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brand-orange-light transition-colors"
            >
              Iniciar projecto →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Media Braza / We Braza Group. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/politica-privacidade" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
