// ============================================================
// portfolioData.js — Centralized configuration for Sai Teja Revuri's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Sai Teja Revuri",
  firstName: "Sai Teja",
  brandName: "Sai Teja",
  title: "Full Stack Developer | Backend Developer | MERN Stack Developer",
  location: "Kakinada, India",
  phone: "+91 9154122026",
  emails: {
    primary: "steja9759@gmail.com",
    secondary: "steja9759@gmail.com",
  },
  summary:
    "Python Full Stack Developer and Backend Developer with hands-on experience building REST APIs, backend services, and responsive web applications using Python (Flask, FastAPI), Node.js, Express.js, React.js, SQL, and Git/GitHub. Skilled in translating business requirements into scalable, data-driven solutions across full-stack development, database querying, and analytics dashboards. Certified in AWS Cloud Practitioner and Google Data Analytics, with a strong foundation in object-oriented programming, API integration, and automation. Seeking a Software Engineer / Python Developer role to deliver measurable technical and business impact.",
  resumeUrl: "/Sai_Teja_Revuri_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/saiteja9154",
  linkedin: "https://linkedin.com/in/sai-teja-revuri-97b63732a",
  instagram: "https://github.com/saiteja9154", // Redirect to GitHub as primary link
};

export const heroContent = {
  greeting: "Hi, I'm Sai Teja Revuri",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "Python Full Stack Developer & Backend Developer specializing in REST APIs, FastAPI, Flask, React.js, and scalable cloud solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:steja9759@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Sai Teja,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Sai_Teja_Revuri_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sai Teja Revuri</span>, a Full Stack Developer and Backend Developer pursuing B.Tech in Computer Science and Artificial Intelligence. I engineer high-performance REST APIs, backend services, and responsive user interfaces, translating business requirements into scalable, data-driven solutions with Python (Flask, FastAPI), Node.js, Express.js, React.js, and SQL.`,
  techStack: ["Python", "Flask", "FastAPI", "React.js", "SQL"],
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
      text: "Crafting modular, responsive user interfaces using React.js, Tailwind CSS, and shadcn/ui with clean state management.",
    },
    {
      number: "02",
      title: "Backend & REST APIs",
      text: "Designing high-performance, modular RESTful API endpoints using Python, Flask, FastAPI, Node.js, and Express.",
    },
    {
      number: "03",
      title: "Database & Security",
      text: "Structuring relational and modern databases with PostgreSQL, MySQL, and SQL, implementing secure authentication and role-based workflows.",
    },
    {
      number: "04",
      title: "Cloud & Automation",
      text: "Deploying cloud architectures with AWS, API testing with Postman, debugging, and collaborative version control on Git/GitHub.",
    },
  ],
  endText: "Full-Stack Ready!",
};

// Technical Skills Data (Aligned with Resume)
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "shadcn/ui", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Flask", level: 90 },
        { name: "FastAPI", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST API Design", level: 92 },
        { name: "RESTful Web Services", level: 90 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "AWS", level: 85 },
        { name: "VS Code", level: 92 },
        { name: "Postman", level: 90 },
      ],
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: 92 },
        { name: "API Integration", level: 90 },
        { name: "Debugging & Automation", level: 88 },
        { name: "Version Control", level: 92 },
      ],
    },
  ],
};

// Internships Data
export const internshipsList = [
  {
    organization: "EduSkills Academy",
    role: "Software & Data Development Virtual Intern",
    duration: "8-Week Program",
    skills: [
      "Developed Python scripts and SQL modules to process data and power dashboard analytical workflows, reducing manual reporting effort.",
      "Applied code debugging, modular programming, and data cleaning routines across practical datasets, improving data accuracy for downstream analysis.",
    ],
    tech: ["Python", "SQL", "Data Analytics", "Data Cleaning", "Dashboards"],
  },
  {
    organization: "Google for Developers & AICTE EduSkills",
    role: "AI/ML Developer Virtual Intern",
    duration: "10-Week Program",
    skills: [
      "Built Python algorithms and data processing scripts to explore machine learning workflows and core software engineering concepts.",
      "Utilized Git and GitHub for collaborative version control, code documentation, and iterative feature development across team projects.",
    ],
    tech: ["Python", "Algorithms", "Machine Learning", "Git/GitHub", "Google for Developers"],
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
    desc: "Working in sync with cross-functional teams through proactive communication and streamlined Git/GitHub workflows.",
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
      "Engineered a full-stack patient management system supporting 500+ patient records, streamlining registration, medical history tracking, and prescription management. Designed and implemented 10+ RESTful API endpoints in Flask, reducing frontend-backend data request latency and improving reliability of clinical workflows. Built a responsive interface with React.js and Tailwind CSS, improving workflow efficiency and reducing task completion time by 25%.",
    techTags: [
      "React.js",
      "Flask",
      "Tailwind CSS",
      "REST APIs",
      "Python",
      "Patient Records",
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
    title: "HireFlow – Job Portal",
    description:
      "Developed a full-stack job portal enabling candidates to search and apply for jobs while allowing recruiters to create and manage job listings, supporting 200+ active listings. Implemented secure authentication, role-based workflows, and application tracking, improving recruiter workflow efficiency by an estimated 35%. Built dynamic job filtering with FastAPI and PostgreSQL, reducing average job-search time.",
    techTags: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "REST APIs", "Role-Based Auth"],
    links: {
      github: "https://github.com/saiteja9154/Hireflow-Job-Portal",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "sql-sense-ai",
    number: "03",
    badge: "🧠 Interactive Tool",
    title: "SQL Sense AI: Interactive SQL Learning Assistant",
    description:
      "Created an interactive developer assistant that parses database schemas and breaks down query execution logic, improving learner comprehension of SQL concepts. Implemented schema-parsing scripts in Python to convert relational data structures into step-by-step execution guidance for 10+ schema types.",
    techTags: ["Python", "SQL", "REST APIs", "Schema Parsing", "Git"],
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
      issuer: "Amazon Web Services (AWS)",
      icon: "☁️",
    },
    {
      name: "Data Analytics with Python & Power BI",
      issuer: "EduSkills Academy",
      icon: "📊",
    },
    {
      name: "Google Data Analytics Professional Certificate",
      issuer: "Coursera / Google",
      icon: "📈",
    },
  ],
  viewAllUrl: "https://github.com/saiteja9154",
};

export const education = {
  degree: "Bachelor of Technology in Computer Science and Artificial Intelligence",
  institution: "Kakinada Institute of Engineering and Technology",
  cgpa: "7.5 CGPA",
  graduation: "2024 – 2027",
  twelfth: "Diploma in Mechanical Engineering – Aditya Polytechnic College (2021 – 2024) – 80%",
};

export const footerContent = {
  taglines: [
    "Full-Stack Development & REST API Architecture",
    "Python · Flask · FastAPI · React.js · Node.js · Express · SQL",
    "Scalable Web Services & Cloud Integration",
  ],
  credential: "B.Tech CS & AI · CGPA 7.5",
  copyright: `© ${new Date().getFullYear()} Sai Teja Revuri | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

