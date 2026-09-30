// ============================================================
//  ALL PERSONAL CONTENT LIVES IN THIS FILE.
//  Edit text, add projects, or add links here. The components
//  read from this file, so you rarely need to touch them.
// ============================================================

export const profile = {
  name: "Anubhav Yadav",
  initials: "AY",
  title: "Computer Science Undergraduate",
  focus: "Data Science & Analytics",
  location: "Gurugram, Haryana, India",
  phone: "+91 9560629357",
  phoneHref: "tel:+919560629357",
  email: "yadavanubhav567@gmail.com",
  linkedinLabel: "linkedin.com/in/anubhav-yadav-31a526317",
  linkedinUrl: "https://www.linkedin.com/in/anubhav-yadav-31a526317",
  // Leave empty until you have one. The GitHub icon only appears when this is filled in.
  githubUrl: "",

  heroIntro:
    "Computer Science undergraduate specializing in Data Science, with hands-on experience in AI-assisted content evaluation, research, data annotation and technical content analysis. I work with Python, SQL and Microsoft Excel, and I care about accuracy in data and outputs.",

  about: [
    "I'm a third-year Computer Science Engineering student at IILM University, Gurugram, specializing in Data Science.",
    "My experience so far covers AI-assisted content evaluation, web research, data annotation and technical content analysis. I'm comfortable working with structured information, validating data and outputs, and keeping to accuracy and quality standards.",
    "I'm interested in data science, analytics and AI, and I want to apply my analytical and technical skills to data-driven problem solving, business insights and AI-related projects.",
  ],
};

export const education = {
  degree: "Bachelor of Technology, Computer Science Engineering",
  school: "IILM University, Gurugram",
  period: "2024 – Present",
  detail: "Third year, Data Science specialization",
};

export const softSkills = [
  "Analytical Reasoning",
  "Critical Thinking",
  "Problem Solving",
  "Attention to Detail",
  "Research",
  "Communication",
  "Adaptability",
  "Time Management",
];

export const skillGroups = [
  { name: "Programming", items: ["Python", "C", "SQL", "OOP"] },
  {
    name: "Data & Analytics",
    items: ["Data Analysis", "Data Cleaning", "Data Validation", "Data Interpretation"],
  },
  { name: "Tools", items: ["Microsoft Excel", "Google Sheets"] },
  {
    name: "AI & Research",
    items: [
      "AI Response Evaluation",
      "Prompt Evaluation",
      "AI Data Annotation",
      "Web Research",
      "Fact Verification",
    ],
  },
  {
    name: "Other",
    items: ["Technical Writing", "Quality Assurance", "Critical Thinking", "Analytical Reasoning"],
  },
];

export const experience = [
  {
    role: "AI Content Writer Intern",
    company: "GAO Tek Inc.",
    mode: "Remote",
    type: "Internship",
    period: "20 May 2026 – 20 August 2026",
    points: [
      "Created and reviewed technical product descriptions for AI-assisted content workflows.",
      "Researched and verified product specifications using reliable online sources.",
      "Analyzed and organized product information using spreadsheets and structured datasets.",
      "Performed accuracy, consistency, and quality checks on technical information.",
      "Worked with CMS tools and spreadsheets to maintain organized and standardized product data.",
      "Followed detailed guidelines while meeting daily productivity and quality requirements.",
    ],
  },
];

// To add a project: copy one object below, paste it into the list, and edit it.
// Buttons for code / demo only appear when githubUrl / demoUrl are filled in.
export const projects = [
  {
    title: "Campus Weather Impact Analyzer",
    featured: true,
    badge: "Featured project",
    description:
      "A data-driven project focused on analyzing weather-related data and studying its potential impact on event attendance.",
    focus: "Data processing, analytical decision-making and extracting meaningful insights",
    tech: ["Python", "HTML", "CSS", "JavaScript", "MySQL", "APIs"],
    points: [
      "Collected and analyzed weather-related data.",
      "Processed structured data and validated outputs for consistency and accuracy.",
      "Integrated APIs to collect relevant data for analysis.",
      "Focused on data processing, analytical decision-making, and extracting meaningful insights.",
    ],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Career Roadmap Platform",
    featured: false,
    badge: "Concept / Ideathon",
    description:
      "An AI-assisted platform concept designed to help students create personalized career roadmaps.",
    focus: "Using data and AI to improve career planning and decision-making",
    tech: [],
    points: [
      "Proposed an AI-assisted platform for personalized career roadmaps.",
      "Designed features for skill tracking, roadmap generation, and AI-based recommendations.",
      "Structured user information and career requirements to support personalized recommendations.",
      "Focused on using data and AI to improve career planning and decision-making.",
    ],
    githubUrl: "",
    demoUrl: "",
  },
];

// verifyUrl: paste your Microsoft Learn credential link here if you want a "Verify" link to appear.
export const certifications = [
  {
    name: "Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft Certified",
    verifyUrl: "",
  },
  {
    name: "Azure Fundamentals",
    code: "AZ-900",
    issuer: "Microsoft Certified",
    verifyUrl: "",
  },
];

export const achievements = [
  "Selected for the State-Level Basketball Championship.",
  "Completed Microsoft Azure AI Fundamentals and Azure Fundamentals certifications.",
  "Contributed to AI-assisted technical content creation during internship.",
];

export const interests = [
  "Data Science",
  "Data Analytics",
  "Artificial Intelligence",
  "Machine Learning",
  "LLMs",
  "AI Evaluation",
  "Data-Driven Decision Making",
  "Prompt Engineering",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
