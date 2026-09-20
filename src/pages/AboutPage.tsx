import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Target, 
  Users, 
  GraduationCap, 
  Code2, 
  Box, 
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenHireModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenHireModal }) => {
  return (
    <div id="about-page-container" className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Our Mission & Platform Thesis
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Building Africa&apos;s comprehensive technology backbone.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Techstackgist was established to move beyond typical training centers. We operate as a unified African technology platform combining world-class digital products, bespoke software engineering services, practical hands-on education, and direct global talent placement.
          </p>
        </div>

        {/* The Core Manifesto */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white mb-16 border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 block mb-2">
              The Techstackgist Thesis
            </span>
            <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed text-slate-100">
              &ldquo;Tech skills. Digital solutions. Global talent. Techstackgist connects people and businesses with technology products, professional services, practical training, and skilled African tech talent.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
              Africa has the world&apos;s youngest, fastest-growing population. By pairing rigorous, production-grade training with vetted global matching and real software creation, we empower engineers and companies to build together without geographical boundaries.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            The Four Connected Pillars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">1. Global Talent Network</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Screened software engineers, product designers, data analysts, and cybersecurity specialists matched with global companies in under 72 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">2. Practical Academy</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Not certificates—verified capability. Students build, deploy, and defend real-world capstone software under the mentorship of senior engineers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">3. Digital Solutions & Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We design and build bespoke software, modern web portals, APIs, and security architectures for growth-stage startups and enterprises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">4. Technology Products</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                SaaS platforms, developer toolkits, benchmark datasets, and design systems that remove operational friction for technology creators.
              </p>
            </div>
          </div>
        </div>

        {/* Pan-African Hubs */}
        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Presence Across Major African Technology Corridors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-2xl block mb-1">🇳🇬</span>
              <strong className="text-xs text-slate-900 block">Lagos & Abuja</strong>
              <span className="text-[11px] text-slate-500">Nigeria</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-2xl block mb-1">🇰🇪</span>
              <strong className="text-xs text-slate-900 block">Nairobi</strong>
              <span className="text-[11px] text-slate-500">Kenya</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-2xl block mb-1">🇬🇭</span>
              <strong className="text-xs text-slate-900 block">Accra</strong>
              <span className="text-[11px] text-slate-500">Ghana</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-2xl block mb-1">🇷🇼</span>
              <strong className="text-xs text-slate-900 block">Kigali</strong>
              <span className="text-[11px] text-slate-500">Rwanda</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-2xl block mb-1">🇿🇦</span>
              <strong className="text-xs text-slate-900 block">Cape Town</strong>
              <span className="text-[11px] text-slate-500">South Africa</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-2xl block mb-1">🇬🇧</span>
              <strong className="text-xs text-slate-900 block">London / Remote</strong>
              <span className="text-[11px] text-slate-500">International Hub</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
