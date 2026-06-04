import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Efeito "botão magnético" com GSAP.
 *
 * O elemento é puxado suavemente em direção ao cursor enquanto o mouse passa
 * por cima e volta à posição original ao sair, usando `gsap.quickTo` (spring
 * interpolado). É uma manipulação de objeto via GSAP — leve e performática
 * (atualiza só `x`/`y` em transform).
 *
 * Respeita `prefers-reduced-motion`: se o usuário pedir menos movimento, o
 * efeito é desativado.
 *
 * @param strength  intensidade da atração (0–1). Padrão 0.4.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.4) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const relX = e.clientX - (rect.left + rect.width / 2)
      const relY = e.clientY - (rect.top + rect.height / 2)
      xTo(relX * strength)
      yTo(relY * strength)
    }

    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      gsap.killTweensOf(el)
    }
  }, [strength])

  return ref
}
