export type PageId = 
  | 'home' 
  | 'products' 
  | 'services' 
  | 'academy' 
  | 'talent' 
  | 'companies' 
  | 'about' 
  | 'contact';

export interface TalentProfile {
  id: string;
  name: string;
  role: string;
  category: 'Software Engineering' | 'Design & UX' | 'Data & AI' | 'Cybersecurity' | 'DevOps & Cloud';
  country: string;
  flag: string;
  city: string;
  avatar: string;
  skills: string[];
  experienceYears: number;
  rateHourly: number;
  available: boolean;
  statusText: string;
  bio: string;
  vettingScore: number;
  timezone: string;
  languages: string[];
  featuredProjects: {
    title: string;
    description: string;
    tech: string[];
    impact: string;
  }[];
  educationOrCert: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner → Advanced';
  duration: string;
  cohortStatus: string;
  description: string;
  icon: string;
  skillsGained: string[];
  practicalProjects: string[];
  modulesCount: number;
  careerPath: string;
  assessmentType: string;
  tuition: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: 'SaaS Products' | 'Digital Tools' | 'Templates' | 'Educational Resources' | 'Business Tools';
  description: string;
  badge?: string;
  icon: string;
  features: string[];
  stats: string;
  status: 'Live' | 'Beta' | 'Early Access';
  pricing: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  icon: string;
  typicalTimeline: string;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  type: 'Learner' | 'Professional' | 'Company';
  quote: string;
  author: string;
  role: string;
  locationOrCompany: string;
  countryFlag?: string;
  avatar: string;
}
