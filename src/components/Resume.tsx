import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import './Resume.css'

const education = [
  { period: '2024–Atual', school: 'Ciência da Computação', course: 'Graduação em andamento' },
  { period: '2025–Atual', school: 'Desenvolvimento Web e Backend', course: 'APIs, banco de dados, autenticação, sistemas administrativos e aplicações web' },
  { period: '2026–Atual', school: 'Banco de Dados e Sistemas Corporativos', course: 'Oracle, PL/SQL, relatórios, regras de negócio e sistemas internos' },
]

const experience = [
  { year: '2026–Atual', role: 'Desenvolvedor / TI — Unimed', desc: 'Banco de dados, Oracle, PL/SQL, relatórios, sistemas internos, validações e apoio no desenvolvimento de soluções corporativas.' },
  { year: '2025', role: 'Sistema Administrativo — Vale Construtora', desc: 'Sistema interno para organização de informações, cadastros, dados operacionais e apoio à gestão administrativa.' },
  { year: '2025', role: 'Landing Page Comercial — Buque Maceió', desc: 'Landing page com foco em apresentação de produto, contato com clientes e presença digital.' },
]

const expTags = ['#Backend', '#BancoDeDados', '#APIs', '#SistemasInternos', '#DesenvolvimentoWeb', '#Arquitetura', '#Produto', '#Execução']
const software = ['VS Code', 'Git', 'GitHub', 'Figma', 'Postman', 'Docker', 'Oracle SQL Developer', 'DBeaver']
const codingSkills = [
  'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS', 'React',
  'Node.js', 'NestJS', 'PostgreSQL', 'Oracle', 'PL/SQL', 'REST APIs',
  'Authentication', 'Database Modeling', 'Business Rules', 'Admin Panels', 'Internal Systems', 'Responsive Layouts',
]
const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado' },
  { name: 'Francês', level: 'Básico' },
]
const activities = [
  { year: '2026', title: 'Sistemas internos e soluções corporativas', desc: 'Banco de dados, validações, relatórios, regras de negócio e apoio técnico em ambiente corporativo.' },
  { year: '2025', title: 'Projetos comerciais para empresas', desc: 'Landing pages, sistemas administrativos e soluções web voltadas para operação e organização de dados.' },
  { year: '2024–Atual', title: 'Ciência da Computação', desc: 'Estudo contínuo de programação, modelagem de dados, arquitetura de software e desenvolvimento web.' },
]
const hobbies = [
  { icon: 'music', label: 'Música', sub: 'Nu metal / indie / shoegaze' },
  { icon: 'art', label: 'Desenho', sub: 'Personagens / arte digital' },
  { icon: 'tech', label: 'Tecnologia', sub: 'Sistemas, backend e automação' },
  { icon: 'projects', label: 'Projetos próprios', sub: 'Ideias úteis saindo do papel' },
]

const hobbyImg = ['music', 'art', 'yarn', 'paw', 'cat']
const hobbySvg: Record<string, ReactNode> = {
  tech: (
    <>
      <polyline points="8 8 4 12 8 16" />
      <polyline points="16 8 20 12 16 16" />
      <line x1="13" y1="6" x2="11" y2="18" />
    </>
  ),
  projects: (
    <>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.5 1-2.1A6 6 0 0 0 12 3z" />
    </>
  ),
}

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.res-reveal').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="resume" aria-label="Currículo">
      <div className="resume-band">
        <span className="resume-ghost resume-ghost--top" aria-hidden="true">RESUME</span>
        <span className="resume-ghost resume-ghost--mid" aria-hidden="true">RESUME</span>
        <span className="resume-ghost resume-ghost--bottom" aria-hidden="true">RESUME</span>
        <div className="container resume-grid">
          {/* ---------- Left column ---------- */}
          <div className="resume-col">
            <div className="res-block res-reveal">
              <h2 className="res-title">Educação</h2>
              <ul className="timeline" role="list">
                {education.map((e) => (
                  <li key={e.period} className="timeline-item">
                    <span className="timeline-mark" aria-hidden="true">✦</span>
                    <span className="timeline-period">{e.period}</span>
                    <div>
                      <h3 className="timeline-title">{e.school}</h3>
                      <p className="timeline-desc">{e.course}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="exp-card res-reveal">
              <h2 className="res-title res-title-dark">Experiência</h2>
              <ul className="timeline" role="list">
                {experience.map((x) => (
                  <li key={x.year} className="timeline-item">
                    <span className="timeline-mark" aria-hidden="true">✦</span>
                    <span className="timeline-period">{x.year}</span>
                    <div>
                      <h3 className="timeline-title">{x.role}</h3>
                      <p className="timeline-desc">{x.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="exp-tags">
                {expTags.map((t) => <span key={t} className="exp-tag">{t}</span>)}
              </div>
            </div>
          </div>

          {/* ---------- Right column ---------- */}
          <div className="resume-col resume-col--right">
            <div className="res-block res-reveal">
              <h2 className="res-title">Skills Técnicas</h2>
              <div className="skills-grid">
                <div>
                  <h3 className="skills-sub">Software Skills</h3>
                  <div className="software-tiles" role="list" aria-label="Ferramentas">
                    {software.map((s) => (
                      <span key={s} className="software-tile" role="listitem">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="coding-block">
                  <h3 className="skills-sub">Coding Skills</h3>
                  <p className="coding-intro">Advanced knowledge in:</p>
                  <ul className="code-list" role="list">
                    {codingSkills.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container lang-section res-reveal">
        <h2 className="lang-heading">Idiomas</h2>
        <div className="lang-grid" role="list">
          {languages.map((l) => (
            <div key={l.name} className="lang-item" role="listitem">
              <span className="lang-name">{l.name}</span>
              <span className="lang-level">{l.level}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container extras-grid res-reveal">
        <img src="/leaf-2.png" className="deco-leaf extras-leaf" alt="" aria-hidden="true" />
        <div className="extras-activities">
          <h2 className="lang-heading">Atividades</h2>
          <ul className="timeline" role="list">
            {activities.map((a) => (
              <li key={a.year} className="timeline-item">
                <span className="timeline-mark" aria-hidden="true">✦</span>
                <span className="timeline-period">{a.year}</span>
                <div>
                  <h3 className="timeline-title">{a.title}</h3>
                  <p className="timeline-desc">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="extras-hobbies">
          <h2 className="lang-heading">Hobbies &amp; Interesses</h2>
          <div className="hobby-grid" role="list">
            {hobbies.map((h) => (
              <div key={h.label} className="hobby-item" role="listitem">
                {hobbyImg.includes(h.icon) ? (
                  <img className="hobby-icon" src={`/icons/${h.icon}.png`} alt="" aria-hidden="true" />
                ) : (
                  <svg
                    className="hobby-icon hobby-icon--svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {hobbySvg[h.icon]}
                  </svg>
                )}
                <span className="hobby-label">{h.label}</span>
                <span className="hobby-sub">{h.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
