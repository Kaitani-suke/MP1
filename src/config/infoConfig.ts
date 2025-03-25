export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Kaitani XU'
export const headline = 'Student in Jilin University.'
export const introduction =
  "Coucou Les Amis! My name is Kaitani XU. I'm from Jiangsu and an alumnus of JLU. "
export const email = 'None'
export const githubUsername = 'kaitani'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Kaitani XU. I'm from Jiangsu . I’ve been  since YearXXXX.",
  'Currently I am doing something.',
  "I started this blog to share the insights I learn every day. Most blogs focus on .",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: '',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: '',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
