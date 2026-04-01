'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Operações', href: '/servicos' },
  { label: 'Cases', href: '/cases' },
  { label: 'Insights', href: '/insights' },
]

interface HeaderProps {
  onOpenModal?: () => void
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 40)
      const sections = document.querySelectorAll('[data-theme]')
      let currentTheme = 'dark'
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom >= 80) {
          currentTheme = section.getAttribute('data-theme') || 'dark'
        }
      })
      setIsDark(currentTheme === 'dark')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={`
          fixed top-5 left-1/2 -translate-x-1/2 z-50
          flex items-center justify-between
          w-[calc(100%-40px)] max-w-[920px] px-5 py-3 rounded-[35px]
          transition-all duration-300
          ${scrolled ? 'bg-black/60 backdrop-blur-[16px] shadow-lg shadow-black/20' : 'bg-transparent'}
        `}
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            className={`font-display text-2xl tracking-wide transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            WE<span className="text-brand-orange">BRAZA</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm transition-colors duration-300 hover:text-brand-orange ${
                isDark ? 'text-white/80' : 'text-black/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={onOpenModal}
          className="hidden md:flex items-center gap-2 bg-brand-orange text-white font-body text-sm font-medium px-5 py-2.5 rounded-full hover:bg-brand-orange-light transition-colors duration-200"
        >
          Falar com a equipa
        </button>

        <button
          className={`md:hidden p-2 transition-colors ${isDark ? 'text-white' : 'text-black'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div
        className={`
          fixed inset-0 z-40 bg-black flex flex-col items-center justify-center
          transition-all duration-500
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl text-white hover:text-brand-orange transition-colors"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onOpenModal?.() }}
            className="mt-4 bg-brand-orange text-white font-body font-medium px-8 py-4 rounded-full text-lg hover:bg-brand-orange-light transition-colors"
          >
            Falar com a equipa
          </button>
        </nav>
      </div>
    </>
  )
}
