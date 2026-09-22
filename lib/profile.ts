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
    company: 'Pika',
    href: 'https://pika.art/',
    role: 'Full-stack product development',
    period: 'Jan 2025 — Feb 2026',
    description:
      'Contributed to Pika through full-stack product development, building web product experiences with Next.js and TypeScript.',
    stack: 'Next.js · TypeScript',
  },
  {
    company: 'Goalimpact',
    href: 'https://www.goalimpact.com/',
    role: 'Full-stack product development',
    period: 'Jan 2025 — Feb 2026',
    description:
      'Worked with Goalimpact on full-stack product development, connecting user-facing interfaces and application logic with Next.js and TypeScript.',
    stack: 'Next.js · TypeScript',
  },
  {
    company: 'ARC Prize / ARC Arcade',
    href: 'https://tinloof.com/work/arc-prize-arc-arcade',
    role: 'Product development collaboration',
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
    role: 'Engineering consultant',
    period: 'Started Oct 2023',
    description:
      'Advised the engineering team on Next.js and Vercel best practices through an hourly consulting engagement.',
    stack: 'Next.js · Tailwind CSS · Prisma · Turborepo · Vercel',
  },
  {
    company: 'Favor',
    href: 'https://getfavor.app',
    role: 'Product developer',
    period: 'Apr — Aug 2023',
    description:
      'Built a video dating app with a collaborator in Germany, working across the web and mobile experiences.',
    stack: 'Next.js · React Native · NativeWind · DatoCMS · GraphQL',
  },
  {
    company: 'Wander',
    href: 'https://wander.com',
    role: 'Lead web developer',
    period: 'Oct 2021 — Apr 2023',
    description:
      'Led development of the Wander website, working closely with the team to build and deliver the web experience.',
    stack: 'Next.js · Tailwind CSS · DatoCMS · GraphQL',
  },
  {
    company: 'Tinta Love',
    role: 'Product developer',
    period: 'Mar — Oct 2021',
    description: 'Built a marketplace for tattoo artists and studios.',
    stack: 'Next.js · Tailwind CSS · Supabase',
  },
  {
    company: 'ModelNetwork SAS',
    role: 'Lead developer',
    period: '2020 — Aug 2021',
    description: 'Led application development with Next.js and FaunaDB.',
    stack: 'Next.js · Styled Components · FaunaDB',
  },
  {
    company: 'Mi Cupo',
    href: '/cupo.png',
    role: 'Freelance product developer',
    period: 'Freelance',
    description:
      'Built an event reservation system that helped local churches manage attendance during the pandemic.',
    stack: 'Next.js · Tailwind CSS',
  },
  {
    company: 'Sapco',
    href: 'https://sapco.co/',
    role: 'Full-stack developer',
    period: '2019',
    description: 'Developed web applications with React and a GraphQL backend.',
    stack: 'React · GraphQL Yoga · Prisma · MongoDB',
  },
  {
    company: 'Grandpa',
    role: 'Co-founder & CEO',
    period: '2012 — 2018',
    description:
      'Co-founded a software agency with my brother. Together, we built Cottz, a platform for hospital quotes.',
    href: 'https://www.youtube.com/watch?v=Iu6VZ-5BYjE',
    stack: 'Product development · Team leadership',
  },
  {
    company: 'Las Fincas del Café',
    href: 'https://lasfincasdelcafe.com',
    role: 'Web developer',
    period: '2011',
    description: 'Built my first web project, beginning a long-term relationship with the client.',
    stack: 'PHP · MySQL',
  },
]

export type Talk = {
  title: string
  event: string
  date: string
  href?: string
}

// Add confirmed talks here. Use an ISO date (YYYY-MM-DD).
export const talks: Talk[] = []
