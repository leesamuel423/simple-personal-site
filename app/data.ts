type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type Education = {
  school: string
  degree: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'alki',
    description: 'algorithm learning x spaced repetition',
    link: 'https://alkiprep.com',
    video: '/alkiprep.png',
    id: 'project1',
  },
  {
    name: 'trydent',
    description: 'automating cypress e2e tests',
    link: 'https://github.com/oslabs-beta/trydent',
    video: '/trydent-gif.gif',
    id: 'project2',
  },
  {
    name: 'ai chess',
    description: 'chess ai utilizing minmax w/ alpha-beta pruning (fail-soft)',
    link: 'https://github.com/leesamuel423/ai-chess',
    video: '/ai-chess.gif',
    id: 'project3',
  },
  {
    name: 'strava graph',
    description: 'strava heatmap for github profiles',
    link: 'https://github.com/leesamuel423/StravaGraph',
    video: '/strava-graph.png',
    id: 'project4',
  },
  {
    name: 'running gait analysis',
    description: "video recognition software for analyzing one's running gait",
    link: 'https://github.com/ErPang97/RunningGaitAnalysis',
    video: '/running-gait-analysis.gif',
    id: 'project5',
  },
  {
    name: 'message queue visualization',
    description: 'visualization of message queues for educational purposes',
    link: 'https://github.com/leesamuel423/message-queue-vis',
    video: '/message-queue-vis-gif.gif',
    id: 'project6',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'google',
    title: 'incoming software engineering intern',
    start: 'oct 2025',
    end: 'jan 2026',
    id: 'work1',
  },
  {
    company: 'starbourne labs',
    title: 'full stack software engineer',
    start: 'aug 2024',
    end: 'present',
    id: 'work2',
  },
  {
    company: 'codesmith',
    title: 'engineering instructor',
    start: 'jul 2024',
    end: 'present',
    id: 'work4',
  },
  {
    company: 'alki',
    title: 'founder',
    start: 'jul 2023',
    end: 'present',
    id: 'work3',
  },
  {
    company: 'meta',
    title: 'production engineering fellow',
    start: 'jun 2024',
    end: 'sep 2024',
    id: 'work5',
  },
  {
    company: 'cs engineering',
    title: 'software engineer',
    start: 'jun 2023',
    end: 'jun 2024',
    id: 'work6',
  },
  {
    company: 'oslabs',
    title: 'software engineer',
    start: 'mar 2023',
    end: 'jun 2023',
    id: 'work7',
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'university of pennsylvania',
    degree: 'masters of computer science',
    start: '2024',
    end: 'present',
    id: 'school1',
  },
  {
    school: 'mcmaster university',
    degree: 'bachelors of health sciences honours',
    start: '2017',
    end: '2021',
    id: 'school2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'practicing safe tests',
    description: 'march 17, 2023 • automating e2e testing with trydent',
    link: '/blog/practicing-safe-tests',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'linkedin',
    link: 'https://www.linkedin.com/in/leesamuel423/',
  },
  {
    label: 'github',
    link: 'https://github.com/leesamuel423',
  },
]

export const EMAIL = 'leesamuel423@gmail.com'
