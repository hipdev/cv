# Julián David — CV

A personal CV and writing site built with Next.js, React, and TypeScript. The interface uses a flat layout, local Inter font, Tailwind CSS, and small Motion animations. Every page is prerendered; no CMS, API tokens, or database are required.

## Local development

Use Node.js 22.12 or later and Bun 1.3.9.

```sh
bun install --frozen-lockfile
bun run dev
```

Open [localhost:3000](http://localhost:3000).

```sh
bun run format       # Format with Oxfmt
bun run lint         # Lint with Oxlint; warnings fail the check
bun run type-check   # Check TypeScript
bun run check        # Lint, formatting, and types
bun run build        # Build and prerender all pages
bun run start        # Serve the production build
```

The project uses Oxfmt and Oxlint, with no ESLint or Prettier configuration or direct dependency. `lib/utils.ts` re-exports `cn` from `cnfast`. Dependency versions are pinned and `bun.lock` is committed.

## Update the CV

Edit `lib/profile.ts` for experience and talks, and `app/page.tsx` for the introduction and other personal copy.

The CV positions Julián as an AI Engineer and Senior Full-Stack Engineer, covering both building AI features and using AI throughout daily development. The introduction, skills, and page metadata share this focus.

Experience was reconciled with LinkedIn on November 11, 2026. Coverbase is the current role, starting in February 2026, with core-product work and Claude API integrations alongside the marketing platform. Pika is identified as work through Tinloof (January 2025–February 2026). Wander is highlighted in selected work. LinkedIn confirms Blackjack Apprenticeship as March–August 2024, Generation Esports as October 2023–July 2025, and Grandpa as January 2013–December 2017; it also supplies the Alquilesufinca.com and ICM Software entries. Existing Goalimpact and ARC collaborations and other CV-only experience are retained. ARC has no confirmed date.

Herdr, Engram, and Workers AI are included from the owner’s account of their current workflow, alongside Claude Code and Codex. Keep tool names aligned with the owner’s usage; do not infer additional tools, metrics, or project outcomes.

To add a talk, append an entry to the `talks` array:

```ts
{
  title: 'Your talk title',
  event: 'Event name',
  status: 'past', // 'upcoming' for a future appearance
  date: '2026-09-22',
  dateLabel: 'Sep 22, 2026',
  href: 'https://example.com/recording', // Optional
}
```

Talks are grouped into upcoming and past appearances. Preserve date precision: use `2014` when only the year is known, rather than inventing a day. BoyaConf uses the conference dates (November 20–21, 2026), not a confirmed session slot. The BoyaConf and MedellínJS titles are translated into English from the supplied event announcements. The Meteor.js entry notes that no recording or event archive is available. Update an appearance’s status after the event.

## Write a post with reusable HTML

Posts are React server components containing semantic HTML in `content/posts/`. No MDX compiler or HTML string injection is needed.

1. Create `content/posts/your-post.tsx`:

```tsx
export const post = {
  slug: 'your-post',
  title: 'Your post title',
  description: 'A short description for the index and search results.',
}

export default function YourPost() {
  return (
    <>
      <p>Your opening paragraph.</p>
      <h2>A section title</h2>
      <p>More content, including reusable React components if needed.</p>
    </>
  )
}
```

2. Import the component and metadata in `lib/posts.ts`, and add `{ ...post, Content: YourPost }` to `posts`. Use a unique, URL-safe slug.
3. Run `bun run check` and `bun run build`.

The registry drives the homepage index, static routes, metadata, and sitemap. Files that are not registered remain unpublished. The shared article layout lives in `app/writing/[slug]/page.tsx`; typography lives in `.prose` in `app/globals.css`.

The first post, “Learning by teaching,” adapts the personal story from the previous CV. The old DatoCMS integration and `/view/[id]` routes have been removed. Existing CMS posts were not exported; migrating any old published URLs requires their content and IDs.

## Motion and accessibility

Motion's `useAnimate` mini API enhances visible server-rendered HTML. The introduction moves 6px over 280ms; opening earlier experience fades and moves the content 4px over 200ms. Both use an ease-out curve. No height animation, scroll-triggered reveal, or continuous animation is used.

Reduced-motion preferences disable the animations. Keyboard activation opens the native disclosure immediately. The native `<details>` remains usable without JavaScript. The print action expands earlier experience and restores its previous state afterward; print styles remove navigation and motion.

## Header and themes

The header becomes fixed when its original slot leaves the viewport. An IntersectionObserver changes its state only at that boundary; Motion adds a 200ms fade and 8px entrance. The reserved slot prevents layout shifts, and anchor offsets keep section headings clear of the fixed bar. Reduced-motion preferences disable the entrance.

The header’s sun/moon button switches between light and dark themes. Light is the default. The choice is stored locally and applied before paint on subsequent visits, without animating theme colors. The toggle also works when browser storage is unavailable. Print styles always use a light background and hide the header.

## Design references

- [Adil Basri](https://www.imadil.dev/): restrained personal introduction and direct routes to work and contact.
- [Matt Gabor](https://mattgabor.me/): concise full-stack positioning and relevant experience.
- [Christian Niles](https://nerdyc.com/): clear responsibilities and career history.
- [Paco Coursey](https://paco.me/): typography-led presentation and simple navigation.

The implementation follows the local Emil design engineering and web animation skills: restrained motion, visible focus states, touch targets, reduced-motion support, and readable typography.
