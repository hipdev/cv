'use client'

export function PrintButton() {
  return (
    <button className="quiet-link print:hidden" onClick={() => window.print()} type="button">
      Print CV <span aria-hidden="true">↗</span>
    </button>
  )
}
