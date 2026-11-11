import Image from 'next/image'
import { Entrance, EarlierExperience } from '@/components/motion'
import Link from 'next/link'
import { ExperienceList } from '@/components/experience'
import { PrintButton } from '@/components/print-button'
import { earlierExperience, recentExperience, talks } from '@/lib/profile'
import { posts } from '@/lib/posts'

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <Entrance>
        <section className="intro" aria-labelledby="intro-title">
          <div className="flex items-center gap-5">
            <Image src="/me.jpg" alt="" width={64} height={64} priority className="portrait" />
            <div>
              <h1
                id="intro-title"
                className="text-[2rem] font-medium tracking-[-0.055em] sm:text-4xl"
              >
                Julián David
              </h1>
              <p className="mt-1 text-secondary">AI Engineer · Senior Full-Stack Engineer</p>
            </div>
          </div>
          <p className="intro-copy">
            I’m an <span className="text-foreground">AI Engineer who builds with AI every day</span>
            . With 15+ years in software, I build AI-powered products and work with AI as my
            right-hand partner, from exploring an idea to shipping it.
          </p>
          <p className="mt-4 max-w-[65ch] text-secondary">
            My focus is AI agents, MCP servers, and LLM integrations, backed by deep experience in
            Next.js, TypeScript, Python, and full-stack product development. At Coverbase, I build
            AI features with the Claude API, Next.js, and Convex.
          </p>
          <p className="mt-4 max-w-[65ch] text-secondary">
            I use Claude Code, Codex, Herdr, and Engram in my daily workflow, alongside Workers AI
            for AI-powered applications. As a Convex Champion, I share a passion for reactive
            software that started with Meteor.js in 2014.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href="mailto:julianfullstackdev@gmail.com" className="text-link">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/hipdev" className="quiet-link">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://linkedin.com/in/hipdev" className="quiet-link">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <PrintButton />
          </div>
          <p className="hidden print:mt-4 print:block">
            julianfullstackdev@gmail.com · julianux.com
          </p>
        </section>
      </Entrance>
      <section id="work" className="section" aria-labelledby="work-title">
        <div className="section-heading">
          <h2 id="work-title">Selected work</h2>
          <span className="section-note">Experience & collaborations</span>
        </div>
        <ExperienceList items={recentExperience} />
        <EarlierExperience>
          <ExperienceList items={earlierExperience} />
        </EarlierExperience>
      </section>

      <section className="section section-grid" aria-labelledby="approach-title">
        <h2 id="approach-title">How I work</h2>
        <div className="space-y-5 text-secondary">
          <p>
            AI is part of how I think and build: I use it to explore solutions, plan changes, write
            and review code, debug, and automate repetitive work. I give agents context and
            direction, then review and validate their output with the same engineering judgment I
            bring to the rest of the product.
          </p>
          <p>
            I also build AI into products through agents, MCP servers, and LLM integrations. My
            background in software architecture, scaling products, and leading engineering teams
            helps me connect those capabilities to useful, working software.
          </p>
          <dl className="skill-list">
            <div>
              <dt>AI</dt>
              <dd>AI agents, MCP servers, LLM integrations, Claude API, Workers AI</dd>
            </div>
            <div>
              <dt>AI tools</dt>
              <dd>Claude Code, Codex, Herdr, Engram, Claude Design, Devin</dd>
            </div>
            <div>
              <dt>Web</dt>
              <dd>Next.js, React, TypeScript, Tailwind CSS</dd>
            </div>
            <div>
              <dt>Mobile</dt>
              <dd>React Native</dd>
            </div>
            <div>
              <dt>Backend</dt>
              <dd>Node.js, Python, FastAPI, Django, GraphQL</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>Convex, PostgreSQL, Supabase, MongoDB</dd>
            </div>
            <div>
              <dt>Auth & pay</dt>
              <dd>Better Auth, Stripe</dd>
            </div>
            <div>
              <dt>English</dt>
              <dd>C1 · Advanced</dd>
            </div>
            <div>
              <dt>Ship</dt>
              <dd>Vercel, Git, Playwright, Figma</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="writing" className="section section-grid" aria-labelledby="writing-title">
        <h2 id="writing-title">Writing</h2>
        <div>
          {posts.map((post) => (
            <article key={post.slug}>
              <Link className="text-link font-medium" href={`/writing/${post.slug}`}>
                {post.title} <span aria-hidden="true">↗</span>
              </Link>
              <p className="mt-2 text-secondary">{post.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="talks" className="section section-grid" aria-labelledby="talks-title">
        <h2 id="talks-title">Talks</h2>
        <div className="space-y-6">
          <p className="text-secondary">
            As a Convex Champion, I share my enthusiasm for Convex and reactive software through
            talks and live demos.
          </p>
          {(['upcoming', 'past'] as const).map((status) => (
            <div key={status}>
              <h3 className="mb-3 text-xs font-medium text-muted">
                {status === 'upcoming' ? 'Upcoming' : 'Past talks'}
              </h3>
              <ul className="space-y-6">
                {talks
                  .filter((talk) => talk.status === status)
                  .map((talk) => (
                    <li key={`${talk.date}-${talk.title}`}>
                      <h4 className="font-medium">
                        {talk.href ? (
                          <a className="text-link" href={talk.href}>
                            {talk.title} <span aria-hidden="true">↗</span>
                          </a>
                        ) : (
                          talk.title
                        )}
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        {talk.event && <>{talk.event} · </>}
                        <time dateTime={talk.date}>{talk.dateLabel}</time>
                      </p>
                      {talk.description && (
                        <p className="mt-2 text-secondary">{talk.description}</p>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-grid" aria-labelledby="about-title">
        <h2 id="about-title">A little about me</h2>
        <div className="space-y-4 text-secondary">
          <p>
            I learned to code in 2011 while working as a motorcycle delivery rider. Since then, I’ve
            built products, co-founded a software agency, and helped family and friends find their
            way into programming.
          </p>
          <p>
            Learning and teaching have been a constant throughout my career. I still make time to
            teach programming for free.
          </p>
        </div>
      </section>
      <section className="section section-grid" aria-labelledby="contact-title">
        <h2 id="contact-title">Let’s connect</h2>
        <div>
          <p className="text-secondary">Have a product in mind, or just want to say hello?</p>
          <a className="text-link mt-3 break-all" href="mailto:julianfullstackdev@gmail.com">
            julianfullstackdev@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  )
}
