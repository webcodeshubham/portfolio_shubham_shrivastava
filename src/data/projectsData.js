export const projects = [
  {
    id: 1,
    title: 'Config-Driven UI Builder Platform',
    description:
      'Dynamic UI rendering engine that generates interfaces from configuration schemas. Enables rapid prototyping and consistent UI delivery without manual component wiring.',
    features: [
      'Component registry with dynamic resolution',
      'Recursive renderer for nested layouts',
      'Conditional rendering via schema logic',
      'Modular state architecture with Context API',
    ],
    tech: ['React', 'JavaScript', 'Context API', 'CSS Modules'],
    github: 'https://github.com/webcodeshubham/config-driven-ui-builder',
    live: 'https://config-driven-ui-builder.vercel.app/',
    image: null,
  },
  {
    id: 2,
    title: 'Performance-Optimized Data Explorer Dashboard',
    description:
      'Analytics dashboard engineered for efficiently rendering and exploring large datasets with real-time filtering, sorting, and rich visualizations.',
    features: [
      'Virtualized tables for 10k+ row datasets',
      'Memoization-driven performance optimization',
      'Advanced filtering, sorting & pagination',
      'Chart.js visualizations with live data binding',
    ],
    tech: ['React', 'Vite', 'REST APIs', 'Chart.js'],
    github: 'https://github.com/webcodeshubham/performance-data-dashboard',
    live: 'https://performance-data-dashboard.vercel.app/',
    image: null,
  },
];

export const timelineData = [
  {
    year: '2022',
    role: 'Web Developer',
    company: 'Tech IS India',
    points: [
      'Built responsive web interfaces with pixel-perfect precision',
      'Integrated RESTful APIs for dynamic, data-driven UI',
      'Collaborated with cross-functional teams on product delivery',
    ],
  },
  {
    year: '2023 — Present',
    role: 'Software Developer',
    company: 'ExtraMarks Education',
    points: [
      'Developed reusable React component libraries at scale',
      'Integrated complex REST API architectures for education platform',
      'Optimized UI rendering performance by 40%+',
      'Led frontend architecture decisions for key product modules',
    ],
  },
  {
    year: 'Mentorship',
    role: 'Instructor / MERN Mentor',
    company: 'Community & Freelance',
    points: [
      'Guided students on full-stack project architecture',
      'Helped debug complex frontend problems and review code',
      'Mentored on React best practices and modern tooling',
    ],
  },
];

export const skills = {
  'Frontend Engineering': [
    { name: 'React', level: 95 },
    { name: 'JavaScript ES6+', level: 92 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'TypeScript', level: 78 },
    { name: 'Next.js', level: 72 },
  ],
  'Performance & Architecture': [
    { name: 'Component Architecture', level: 93 },
    { name: 'Performance Optimization', level: 88 },
    { name: 'State Management', level: 90 },
    { name: 'REST API Integration', level: 92 },
    { name: 'System Design Thinking', level: 80 },
  ],
  'Tooling & Workflow': [
    { name: 'Vite / Webpack', level: 85 },
    { name: 'Git & GitHub', level: 90 },
    { name: 'CSS Modules / Tailwind', level: 88 },
    { name: 'Framer Motion / GSAP', level: 75 },
    { name: 'Testing (Jest / RTL)', level: 70 },
  ],
};

export const socialLinks = {
  github: 'https://github.com/webcodeshubham',
  linkedin: 'https://www.linkedin.com/in/shubhams-2021',
  email: 'theshubhamshri@gmail.com',
  resume: 'https://drive.google.com/file/d/1555uXJ90BXwVM-hO3-X5h1u-7-Mk-Y0M/view?usp=sharing',
};
