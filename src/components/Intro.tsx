import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Intro.css'

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.intro-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="intro" aria-labelledby="intro-title">
      <div className="container intro-grid">
        <div className="intro-left">
          <h2 id="intro-title" className="intro-hello intro-reveal">
            Olá,<br />
            <span className="intro-name">Eu sou o Casco!</span>
          </h2>
          <p className="intro-bio intro-reveal">
            Sou desenvolvedor backend e estudante de Ciência da Computação, baseado em Maceió,
            Brasil. Tenho +3 anos de experiência construindo sistemas web, APIs e soluções
            internas que conectam regra de negócio, banco de dados e experiência do usuário —
            com foco em código organizado, escalável e útil de verdade.
          </p>
          <a
            href="mailto:matteusgn@gmail.com"
            className="intro-link intro-reveal"
            aria-label="Enviar e-mail para matteusgn@gmail.com"
          >
            <span className="intro-link-icon" aria-hidden="true">@</span>
            matteusgn@gmail.com
          </a>
        </div>

        <div className="intro-right intro-reveal">
          <div className="intro-card">
            <div className="intro-photo">
              <img src="/foto.png" alt="Foto de Casco" />
            </div>
            <span className="intro-badge">Brasileiro</span>

            <div className="intro-contact" aria-label="Informações de contato">
              <h3 className="intro-contact-title">Contato</h3>
              <ul role="list">
                <li><span aria-hidden="true">◆</span> Maceió, Brasil</li>
                <li><span aria-hidden="true">✉</span> matteusgn@gmail.com</li>
                <li><span aria-hidden="true">{'</>'}</span> github.com/ttmatteus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
