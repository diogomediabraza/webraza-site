'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  'Tráfego Pago',
  'Influencer Marketing',
  'Gestão de Redes Sociais',
  'Produção de Conteúdo',
  'Branding & Identidade',
  'Consultoria Estratégica',
  'Não tenho a certeza ainda',
]

const budgets = [
  'Até €500/mês',
  '€500 – €1.500/mês',
  '€1.500 – €5.000/mês',
  'Acima de €5.000/mês',
  'Projecto único',
]

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formState, setFormState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    service: '', budget: '', message: ''
  })

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed')
      setFormState('success')
    } catch {
      setFormState('error')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal window */}
      <div className="relative bg-[#1F1F20] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl shadow-black/50">

        {/* Header */}
        <div className="sticky top-0 bg-[#1F1F20] flex items-start justify-between p-8 pb-4 z-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand-orange mb-2">
              Novo projecto
            </p>
            <h2 className="font-display text-4xl text-white">
              VAMOS FALAR?
            </h2>
          </div>
          <button
            onClick={onClose}
            className="mt-1 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-brand-orange hover:text-brand-orange transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {formState === 'success' ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-orange/20 border border-brand-orange flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-orange text-2xl">✓</span>
              </div>
              <h3 className="font-display text-3xl text-white mb-3">MENSAGEM ENVIADA</h3>
              <p className="font-body text-white/50">
                Recebemos o teu contacto. A equipa vai responder em menos de 24 horas.
              </p>
              <button
                onClick={onClose}
                className="mt-8 bg-brand-orange text-white font-body font-medium px-8 py-3 rounded-full hover:bg-brand-orange-light transition-colors"
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 block mb-2">
                    Nome *
                  </label>
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="O teu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 block mb-2">
                    Email *
                  </label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    placeholder="email@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 block mb-2">
                    Empresa
                  </label>
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    placeholder="Nome da empresa"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 block mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="+351 900 000 000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-orange transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 block mb-2">
                  Serviço de interesse
                </label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                >
                  <option value="" className="bg-[#1F1F20]">Seleccionar serviço</option>
                  {services.map(s => (
                    <option key={s} value={s} className="bg-[#1F1F20]">{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 block mb-2">
                  Budget mensal
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {budgets.map(b => (
                    <button
                      key={b} type="button"
                      onClick={() => setForm(prev => ({ ...prev, budget: b }))}
                      className={`px-3 py-2 rounded-xl font-body text-xs border transition-colors ${
                        form.budget === b
                          ? 'bg-brand-orange border-brand-orange text-white'
                          : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 block mb-2">
                  Conta-nos mais (opcional)
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={3} placeholder="Descreve o projecto, os objetivos ou qualquer detalhe relevante..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                />
              </div>

              {formState === 'error' && (
                <p className="font-body text-sm text-red-400">
                  Ocorreu um erro. Por favor, tenta novamente ou envia um email para hello@mediabraza.com
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'sending'}
                className="w-full bg-brand-orange text-white font-body font-medium py-4 rounded-xl hover:bg-brand-orange-light transition-colors disabled:opacity-60 text-base"
              >
                {formState === 'sending' ? 'A enviar...' : 'Enviar mensagem →'}
              </button>

              <p className="font-mono text-[10px] text-center text-white/20">
                Os teus dados são tratados de acordo com o RGPD.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
