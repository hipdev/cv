import type { Experience } from '@/lib/profile'

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="experience-list">
      {items.map((item) => (
        <li className="experience-row" key={item.company}>
          <p className="date-label">{item.period}</p>
          <div>
            <h3 className="font-medium text-foreground">
              {item.href ? (
                <a className="text-link" href={item.href}>
                  {item.company}{' '}
                  <span aria-hidden="true" className="link-arrow">
                    ↗
                  </span>
                </a>
              ) : (
                item.company
              )}
            </h3>
            <p className="mt-1 text-sm text-muted">{item.role}</p>
            <p className="mt-3 text-secondary">{item.description}</p>
            <p className="mt-3 text-xs text-muted">{item.stack}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
