import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = localFont({
  src: '../public/fonts/inter-var-latin.woff2',
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://julianux.com'),
  title: { default: 'Julián David — Senior Product Engineer', template: '%s — Julián David' },
  description:
    'Senior product engineer and Convex Champion combining 15+ years of experience with AI to build quality web platforms and native apps.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Julián David — Senior Product Engineer',
    description:
      'Building quality products with AI, Next.js, TypeScript, Convex, Supabase, and React Native.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Julián David',
  },
  twitter: { card: 'summary' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, 'antialiased')} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.documentElement.dataset.theme = localStorage.getItem('cv-theme') === 'dark' ? 'dark' : 'light' } catch {}`,
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <div className="site-shell">
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
