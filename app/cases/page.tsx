import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Cases from '@/components/sections/Cases'

export const metadata: Metadata = {
  title: 'Cases',
  description: 'Resultados reais, clientes reais.',
}

export default function CasesPage() {
  return (
    <>
      <Header />
      <main><Cases /></main>
      <Footer />
    </>
  )
}
