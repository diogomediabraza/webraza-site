'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/layout/ContactModal'
import Hero from '@/components/sections/Hero'
import Cases from '@/components/sections/Cases'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import Insights from '@/components/sections/Insights'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        <Hero        onOpenModal={() => setModalOpen(true)} />
        <Cases />
        <Stats />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Insights />
        <CTA         onOpenModal={() => setModalOpen(true)} />
      </main>

      <Footer />

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
