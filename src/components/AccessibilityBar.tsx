import './AccessibilityBar.css'

interface Props {
  highContrast: boolean
  onToggleContrast: () => void
  fontSize: number
  onIncrease: () => void
  onDecrease: () => void
}

export default function AccessibilityBar({ highContrast, onToggleContrast, onIncrease, onDecrease }: Props) {
  return (
    <div className="a11y-bar" role="toolbar" aria-label="Opções de acessibilidade">
      <button
        className={`a11y-btn ${highContrast ? 'active' : ''}`}
        onClick={onToggleContrast}
        aria-pressed={highContrast}
        title="Alternar alto contraste"
      >
        <span aria-hidden="true">◑</span>
        <span className="sr-only">Alto contraste</span>
      </button>

      <button
        className="a11y-btn"
        onClick={onIncrease}
        aria-label="Aumentar tamanho do texto"
        title="Aumentar fonte"
      >
        <span aria-hidden="true">A+</span>
      </button>

      <button
        className="a11y-btn"
        onClick={onDecrease}
        aria-label="Diminuir tamanho do texto"
        title="Diminuir fonte"
      >
        <span aria-hidden="true">A-</span>
      </button>
    </div>
  )
}
