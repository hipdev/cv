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
      'Took the marketing site from Webflow to a custom platform. Today, I build new experiences and use AI workflows and automation to shorten the path from idea to launch.',
    stack: 'Next.js · AI-assisted development · Automation',
  },
  {
    company: 'Pika',
    href: 'https://pika.art/',
    role: 'Senior full-stack product developer',
    period: 'Jan 2025 — Feb 2026',
    description:
      'Helped shape the web experience for Pika’s creative AI platform, turning product ideas into working features across the stack.',
    stack: 'Next.js · TypeScript',
  },
  {
    company: 'Goalimpact',
    href: 'https://www.goalimpact.com/',
    role: 'Senior full-stack product developer',
    period: 'Jan 2025 — Feb 2026',
    description:
      'Developed web features for Goalimpact’s football analytics platform, connecting the user experience with the systems behind it.',
    stack: 'Next.js · TypeScript',
  },
  {
    company: 'ARC Prize / ARC Arcade',
    href: 'https://tinloof.com/work/arc-prize-arc-arcade',
    role: 'Senior full-stack product developer · Collaboration',
    period: 'Collaboration',
    description:
      'Joined the ARC Arcade collaboration to bring an interactive web experience to life, contributing both interface work and application logic.',
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
      'Helped the team navigate a legacy codebase and move toward a modern stack while keeping existing systems running.',
    stack: 'PHP · Python · TypeScript · Swift · Java',
  },
  {
    company: 'Generation Esports',
    href: 'https://www.generationesports.com/',
    role: 'Senior engineering consultant',
    period: 'Started Oct 2023',
    description:
      'Served as a technical sounding board for the team, offering practical guidance on building and shipping with Next.js and Vercel.',
    stack: 'Next.js · Tailwind CSS · Prisma · Turborepo · Vercel',
  },
  {
    company: 'Favor',
    href: 'https://getfavor.app',
    role: 'Senior product developer',
    period: 'Apr — Aug 2023',
    description:
      'Teamed up with a collaborator in Germany to explore video-first dating, building the product across web and mobile.',
    stack: 'Next.js · React Native · NativeWind · DatoCMS · GraphQL',
  },
  {
    company: 'Wander',
    href: 'https://wander.com',
    role: 'Senior web developer · Tech lead',
    period: 'Oct 2021 — Apr 2023',
    description:
      'Led the engineering behind Wander’s website, bringing the web experience to life alongside a team I was proud to build with.',
    stack: 'Next.js · Tailwind CSS · DatoCMS · GraphQL',
  },
  {
    company: 'Tinta Love',
    role: 'Senior product developer',
    period: 'Mar — Oct 2021',
    description:
      'Created a shared digital space for tattoo artists and studios through a dedicated marketplace.',
    stack: 'Next.js · Tailwind CSS · Supabase',
  },
  {
    company: 'ModelNetwork SAS',
    role: 'Senior developer · Tech lead',
    period: '2020 — Aug 2021',
    description:
      'Took the technical lead on application development, working across the web interface and data layer.',
    stack: 'Next.js · Styled Components · FaunaDB',
  },
  {
    company: 'Mi Cupo',
    href: '/cupo.png',
    role: 'Senior product developer · Freelance',
    period: 'Freelance',
    description:
      'Turned a practical need during the pandemic into a reservation tool that helped local churches organize events and manage attendance.',
    stack: 'Next.js · Tailwind CSS',
  },
  {
    company: 'Sapco',
    href: 'https://sapco.co/',
    role: 'Senior full-stack developer',
    period: '2019',
    description:
      'Connected web interfaces with backend services, developing applications across the frontend and API layers.',
    stack: 'React · GraphQL Yoga · Prisma · MongoDB',
  },
  {
    company: 'Grandpa',
    role: 'Senior developer · Co-founder & CEO',
    period: '2012 — 2018',
    description:
      'Started a software agency with my brother, combining hands-on development with running the business. One of our products was Cottz, a platform for hospital quotes.',
    href: 'https://www.youtube.com/watch?v=Iu6VZ-5BYjE',
    stack: 'Product development · Team leadership',
  },
  {
    company: 'Las Fincas del Café',
    href: 'https://lasfincasdelcafe.com',
    role: 'Senior web developer',
    period: '2011',
    description:
      'My first step into professional web development: a website that grew into a lasting client relationship.',
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
