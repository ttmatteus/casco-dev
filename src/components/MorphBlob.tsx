import { INITIAL_PATH } from './morphShapes'
import './MorphBlob.css'

/**
 * Blob único (base no demo "Morphing Background Shapes" — Codrops).
 * Fica fixo acima dos fundos das seções e abaixo dos textos. O controlador
 * (no App) ajusta forma + posição/escala + cor a cada seção que entra no
 * centro da viewport — um blob só que se ajusta enquanto a página desce.
 */
export default function MorphBlob() {
  return (
    <div className="morph-wrap" aria-hidden="true">
      <svg className="morph" viewBox="0 0 1400 770" preserveAspectRatio="xMidYMid slice">
        <path className="morph-path" d={INITIAL_PATH} />
      </svg>
    </div>
  )
}
