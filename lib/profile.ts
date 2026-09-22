export type Experience = {
  company: string
  href?: string
  role: string
  period: string
  description: string
  stack: string
}

export const recentExperience: Experience[] = [
  {
    company: 'Coverbase',
    href: 'https://www.coverbase.com/',
    role: 'Senior full-stack developer',
    period: 'Feb 2026 — Present',
    description:
      'Led the marketing website’s migration from Webflow to Next.js. Now evolving the platform and using AI workflows and automation to ship content and features faster.',
    stack: 'Next.js · AI-assisted development · Automation',
  },
  {
    company: 'Pika',
    href: 'https://pika.art/',
    role: 'Senior full-stack product developer',
    period: 'Jan 2025 — Feb 2026',
    description:
      'Contributed to Pika through full-stack product development, building web product experiences with Next.js and TypeScript.',
    stack: 'Next.js · TypeScript',
  },
  {
    company: 'Goalimpact',
    href: 'https://www.goalimpact.com/',
    role: 'Senior full-stack product developer',
    period: 'Jan 2025 — Feb 2026',
    description:
      'Worked with Goalimpact on full-stack product development, connecting user-facing interfaces and application logic with Next.js and TypeScript.',
    stack: 'Next.js · TypeScript',
  },
  {
    company: 'ARC Prize / ARC Arcade',
    href: 'https://tinloof.com/work/arc-prize-arc-arcade',
    role: 'Senior full-stack product developer · Collaboration',
    period: 'Collaboration',
    description:
      'Collaborated on ARC Arcade with a focus on full-stack product development, contributing to the web experience with Next.js and TypeScript.',
    stack: 'Next.js · TypeScript',
  },
]

export const earlierExperience: Experience[] = [
  {
    company: 'Blackjack Apprenticeship',
    href: 'https://www.blackjackapprenticeship.com/',
    role: 'Senior full-stack developer',
    period: 'Started Mar 2024',
    description:
      'Worked with the team to understand and maintain legacy systems and support their migration to a modern stack.',
    stack: 'PHP · Python · TypeScript · Swift · Java',
  },
  {
    company: 'Generation Esports',
    href: 'https://www.generationesports.com/',
    role: 'Senior engineering consultant',
    period: 'Started Oct 2023',
    description:
      'Advised the engineering team on Next.js and Vercel best practices through an hourly consulting engagement.',
    stack: 'Next.js · Tailwind CSS · Prisma · Turborepo · Vercel',
  },
  {
    company: 'Favor',
    href: 'https://getfavor.app',
    role: 'Senior product developer',
    period: 'Apr — Aug 2023',
    description:
      'Built a video dating app with a collaborator in Germany, working across the web and mobile experiences.',
    stack: 'Next.js · React Native · NativeWind · DatoCMS · GraphQL',
  },
  {
    company: 'Wander',
    href: 'https://wander.com',
    role: 'Senior web developer · Tech lead',
    period: 'Oct 2021 — Apr 2023',
    description:
      'Led development of the Wander website, working closely with the team to build and deliver the web experience.',
    stack: 'Next.js · Tailwind CSS · DatoCMS · GraphQL',
  },
  {
    company: 'Tinta Love',
    role: 'Senior product developer',
    period: 'Mar — Oct 2021',
    description: 'Built a marketplace for tattoo artists and studios.',
    stack: 'Next.js · Tailwind CSS · Supabase',
  },
  {
    company: 'ModelNetwork SAS',
    role: 'Senior developer · Tech lead',
    period: '2020 — Aug 2021',
    description: 'Led application development with Next.js and FaunaDB.',
    stack: 'Next.js · Styled Components · FaunaDB',
  },
  {
    company: 'Mi Cupo',
    href: '/cupo.png',
    role: 'Senior product developer · Freelance',
    period: 'Freelance',
    description:
      'Built an event reservation system that helped local churches manage attendance during the pandemic.',
    stack: 'Next.js · Tailwind CSS',
  },
  {
    company: 'Sapco',
    href: 'https://sapco.co/',
    role: 'Senior full-stack developer',
    period: '2019',
    description: 'Developed web applications with React and a GraphQL backend.',
    stack: 'React · GraphQL Yoga · Prisma · MongoDB',
  },
  {
    company: 'Grandpa',
    role: 'Senior developer · Co-founder & CEO',
    period: '2012 — 2018',
    description:
      'Co-founded a software agency with my brother. Together, we built Cottz, a platform for hospital quotes.',
    href: 'https://www.youtube.com/watch?v=Iu6VZ-5BYjE',
    stack: 'Product development · Team leadership',
  },
  {
    company: 'Las Fincas del Café',
    href: 'https://lasfincasdelcafe.com',
    role: 'Senior web developer',
    period: '2011',
    description: 'Built my first web project, beginning a long-term relationship with the client.',
    stack: 'PHP · MySQL',
  },
]

export type Talk = {
  title: string
  event?: string
  status: 'upcoming' | 'past'
  // Keep only the known precision: YYYY, YYYY-MM, or YYYY-MM-DD.
  date: string
  dateLabel: string
  href?: string
  description?: string
}

export const talks: Talk[] = [
  {
    title: 'Build at the speed of Convex: Real-time apps and the new development stack',
    event: 'BoyaConf 2026 · Tunja, Colombia',
    status: 'upcoming',
    date: '2026-11',
    dateLabel: 'Nov 20–21, 2026',
    href: 'https://boyaca-dev.org/conf/2026/speaker/julian-alvarez-david',
    description:
      'How Convex simplifies modern, real-time applications powered by AI. Exploring Components, plugins, and AI integrations through a live demo building and using Slidex.',
  },
  {
    title: 'Convex: Simplifying reactivity with React and React Native',
    event: 'MedellínJS',
    status: 'past',
    date: '2024-09-25',
    dateLabel: 'Sep 25, 2024',
    href: 'https://www.instagram.com/p/DATkTedxps5/',
  },
  {
    title: 'Meteor.js',
    status: 'past',
    date: '2014',
    dateLabel: '2014',
    description: 'An early talk on Meteor.js. No recording or event archive is available.',
  },
]
