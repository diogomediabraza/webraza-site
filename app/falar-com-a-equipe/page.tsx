'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactModal from '@/components/layout/ContactModal'

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header onOpenModal={() => setModalOpen(true)} />
      <main>
        <section className="bg-black min-h-screen flex items-center pt-32 pb-28" data-theme="dark">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-orange mb-8">
                  Vamos falar
                </p>
                <h1 className="font-display text-white leading-none mb-8"
                  style={{ fontSize: 'clamp(56px, 10vw, 130px)' }}
                >
                  FALAR<br />
                  COM A<br />
                  <span className="text-brand-orange">EQUIPA</span>
                </h1>
                <p className="font-body text-white/50 text-lg leading-relaxed mb-10 max-w-md">
                  Conta-nos o teu projecto. Respondemos em menos de 24 horas com uma anÃ¡lise honesta do que podemos fazer pela tua marca.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center">
                      <span className="text-brand-orange text-xs">âœ“</span>
                    </div>
                    <p className="font-body text-white/60 text-sm">Resposta em menos de 24 horas</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center">
                      <span className="text-brand-orange text-xs">âœ“</span>
                    </div>
                    <p className="font-body text-white/60 text-sm">1Âª call de diagnÃ³stico gratuita</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center">
                      <span className="text-brand-orange text-xs">âœ“</span>
                    </div>
                    <p className="font-body text-white/60 text-sm">Sem compromisso, sem pressÃ£o</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                  <h3 className="font-display text-white text-2xl mb-6">CONTACTM€DIRTCO</h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@mediabraza.com" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange font-mono text-xs">@</div>
                      <div><p className="font-mono text-[10px] uppercase text-white/30">Email</p><p className="font-body text-white group-hover:text-brand-orange transition-colors text-sm">hello@mediabraza.com</p></div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange font-mono text-xs">Porto</div>
                      <div><p className="font-mono text-[10px] uppercase text-white/30">Local</p><p className="font-body text-white/60 text-sm">Porto, Portugal</p></div>
                    </div>
                  </div>
                </div>
                <button onClick={() => setModalOpen(true)} className="w-full bg-brand-orange text-white font-body font-medium py-5 rounded-2xl hover:bg-brand-orange-light transition-colors text-base">Abrir formulÃ¡rio â†’</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
