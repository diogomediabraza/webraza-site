import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Insights from '@/components/sections/Insights'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Artigos sobre marketing digital, influencer marketing, tráfego pago e estratégia de marca para o mercado europeu.',
}

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-black pt-40 pb-12" data-theme="dark">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8">
              Marketing que educa
            </p>
            <h1 className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(60px, 12vw, 160px)' }}
            >
              INSIGHTS
            </h1>
          </div>
        </section>
        <Insights />
      </main>
      <Footer />
    </>
  )
}
