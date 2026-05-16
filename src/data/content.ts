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
  name: "Agata Ayu Gita",
  title: "Senior Product Manager",
  tagline: "Building Scalable Products at the Intersection of Data and UX",
  bio: "I specialize in transforming complex data into intuitive product experiences. With a background in engineering and a passion for design, I bridge the gap between technical feasibility and user delight.",
  email: "agataayugita@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/agataayugita/",
    github: "https://github.com",
    twitter: "https://twitter.com"
  }
};

export const experience = [
  {
    id: 1,
    company: "Traveloka Indonesia, Tangerang, Indonesia",
    description: "One of the leading Online Travel Agents in Southeast Asia",
    period: "May 2019 - Jul 2025",
    roles: [
      {
        title: "Product Manager - Content Supply Domain - Accommodation",
        period: "Jan 2024 - Jul 2025",
        achievements: [
          "Boosted room mapping throughput by 38% by conceptualising and shipping AI enhancements derived from large-scale data analysis, collaborating with an agile squad of machine learning engineers.",
          "Achieved 3x scalability and a 50% cost reduction by implementing a GenAI-based translation solution.",
          "Expanded property supply by 1 million by building a new digital sourcing pipeline from the ground up."
        ]
      },
      {
        title: "Product Manager - Flexibility & Google Hotel Ads Features",
        period: "Mar 2022 - Dec 2023",
        achievements: [
          "Drove >300% transaction growth in under six months by designing a new user journey for the 'Flexible Payment' feature and managing its complex, on-time launch across 20+ cross-functional teams.",
          "Delivered 10x transaction growth and a 70% infrastructure cost reduction in one year by spearheading an integration with Google Hotel Ads and using data to optimise scalability."
        ]
      },
      {
        title: "Senior Associate Product Manager - International Growth",
        period: "May 2019 - Feb 2022",
        achievements: [
          "Achieved 2x product growth during the pandemic by expanding the 'Pay upon Check-in' feature to new markets while ensuring acceptable cancellation risks.",
          "Contributed 25% of total campaign bookings by designing the 'Acquisition Game,' a creative gamification strategy derived from analysing user behavior to maximize incentivised referrals."
        ]
      }
    ]
  }
];

export const consultingExperience = [
  {
    id: 1,
    company: "IBM, London, United Kingdom",
    description: "",
    period: "Mar 2026 - Apr 2026",
    roles: [
      {
        title: "MBA Consultant (via Cambridge Global Consulting Project)",
        period: "Mar 2026 - Apr 2026",
        achievements: [
          "Architected a Go-to-Market strategy to secure FMCG client engagements, translating AI trends (GenAI, Agentic, Predictive) into pragmatic front-office transformations, focusing on the B2B infrastructure layer and specific FMCG front-office client gaps backed by IBM's competitive advantage."
        ]
      }
    ]
  },
  {
    id: 2,
    company: "Boston Consulting Group, Jakarta, Indonesia",
    description: "",
    period: "Apr 2018 - Apr 2019",
    roles: [
      {
        title: "Business Analyst",
        period: "Apr 2018 - Apr 2019",
        achievements: [
          "Designed transformation of sales processes for 20,000+ retail agents by validating the business case of an MVP chatbot-based lead generation product that integrated with operational data.",
          "Formulated a 2.5-year market entry roadmap for a conglomerate based on data-driven market insights.",
          "Executed change management by communicating a banking digital transformation to 10,000+ employees."
        ]
      }
    ]
  },
  {
    id: 3,
    company: "System Engineering Simulation & Modelling Laboratory (University of Indonesia), Depok, Indonesia",
    description: "",
    period: "Mar 2016 - Feb 2018",
    roles: [
      {
        title: "Research Assistant",
        period: "Mar 2016 - Feb 2018",
        achievements: [
          "Analysed coastal Special Economic Zone development using a system dynamics model to provide actionable policy recommendations to the Indonesia Secretariat General of the National Council."
        ]
      }
    ]
  }
];

export const education = [
  {
    institution: "University of Cambridge - Judge Business School, Cambridge, UK",
    period: "Sep 2025 - Sep 2026",
    degree: "MBA",
    description: "Fully-funded MBA by the Indonesian Endowment Fund for Education Agency."
  },
  {
    institution: "University of Indonesia, Depok, Indonesia",
    period: "Sep 2014 - Jan 2018",
    degree: "B.Eng. in Industrial Engineering (Cum Laude)",
    description: "Top 5 graduate of the faculty, and a Tanoto Foundation Scholar."
  }
];

export const additionalInfo = {
  nationality: "Indonesian",
  languages: ["English (fluent)", "Indonesia (native)"],
  achievements: [
    "Top 10 Young Leaders Indonesia National IX by McKinsey & Company (2017)",
    "Chief Information Officer at Students' Consulting Club University of Indonesia (2017)",
    "2nd Runner Up of Industrial & Systems Engineering Competition Indonesia (2017)",
    "Top 7 and Talented Winner of 'Putra Putri Batik Nusantara' National Pageants (2016)"
  ],
  interests: "Travelling & involved in multiple Indonesian theatrical and musical performances."
};

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
