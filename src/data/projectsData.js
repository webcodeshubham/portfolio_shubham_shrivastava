export const projects = [
  {
    id: 1,
    title: 'Config-Driven UI Builder Platform',
    description:
      'A dynamic UI rendering engine that generates complete user interfaces from JSON configuration schemas — zero hardcoded UI. Demonstrates schema-driven architecture principles used in enterprise low-code platforms.',
    features: [
      'Built recursive rendering engine for deeply nested, schema-driven layouts supporting 10+ component types',
      'Designed component registry pattern with extensible type-to-component mapping — architectural decision typically made at senior-engineer level',
      'Implemented conditional rendering engine with showIf/hideIf and AND/OR logic, nested layout support',
      'Built runtime validation engine, light/dark theme switching, and modular state management with Context API — fully extensible without code changes',
    ],
    tech: ['React', 'JavaScript (ES6+)', 'Context API', 'CSS Modules', 'Vite'],
    github: 'https://github.com/webcodeshubham/config-driven-ui-builder',
    live: 'https://config-driven-ui-builder.vercel.app/',
    image: null,
  },
  {
    id: 2,
    title: 'Extramarks Production Dashboards — Student & Teacher Platforms',
    description:
      'Two interconnected production platforms — a student learning dashboard serving 1 Lac+ students and a teacher assessment platform used by 60,000+ educators for question bank management and assessment creation.',
    features: [
      'Engineered 100+ reusable UI components and replaced heavy Ant Design components with custom-built UI components, reducing bundle chunk size and improving page load time by 30%',
      'Integrated 100+ REST APIs handling complex asynchronous data flows, loading states, error boundaries, and dynamic rendering across 6+ dashboard modules',
      'Implemented async state management with Redux Toolkit for course lists, subscription status, student progress, and assessment results — ensuring consistent data flow across platforms',
      'Optimized rendering performance using component memoization, lazy loading, and efficient state update patterns ensuring smooth UX across large course catalogs and complex assessment screens',
    ],
    tech: ['React', 'Ant Design → Custom UI', 'Redux Toolkit', 'REST APIs', 'CSS Modules'],
    github: '',
    live: 'https://www.extramarks.com/',
    image: null,
  },
];

export const timelineData = [
  {
    year: '2022 — 2023',
    role: 'Web Developer',
    company: 'Tech IS India Pvt. Ltd., Bangalore',
    points: [
      'Delivered responsive, pixel-accurate UI across 10+ client projects using HTML, CSS, JavaScript, and React — translating Figma mockups into production-ready components',
      'Integrated REST APIs and implemented dynamic data rendering for interactive web applications, handling authentication flows and real-time data updates',
      'Maintained cross-browser compatibility and code quality standards within a 50+ member team, consistently delivering UI modules on schedule',
      'Collaborated with designers and backend developers to align UI behavior, interaction patterns, and delivery timelines',
    ],
  },
  {
    year: '2023 — Present',
    role: 'Software Developer',
    company: 'ExtraMarks Education India Pvt. Ltd., Noida',
    points: [
      'Engineered 100+ reusable UI components using React, reducing new module development time by ~30% across product modules used by 50,000+ students, teachers, and parents',
      'Replaced heavy Ant Design components with custom-built UI components, reducing bundle chunk size and improving page load time by 30% across high-traffic EdTech dashboards',
      'Integrated 100+ REST APIs handling complex asynchronous data flows, loading states, error boundaries, and dynamic rendering across student and teacher dashboards',
      'Collaborated within a 200+ member technology department, shipping production-ready features across sprints while leveraging AI-assisted tools (Cursor AI) to accelerate development',
    ],
  },
  {
    year: 'Mentorship',
    role: 'Instructor & Freelance Frontend Developer',
    company: 'Newton School, Cuvette & Independent Clients (Remote)',
    points: [
      'Mentored 500+ students in MERN stack development at Newton School and Cuvette — guiding project implementation, code reviews, and debugging practices',
      'Delivered responsive UI solutions for 5+ independent clients as a freelance frontend developer — managing end-to-end delivery from requirements to deployment',
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
    { name: 'State Management (Redux Toolkit)', level: 90 },
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
  resume: 'https://drive.google.com/file/d/1dxJ40haVdUA41l4_S8gs52VYUMGjyH38/view?usp=sharing',
};