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
    name: 'Trydent',
    description: 'Automating Cypress E2E tests',
    link: 'https://github.com/oslabs-beta/trydent',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Ai-Chess',
    description: 'Chess Ai utilizing minmax w/ alpha-beta pruning (fail-soft)',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'StravaGraph',
    description: 'Strava heatmap for GitHub profiles',
    link: 'https://github.com/leesamuel423/StravaGraph',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project3',
  },
  {
    name: 'RunningGaitAnalysis',
    description: "Video recognition software for analyzing one's running gait",
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project4',
  },
  {
    name: 'Message Queue Vis',
    description: 'Visualization of message queues for educational purposes',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Google',
    title: 'Incoming Software Engineering Intern',
    start: 'Oct 2025',
    end: 'Jan 2026',
    id: 'work1',
  },
  {
    company: 'Starbourne Labs',
    title: 'Full Stack Software Engineer',
    start: 'Aug 2024',
    end: 'Present',
    id: 'work2',
  },
  {
    company: 'Codesmith',
    title: 'Engineering Instructor',
    start: 'Jul 2024',
    end: 'Present',
    id: 'work4',
  },
  {
    company: 'Alki',
    title: 'Founder / Software Engineer',
    start: 'Jul 2023',
    end: 'Present',
    id: 'work3',
  },
  {
    company: 'Meta',
    title: 'Production Engineering Fellow',
    start: 'Jun 2024',
    end: 'Sep 2024',
    id: 'work5',
  },
  {
    company: 'CS Engineering',
    title: 'Software Engineer',
    start: 'Jun 2023',
    end: 'Jun 2024',
    id: 'work6',
  },
  {
    company: 'OSLabs',
    title: 'Software Engineer',
    start: 'Mar 2023',
    end: 'Jun 2023',
    id: 'work7',
  },
]

export const EDUCATION: Education[] = [
  {
    school: 'University of Pennsylvania',
    degree: 'Masters of Computer Science',
    start: '2024',
    end: 'Present',
    id: 'school1',
  },
  {
    school: 'McMaster University',
    degree: 'Bachelors of Health Sciences Honours',
    start: '2017',
    end: '2021',
    id: 'school2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/leesamuel423',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/leesamuel423/',
  },
]

export const EMAIL = 'leesamuel423@gmail.com'
