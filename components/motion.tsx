'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { useReducedMotion } from 'motion/react'
import { useAnimate } from 'motion/react-mini'

const easeOut = [0.215, 0.61, 0.355, 1] as const

// The server renders visible content; Motion progressively enhances it.
export function Entrance({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate<HTMLDivElement>()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion !== false) return
    const animation = animate(
      scope.current,
      { opacity: [0.75, 1], transform: ['translateY(6px)', 'translateY(0px)'] },
      { duration: 0.28, ease: easeOut },
    )
    return () => animation.complete()
  }, [animate, reduceMotion, scope])

  return (
    <div ref={scope} className="motion-content">
      {children}
    </div>
  )
}

export function EarlierExperience({ children }: { children: ReactNode }) {
  const details = useRef<HTMLDetailsElement>(null)
  const keyboardInteraction = useRef(false)
  const printing = useRef(false)
  const [scope, animate] = useAnimate<HTMLDivElement>()
  const reduceMotion = useReducedMotion()
  const animation = useRef<ReturnType<typeof animate> | null>(null)

  useEffect(() => {
    if (reduceMotion) animation.current?.complete()
  }, [reduceMotion])

  useEffect(() => {
    let wasOpen = false
    const beforePrint = () => {
      if (!details.current) return
      printing.current = true
      animation.current?.complete()
      wasOpen = details.current.open
      details.current.open = true
    }
    const afterPrint = () => {
      if (details.current) details.current.open = wasOpen
      printing.current = false
    }
    window.addEventListener('beforeprint', beforePrint)
    window.addEventListener('afterprint', afterPrint)
    return () => {
      window.removeEventListener('beforeprint', beforePrint)
      window.removeEventListener('afterprint', afterPrint)
    }
  }, [])

  return (
    <details
      ref={details}
      className="earlier-work"
      onToggle={(event) => {
        animation.current?.complete()
        if (
          !event.currentTarget.open ||
          reduceMotion !== false ||
          keyboardInteraction.current ||
          printing.current
        )
          return
        animation.current = animate(
          scope.current,
          { opacity: [0.5, 1], transform: ['translateY(-4px)', 'translateY(0px)'] },
          { duration: 0.2, ease: easeOut },
        )
      }}
    >
      <summary
        onClick={(event) => {
          keyboardInteraction.current = event.detail === 0
        }}
      >
        <span>Earlier experience</span>
        <span className="details-symbol" aria-hidden="true">
          +
        </span>
      </summary>
      <div ref={scope} className="motion-content">
        {children}
      </div>
    </details>
  )
}
