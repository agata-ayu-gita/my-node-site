import { 
  BarChart3, 
  Users, 
  Zap, 
  Target, 
  Code2, 
  Database, 
  Layers, 
  Globe 
} from 'lucide-react';

export const personalInfo = {
  name: "Alex Sterling",
  title: "Senior Product Manager",
  tagline: "Building Scalable Products at the Intersection of Data and UX",
  bio: "I specialize in transforming complex data into intuitive product experiences. With a background in engineering and a passion for design, I bridge the gap between technical feasibility and user delight.",
  email: "alex.sterling@example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com"
  }
};

export const experience = [
  {
    id: 1,
    role: "Senior Product Manager",
    company: "TechFlow Inc.",
    period: "2021 - Present",
    description: "Leading the core platform team responsible for user acquisition and retention.",
    achievements: [
      "Spearheaded a product-led growth initiative that increased DAU by 45% in 6 months.",
      "Launched a new analytics dashboard, driving a $2M increase in annual recurring revenue (ARR).",
      "Optimized the onboarding funnel, reducing drop-off rates by 22%."
    ]
  },
  {
    id: 2,
    role: "Product Manager",
    company: "DataSphere",
    period: "2018 - 2021",
    description: "Managed the end-to-end lifecycle of data visualization tools for enterprise clients.",
    achievements: [
      "Delivered 3 major product releases ahead of schedule, resulting in a 15% increase in customer satisfaction (CSAT).",
      "Collaborated with engineering to migrate legacy infrastructure to a microservices architecture.",
      "Implemented A/B testing frameworks to validate feature hypotheses."
    ]
  },
  {
    id: 3,
    role: "Associate Product Manager",
    company: "Innovate Labs",
    period: "2016 - 2018",
    description: "Supported product strategy and execution for mobile applications.",
    achievements: [
      "Conducted user research and competitive analysis to inform the roadmap for a new mobile app.",
      "Managed the backlog and sprint planning for a cross-functional team of 8 developers.",
      "Launched a beta program with 500+ users to gather early feedback."
    ]
  }
];

export const skills = [
  {
    category: "Product Strategy",
    icon: Target,
    items: ["Roadmapping", "OKRs", "Market Analysis", "User Research", "GTM Strategy"]
  },
  {
    category: "Technical Execution",
    icon: Code2,
    items: ["API Design", "SQL & Data Analysis", "Node.js", "System Architecture", "Agile/Scrum"]
  },
  {
    category: "Leadership",
    icon: Users,
    items: ["Stakeholder Management", "Team Mentorship", "Cross-functional Collaboration", "Public Speaking"]
  },
  {
    category: "Tools",
    icon: Layers,
    items: ["Figma", "Jira", "Mixpanel", "Tableau", "Notion"]
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "Project Nexus",
    subtitle: "Scaling Enterprise Analytics",
    description: "Redesigning the core analytics engine to support real-time data processing for enterprise clients.",
    image: "https://picsum.photos/seed/tech1/800/600",
    tags: ["Data Visualization", "Performance", "UX Redesign"],
    stats: [
      { label: "Processing Speed", value: "10x Faster" },
      { label: "User Adoption", value: "+40%" }
    ],
    link: "#"
  },
  {
    id: 2,
    title: "Growth Engine",
    subtitle: "Automated Marketing Platform",
    description: "Building an automated marketing platform that leverages machine learning to optimize ad spend.",
    image: "https://picsum.photos/seed/tech2/800/600",
    tags: ["AI/ML", "Automation", "Growth"],
    stats: [
      { label: "Ad ROI", value: "+25%" },
      { label: "Manual Effort", value: "-60%" }
    ],
    link: "#"
  },
  {
    id: 3,
    title: "Mobile First",
    subtitle: "Consumer App Revamp",
    description: "Overhauling the mobile experience to improve engagement and retention for a consumer-facing app.",
    image: "https://picsum.photos/seed/tech3/800/600",
    tags: ["Mobile", "Consumer", "Retention"],
    stats: [
      { label: "Retention Day 30", value: "+15%" },
      { label: "App Store Rating", value: "4.8/5" }
    ],
    link: "#"
  }
];
