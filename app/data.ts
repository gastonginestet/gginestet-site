type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkProject = {
  name: string
  link: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  location?: string
  link?: string
  description?: string[]
  projects?: WorkProject[]
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Seta Workshop',
    title: 'Backend Software Engineer (Ruby on Rails)',
    start: '2025',
    end: 'Present',
    description: [
      'Backend engineer on a high-scale automotive SaaS platform for dealerships.',
      'Architected and implemented a multi-queue communication ticket system.',
      'Developed agent performance metrics and analytics features.',
      'Built RESTful APIs with role-based access control.',
      'Implemented SMS campaign tooling, push notifications, and automated retention reporting.',
      'Reduced technical debt by removing legacy payment integration (Chargify).',
    ],
    projects: [
      {
        name: 'BizzyCar',
        link: 'https://www.bizzycar.com/',
      },
    ],
    location: 'Uruguay (Remote)',
    link: 'https://setaworkshop.com/',
    id: 'work0',
  },
  {
    company: 'CustomDevs',
    title: 'Ruby on Rails Developer',
    start: '2024',
    end: '2025',
    description: [
      'Design and maintain SaaS web applications using Ruby on Rails.',
      'Maintainer of a software system for independent yoga studios.',
      'Maintainer of a pricing software for HVAC, electrical, plumbing, and chimney contractors.',
      'Managed Heroku services, handling app upgrades and PostgreSQL version updates.',
    ],
    projects: [
      {
        name: 'The New Flat Rate',
        link: 'https://thenewflatrate.com/',
      },
      {
        name: 'Tula Yoga Studio',
        link: 'https://tulayoga.studio/',
      },
      {
        name: 'OSP School',
        link: 'https://ospschool.com/',
      },
    ],
    location: 'Argentina (Remote)',
    link: 'https://www.customdevs.llc/es',
    id: 'work1',
  },
  {
    company: 'CodigoDelSur',
    title: 'Ruby on Rails Developer',
    start: '2022',
    end: '2024',
    description: [
      'Maintainer of an inventory management system for a multinational coffee company.',
    ],
    projects: [
      {
        name: 'Caravela – Atlas',
        link: 'https://caravela.coffee/',
      },
    ],
    location: 'Uruguay (Remote)',
    link: 'https://codigodelsur.com/',
    id: 'work2',
  },
  {
    company: 'Snappler',
    title: 'Ruby on Rails Developer',
    start: '2021',
    end: '2022',
    description: [
      'Development of Banda Invitada from scratch, a platform that connects venues and musicians in Buenos Aires.',
    ],
    projects: [
      {
        name: 'Banda Invitada',
        link: 'https://www.bandainvitada.com/',
      },
    ],
    location: 'Buenos Aires, Argentina',
    link: 'https://snappler.com/',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/gastonginestet',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gastonginestet',
  },
  {
    label: 'Medium',
    link: 'https://medium.com/@gastonginestet',
  },
]

export const EMAIL = 'gastonauginestet@gmail.com'
