import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Services from '@/components/sections/Services'

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Tráfego pago, influencer marketing, gestão de redes sociais, produção de conteúdo, branding e consultoria estratégica — a Media Braza.',
}

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-black pt-40 pb-8" data-theme="dark">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8">O que fazemos</p>
            <h1 className="font-display text-white" style={{ fontSize: 'clamp(60px, 12vw, 160px)' }}>
              SERVIÇOS
            </h1>
          </div>
        </section>
        <Services />
      </main>
      <Footer />
    </>
  )
}
