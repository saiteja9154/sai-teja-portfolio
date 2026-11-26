// Presentation copy for the Work chapter.
// Facts trace to src/data/portfolioData.js. Unverified figures from the old
// project descriptions are deliberately omitted: 500+, 200+, 10+, 25% and 35%
// remain unconfirmed in CONTENT_VERIFICATION.md.
//
// There is no project record, asset or URL for an "AI Productivity Platform"
// in the repository, so it is not invented here. The four scenes below are the
// projects the data can support.

import { projects, socialLinks } from "./portfolioData";

const findProject = (id) => projects.find((project) => project.id === id);

const pharma = findProject("pharma-nexus-v2");
const hireflow = findProject("hireflow-job-portal");
const sqlSense = findProject("sql-sense-ai");
const clinic = findProject("clinic-patient-record");

export const workScenes = [
  {
    id: "sql-sense-ai",
    anchor: "scene-sql-sense",
    number: "01",
    title: "SQLSense AI",
    category: "AI learning tool",
    headline: "A schema parser that explains a query one step at a time.",
    purpose:
      "SQL learners can read a schema and a query, but the execution path stays hidden. SQLSense AI makes that path visible in a single workspace.",
    contribution:
      "Implemented the schema-parsing scripts in Python and the step-by-step explanation flow that turns a schema into query guidance.",
    features: [
      "Schema parsing",
      "Step-by-step query execution guidance",
      "Interactive SQL practice",
      "Question-and-answer workspace",
    ],
    stack: ["Python", "SQL", "REST APIs", "Git"],
    status: { label: "Live demo", tone: "live" },
    result: "A live demo a visitor can use directly.",
    links: [
      {
        label: "SQLSense AI live demo",
        shortLabel: "Live demo",
        href: sqlSense?.links?.demo,
        external: true,
      },
    ],
    media: {
      src: "/media/work/sql-sense-practice-1250.webp",
      srcSet:
        "/media/work/sql-sense-practice-800.webp 800w, /media/work/sql-sense-practice-1250.webp 1250w",
      width: 1250,
      height: 781,
      alt: "SQLSense AI practice view showing a SQL task, the Employees table schema and a query editor.",
      caption: "FIG. 01 — SQL PRACTICE / SQLSENSE AI",
    },
  },
  {
    id: "pharma-nexus-v2",
    anchor: "scene-pharma-nexus",
    number: "02",
    title: "Pharma Nexus V2",
    category: "Procurement agent",
    headline:
      "Restocking decisions run as one agent pass, from stock signal to purchase order.",
    purpose:
      "Pharmacy procurement moves through inventory checks, vendor quotes, negotiation and purchase orders. Pharma Nexus puts those steps in one system.",
    contribution:
      "Built across the FastAPI service, SQLite data layer and React interface, including the agent orchestration flow that evaluates vendors and writes purchase-order decisions.",
    features: [
      "Inventory-driven restocking",
      "Vendor evaluation and scoring",
      "Constraint validation",
      "Adaptive negotiation",
      "Purchase-order decisions",
    ],
    stack: ["Python", "FastAPI", "React", "SQLite", "Pydantic"],
    status: { label: "Repository", tone: "repo" },
    result: "One flow from stock signal to purchase-order decision.",
    links: [
      {
        label: "Pharma Nexus on GitHub",
        shortLabel: "Repository",
        href: pharma?.links?.github,
        external: true,
      },
    ],
    media: {
      src: "/media/work/pharma-agent-1610-1440.webp",
      srcSet:
        "/media/work/pharma-agent-1610-800.webp 800w, /media/work/pharma-agent-1610-1440.webp 1440w",
      width: 1440,
      height: 900,
      alt: "Agent Control Center in Pharma Nexus, showing the store procurement agent on standby.",
      caption: "FIG. 02 — AGENT CONTROL / PHARMA NEXUS",
    },
  },
  {
    id: "hireflow-job-portal",
    anchor: "scene-hireflow",
    number: "03",
    title: "HireFlow",
    category: "Job portal",
    headline:
      "A job portal with role-based flows for both sides of the hiring table.",
    purpose:
      "Candidates need to find and apply; recruiters need to publish and track. HireFlow puts both workflows behind one authenticated system.",
    contribution:
      "Built the React interface and the FastAPI and PostgreSQL API, including secure authentication, role-based access and application tracking.",
    features: [
      "Job search and filtering",
      "Recruiter listing management",
      "Application tracking",
      "Role-based authentication",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    status: { label: "Repository", tone: "repo" },
    result: "Candidate and recruiter workflows in one authenticated portal.",
    links: [
      {
        label: "HireFlow on GitHub",
        shortLabel: "Repository",
        href: hireflow?.links?.github,
        external: true,
      },
    ],
    media: null,
    specNote: "No public still captured. The repository is the record.",
  },
  {
    id: "clinic-patient-record",
    anchor: "scene-clinic",
    number: "04",
    title: "Clinic Patient Record System",
    category: "Clinical records",
    headline: "Patient registration, history and prescriptions in one record.",
    purpose:
      "Clinical records split across files and screens are slow to retrieve and easy to misplace. This system keeps the patient record in one place.",
    contribution:
      "Built the Flask REST endpoints and the React and Tailwind interface for registration, history and prescriptions.",
    features: [
      "Patient registration",
      "Medical history",
      "Prescription management",
      "REST API",
    ],
    stack: ["React.js", "Flask", "Tailwind CSS", "REST APIs", "Python"],
    status: { label: "No public link", tone: "none" },
    result: "Registration, history and prescriptions in one record.",
    links: [],
    media: null,
    specNote:
      "No public repository or screenshot is available, so no link is shown.",
  },
];

export const workMeta = {
  count: String(workScenes.length).padStart(2, "0"),
  lead:
    "Four builds, one thread: data in, decisions out, and an interface on top. Each scene lists the problem, the build and the stack.",
  github: socialLinks.github,
};
