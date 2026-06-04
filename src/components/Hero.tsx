import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const iamRef = useRef<HTMLSpanElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)
  const socialsRef = useRef<HTMLElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // fade in suave da imagem, com leve subida
    gsap.fromTo(portraitRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: 'power2.out',
        delay: 0.35,
      }
    )

    const tl = gsap.timeline({ delay: 0.4 })

    tl.fromTo(iamRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    )
      .fromTo(nameRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
        '-=0.5'
      )
      .fromTo(roleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(tagsRef.current ? tagsRef.current.children : [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(socialsRef.current ? socialsRef.current.children : [],
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=1'
      )
  }, [])

  return (
    <section className="hero" aria-labelledby="hero-name">
      <span className="sr-only" role="img" aria-label="Ilustração de Casco, desenvolvedor backend" />

      <div ref={portraitRef} className="hero-portrait" aria-hidden="true" />

      <nav ref={socialsRef} className="hero-socials" aria-label="Redes sociais">
        <a href="https://github.com/ttmatteus" target="_blank" rel="noopener noreferrer" aria-label="GitHub (abre em nova aba)">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.555-1.11-4.555-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
          </svg>
        </a>
        <a href="mailto:matteusgn@gmail.com" aria-label="Enviar e-mail">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
      </nav>

      <div className="container hero-content">
        <div className="hero-text">
          <span ref={iamRef} className="hero-iam">I am</span>
          <h1 ref={nameRef} id="hero-name" className="hero-name">Casco</h1>
          <p ref={roleRef} className="hero-role">backend developer / systems builder</p>

          <div ref={tagsRef} className="hero-tags" role="list" aria-label="Diferenciais">
            <span role="listitem">+3 anos de experiência</span>
            <span role="listitem">Pensamento técnico e estratégico</span>
            <span role="listitem">Sistemas úteis, código limpo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
