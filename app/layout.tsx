import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/inter-var-latin.woff2',
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://julianux.com'),
  title: { default: 'Julián David — Product Engineer', template: '%s — Julián David' },
  description:
    'Full-stack product developer working with Next.js and TypeScript. Selected work, writing, and talks by Julián David.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Julián David — Product Engineer',
    description: 'Building thoughtful web products with Next.js and TypeScript.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Julián David',
  },
  twitter: { card: 'summary' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, 'antialiased')}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="site-shell">
          <header className="site-header print:hidden">
            <Link href="/" aria-label="Julián David, home" className="wordmark">
              jd<span className="text-muted">.</span>
            </Link>
            <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6">
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
          </header>
          {children}
          <footer className="site-footer print:hidden">
            <p>Julián David</p>
            <div className="flex gap-5">
              <a className="quiet-link" href="https://github.com/hipdev/cv">
                Source <span aria-hidden="true">↗</span>
              </a>
              <a className="quiet-link" href="#main">
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
