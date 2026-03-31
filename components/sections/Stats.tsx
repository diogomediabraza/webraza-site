'use client'

import { useRef, useEffect, useState } from 'react'

const statsData = [
  { value: 50, suffix: '+', label: 'Criadores na rede Braza Conecta', sublabel: 'Portugal, Espanha, Alemanha e Brasil' },
  { value: 16, suffix: '+', label: 'Marcas activas em simultâneo', sublabel: 'Gestão permanente, não projectos one-off' },
  { value: 4,  suffix: '', label: 'Anos no mercado europeu', sublabel: 'Desde 2020, Porto → Lisboa → Europa' },
  { value: 98, suffix: '%', label: 'Taxa de retenção de clientes', sublabel: 'A maioria dos nossos clientes estão há +1 ano' },
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
      // Ease out expo
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
    <section
      ref={sectionRef}
      id="numeros"
      data-theme="light"
      className="bg-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map(({ value, suffix, label, sublabel }) => (
            <div key={label} className="group">
              <div className="mb-4 pb-4 border-b border-black/10">
                <span className="font-display text-black leading-none"
                  style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}
                >
                  <CountUp target={value} suffix={suffix} active={active} />
                </span>
              </div>
              <p className="font-body text-black/80 font-medium text-base leading-snug mb-2">
                {label}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/30">
                {sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
