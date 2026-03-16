export const projects = [
  {
    id: 1,
    title: 'Extramarks Student Learning Dashboard',
    description:
      'Production-grade, student-facing React dashboard that surfaces courses, learning paths, and subscription content through modular, data-driven UI layouts.',
    features: [
      'Designed and built responsive dashboard layouts using React and Ant Design with reusable, theme-consistent components',
      'Integrated REST APIs to render course, module, and subscription data with robust loading, empty, and error states',
      'Implemented Redux Toolkit slices to manage course lists, filters, user progress, and subscription state across views',
      'Improved perceived performance with memoized components, route-based code splitting, and efficient API data caching',
    ],
    tech: ['React', 'Ant Design', 'Redux Toolkit', 'REST APIs', 'CSS Modules'],
    github: '',
    live: 'https://www.extramarks.com/',
    image: null,
  },
  {
    id: 2,
    title: 'Extramarks Teacher Assessment & Question Bank System',
    description:
      'Teacher-facing React dashboards for managing assessments and question banks, optimized for dense data tables and complex filter workflows.',
    features: [
      'Built reusable table, filter, and form components with Ant Design to support multiple assessment and reporting screens',
      'Connected REST APIs to fetch assessment sets, question banks, and results with debounced filters and paginated views',
      'Managed asynchronous UI state with Redux Toolkit for search, filters, forms, and bulk actions across teacher modules',
      'Optimized UX for large datasets with virtualized lists, sticky headers, and responsive layouts for desktop-first workflows',
    ],
    tech: ['React', 'Ant Design', 'Redux Toolkit', 'REST APIs', 'CSS Modules'],
    github: '',
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
    role: 'Frontend Web Developer',
    company: 'Tech IS India',
    points: [
      'Built responsive marketing and product pages using HTML5, CSS3, JavaScript, and React with a focus on clean component structure',
      'Converted UI/UX designs into pixel-perfect, cross-browser compatible layouts and reusable UI components',
      'Implemented basic API-driven views to render dynamic content and handle user interactions and forms',
      'Collaborated with designers and backend developers to align UI behavior, interaction patterns, and delivery timelines',
    ],
  },
  {
    year: '2023 — Present',
    role: 'Frontend Engineer',
    company: 'ExtraMarks Education',
    points: [
      'Engineered production-ready React and Ant Design interfaces for student and teacher dashboards used at scale',
      'Owned end-to-end UI flows from wireframes to deployed features, including state management, API integration, and edge-case handling',
      'Implemented Redux Toolkit for complex state and async data handling across course, assessment, and reporting modules',
      'Worked closely with product and backend teams to ship incremental frontend features, improve performance, and refine UX',
    ],
  },
  {
    year: 'Mentorship',
    role: 'Frontend / MERN Mentor',
    company: 'Community & Freelance',
    points: [
      'Mentored students on how to structure React applications, break down UIs into reusable components, and manage state effectively',
      'Reviewed frontend code, helped debug complex rendering and state issues, and guided improvements in code quality',
      'Introduced mentees to modern tooling (Vite, Git, Postman) and best practices for building portfolio-ready frontend projects',
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
