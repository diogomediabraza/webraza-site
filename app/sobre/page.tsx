import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Team from '@/components/sections/Team'

export const metadata: Metadata = {
  title: 'Sobre nós',
  description: 'Conheça a equipa Media Braza. Agência de marketing digital no Porto com foco em resultados reais para o mercado europeu.',
}

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-black pt-40 pb-28" data-theme="dark">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8">Quem somos</p>
            <h1 className="font-display text-white leading-none mb-12" style={{ fontSize: 'clamp(60px, 12vw, 160px)' }}>SOBRE A<br/><span className="text-brand-orange">MEDIA BRAZA</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <p className="font-body text-white/70 text-xl font-light leading-relaxed">Somos uma agência de marketing digital baseada no Porto.</p>
              <p className="font-body text-white/40 text-base leading-relaxed">Fundada em 2020, crescemos de consultoria one-man para uma equipa de 6 especialistas.</p>
            </div>
          </div>
        </section>
        <Team />
      </main>
      <Footer />
    </>
  )
}
