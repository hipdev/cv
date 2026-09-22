import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="py-20">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight">Page not found</h1>
      <p className="mt-4 text-secondary">This page may have moved, or the link may be incorrect.</p>
      <Link className="text-link mt-6" href="/">
        ← Back to the CV
      </Link>
    </main>
  )
}
