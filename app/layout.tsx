import type { Metadata } from 'next'

// These styles apply to every route in the application
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
