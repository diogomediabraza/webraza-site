'use client'

interface CTAProps {
  onOpenModal?: () => void
}

export default function CTA({ onOpenModal }: CTAProps) {
  return (
    <section id="cta" data-theme="dark" className="bg-black py-16 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span
          className="font-display text-white/[0.025] uppercase leading-none text-center"
          style={{ fontSize: 'clamp(80px, 22vw, 320px)' }}
        >
          BRAZA
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-6 sm:mb-8">
          Próximo passo
        </p>

        <h2
          className="font-display text-white mb-6 sm:mb-8 leading-none"
          style={{ fontSize: 'clamp(40px, 10vw, 140px)' }}
        >
          PRONTO PARA<br />
          <span className="text-brand-orange">CRESCER?</span>
        </h2>

        <p className="font-body text-white/50 text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-12 max-w-xl mx-auto">
          Conta-nos o teu projecto. Respondemos em menos de 24 horas com uma análise honesta de como o ecossistema WeBraza pode ajudar a tua marca a crescer.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="bg-brand-orange text-white font-body font-medium px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-brand-orange-light transition-colors text-base min-h-[48px] w-full sm:w-auto"
          >
            Iniciar projecto →
          </button>
          <a
            href="mailto:hello@webraza.com"
            className="font-body text-white/50 hover:text-white transition-colors text-sm py-2"
          >
            ou envia um email →
          </a>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            { label: 'Resposta em', value: '< 24h' },
            { label: 'Sem compromisso', value: '1ª call grátis' },
            { label: 'Baseados em', value: 'Porto, PT' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center sm:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/25 mb-1">{label}</p>
              <p className="font-body text-white/60 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
