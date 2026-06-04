import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import gsap from 'gsap'
import type Lenis from 'lenis'
import './Navbar.css'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    )
  }, [])

  // some ao rolar pra baixo, reaparece ao subir
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 120)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // scroll suave (Lenis) ao clicar nos links
  const handleNav = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    const lenis = (window as unknown as { lenis?: Lenis }).lenis
    if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 })
    else target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header ref={navRef} className={`navbar ${hidden ? 'navbar--hidden' : ''}`} role="banner">
      <nav className="nav-inner container" aria-label="Navegação principal">
        <a href="#main" className="nav-logo" aria-label="Casco — início" onClick={(e) => handleNav(e, '#main')}>
          Casco<span>.</span>
        </a>
        <ul className="nav-links" role="list">
          <li><a href="#about" onClick={(e) => handleNav(e, '#about')}>Sobre</a></li>
          <li><a href="#services" onClick={(e) => handleNav(e, '#services')}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => handleNav(e, '#contact')}>Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
