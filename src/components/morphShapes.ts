// Formas do blob único (base no demo "Morphing Background Shapes" — Codrops).
// path/pathAlt morfam entre si (pulso); as formas morfam entre si por seção,
// ajustando forma + posição/escala + cor conforme o scroll desce.
const PATH_A = 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z'
const PATH_A_ALT = 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z'
const PATH_B = 'M 415.6,206.3 C 407.4,286.6 438.1,373.6 496.2,454.8 554.3,536.1 497,597.2 579.7,685.7 662.4,774.1 834.3,731.7 898.5,653.4 962.3,575 967.1,486 937.7,370 909.3,253.9 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z'
const PATH_B_ALT = 'M 415.6,206.3 C 407.4,286.6 415.5,381.7 473.6,462.9 531.7,544.2 482.5,637.6 579.7,685.7 676.9,733.8 826.2,710.7 890.4,632.4 954.2,554 926.8,487.6 937.7,370 948.6,252.4 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z'

const GREEN = '#9aa472'
const WHITE = '#e6e6e6'

export interface Shape {
  path: string
  pathAlt: string
  scaleX: number
  scaleY: number
  rotate: number
  tx: number
  ty: number
  fill: string
  opacity: number
}

// uma forma por seção, na ordem do scroll
export const shapes: Shape[] = [
  // Hero — menor e à esquerda (atrás do "I am Casco")
  { path: PATH_A, pathAlt: PATH_A_ALT, scaleX: 0.85, scaleY: 0.95, rotate: 30, tx: -380, ty: -30, fill: GREEN, opacity: 0.3 },
  // Sobre
  { path: PATH_B, pathAlt: PATH_B_ALT, scaleX: 1.5, scaleY: 1.6, rotate: 70, tx: 0, ty: -80, fill: GREEN, opacity: 0.3 },
  // Faixa marrom — branco
  { path: PATH_A, pathAlt: PATH_A_ALT, scaleX: 1.9, scaleY: 1.2, rotate: 0, tx: 0, ty: 60, fill: WHITE, opacity: 0.5 },
  // Idiomas
  { path: PATH_B, pathAlt: PATH_B_ALT, scaleX: 1.5, scaleY: 2, rotate: -25, tx: 0, ty: -40, fill: GREEN, opacity: 0.3 },
  // Atividades
  { path: PATH_A, pathAlt: PATH_A_ALT, scaleX: 1.6, scaleY: 1.2, rotate: 30, tx: 0, ty: 40, fill: GREEN, opacity: 0.3 },
  // Footer
  { path: PATH_B, pathAlt: PATH_B_ALT, scaleX: 1.4, scaleY: 1.3, rotate: 10, tx: 220, ty: 0, fill: GREEN, opacity: 0.3 },
]

export const INITIAL_PATH = PATH_A
