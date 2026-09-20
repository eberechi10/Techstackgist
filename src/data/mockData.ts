import { TalentProfile, Course, ProductItem, ServiceItem, Testimonial } from '../types';

export const TALENT_PROFILES: TalentProfile[] = [
  {
    id: 'talent-1',
    name: 'Adebayo Olawale',
    role: 'Frontend Developer',
    category: 'Software Engineering',
    country: 'Nigeria',
    flag: '🇳🇬',
    city: 'Lagos',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Jest'],
    experienceYears: 4,
    rateHourly: 35,
    available: true,
    statusText: 'Available',
    bio: 'Senior Frontend Engineer with 4+ years architecting scalable design systems, progressive web apps, and enterprise dashboards with strict accessibility standards.',
    vettingScore: 98,
    timezone: 'WAT (UTC+1)',
    languages: ['English (Fluent)', 'Yoruba'],
    featuredProjects: [
      {
        title: 'Pan-African Logistics Portal',
        description: 'Engineered real-time fleet telemetry dashboard handling 50k+ daily shipments.',
        tech: ['Next.js', 'TypeScript', 'WebSockets', 'Tailwind'],
        impact: '32% decrease in page load times'
      },
      {
        title: 'Fintech Micro-Lending Interface',
        description: 'Accessible loan origination application supporting offline-first transactions.',
        tech: ['React', 'Zustand', 'React Query'],
        impact: 'Scaled to 250k monthly active borrowers'
      }
    ],
    educationOrCert: 'B.Sc. Computer Science (Unilag), AWS Certified Cloud Practitioner'
  },
  {
    id: 'talent-2',
    name: 'Ama Konadu',
    role: 'UI/UX Designer',
    category: 'Design & UX',
    country: 'Ghana',
    flag: '🇬🇭',
    city: 'Accra',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    skills: ['Figma', 'Design Systems', 'UX Research', 'Prototyping', 'User Testing', 'WCAG AA'],
    experienceYears: 5,
    rateHourly: 40,
    available: true,
    statusText: 'Available',
    bio: 'Product Designer specializing in complex B2B workflows, cross-platform design tokens, and user research in emerging market fintech and healthtech ecosystems.',
    vettingScore: 96,
    timezone: 'GMT (UTC+0)',
    languages: ['English (Fluent)', 'Twi'],
    featuredProjects: [
      {
        title: 'Cross-Border Remittance App',
        description: 'Complete end-to-end design system and multi-currency mobile wallet UX.',
        tech: ['Figma', 'Design Tokens', 'User Journey Mapping'],
        impact: '44% reduction in transaction drop-offs'
      },
      {
        title: 'Healthcare Clinician Workspace',
        description: 'High-density desktop software for hospital triage and patient monitoring.',
        tech: ['Figma', 'Design Systems', 'Usability Audits'],
        impact: 'Tested across 14 regional clinics'
      }
    ],
    educationOrCert: 'B.A. Graphic Communications (KNUST), Google UX Certified'
  },
  {
    id: 'talent-3',
    name: 'David Mwangi',
    role: 'Data Analyst',
    category: 'Data & AI',
    country: 'Kenya',
    flag: '🇰🇪',
    city: 'Nairobi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    skills: ['Excel', 'SQL', 'Power BI', 'Python', 'Pandas', 'Tableau', 'dbt'],
    experienceYears: 4,
    rateHourly: 32,
    available: true,
    statusText: 'Available',
    bio: 'Data Analyst turning messy operational and customer telemetry into clear executive decisions, automated ETL pipelines, and predictive revenue models.',
    vettingScore: 95,
    timezone: 'EAT (UTC+3)',
    languages: ['English (Fluent)', 'Swahili'],
    featuredProjects: [
      {
        title: 'AgriTech Market Price Forecasting',
        description: 'Constructed time-series forecasting model and interactive regional supply dashboard.',
        tech: ['SQL', 'Python', 'Power BI', 'PostgreSQL'],
        impact: 'Optimized commodity logistics across 8 counties'
      },
      {
        title: 'SaaS Retention & Churn Engine',
        description: 'Customer cohort analysis tracking multi-touch attribution and MRR cohorts.',
        tech: ['Postgres', 'dbt', 'Tableau'],
        impact: 'Identified 18% churn root-cause triggers'
      }
    ],
    educationOrCert: 'B.Sc. Actuarial Science (University of Nairobi)'
  },
  {
    id: 'talent-4',
    name: 'Chinedu Eze',
    role: 'Cybersecurity Analyst',
    category: 'Cybersecurity',
    country: 'Nigeria',
    flag: '🇳🇬',
    city: 'Abuja',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    skills: ['SOC Operations', 'Penetration Testing', 'SIEM (Splunk)', 'ISO 27001', 'Network Security', 'Wireshark'],
    experienceYears: 5,
    rateHourly: 45,
    available: true,
    statusText: 'Available',
    bio: 'Information Security Specialist with extensive background in vulnerability management, penetration testing, compliance posture, and incident triage.',
    vettingScore: 97,
    timezone: 'WAT (UTC+1)',
    languages: ['English (Fluent)', 'Igbo'],
    featuredProjects: [
      {
        title: 'Banking API Vulnerability Assessment',
        description: 'Executed red-team penetration tests against open banking API specs.',
        tech: ['Burp Suite', 'OWASP Top 10', 'Kali Linux'],
        impact: 'Remediated 3 high-severity exposure points prior to regulatory audit'
      }
    ],
    educationOrCert: 'CompTIA Security+, CEH (Certified Ethical Hacker)'
  },
  {
    id: 'talent-5',
    name: 'Kezia Umutoni',
    role: 'Cloud & DevOps Engineer',
    category: 'DevOps & Cloud',
    country: 'Rwanda',
    flag: '🇷🇼',
    city: 'Kigali',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Prometheus', 'Linux'],
    experienceYears: 4,
    rateHourly: 42,
    available: true,
    statusText: 'Available',
    bio: 'Cloud Architect building resilient zero-downtime infrastructure, IaC configurations, and auto-scaling microservice fleets across multi-region environments.',
    vettingScore: 99,
    timezone: 'CAT (UTC+2)',
    languages: ['English (Fluent)', 'French', 'Kinyarwanda'],
    featuredProjects: [
      {
        title: 'Kubernetes Microservices Migration',
        description: 'Containerized legacy monolithic services with zero downtime and automated blue-green rollouts.',
        tech: ['Kubernetes', 'Terraform', 'ArgoCD', 'AWS EKS'],
        impact: 'Cut AWS infrastructure spend by 38%'
      }
    ],
    educationOrCert: 'AWS Solutions Architect Professional, CKA Certified'
  },
  {
    id: 'talent-6',
    name: 'Thabo Ndlovu',
    role: 'Full Stack Software Engineer',
    category: 'Software Engineering',
    country: 'South Africa',
    flag: '🇿🇦',
    city: 'Cape Town',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80',
    skills: ['Node.js', 'React', 'Python / Django', 'PostgreSQL', 'Redis', 'Docker'],
    experienceYears: 6,
    rateHourly: 48,
    available: true,
    statusText: 'Available',
    bio: 'Full-stack builder passionate about robust backend services, asynchronous queues, and clean, type-safe API contracts for high-traffic platforms.',
    vettingScore: 98,
    timezone: 'SAST (UTC+2)',
    languages: ['English (Fluent)', 'Zulu'],
    featuredProjects: [
      {
        title: 'E-commerce Marketplace Backend',
        description: 'Architected distributed checkout system handling flash sales with Redis locks.',
        tech: ['Node.js', 'PostgreSQL', 'BullMQ', 'Next.js'],
        impact: '99.98% uptime during peak Black Friday promotions'
      }
    ],
    educationOrCert: 'B.Sc. Information Technology (UCT)'
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-ui-ux',
    title: 'UI/UX Design & Product Strategy',
    category: 'Design & UX',
    level: 'Beginner → Advanced',
    duration: '12 Weeks (Part-Time / Full-Time)',
    cohortStatus: 'Next Cohort Starting Soon',
    description: 'Learn modern product design from user research and wireframing to design tokens, interactive prototyping, and cross-functional handoff in Figma.',
    icon: 'Palette',
    skillsGained: ['Figma Mastery', 'User Research & Personas', 'Information Architecture', 'Design Systems & Tokens', 'Micro-Interactions', 'Client Presentations'],
    practicalProjects: [
      'Multi-currency fintech mobile wallet (iOS & Android)',
      'High-density enterprise SaaS data dashboard',
      'End-to-end design system with complete components library'
    ],
    modulesCount: 10,
    careerPath: 'Junior to Mid-Level Product Designer, UI/UX Specialist',
    assessmentType: 'Portfolio Defense & Real Client Brief Assessment',
    tuition: '$240 or 3 installments of $85'
  },
  {
    id: 'course-cybersecurity',
    title: 'Practical Cybersecurity & Threat Defense',
    category: 'Cybersecurity',
    level: 'Beginner → Advanced',
    duration: '14 Weeks',
    cohortStatus: 'Enrolling Now',
    description: 'Gain practical offensive and defensive skills: network analysis, vulnerability assessment, SIEM configuration, web app security, and incident response.',
    icon: 'ShieldCheck',
    skillsGained: ['Network Security', 'Wireshark & Packet Analysis', 'Linux Hardening', 'SIEM & SOC Workflows', 'OWASP Top 10 Mitigation', 'Incident Response Runbooks'],
    practicalProjects: [
      'Simulated enterprise network penetration audit',
      'SOC telemetry setup with alerts & log analysis in Splunk',
      'Web vulnerability assessment report for an e-commerce API'
    ],
    modulesCount: 12,
    careerPath: 'SOC Analyst (Tier 1/2), Security Analyst, InfoSec Specialist',
    assessmentType: 'Hands-on CTF (Capture The Flag) & Security Audit Exam',
    tuition: '$280 or 3 installments of $99'
  },
  {
    id: 'course-data-analytics',
    title: 'Data Analytics & Business Intelligence',
    category: 'Data & AI',
    level: 'Beginner → Advanced',
    duration: '12 Weeks',
    cohortStatus: 'Open for Applications',
    description: 'Transform raw data into strategic business leverage using advanced Excel modeling, production SQL, Python analysis, and executive Power BI dashboards.',
    icon: 'BarChart3',
    skillsGained: ['Advanced SQL (CTEs, Window Functions)', 'Data Cleaning with Python & Pandas', 'Power BI Modeling & DAX', 'Business Metrics & KPI Frameworks', 'Storytelling with Data'],
    practicalProjects: [
      'Retail customer retention and churn prediction dashboard',
      'Automated financial modeling & cash-flow forecast tool',
      'Executive KPI performance portal using live database feeds'
    ],
    modulesCount: 10,
    careerPath: 'Data Analyst, BI Developer, Revenue Operations Analyst',
    assessmentType: 'Live Executive Presentation & SQL Capstone Exam',
    tuition: '$250 or 3 installments of $89'
  },
  {
    id: 'course-web-dev',
    title: 'Modern Frontend & Web Development',
    category: 'Software Engineering',
    level: 'Beginner → Advanced',
    duration: '14 Weeks',
    cohortStatus: 'Next Cohort Starting Soon',
    description: 'Build fast, responsive web applications using HTML5, modern JavaScript/TypeScript, React 19, Tailwind CSS, REST/GraphQL APIs, and state management.',
    icon: 'Globe',
    skillsGained: ['TypeScript Fundamentals', 'React 19 & Hooks', 'Next.js App Router', 'Tailwind CSS & Responsive Layouts', 'REST & GraphQL Integration', 'State Management (Zustand)'],
    practicalProjects: [
      'Full-featured real-time marketplace app',
      'Collaborative team task management kanban board',
      'Interactive data visualization dashboard with dark/light themes'
    ],
    modulesCount: 12,
    careerPath: 'Frontend Developer, Web Application Engineer',
    assessmentType: 'Code Review by Senior Tech Leads & Production Deployment',
    tuition: '$260 or 3 installments of $92'
  },
  {
    id: 'course-software-dev',
    title: 'Full Stack Software Engineering',
    category: 'Software Engineering',
    level: 'Beginner → Advanced',
    duration: '16 Weeks',
    cohortStatus: 'Enrolling Now',
    description: 'Master end-to-end software development: frontend React/Next.js, backend Node.js/Python, database architecture (Postgres, Redis), Docker, and CI/CD pipelines.',
    icon: 'Terminal',
    skillsGained: ['System Architecture & Clean Code', 'Node.js & Express / NestJS', 'PostgreSQL & Relational Data Modeling', 'Authentication & JWT / OAuth', 'Docker & Cloud Deployment', 'CI/CD Pipelines'],
    practicalProjects: [
      'Multi-tenant SaaS platform with subscription billing & webhooks',
      'Real-time chat & notifications server with WebSockets & Redis',
      'Production-grade RESTful API with automated integration tests'
    ],
    modulesCount: 14,
    careerPath: 'Full Stack Developer, Software Engineer, Backend Engineer',
    assessmentType: 'Architecture Review & 48-Hour Capstone Hackathon',
    tuition: '$320 or 3 installments of $115'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    title: 'Techstack Talent Portal',
    category: 'SaaS Products',
    description: 'A cloud-based talent matching and screening suite for companies hiring African technology professionals.',
    badge: 'Flagship Platform',
    icon: 'Users',
    features: ['Technical assessment scoring', 'Asynchronous video interviews', 'Automated timezone matching', 'Compliance & local contract support'],
    stats: '1,200+ screened profiles',
    status: 'Live',
    pricing: 'Enterprise & Pay-per-hire'
  },
  {
    id: 'prod-2',
    title: 'DevKit Pro Africa',
    category: 'Digital Tools',
    description: 'Pre-configured boilerplate templates and starter kits designed for African developers building payment and identity-ready apps.',
    badge: 'Popular',
    icon: 'Layers',
    features: ['Paystack & Flutterwave pre-wired SDKs', 'Next.js 15 & Tailwind v4 scaffolding', 'Supabase & Firebase auth templates', 'Ready-made KYC & verification UI'],
    stats: '4,800+ downloads',
    status: 'Live',
    pricing: 'Free & Pro License ($29)'
  },
  {
    id: 'prod-3',
    title: 'African Tech Salary & Talent Benchmark',
    category: 'Business Tools',
    description: 'Real-time verified compensation data, hiring trends, and regional skill distributions across 8 African tech hubs.',
    badge: 'Annual Report',
    icon: 'TrendingUp',
    features: ['Country-by-country salary grids', 'Currency conversion & inflation adjustments', 'Remote vs on-site rate comparisons', 'Talent density heatmaps'],
    stats: 'Used by 150+ international firms',
    status: 'Live',
    pricing: 'Complimentary Digital Download'
  },
  {
    id: 'prod-4',
    title: 'Academy LMS & Code Sandbox',
    category: 'Educational Resources',
    description: 'Interactive browser-based coding environments and milestone assessment system built for practical project-based learning.',
    badge: 'Proprietary',
    icon: 'BookOpen',
    features: ['In-browser code compilation & tests', 'Automated mentor feedback loops', 'Interactive coding quizzes', 'Verified digital credential minting'],
    stats: '94% course completion rate',
    status: 'Live',
    pricing: 'Included with Academy Enrollment'
  },
  {
    id: 'prod-5',
    title: 'Design System Starter Kits',
    category: 'Templates',
    description: 'Production-ready Figma UI component libraries and design tokens engineered for modern African web and mobile products.',
    badge: 'New Release',
    icon: 'Component',
    features: ['300+ accessible components', 'WCAG AA contrast verified', 'Auto-layout 5.0 ready', 'Exportable to Tailwind tokens'],
    stats: 'Used by 80+ designers',
    status: 'Live',
    pricing: '$39 one-time'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'serv-web-dev',
    title: 'Web Development',
    category: 'Engineering',
    description: 'High-performance, search-optimized web applications, responsive customer portals, and web architectures built with Next.js, React, and TypeScript.',
    deliverables: ['Custom Web Applications', 'E-commerce & Payments Integration', 'Speed & Performance Optimization', 'CMS & Headless Implementations'],
    icon: 'Globe',
    typicalTimeline: '3 – 8 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'serv-ui-ux',
    title: 'UI/UX Design',
    category: 'Product Design',
    description: 'Human-centered product design, design systems, and clickable prototypes tested with real users to ensure intuitive engagement and high conversion.',
    deliverables: ['UX Research & User Journeys', 'Wireframing & High-Fidelity Mockups', 'Interactive Figma Prototypes', 'Design Systems & Component Libraries'],
    icon: 'Layout',
    typicalTimeline: '2 – 6 Weeks',
    technologies: ['Figma', 'Miro', 'Design Tokens', 'UserTesting', 'Principle']
  },
  {
    id: 'serv-software-dev',
    title: 'Software Development',
    category: 'Engineering',
    description: 'Custom full-stack software, mobile applications (iOS & Android), robust REST/GraphQL APIs, and scalable cloud-native architectures.',
    deliverables: ['End-to-End Custom Software', 'Mobile Applications (React Native/Flutter)', 'Scalable Backend APIs & Microservices', 'Third-Party Integration Hubs'],
    icon: 'Code2',
    typicalTimeline: '6 – 14 Weeks',
    technologies: ['Node.js', 'Python', 'Go', 'React Native', 'AWS', 'Docker']
  },
  {
    id: 'serv-data',
    title: 'Data Solutions',
    category: 'Analytics & AI',
    description: 'Modern data stack setup, automated ETL pipelines, executive dashboards, predictive data models, and business intelligence reporting.',
    deliverables: ['Automated ETL / ELT Pipelines', 'Power BI & Tableau Executive Dashboards', 'Data Warehouse Architecture (BigQuery/Snowflake)', 'Predictive Analytics & Customer Segmentation'],
    icon: 'Database',
    typicalTimeline: '3 – 8 Weeks',
    technologies: ['SQL', 'Python', 'Power BI', 'dbt', 'PostgreSQL', 'BigQuery']
  },
  {
    id: 'serv-cybersecurity',
    title: 'Cybersecurity',
    category: 'Security & Compliance',
    description: 'Vulnerability assessments, penetration testing, compliance posture reviews (ISO 27001, NDPR, GDPR), and infrastructure security hardening.',
    deliverables: ['Penetration Testing & Vulnerability Scans', 'Infrastructure Hardening Guidelines', 'Security Compliance Audits', 'Incident Response Playbooks'],
    icon: 'Shield',
    typicalTimeline: '2 – 4 Weeks',
    technologies: ['Burp Suite', 'OWASP Standards', 'Splunk', 'Kali Linux', 'Cloud Security Posture']
  },
  {
    id: 'serv-digital-transformation',
    title: 'Digital Transformation',
    category: 'Consulting & Strategy',
    description: 'Strategic technology advisory for legacy businesses transitioning to modern cloud systems, paperless operations, and agile workflows.',
    deliverables: ['Technology Architecture Roadmaps', 'Workflow Automation & Cloud Migration', 'Internal Staff Up-skilling Programs', 'Vendor & Tool Evaluation'],
    icon: 'RefreshCw',
    typicalTimeline: '4 – 12 Weeks',
    technologies: ['Cloud Migration', 'API Modernization', 'Workflow Automation', 'Agile Consulting']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    type: 'Learner',
    quote: 'Techstackgist helped me turn what I was learning into real projects I could show employers. The hands-on project reviews gave me the confidence to ace technical interviews.',
    author: 'Emmanuel Adeyemi',
    role: 'Frontend Developer (Alumni)',
    locationOrCompany: 'Now at Kuda Bank, Lagos',
    countryFlag: '🇳🇬',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    type: 'Professional',
    quote: 'The platform helped me present my skills professionally and access opportunities. Being in the screened talent network connected me with a remote German healthtech startup.',
    author: 'Faith Mwende',
    role: 'Senior UI/UX Specialist',
    locationOrCompany: 'Remote Talent, Nairobi',
    countryFlag: '🇰🇪',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    type: 'Company',
    quote: 'We needed technical talent and Techstackgist helped us identify candidates who matched our requirements. The screening process saved our hiring committee weeks of trial and error.',
    author: 'Julian Vance',
    role: 'VP of Engineering',
    locationOrCompany: 'Stratum Digital, London UK',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  }
];

export const NETWORK_CORRIDORS = [
  { from: 'Lagos', fromCountry: 'Nigeria 🇳🇬', to: 'London', toCountry: 'UK 🇬🇧', distance: '5,000 km', timeDiff: '+0h / +1h', activeTalent: '340+ Pros' },
  { from: 'Nairobi', fromCountry: 'Kenya 🇰🇪', to: 'Berlin', toCountry: 'Germany 🇩🇪', distance: '6,300 km', timeDiff: '+1h / +2h', activeTalent: '210+ Pros' },
  { from: 'Accra', fromCountry: 'Ghana 🇬🇭', to: 'Amsterdam', toCountry: 'Netherlands 🇳🇱', distance: '5,200 km', timeDiff: '+1h / +2h', activeTalent: '160+ Pros' },
  { from: 'Abuja', fromCountry: 'Nigeria 🇳🇬', to: 'Toronto', toCountry: 'Canada 🇨🇦', distance: '8,400 km', timeDiff: '-5h', activeTalent: '190+ Pros' },
  { from: 'Cape Town', fromCountry: 'South Africa 🇿🇦', to: 'New York', toCountry: 'USA 🇺🇸', distance: '12,500 km', timeDiff: '-6h', activeTalent: '280+ Pros' }
];
