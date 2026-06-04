import './Footer.css'
import { useMagnetic } from '../hooks/useMagnetic'

export default function Footer() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.5)

  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-cta">
          <p className="footer-eyebrow">Vamos conversar?</p>
          <h2 className="footer-title">
            Seu próximo sistema<br />
            começa com uma boa ideia<br />
            e uma execução melhor ainda.
          </h2>
          <a
            ref={ctaRef}
            href="mailto:matteusgn@gmail.com"
            className="btn-primary footer-btn"
            aria-label="Enviar e-mail para matteusgn@gmail.com"
          >
            Entrar em contato
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Casco. Todos os direitos reservados.
          </p>
          <nav aria-label="Links do rodapé">
            <ul className="footer-links" role="list">
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Projetos</a></li>
              <li>
                <a
                  href="https://github.com/ttmatteus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub (abre em nova aba)"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="mailto:matteusgn@gmail.com" aria-label="Enviar e-mail para matteusgn@gmail.com">
                  E-mail ↗
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
