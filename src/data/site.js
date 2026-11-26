// Structural site metadata. Facts about the person live in portfolioData.js.
// This file only holds the chapter map and the approved positioning line.

export const chapters = [
  {
    id: "opening",
    index: "00",
    label: "Opening",
    title: "Opening frame",
    note: "Name, positioning, credit block and portrait slot.",
  },
  {
    id: "work",
    index: "01",
    label: "Work",
    title: "The cut",
    note: "Four project scenes and the cut list.",
  },
  {
    id: "operator",
    index: "02",
    label: "About",
    title: "The operator",
    note: "Bio, trace strip and toolkit arrive in Phase 4.",
  },
  {
    id: "record",
    index: "03",
    label: "Record",
    title: "The record",
    note: "Experience, education and credentials arrive in Phase 5.",
  },
  {
    id: "contact",
    index: "04",
    label: "Contact",
    title: "The call",
    note: "Contact form and honesty states arrive in Phase 6.",
  },
];

export const siteMeta = {
  monogram: "ST·R",
  role: "Software Developer & Engineer — MERN Stack",
  positioning:
    "I build the API, the schema, and the interface that uses them.",
  // Set this to the real photograph (for example "/media/portrait/sai-teja.webp")
  // when it is supplied. The hero renders an intentional empty frame until then.
  portrait: null,
};
