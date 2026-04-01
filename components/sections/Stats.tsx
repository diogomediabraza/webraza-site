'use client'

import { useRef, useEffect, useState } from 'react'

const statsData = [
  {
    value: 5,
    suffix: '',
    label: 'Operações integradas',
    sublabel: 'MediaBraza, WeDigital, Connecta, Braphic, EmBraza',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    value: 50,
    suffix: '+',
    label: 'Criadores na rede Braza Connecta',
    sublabel: 'Portugal, Espanha, Alemanha e Brasil',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    value: 16,
    suffix: '+',
    label: 'Marcas activas em simultâneo',
    sublabel: 'Gestão permanente, não projectos one-off',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    value: 4,
    suffix: '',
    label: 'Anos no mercado',
    sublabel: 'Desde 2020, baseados no Porto',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(2, -10 * progress)
      setCurrent(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCurrent(target)
    }
    requestAnimationFrame(tick)
  }, [active, target])
  return <>{current}{suffix}</>
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="numeros" data-theme="light" className="bg-white py-16 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.map(({ value, suffix, label, sublabel, icon }) => (
            <div key={label} className="group">
              <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-black/10">
                {/* ── Icon ── */}
                <div className="mb-3 sm:mb-4">
                  {icon}
                </div>
                <span
                  className="font-display text-black leading-none"
                  style={{ fontSize: 'clamp(40px, 8vw, 96px)' }}
                >
                  <CountUp target={value} suffix={suffix} active={active} />
                </span>
              </div>
              <p className="font-body text-black/80 font-medium text-sm sm:text-base leading-snug mb-1 sm:mb-2">
                {label}
              </p>
              <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-black/30">
                {sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
