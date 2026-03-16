export const projects = [
  {
    id: 1,
    title: 'Extramarks Student Learning Dashboard Platform',
    description:
      'Student-facing learning dashboard enabling access to courses, learning modules, and subscription content with a performant, interactive UI.',
    features: [
      'Built reusable UI components using React and Ant Design',
      'Implemented asynchronous state handling with Redux Toolkit',
      'Integrated REST APIs for course progress, learning content, and reports',
      'Optimized dashboard performance through memoization and lazy loading',
    ],
    tech: ['React', 'JavaScript (ES6+)', 'Redux Toolkit', 'Ant Design', 'REST APIs', 'CSS Modules'],
    github: null,
    live: 'https://www.extramarks.com/',
    image: null,
  },
  {
    id: 2,
    title: 'Extramarks Teacher Assessment & Question Bank System',
    description:
      'Teacher-focused assessment platform to create question banks, manage assessments, and review reports across multiple dashboard modules.',
    features: [
      'Engineered table and form components using React and Ant Design',
      'Integrated REST APIs to retrieve question sets, assessments, and student results',
      'Developed reusable UI workflows for filters, forms, and dashboards',
      'Improved usability and performance with optimized state updates and rendering',
    ],
    tech: ['React', 'JavaScript (ES6+)', 'Redux Toolkit', 'Ant Design', 'REST APIs', 'CSS Modules'],
    github: null,
    live: 'https://www.extramarks.com/',
    image: null,
  },
  {
    id: 3,
    title: 'Config-Driven UI Builder Platform',
    description:
      'Config-driven React application that dynamically generates complete user interfaces from JSON schemas — zero hardcoded UI.',
    features: [
      'Recursive rendering engine for deeply nested, schema-driven layouts',
      'Component registry pattern for extensible type-to-component mapping',
      'Conditional rendering engine with showIf / hideIf and AND/OR logic',
      'Validation engine, theming, and modular state management with Context API',
    ],
    tech: ['React', 'JavaScript (ES6+)', 'Context API', 'CSS Modules', 'Vite'],
    github: 'https://github.com/webcodeshubham/config-driven-ui-builder',
    live: 'https://config-driven-ui-builder.vercel.app/',
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
  resume: 'https://drive.google.com/file/d/1WbJZKMzuzorQRWPYq8nB9LohgcWEvzYv/view?usp=sharing',
};
