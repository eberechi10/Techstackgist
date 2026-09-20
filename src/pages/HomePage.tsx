import React from 'react';
import { PageId, TalentProfile, Course, ServiceItem } from '../types';
import { 
  TALENT_PROFILES, 
  COURSES, 
  PRODUCTS, 
  SERVICES, 
  TESTIMONIALS 
} from '../data/mockData';
import { HeroNetworkVisual } from '../components/HeroNetworkVisual';
import { GlobalNetworkVisual } from '../components/GlobalNetworkVisual';
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
  TrendingUp,
  Cpu,
  Layers
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
  return (
    <div id="homepage-content" className="w-full">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section id="hero-section" className="pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden relative">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Positioning Copy */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>The Pan-African Technology Ecosystem</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Africa&apos;s technology platform for <span className="text-blue-600">skills, solutions & talent.</span>
              </h1>

              {/* Supporting text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Learn practical technology skills, access digital products and services, and discover skilled African professionals ready to work with companies around the world.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  id="hero-explore-tsg-btn"
                  onClick={() => {
                    const el = document.getElementById('ecosystem-strip');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Techstackgist</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>

                <button
                  id="hero-hire-talent-btn"
                  onClick={() => onOpenHireModal()}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Hire Tech Talent</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Micro proof points */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium border-t border-slate-200/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Screened in Software, UX & Data</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Direct Global Placement</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-600" />
                  <span>Lagos · Nairobi · Accra · Kigali · Cape Town</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Network Interface */}
            <div className="lg:col-span-6">
              <HeroNetworkVisual />
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
      {/* 10. TESTIMONIALS */}
      {/* ============================================================ */}
      <section id="testimonials-section" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
              Verified Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted across the ecosystem.
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From learners breaking into tech to senior engineers and international hiring executives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. FINAL CTA */}
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
