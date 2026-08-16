export type Lang = 'en' | 'es'

export type TranslationSet = {
  kicker: string
  role: string
  tagline: string
  freelanceBadge: string
  fact1: string
  fact2: string
  ctaGetInTouch: string
  ctaGetInTouchSubject: string
  ctaDownloadCV: string
  stackHeading: string
  workHeading: string
  atLabel: string
  offClockHeading: string
  offClockText: string
  communityHeading: string
  communityTalkLabel: string
  freelanceHeading: string
  freelanceText: string
  freelanceCta: string
  freelanceCtaSending: string
  formNameLabel: string
  formEmailLabel: string
  formMessageLabel: string
  formSuccess: string
  formError: string
  canHelpWith: string
  freelanceServices: string[]
  connectHeading: string
  connectText: string
}

export const TRANSLATIONS: Record<Lang, TranslationSet> = {
  en: {
    kicker: "Hi, I'm",
    role: 'Software Engineer',
    tagline:
      'I build and maintain systems, from architecture to production, with strong experience in Ruby on Rails, and lean on AI tooling to ship faster without cutting corners.',
    freelanceBadge: 'Available for freelance work',
    fact1: 'Ruby on Rails · 5+ years',
    fact2: 'Buenos Aires, Argentina — Remote',
    ctaGetInTouch: 'Get in touch',
    ctaGetInTouchSubject: 'Hi Gaston',
    ctaDownloadCV: 'Download CV',
    stackHeading: 'Stack',
    workHeading: 'Work Experience',
    atLabel: 'at',
    offClockHeading: 'Off the Clock',
    offClockText:
      "When I'm not writing code, I'm out hunting for a good coffee spot, going for a run, or picking up a new sport like snowboarding or surfing (or trying to not fall). Currently training for an upcoming trail race and a half marathon.",
    communityHeading: 'Community Contributions',
    communityTalkLabel: 'Talk:',
    freelanceHeading: 'Wanna work with me?',
    freelanceText:
      'Open to freelance projects in general, from new builds to modernizing legacy systems, with AI-assisted workflows to move fast without sacrificing quality. Drop me a note below.',
    freelanceCta: 'Send',
    freelanceCtaSending: 'Sending…',
    formNameLabel: 'Name',
    formEmailLabel: 'Email',
    formMessageLabel: 'Tell me about your project',
    formSuccess: "Thanks! I'll get back to you soon.",
    formError: 'Something went wrong. Please try again or email me directly.',
    canHelpWith: 'Can help with',
    freelanceServices: [
      'New web applications, from scratch',
      'Modernizing legacy codebases, any stack',
      'API design and third-party integrations',
      'Performance, scaling, and technical debt cleanup',
      'AI-assisted development workflows',
    ],
    connectHeading: 'Connect',
    connectText: 'Feel free to contact me at',
  },
  es: {
    kicker: 'Hola, soy',
    role: 'Ingeniero de Software',
    tagline:
      'Construyo y mantengo sistemas, desde la arquitectura hasta producción, con sólida experiencia en Ruby on Rails, apoyándome en herramientas de IA para avanzar más rápido sin resignar calidad.',
    freelanceBadge: 'Disponible para trabajo freelance',
    fact1: 'Ruby on Rails · 5+ años',
    fact2: 'Buenos Aires, Argentina — Remoto',
    ctaGetInTouch: 'Contactarme',
    ctaGetInTouchSubject: 'Hola Gaston',
    ctaDownloadCV: 'Descargar CV',
    stackHeading: 'Stack',
    workHeading: 'Experiencia laboral',
    atLabel: 'en',
    offClockHeading: 'Tiempo libre',
    offClockText:
      'Cuando no estoy programando, estoy buscando un buen lugar para tomar café, saliendo a correr, o probando un deporte nuevo como snowboard o surf (tratando de no caerme de la tabla). Actualmente estoy entrenando para una carrera de trail y una media maratón.',
    communityHeading: 'Contribuciones a la comunidad',
    communityTalkLabel: 'Charla:',
    freelanceHeading: '¿Querés trabajar conmigo?',
    freelanceText:
      'Estoy abierto a proyectos freelance en general: desarrollos nuevos o modernización de sistemas existentes, usando herramientas de IA para avanzar rápido sin resignar calidad. Dejame tu mensaje abajo.',
    freelanceCta: 'Enviar',
    freelanceCtaSending: 'Enviando…',
    formNameLabel: 'Nombre',
    formEmailLabel: 'Email',
    formMessageLabel: 'Contame sobre tu proyecto',
    formSuccess: 'Gracias, te voy a responder pronto.',
    formError: 'Algo salió mal. Probá de nuevo o escribime directamente.',
    canHelpWith: 'Puedo ayudarte con',
    freelanceServices: [
      'Aplicaciones web nuevas, desde cero',
      'Modernización de sistemas legacy, en cualquier stack',
      'Diseño de APIs e integraciones con terceros',
      'Performance, escalabilidad y reducción de deuda técnica',
      'Flujos de desarrollo asistidos por IA',
    ],
    connectHeading: 'Conectemos',
    connectText: 'Escribime cuando quieras a',
  },
}
