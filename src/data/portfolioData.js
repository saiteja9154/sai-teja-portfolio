// ============================================================
// portfolioData.js — Centralized configuration for Sai Teja Revuri's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Sai Teja Revuri",
  firstName: "Sai Teja",
  brandName: "Sai Teja",
  title: "Full-Stack Developer",
  location: "Kakinada, India",
  phone: "+91 9154122026",
  emails: {
    primary: "steja9759@gmail.com",
    secondary: "steja9759@gmail.com",
  },
  summary:
    "B.Tech Computer Science and Artificial Intelligence student with hands-on experience in full-stack web development, REST API design, and scalable application architecture. Skilled in engineering high-performance backend services (FastAPI, Python, Node.js, Express), building responsive user interfaces (React, Tailwind CSS), managing databases (MySQL, MongoDB), and integrating AI capabilities (LangChain, LLMs) to build secure, full-stack solutions.",
  resumeUrl: "/Sai_Teja_Revuri_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/saiteja9154",
  linkedin: "https://linkedin.com/in/sai-teja-revuri-97b63732a",
  instagram: "https://github.com/saiteja9154", // Redirect to GitHub as primary link
};

export const heroContent = {
  greeting: "Hi, I'm Sai Teja Revuri",
  titleHighlight: "Full-Stack Developer",
  subtitle:
    "I specialize in building modern web applications, scalable backend REST APIs, responsive React interfaces, robust databases, and AI integration.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:steja9759@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Sai Teja,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Sai_Teja_Revuri_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sai Teja Revuri</span>, a B.Tech Computer Science and Artificial Intelligence student specializing in Full-Stack web development. I engineer robust backend services, scalable REST APIs, and responsive user interfaces, integrating modern databases, authentication, and application architecture to solve real-world problems through software.`,
  techStack: ["Python", "FastAPI", "React"],
};

export const skillsContent = {
  badge: "Engineering Workflow",
  heading: "Architecting scalable full-stack applications from concept to deployment",
  description:
    "I follow a structured, developer-centric workflow to architect full-stack applications, build secure REST APIs, and ship production-ready code.",
  cards: [
    {
      number: "01",
      title: "Frontend Architecture",
      text: "Crafting modular, interactive user interfaces using React and Tailwind CSS with responsive layout structures and seamless state management.",
    },
    {
      number: "02",
      title: "Backend & REST APIs",
      text: "Designing high-performance, modular RESTful APIs using Python, FastAPI, Node.js, and Express with robust request validation.",
    },
    {
      number: "03",
      title: "Database & Authentication",
      text: "Structuring relational and document databases with MySQL and MongoDB, implementing JWT authentication, secure sessions, and custom middleware.",
    },
    {
      number: "04",
      title: "AI Integration & Deployment",
      text: "Integrating Google Gemini and LangChain RAG pipelines into web applications, testing endpoints with Postman, and managing code with Git/GitHub.",
    },
  ],
  endText: "Full-Stack Ready!",
};

// Technical Skills Data (100% Full-Stack Developer Stack)
export const technicalSkills = {
  categories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 92 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 92 },
        { name: "FastAPI", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 92 },
        { name: "JWT Authentication", level: 88 },
        { name: "Middleware", level: 86 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 86 },
      ],
    },
    {
      title: "Tools & Development",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 88 },
        { name: "Docker", level: 82 },
      ],
    },
    {
      title: "AI Integration",
      skills: [
        { name: "Google Gemini API", level: 88 },
        { name: "LangChain", level: 85 },
        { name: "RAG", level: 84 },
        { name: "ChromaDB", level: 82 },
        { name: "LLM Integration", level: 86 },
      ],
    },
  ],
};

// Internships Data
export const internshipsList = [
  {
    organization: "EduSkills Academy",
    role: "Software & Web Development Virtual Intern",
    duration: "8-Week Program",
    skills: [
      "Developed modular Python backend services and scalable REST API endpoints.",
      "Implemented database CRUD operations, relational schema mapping, and query optimization.",
      "Engineered request validation routines, custom middleware, and structured error handling.",
      "Conducted end-to-end API testing using Postman and maintained clean code repositories on Git/GitHub.",
    ],
    tech: ["Python", "REST APIs", "Postman", "Git/GitHub", "Backend Development"],
  },
  {
    organization: "AICTE EduSkills",
    role: "AI/ML Virtual Intern",
    duration: "July 2025 – Sept 2025 (3 months)",
    skills: [
      "Completed a 10-week AI/ML Virtual Internship supported by Google for Developers and AICTE EduSkills.",
      "Integrated machine learning logic and AI APIs into full-stack application workflows.",
      "Gained hands-on experience in backend script automation, API routing, and data handling in Python.",
      "Developed real-world project solutions with clean documentation and Git/GitHub version control.",
    ],
    tech: ["Python", "AI Integration", "REST APIs", "Google for Developers", "Git/GitHub"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex application logic and software requirements into clean, modular, and maintainable code architecture.",
  },
  {
    name: "System Architecture",
    icon: "🏗️",
    desc: "Designing robust application structures with clean separation of concerns, secure data flows, and scalable API endpoints.",
  },
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Working in sync with frontend, backend, and design teammates through proactive communication and streamlined Git workflows.",
  },
  {
    name: "Code Quality & Testing",
    icon: "🔍",
    desc: "Writing clean, readable code with rigorous error handling, input validation, and comprehensive Postman API testing.",
  },
];

export const projects = [
  {
    id: "clinic-patient-record",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Clinic Patient Record System",
    description:
      "Developed a full-stack digital web application to manage patient registration, medical history tracking, and prescription management. Architected a structured SQLite database schema and implemented secure REST API endpoints in Flask to handle data requests between a responsive React frontend and SQLite database efficiently.",
    techTags: [
      "React.js",
      "Flask",
      "Tailwind CSS",
      "REST APIs",
      "SQLite",
      "Data Modeling",
    ],
    links: {
      github: "https://github.com/saiteja9154",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "hireflow-job-portal",
    number: "02",
    badge: "🚀 Full-Stack App",
    title: "HireFlow: Full-Stack Job Portal",
    description:
      "Designed and developed a modern recruitment platform enabling candidates to search jobs, upload PDF resumes, and track applications, while providing recruiters an administrative workspace to publish job openings and manage applicant review pipelines.",
    techTags: ["React.js", "FastAPI", "MySQL", "Tailwind CSS", "REST APIs", "JWT Auth"],
    links: {
      github: "https://github.com/saiteja9154/Hireflow-Job-Portal",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "sql-sense-ai",
    number: "03",
    badge: "🧠 AI Learning Assistant",
    title: "SQL Sense AI: SQL Learning Assistant",
    description:
      "Created an interactive developer assistant tool that parses database schemas and breaks down query execution logic for learners. Implemented schema-parsing scripts in Python to convert relational data structures into step-by-step execution guidance.",
    techTags: ["Python", "SQL", "REST APIs", "AI Assistant", "Git"],
    links: {
      github: "https://github.com/saiteja9154",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: "☁️",
    },
    {
      name: "Full-Stack Web Development & APIs",
      issuer: "EduSkills Academy",
      icon: "🐍",
    },
    {
      name: "Google AI & Python Developer Certification",
      issuer: "Coursera / Google",
      icon: "💻",
    },
    {
      name: "Tata Forage Software Engineering Program",
      issuer: "Tata / Forage",
      icon: "💼",
    },
  ],
  viewAllUrl: "https://github.com/saiteja9154",
};

export const education = {
  degree: "Bachelor of Technology in CS & AI",
  institution: "Kakinada Institute of Engineering and Technology",
  cgpa: "7.9 CGPA",
  graduation: "2024 – 2027",
  twelfth: "Diploma in Mechanical Engineering – Aditya Polytechnic College (2021 – 2024) – 80%",
};

export const footerContent = {
  taglines: [
    "Full-Stack Web Development & Modern Architecture",
    "React · FastAPI · Node.js · Express · MySQL · MongoDB",
    "Scalable REST APIs & Intelligent Web Systems",
  ],
  credential: "B.Tech CS & AI · CGPA 7.9",
  copyright: `© ${new Date().getFullYear()} Sai Teja Revuri | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
