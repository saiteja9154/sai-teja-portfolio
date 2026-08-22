// ============================================================
// portfolioData.js — Centralized configuration for Sai Teja Revuri's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Sai Teja Revuri",
  firstName: "Sai Teja",
  brandName: "Sai Teja",
  title: "Data Analyst & Full Stack Developer",
  location: "Kakinada, India",
  phone: "+91 9154122026",
  emails: {
    primary: "steja9759@gmail.com",
    secondary: "steja9759@gmail.com",
  },
  summary:
    "B.Tech Computer Science and Artificial Intelligence student with hands-on experience in Python web development, REST API design, and web applications, combined with a strong focus on Data Analytics and AI-driven problem solving. Skilled in building backend services (Flask/FastAPI), responsive interfaces (React.js), and processing, modeling, and visualizing datasets (Python, SQL, Power BI, Excel, Pandas, NumPy) to optimize business decisions and automate workflows.",
  resumeUrl: "/Sai_Teja_Revuri_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/saiteja9154",
  linkedin: "https://linkedin.com/in/sai-teja-revuri-97b63732a",
  instagram: "https://github.com/saiteja9154", // Redirect to GitHub as primary link
};

export const heroContent = {
  greeting: "Hi, I'm Sai Teja Revuri",
  titleHighlight: "Data Analyst & Full Stack Developer",
  subtitle:
    "I specialize in Data Analytics, SQL, Python, Power BI, AI, Generative AI, full-stack AI applications, and backend REST APIs.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:steja9759@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Sai Teja,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Sai_Teja_Revuri_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sai Teja Revuri</span>, a B.Tech Computer Science and Artificial Intelligence student specializing in both Data Analytics and Full Stack web development. I craft backend services and interactive user interfaces while modeling and visualizing complex datasets to extract business insights.`,
  techStack: ["Python", "SQL", "Power BI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Bridging the gap between software development and data insights",
  description:
    "I follow a structured, analytical, and developer-centric workflow to build scalable backend services and visualize critical metrics.",
  cards: [
    {
      number: "01",
      title: "Design & Model",
      text: "Architecting structured SQLite/SQL schemas, configuring RESTful APIs, and defining data relationships.",
    },
    {
      number: "02",
      title: "Extract & Query",
      text: "Writing complex SQL aggregate queries and CTEs to extract transactional datasets across databases.",
    },
    {
      number: "03",
      title: "Clean & Code",
      text: "Utilizing Python, Pandas, and NumPy to clean raw files, handle nulls, and develop modular Flask or FastAPI backend scripts.",
    },
    {
      number: "04",
      title: "Visualize & Ship",
      text: "Designing interactive Power BI dashboards, building responsive React.js frontends, and testing APIs with Postman.",
    },
  ],
  endText: "Insights & Code Ready!",
};

// Technical Skills Data (Balanced Data Analyst & Full Stack Developer Stack)
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Data Analysis & Libraries",
      skills: [
        { name: "Pandas", level: 88 },
        { name: "NumPy", level: 85 },
        { name: "Data Cleaning & Preprocessing", level: 92 }
      ]
    },
    {
      title: "Visualization & Frontend",
      skills: [
        { name: "Power BI", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Microsoft Excel", level: 90 }
      ]
    },
    {
      title: "Backend & Web APIs",
      skills: [
        { name: "FastAPI & Flask", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Postman API Testing", level: 85 }
      ]
    },
    {
      title: "Tools & Core Concepts",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Object-Oriented Programming (OOP)", level: 86 },
        { name: "Database Management & Modeling", level: 88 }
      ]
    }
  ]
};

// Internships Data
export const internshipsList = [
  {
    organization: "EduSkills Academy",
    role: "Software & Data Development Virtual Intern",
    duration: "8-Week Program",
    skills: ["Data Analytics & Dashboard Workflows", "Python Scripts & SQL Modules", "Code Debugging & Modular Programming", "Data Cleaning Routines"],
    tech: ["Python", "SQL", "Dashboard Tools", "Excel", "Git"]
  },
  {
    organization: "Google for Developers & AICTE",
    role: "AI/ML Developer Virtual Intern",
    duration: "10-Week Program",
    skills: ["Python ML Algorithms & ML Workflows", "Exploratory Data Analysis (EDA)", "Code Documentation", "Collaborative Version Control", "Iterative Feature Development"],
    tech: ["Python", "Machine Learning Workflows", "Git/GitHub", "EDA", "Data Processing"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex data questions and coding tasks into clean, logical, and queryable components." },
  { name: "Data-Driven Decisions", icon: "📊", desc: "Using statistical data and model analysis rather than assumptions to recommend business solutions." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working in sync with backend developers and designers to build full-stack interfaces and visual reports." },
  { name: "Detail-Oriented", icon: "🔍", desc: "Meticulous verification during data cleaning and API testing to prevent errors in visualizations." }
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
      "Data Modeling"
    ],
    links: {
      github: "https://github.com/saiteja9154",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "ai-sql-query-generator",
    number: "02",
    badge: null,
    title: "AI SQL Query Generator",
    description:
      "Developed an AI-assisted SQL query generation system to translate user inputs into structured queries for analytics operations. Streamlined automation workflows by building input-parsing logic in Python that maps plain English requirements into nested, multi-table database queries.",
    techTags: ["Python", "SQL", "REST APIs", "Automation", "AI Integration"],
    links: {
      github: "https://github.com/saiteja9154",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "sql-sense-ai",
    number: "03",
    badge: null,
    title: "SQL Sense AI: Interactive SQL Learning Assistant",
    description:
      "Created an interactive developer assistant tool that parses database schemas and breaks down query execution logic for learners. Implemented schema-parsing scripts in Python to convert relational data structures into step-by-step execution guidance.",
    techTags: ["Python", "SQL", "REST APIs", "AI Assistant", "Git"],
    links: {
      github: "https://github.com/saiteja9154",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "sql-sales-analytics-engine",
    number: "04",
    badge: null,
    title: "SQL Sales Analytics Engine & Dashboard",
    description:
      "Wrote SQL queries to extract, clean, and organize transactional sales data across regional hubs and product lines. Applied aggregation queries and CTEs to calculate growth metrics, feeding structured data directly into Power BI dashboards.",
    techTags: ["SQL", "Power BI", "Python", "Data Modeling", "Excel"],
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
      name: "Data Analytics with Python & Power BI",
      issuer: "EduSkills Academy",
      icon: "🐍",
    },
    {
      name: "Google Data Analytics Certification",
      issuer: "Coursera",
      icon: "📊",
    },
  ],
  viewAllUrl:
    "https://github.com/saiteja9154",
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
    "Data Analytics & Full Stack Web Development",
    "Flask · FastAPI · React.js · Power BI · SQL",
    "Scalable APIs & Data-Driven Insights",
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
