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

type WorkExperienceLocale = {
  title: string
  location: string
  description: string[]
}

type WorkExperience = {
  company: string
  start: string
  end: string
  link?: string
  projects?: WorkProject[]
  en: WorkExperienceLocale
  es: WorkExperienceLocale
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
    start: '2025',
    end: 'Present',
    projects: [
      {
        name: 'BizzyCar',
        link: 'https://www.bizzycar.com/',
      },
    ],
    link: 'https://setaworkshop.com/',
    en: {
      title: 'Ruby on Rails Developer',
      location: 'Uruguay (Remote)',
      description: [
        'Backend engineer on a high-scale automotive SaaS platform for dealerships.',
        'Architected and implemented a multi-queue communication ticket system.',
        'Developed agent performance metrics and analytics features.',
        'Built RESTful APIs with role-based access control.',
        'Implemented SMS campaign tooling, push notifications, and automated retention reporting.',
        'Reduced technical debt.',
      ],
    },
    es: {
      title: 'Desarrollador Ruby on Rails',
      location: 'Uruguay (Remoto)',
      description: [
        'Ingeniero backend en una plataforma SaaS automotriz de alta escala para concesionarias.',
        'Diseñé e implementé un sistema de tickets de comunicación con múltiples colas.',
        'Desarrollé métricas de desempeño de agentes y funciones de analítica.',
        'Construí APIs RESTful con control de acceso basado en roles.',
        'Implementé campañas de SMS, notificaciones push y reportes automáticos de retención.',
        'Reduje deuda técnica.',
      ],
    },
    id: 'work0',
  },
  {
    company: 'CustomDevs',
    start: '2024',
    end: '2025',
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
    link: 'https://www.customdevs.llc/es',
    en: {
      title: 'Ruby on Rails Developer',
      location: 'Argentina (Remote)',
      description: [
        'Design and maintain SaaS web applications using Ruby on Rails.',
        'Maintainer of a software system for independent yoga studios.',
        'Maintainer of a pricing software for HVAC, electrical, plumbing, and chimney contractors.',
        'Managed Heroku services, handling app upgrades and PostgreSQL version updates.',
      ],
    },
    es: {
      title: 'Desarrollador Ruby on Rails',
      location: 'Argentina (Remoto)',
      description: [
        'Diseño y mantengo aplicaciones web SaaS usando Ruby on Rails.',
        'Mantenedor de un sistema de software para estudios de yoga independientes.',
        'Mantenedor de un software de cotización para contratistas de HVAC, electricidad, plomería y chimeneas.',
        'Gestioné servicios en Heroku, incluyendo actualizaciones de la app y de versiones de PostgreSQL.',
      ],
    },
    id: 'work1',
  },
  {
    company: 'CodigoDelSur',
    start: '2022',
    end: '2024',
    projects: [
      {
        name: 'Caravela – Atlas',
        link: 'https://caravela.coffee/',
      },
    ],
    link: 'https://codigodelsur.com/',
    en: {
      title: 'Ruby on Rails Developer',
      location: 'Uruguay (Remote)',
      description: [
        'Maintainer of an inventory management system for a multinational coffee company.',
      ],
    },
    es: {
      title: 'Desarrollador Ruby on Rails',
      location: 'Uruguay (Remoto)',
      description: [
        'Mantenedor de un sistema de gestión de inventario para una empresa multinacional de café.',
      ],
    },
    id: 'work2',
  },
  {
    company: 'Snappler',
    start: '2021',
    end: '2022',
    projects: [
      {
        name: 'Banda Invitada',
        link: 'https://www.bandainvitada.com/',
      },
    ],
    link: 'https://snappler.com/',
    en: {
      title: 'Ruby on Rails Developer',
      location: 'Buenos Aires, Argentina',
      description: [
        'Development of Banda Invitada from scratch, a platform that connects venues and musicians in Buenos Aires.',
      ],
    },
    es: {
      title: 'Desarrollador Ruby on Rails',
      location: 'Buenos Aires, Argentina',
      description: [
        'Desarrollo de Banda Invitada desde cero, una plataforma que conecta venues y músicos en Buenos Aires.',
      ],
    },
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
