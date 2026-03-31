'use client'

interface CTAProps {
  onOpenModal?: () => void
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section id="cta" data-theme="dark" className="bg-black py-28 relative overflow-hidden">
      {/* Background decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-display text-white/[0.025] uppercase leading-none text-center"
          style={{ fontSize: 'clamp(100px, 22vw, 320px)' }}
        >
          BRAZA
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8">
          Próximo passo
        </p>
        <h2
          className="font-display text-white mb-8 leading-none"
          style={{ fontSize: 'clamp(56px, 10vw, 140px)' }}
        >
          PRONTO PARA<br />
          <span className="text-brand-orange">CRESCER?</span>
        </h2>
        <p className="font-body text-white/50 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
          Conta-nos o teu projecto. Respondemos em menos de 24 horas com uma análise honesta do que podemos fazer pela tua marca.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="bg-brand-orange text-white font-body font-medium px-10 py-5 rounded-full hover:bg-brand-orange-light transition-colors text-base"
          >
            Iniciar projecto →
          </button>
          <a
            href="mailto:hello@mediabraza.com"
            className="font-body text-white/50 hover:text-white transition-colors text-sm"
          >
            ou envia um email →
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-3 gap-8">
          {[
            { label: 'Resposta em', value: '< 24h' },
            { label: 'Sem compromisso', value: '1ª call grátis' },
            { label: 'Baseados em', value: 'Porto, PT' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/25 mb-1">{label}</p>
              <p className="font-body text-white/60 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
