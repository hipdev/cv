import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

// These styles apply to every route in the application
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Julián David - CV',
  description: 'Julián David CV - This is my CV',
  category: 'CV',
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    'CV',
    'Julián David',
    'Julián David CV',
    'Julián David LinkedIn',
    'Julián David GitHub',
    'Hip Dev Github',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body>{children}</body>
    </html>
  )
}
