import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { PageId, TalentProfile, Course, ServiceItem } from '../types';
import { 
  TALENT_PROFILES, 
  COURSES, 
  PRODUCTS, 
  SERVICES, 
  TESTIMONIALS,
  BUSINESS_SUCCESS_STORIES,
  FAQ_ITEMS
} from '../data/mockData';
import { GlobalNetworkVisual } from '../components/GlobalNetworkVisual';
import techProOnDuty from '../assets/images/tech_pro_on_duty_1792049321147.jpg';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Globe, 
  Zap, 
  Users, 
  GraduationCap, 
  Code2, 
  Box, 
  Building2, 
  Sparkles, 
  Star,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Cpu,
  Layers,
  Quote,
  Building,
  Clock,
  Award,
  Check,
  ExternalLink,
  Briefcase,
  HelpCircle,
  Search,
  X,
  MessageSquare,
  Headphones,
  Lock
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenHireModal: (talent?: TalentProfile) => void;
  onOpenTalentDetail: (talent: TalentProfile) => void;
  onOpenStartProject: (service?: ServiceItem) => void;
  onOpenCourseEnroll: (course: Course) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenHireModal,
  onOpenTalentDetail,
  onOpenStartProject,
  onOpenCourseEnroll
}) => {
  useSEO({
    title: 'Techstackgist | African Tech Talent, Academy & Solutions',
    description: 'Techstackgist connects people and businesses with digital products, professional services, practical training, and vetted African tech talent.',
    canonicalPath: '/',
    keywords: ['African tech platform', 'hire African engineers', 'software solutions Nigeria', 'tech training Africa', 'remote developers']
  });

  const [storyFilter, setStoryFilter] = useState<string>('All');
  const [showLearnerStories, setShowLearnerStories] = useState<boolean>(false);

  // FAQ Accordion & Search State
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-hire-vetting', 'faq-hire-speed']);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const expandAllFiltered = (items: typeof FAQ_ITEMS) => {
    setOpenFaqIds(items.map(item => item.id));
  };

  const collapseAllFaqs = () => {
    setOpenFaqIds([]);
  };

  const handleFaqAction = (target: string) => {
    if (target === 'hire') {
      onOpenHireModal();
    } else if (target === 'services') {
      onOpenStartProject();
    } else if (target === 'talent' || target === 'courses' || target === 'about') {
      onNavigate(target as PageId);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    const matchesCategory = faqCategory === 'All' || faq.category === faqCategory;
    const matchesSearch = faqSearch.trim() === '' || 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      (faq.badge && faq.badge.toLowerCase().includes(faqSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="homepage-content" className="w-full">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section id="hero-section" className="pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden relative bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
            
            {/* Left Column: Core Positioning & High-Converting Copy */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                {/* Category / Sub-brand overline */}
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  <span>The Pan-African Technology Ecosystem</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-slate-500 font-medium">Global Delivery</span>
                </div>

                {/* Compelling Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                  Scale your engineering with Africa&apos;s <span className="text-blue-600">vetted tech talent</span> & digital solutions.
                </h1>

                {/* Subheadline emphasizing the value proposition */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Hire top 3% African software engineers, deploy production-ready digital products, and access industry-grade training. Matched in under 72 hours with zero hiring friction, verified code quality, and seamless remote collaboration.
                </p>

                {/* Action Buttons: Primary 'Get Started' Call-to-Action on one line */}
                <div className="flex flex-row flex-wrap items-center gap-3.5 pt-2">
                  <button
                    id="hero-get-started-btn"
                    onClick={() => onOpenHireModal()}
                    className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-md shadow-blue-600/25 transition-all inline-flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-blue-600/30 active:scale-[0.99] whitespace-nowrap shrink-0"
                  >
                    <span className="whitespace-nowrap">Get Started</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <button
                    id="hero-explore-talent-btn"
                    onClick={() => onNavigate('talent')}
                    className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-xs transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] whitespace-nowrap shrink-0"
                  >
                    <span className="whitespace-nowrap">Explore Talent</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-400 shrink-0" />
                  </button>
                </div>
              </div>

              {/* Micro proof points */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium border-t border-slate-200/80 mt-auto">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Top 3% Vetted Talent</span>
                </div>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>&lt; 72h Candidate Matching</span>
                </div>
                <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>Lagos · Nairobi · Accra · Awada HQ</span>
                </div>
              </div>

            </div>

            {/* Right Column: African Tech Professional on Duty (Aligned in height with Left Column) */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="relative w-full h-full rounded-2xl bg-white p-2.5 sm:p-3 shadow-2xl border border-slate-200/90 group transition-all duration-300 hover:shadow-blue-500/10 flex flex-col justify-between">
                
                {/* Tech Professional On Duty Visual Frame */}
                <div className="relative rounded-xl overflow-hidden flex-1 min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] w-full bg-slate-900 border border-slate-100 flex flex-col justify-between">
                  <img
                    src={techProOnDuty}
                    alt="African tech professional on duty at Techstackgist engineering workspace"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  
                  {/* Subtle gradient bottom overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

                  {/* Top Left Floating Badge: Active Status */}
                  <div className="relative z-10 m-3.5 self-start bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-white shadow-lg pointer-events-none flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <div className="text-[11px] leading-tight text-left">
                      <span className="font-semibold block text-white">Tech Professional on Duty</span>
                      <span className="text-slate-400 text-[10px]">Active Engineering Workspace</span>
                    </div>
                  </div>

                  {/* Top Right: Top 3% Vetted Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 bg-blue-600/95 backdrop-blur-md text-white px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Top 3% Vetted</span>
                  </div>

                  {/* Bottom Info Bar Overlay */}
                  <div className="relative z-10 m-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-white flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0">
                        TSG
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-white leading-tight">
                          Enterprise Full-Stack & Cloud Architecture
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Production-grade delivery · Lagos · Nairobi · Awada HQ
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenHireModal()}
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer shrink-0 hover:bg-blue-500 active:scale-95"
                    >
                      <span>Hire Talent</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Sub-card Verification Summary */}
                <div className="mt-2.5 px-3 py-1.5 flex items-center justify-between text-xs text-slate-500 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Live pair programming & architecture verified</span>
                  </span>
                  <span className="font-mono text-[11px] font-medium text-slate-400">
                    99.4% Match Accuracy
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TRUST / ECOSYSTEM STRIP */}
      {/* ============================================================ */}
      <section id="ecosystem-strip" className="py-14 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything you need to build, learn and hire in technology.
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Four unified pillars bridging education, enterprise digital transformation, and global recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* 1. Products */}
            <div 
              onClick={() => onNavigate('products')}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Box className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Products
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Digital tools, resources, and proprietary software products built for real businesses.
              </p>
            </div>

            {/* 2. Services */}
            <div 
              onClick={() => onNavigate('services')}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Services
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Web development, UI/UX, cybersecurity, data, and complete digital solutions delivered by senior teams.
              </p>
            </div>

            {/* 3. Academy */}
            <div 
              onClick={() => onNavigate('academy')}
              className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Academy
                </h3>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Practical technology training from beginner to job-ready, anchored in production portfolio projects.
              </p>
            </div>

            {/* 4. Talent */}
            <div 
              onClick={() => onNavigate('talent')}
              className="p-6 rounded-2xl bg-blue-50/70 hover:bg-white border border-blue-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Talent
                </h3>
                <span className="text-[10px] uppercase font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                  Screened
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                A growing pool of screened, assessed African technology professionals ready for global contracts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TALENT SECTION — MAJOR FEATURE */}
      {/* ============================================================ */}
      <section id="talent-major-section" className="py-20 lg:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 text-blue-800 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Featured Talent Pool
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Great technology talent shouldn&apos;t be limited by geography.
              </h2>
              <p className="text-base text-slate-600 mt-3 leading-relaxed">
                Techstackgist connects companies with skilled African professionals across software development, UI/UX, data, cybersecurity and other technology fields.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="explore-talent-grid-btn"
                onClick={() => onNavigate('talent')}
                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-sm font-semibold shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Explore Talent
              </button>
              <button
                id="hire-african-talent-cta-btn"
                onClick={() => onOpenHireModal()}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Hire African Talent</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animated Talent Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TALENT_PROFILES.slice(0, 6).map((talent) => (
              <div
                key={talent.id}
                onClick={() => onOpenTalentDetail(talent)}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  
                  {/* Top Bar: Role & Availability */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={talent.avatar} 
                        alt={talent.name}
                        className="w-13 h-13 rounded-xl object-cover border border-slate-200 group-hover:ring-2 group-hover:ring-blue-500 transition-all" 
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {talent.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                          <span className="font-semibold text-slate-900">{talent.role}</span>
                          <span>•</span>
                          <span>{talent.country} {talent.flag}</span>
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Available
                    </span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {talent.skills.slice(0, 4).map((s) => (
                      <span 
                        key={s}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                    {talent.skills.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-xs">
                        +{talent.skills.length - 4}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {talent.bio}
                  </p>
                </div>

                {/* Card Footer: Vetting & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>TSG Score: <strong className="text-slate-900">{talent.vettingScore}%</strong></span>
                  </div>

                  <span className="text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    View Profile <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Talent Banner Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base text-white">
                Looking for a custom squad or specific tech stack?
              </h4>
              <p className="text-xs text-slate-300">
                Tell us your role requirements. We present 3 evaluated candidates in &lt; 48 hours.
              </p>
            </div>
            <button
              onClick={() => onOpenHireModal()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shrink-0 cursor-pointer"
            >
              Request Candidate Shortlist
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ACADEMY SECTION */}
      {/* ============================================================ */}
      <section id="academy-section" className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              Not Just Certificates — Real Capability
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Learn skills that take you somewhere.
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Every course is structured around real-world client briefs, production codebases, and portfolio defense evaluated by practicing industry tech leads.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => (
              <div 
                key={course.id}
                className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800">
                      {course.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-1.5 border-t border-slate-200 pt-3 mb-5 text-xs text-slate-700">
                    <div className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{course.level} pathway</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>3 production-grade portfolio projects</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{course.assessmentType}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Direct pipeline to TSG Talent Network</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    {course.tuition}
                  </span>
                  <button
                    onClick={() => onOpenCourseEnroll(course)}
                    className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    View Syllabus & Enroll
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('academy')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-slate-900 text-sm font-semibold shadow-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <span>Explore All Academy Cohorts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PRODUCTS SECTION */}
      {/* ============================================================ */}
      <section id="products-section" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
              <Box className="w-3.5 h-3.5" />
              Software & Assets
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Technology products built for real people and businesses.
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              SaaS suites, developer toolkits, design templates, and operational benchmark resources designed to eliminate friction in African technology development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod) => (
              <div 
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      {prod.category}
                    </span>
                    {prod.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {prod.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {prod.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-slate-100 pt-3 mb-4 text-xs text-slate-600">
                    {prod.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{prod.stats}</span>
                  <button
                    onClick={() => onNavigate('products')}
                    className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. SERVICES SECTION */}
      {/* ============================================================ */}
      <section id="services-section" className="py-20 lg:py-28 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-3">
                <Code2 className="w-3.5 h-3.5" />
                Technical Execution
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Need technology? We build it.
              </h2>
              <p className="text-base text-slate-600 mt-2">
                From web applications and enterprise design systems to cybersecurity audits and cloud architectures, our specialized delivery squads engineer durable solutions.
              </p>
            </div>

            <button
              onClick={() => onOpenStartProject()}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold shadow-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 font-bold">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  <div className="border-t border-slate-200 pt-3 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {srv.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Timeline: <strong>{srv.typicalTimeline}</strong></span>
                  <button
                    onClick={() => onOpenStartProject(srv)}
                    className="text-blue-600 font-bold hover:text-blue-800 cursor-pointer"
                  >
                    Request Scope →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. GLOBAL COMPANIES SECTION (DARK PREMIUM) */}
      {/* ============================================================ */}
      <section id="companies-section" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
        
        {/* Background glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              For Global Companies & Fast-Moving Teams
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Build your team with Techstackgist.
            </h2>
            <p className="text-base text-slate-400 mt-3 leading-relaxed">
              Access a growing network of African technology professionals who are trained, assessed and ready for global opportunities. Zero payroll friction, full IP protection, and guaranteed timezone overlap.
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative">
              <div className="text-3xl font-extrabold text-blue-400 font-mono mb-3">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Tell us what you need
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specify your technical requirements, team structure, experience tier, and target timeline. We handle candidate matching instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative">
              <div className="text-3xl font-extrabold text-blue-400 font-mono mb-3">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                We source & screen
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every candidate is evaluated through automated code challenges, real project audits, and live communication assessments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative">
              <div className="text-3xl font-extrabold text-blue-400 font-mono mb-3">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Meet your candidates
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interview curated finalists in 48–72 hours. Onboard with localized compliance, automated contracts, and zero currency friction.
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-blue-950/60 border border-blue-800/80 gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-bold text-white">
                Ready to interview qualified African software engineers or designers?
              </h4>
              <p className="text-xs text-blue-200">
                Receive 2–3 vetted profiles tailored to your exact stack within 48 hours.
              </p>
            </div>

            <button
              onClick={() => onOpenHireModal()}
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-extrabold text-sm transition-all shadow-md shrink-0 cursor-pointer"
            >
              Hire Tech Talent
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. WHY TECHSTACKGIST (ECOSYSTEM MATRIX) */}
      {/* ============================================================ */}
      <section id="why-tsg-section" className="py-20 lg:py-28 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              Unified Flywheel
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One ecosystem. Multiple possibilities.
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Unlike fragmented bootcamps or disconnected freelance marketplaces, Techstackgist forms a single continuous loop connecting learning, verification, building, and global careers.
            </p>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px] rounded-2xl overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-4 px-6 text-sm font-bold w-1/3">
                    For learners
                  </th>
                  <th className="py-4 px-6 text-sm font-bold w-1/3 border-l border-slate-800">
                    For professionals
                  </th>
                  <th className="py-4 px-6 text-sm font-bold w-1/3 border-l border-slate-800">
                    For companies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 text-slate-700">
                    <span className="font-semibold text-slate-900 block mb-0.5">Learn practical skills</span>
                    <span className="text-xs text-slate-500">Not just theory—real development workflows and modern frameworks.</span>
                  </td>
                  <td className="py-4 px-6 text-slate-700 border-l border-slate-200">
                    <span className="font-semibold text-slate-900 block mb-0.5">Find opportunities</span>
                    <span className="text-xs text-slate-500">Access verified remote contracts with vetted international tech companies.</span>
                  </td>
                  <td className="py-4 px-6 text-slate-700 border-l border-slate-200">
                    <span className="font-semibold text-slate-900 block mb-0.5">Find talent</span>
                    <span className="text-xs text-slate-500">Discover pre-screened African developers, designers, and data pros.</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 text-slate-700">
                    <span className="font-semibold text-slate-900 block mb-0.5">Build projects</span>
                    <span className="text-xs text-slate-500">Deploy real applications to production environments instead of toy demos.</span>
                  </td>
                  <td className="py-4 px-6 text-slate-700 border-l border-slate-200">
                    <span className="font-semibold text-slate-900 block mb-0.5">Build your portfolio</span>
                    <span className="text-xs text-slate-500">Structured code defense, verified pull requests, and client reviews.</span>
                  </td>
                  <td className="py-4 px-6 text-slate-700 border-l border-slate-200">
                    <span className="font-semibold text-slate-900 block mb-0.5">Reduce hiring effort</span>
                    <span className="text-xs text-slate-500">Skip sifting through hundreds of untrusted resumes. Get matched in &lt; 48 hrs.</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 text-slate-700">
                    <span className="font-semibold text-slate-900 block mb-0.5">Get assessed</span>
                    <span className="text-xs text-slate-500">Benchmark your technical problem-solving with transparent scoring.</span>
                  </td>
                  <td className="py-4 px-6 text-slate-700 border-l border-slate-200">
                    <span className="font-semibold text-slate-900 block mb-0.5">Get discovered</span>
                    <span className="text-xs text-slate-500">Featured in our vetted talent directory viewed by international recruiters.</span>
                  </td>
                  <td className="py-4 px-6 text-slate-700 border-l border-slate-200">
                    <span className="font-semibold text-slate-900 block mb-0.5">Access African talent</span>
                    <span className="text-xs text-slate-500">Tap into the world&apos;s fastest-growing, highly motivated developer demographic.</span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. GLOBAL TALENT NETWORK VISUAL */}
      {/* ============================================================ */}
      <section id="network-visual-section" className="py-20 lg:py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlobalNetworkVisual />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. SUCCESS STORIES (BUSINESS HIRING OUTCOMES) */}
      {/* ============================================================ */}
      <section id="success-stories-section" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3 shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-blue-700" />
              <span>Success Stories · Verified Business Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              How companies scale faster with Techstackgist talent.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore authentic hiring testimonials, retention milestones, and business impact from enterprises, international scale-ups, and tech founders who hired vetted African talent through Techstackgist.
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
            {[
              { id: 'All', label: 'All Businesses', count: BUSINESS_SUCCESS_STORIES.length },
              { id: 'Fintech', label: 'Fintech & Payments', count: 1 },
              { id: 'Logistics', label: 'Logistics & Telemetry', count: 1 },
              { id: 'Health', label: 'Digital Health & UX', count: 1 },
              { id: 'E-Commerce', label: 'E-Commerce', count: 1 }
            ].map((tab) => {
              const isActive = storyFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setStoryFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                    isActive ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Business Success Stories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {BUSINESS_SUCCESS_STORIES
              .filter((story) => {
                if (storyFilter === 'All') return true;
                if (storyFilter === 'Fintech') return story.industry.includes('Fintech');
                if (storyFilter === 'Logistics') return story.industry.includes('Freight') || story.industry.includes('Telemetry');
                if (storyFilter === 'Health') return story.industry.includes('Health');
                if (storyFilter === 'E-Commerce') return story.industry.includes('E-Commerce');
                return true;
              })
              .map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Company & Verification Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">
                            {story.companyName}
                          </h3>
                          <span className="text-xs text-slate-500 font-medium">
                            · {story.companyLocation}
                          </span>
                        </div>
                        <span className="inline-block mt-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                          {story.industry}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200/70">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{story.verifiedHireBadge}</span>
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="my-5">
                      <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-blue-600/30 shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed italic">
                          &ldquo;{story.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Verified Hiring Impact Metrics */}
                    <div className="grid grid-cols-3 gap-2.5 my-5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      {story.metrics.map((m, idx) => (
                        <div key={idx} className="text-center p-2 rounded-lg bg-white shadow-2xs border border-slate-200/60">
                          <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Vetted Talent Hired by this Business */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-blue-600" />
                        <span>African Talent Hired through Techstackgist:</span>
                      </p>
                      <div className="space-y-2.5">
                        {story.hiredTalents.map((hired, hIdx) => {
                          const matchedProfile = TALENT_PROFILES.find((tp) => tp.name === hired.name);
                          return (
                            <div 
                              key={hIdx}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src={hired.avatar}
                                  alt={hired.name}
                                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-2xs"
                                />
                                <div>
                                  <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                                    <span>{hired.name}</span>
                                    <span>{hired.flag}</span>
                                  </div>
                                  <p className="text-[11px] text-slate-500">
                                    {hired.role}
                                  </p>
                                </div>
                              </div>

                              {matchedProfile && (
                                <button
                                  onClick={() => onOpenTalentDetail(matchedProfile)}
                                  className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-blue-300 shadow-2xs flex items-center gap-1 transition-all cursor-pointer"
                                >
                                  <span>View Profile</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Client Executive Card Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.clientAvatar}
                        alt={story.clientName}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {story.clientName}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {story.clientRole} · {story.companyName}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenHireModal()}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
                    >
                      <span>Hire Similar Talent</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
          </div>

          {/* Hiring Trust & Guarantee Statistics Banner */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  &lt; 72 Hours
                </div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Average Time to Candidate Shortlist
                </div>
              </div>
              <div className="pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  99.4%
                </div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Client-Talent Retention Rate
                </div>
              </div>
              <div className="pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                  Top 3%
                </div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Pre-Vetted African Engineers & Designers
                </div>
              </div>
              <div className="pt-3 md:pt-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  35% – 45%
                </div>
                <div className="text-xs text-slate-600 mt-1 font-medium">
                  Typical Cost Savings vs US/EU Agencies
                </div>
              </div>
            </div>
          </div>

          {/* Optional Toggle for Community & Learner Perspectives */}
          <div className="text-center">
            <button
              onClick={() => setShowLearnerStories(!showLearnerStories)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
            >
              <span>{showLearnerStories ? 'Hide Alumni & Learner Stories' : 'Also view Alumni & Learner Stories'}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${showLearnerStories ? 'rotate-90' : ''}`} />
            </button>

            {showLearnerStories && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left animate-in fade-in duration-300">
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-4">
                        {t.type} Perspective
                      </div>
                      <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <img 
                        src={t.avatar} 
                        alt={t.author} 
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="font-bold text-sm text-slate-900 flex items-center gap-1">
                          <span>{t.author}</span>
                          {t.countryFlag && <span>{t.countryFlag}</span>}
                        </div>
                        <div className="text-xs text-slate-500">
                          {t.role} · {t.locationOrCompany}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      {/* ============================================================ */}
      <section id="faq-section" className="py-20 lg:py-28 bg-white border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Clear Answers · Transparent Operations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently asked questions
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Everything you need to know about our 4-stage talent vetting, 14-day trial guarantee, technical training tracks, and IP protections.
            </p>

            {/* Interactive Search Bar */}
            <div className="mt-8 relative max-w-lg mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search questions (e.g. vetting, pricing, trial, time zones...)"
                  className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-xs"
                />
                {faqSearch && (
                  <button
                    onClick={() => setFaqSearch('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {[
                { id: 'All', label: 'All Questions', count: FAQ_ITEMS.length },
                { id: 'Hiring', label: 'Hiring & Talent', count: FAQ_ITEMS.filter(f => f.category === 'Hiring').length },
                { id: 'Training', label: 'Training & Academy', count: FAQ_ITEMS.filter(f => f.category === 'Training').length },
                { id: 'Services', label: 'Services & Engineering', count: FAQ_ITEMS.filter(f => f.category === 'Services').length },
                { id: 'Compliance', label: 'Billing & Compliance', count: FAQ_ITEMS.filter(f => f.category === 'Compliance').length }
              ].map(cat => {
                const isSelected = faqCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setFaqCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      isSelected ? 'bg-blue-700 text-blue-100' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Status bar: counts and expand/collapse all */}
            <div className="flex items-center justify-between text-xs text-slate-500 max-w-4xl mx-auto mt-6 px-1">
              <span>
                Showing <strong className="text-slate-700">{filteredFaqs.length}</strong> of {FAQ_ITEMS.length} questions
                {faqSearch && <span> for &ldquo;{faqSearch}&rdquo;</span>}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => expandAllFiltered(filteredFaqs)}
                  className="hover:text-blue-600 font-medium cursor-pointer transition-colors"
                >
                  Expand all
                </button>
                <span>·</span>
                <button
                  onClick={collapseAllFaqs}
                  className="hover:text-blue-600 font-medium cursor-pointer transition-colors"
                >
                  Collapse all
                </button>
              </div>
            </div>

          </div>

          {/* Accordion List */}
          <div className="max-w-4xl mx-auto space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No questions found matching your search</h3>
                <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                  We couldn&apos;t find any FAQs matching &ldquo;{faqSearch}&rdquo;. Try another term or reset your search.
                </p>
                <button
                  onClick={() => { setFaqSearch(''); setFaqCategory('All'); }}
                  className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Reset Search & Filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-blue-50/20 border-blue-200 shadow-sm'
                        : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                    >
                      <div className="flex-1 pr-2">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                            faq.category === 'Hiring' ? 'bg-blue-100 text-blue-700' :
                            faq.category === 'Training' ? 'bg-amber-100 text-amber-800' :
                            faq.category === 'Services' ? 'bg-purple-100 text-purple-700' :
                            'bg-emerald-100 text-emerald-700'
                          }`}>
                            {faq.category}
                          </span>
                          {faq.badge && (
                            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                              {faq.badge}
                            </span>
                          )}
                        </div>
                        <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? 'text-blue-950' : 'text-slate-900'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
                        isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        role="region"
                        className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200"
                      >
                        <div className="border-t border-slate-100 pt-4">
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {faq.quickAction && (
                            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                              <span className="text-xs text-slate-500 font-medium">Ready to take the next step?</span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleFaqAction(faq.quickAction!.target);
                                }}
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group"
                              >
                                <span>{faq.quickAction.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Trust & Guarantee Badges Grid */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="font-bold text-sm text-slate-900">Top 3% Vetted</div>
              <div className="text-xs text-slate-500 mt-1">Multi-stage system coding & architecture rigor</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <div className="font-bold text-sm text-slate-900">14-Day Trial</div>
              <div className="text-xs text-slate-500 mt-1">Zero-risk guarantee or immediate replacement</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-2.5">
                <Lock className="w-4 h-4" />
              </div>
              <div className="font-bold text-sm text-slate-900">100% IP Ownership</div>
              <div className="text-xs text-slate-500 mt-1">Direct repo & asset transfer under binding NDAs</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
                <Globe className="w-4 h-4" />
              </div>
              <div className="font-bold text-sm text-slate-900">Global Billing</div>
              <div className="text-xs text-slate-500 mt-1">Simple USD, EUR, or GBP consolidated invoice</div>
            </div>
          </div>

          {/* Still Have Questions Consultation Box */}
          <div className="max-w-4xl mx-auto mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white border border-slate-800 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-300 uppercase tracking-wider">
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Dedicated Support & Advisors</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Still have a specific question?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our engineering advisors and talent matching specialists are on hand to discuss your technical stack, timelines, or custom scope.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => onOpenHireModal()}
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/30 transition-colors cursor-pointer text-center"
                >
                  Talk to Talent Advisor
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors cursor-pointer text-center"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. FINAL CTA */}
      {/* ============================================================ */}
      <section id="final-cta-section" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            Join Techstackgist
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Where technology meets opportunity.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re learning, building, selling, or hiring, there&apos;s a place for you at Techstackgist.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenHireModal()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('talent')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all cursor-pointer"
            >
              Browse Talent Directory
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
