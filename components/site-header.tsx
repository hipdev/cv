'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useAnimate } from 'motion/react-mini'
import { useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

const themeKey = 'cv-theme'
const themeEvent = 'cv-theme-change'

function readTheme() {
  return document.documentElement.dataset.theme === 'dark'
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener(themeEvent, callback)
  return () => window.removeEventListener(themeEvent, callback)
}

function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeToTheme, readTheme, () => false)

  function toggleTheme() {
    const root = document.documentElement
    const theme = readTheme() ? 'light' : 'dark'
    root.classList.add('theme-changing')
    root.dataset.theme = theme
    try {
      localStorage.setItem(themeKey, theme)
    } catch {
      // The switch still works when storage is unavailable.
    }
    window.dispatchEvent(new Event(themeEvent))
    requestAnimationFrame(() =>
      requestAnimationFrame(() => root.classList.remove('theme-changing')),
    )
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Dark theme"
      aria-pressed={dark}
      onClick={toggleTheme}
    >
      <svg
        className="theme-moon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
      </svg>
      <svg
        className="theme-sun"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    </button>
  )
}

export function SiteHeader() {
  const slot = useRef<HTMLDivElement>(null)
  const [fixed, setFixed] = useState(false)
  const [scope, animate] = useAnimate<HTMLElement>()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const element = slot.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      setFixed(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!fixed || reduceMotion !== false) return
    const animation = animate(
      scope.current,
      { opacity: [0.6, 1], transform: ['translateY(-8px)', 'translateY(0px)'] },
      { duration: 0.2, ease: [0.215, 0.61, 0.355, 1] },
    )
    return () => animation.complete()
  }, [fixed, reduceMotion, scope, animate])

  return (
    <div ref={slot} className="header-slot print:hidden">
      <header ref={scope} className={cn('header-wrap', fixed && 'header-fixed')}>
        <div className="site-header">
          <Link href="/" aria-label="Julián David, home" className="wordmark">
            jd<span className="text-muted">.</span>
          </Link>
          <div className="header-actions">
            <nav aria-label="Main navigation">
              <Link className="quiet-link" href="/#work">
                Work
              </Link>
              <Link className="quiet-link" href="/#writing">
                Writing
              </Link>
              <Link className="quiet-link" href="/#talks">
                Talks
              </Link>
              <a className="quiet-link" href="mailto:julianfullstackdev@gmail.com">
                Contact <span aria-hidden="true">↗</span>
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  )
}
