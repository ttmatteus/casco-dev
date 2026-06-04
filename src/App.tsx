import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Resume from './components/Resume'
import Footer from './components/Footer'
import VLibras from './components/VLibras'
import AccessibilityBar from './components/AccessibilityBar'
import MorphBlob from './components/MorphBlob'
import anime from 'animejs'
import { shapes } from './components/morphShapes'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState(16)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 })
    lenisRef.current = lenis
    ;(window as unknown as { lenis: Lenis }).lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-high-contrast', String(highContrast))
  }, [highContrast])

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`
  }, [fontSize])

  // controlador único: move os dois blobs (verde + off-white) em sincronia,
  // morfando de forma a cada seção que entra no centro da viewport
  useEffect(() => {
    const paths = document.querySelectorAll('.morph-path')
    const svgs = document.querySelectorAll('.morph')
    if (!paths.length) return

    const startPulse = (pos: number) => {
      anime.remove(paths)
      anime({
        targets: paths,
        easing: 'linear',
        d: [
          { value: shapes[pos].pathAlt, duration: 1500 },
          { value: shapes[pos].path, duration: 1500 },
        ],
        loop: true,
        direction: 'alternate',
      })
    }

    const morphTo = (pos: number, animate = true) => {
      anime.remove(paths)
      anime({
        targets: paths,
        duration: animate ? 1000 : 1,
        easing: 'easeInOutQuad',
        d: shapes[pos].path,
        fill: shapes[pos].fill,
        opacity: shapes[pos].opacity,
        complete: () => startPulse(pos),
      })
      anime.remove(svgs)
      anime({
        targets: svgs,
        duration: animate ? 1000 : 1,
        easing: 'easeInOutQuad',
        scaleX: shapes[pos].scaleX,
        scaleY: shapes[pos].scaleY,
        translateX: shapes[pos].tx + 'px',
        translateY: shapes[pos].ty + 'px',
        rotate: shapes[pos].rotate + 'deg',
      })
    }

    morphTo(0, false)

    const selectors = ['.hero', '#about', '.resume-band', '.lang-section', '.extras-grid', '.footer']
    const sections = selectors
      .map((s) => document.querySelector(s))
      .filter((el): el is Element => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target)
            if (idx >= 0) morphTo(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))

    return () => {
      observer.disconnect()
      anime.remove(paths)
      anime.remove(svgs)
    }
  }, [])

  return (
    <>
      <a href="#main" className="skip-link">Pular para o conteúdo principal</a>
      <AccessibilityBar
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast(c => !c)}
        fontSize={fontSize}
        onIncrease={() => setFontSize(s => Math.min(s + 2, 24))}
        onDecrease={() => setFontSize(s => Math.max(s - 2, 12))}
      />
      <MorphBlob />
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Resume />
      </main>
      <Footer />
      <VLibras />
    </>
  )
}
