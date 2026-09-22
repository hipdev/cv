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
              <p className="mt-1 text-secondary">Senior product engineer · Full-stack developer</p>
            </div>
          </div>
          <p className="intro-copy">
            I focus on <span className="text-foreground">building quality products</span>, bringing
            over 15 years of experience to every decision and working with AI tools like Codex,
            Claude, Claude Design, and Devin to take ideas from concept to launch.
          </p>
          <p className="mt-4 max-w-[65ch] text-secondary">
            I build web platforms with Next.js, TypeScript, Tailwind CSS, Convex, and Supabase, and
            native apps with React Native. My go-to choices are Better Auth for authentication and
            Stripe for payments.
          </p>
          <p className="mt-4 max-w-[65ch] text-secondary">
            As a Convex Champion, I’m passionate about Convex and reactive programming, an interest
            that started with Meteor.js in 2014.
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
            I work across the product: translating ideas into interfaces and connecting them to the
            systems underneath. I enjoy collaborating with teams to turn a product direction into
            working software.
          </p>
          <dl className="skill-list">
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
              <dd>Convex, Supabase, Node.js, PostgreSQL, GraphQL</dd>
            </div>
            <div>
              <dt>Auth & pay</dt>
              <dd>Better Auth, Stripe</dd>
            </div>
            <div>
              <dt>AI tools</dt>
              <dd>Codex, Claude, Claude Design, Devin</dd>
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
