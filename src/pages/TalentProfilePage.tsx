import React from 'react';
import { useSEO } from '../utils/seo';
import { PageId, TalentProfile } from '../types';
import { 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Calendar,
  Languages,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Wifi,
  BatteryCharging,
  Cpu,
  Award,
  Check
} from 'lucide-react';
import { PRIMARY_CONTACT } from '../utils/email';

interface TalentProfilePageProps {
  talent: TalentProfile | null;
  onNavigate: (page: PageId) => void;
  onHireTalent: (talent: TalentProfile) => void;
}

export const TalentProfilePage: React.FC<TalentProfilePageProps> = ({
  talent,
  onNavigate,
  onHireTalent
}) => {
  useSEO({
    title: talent 
      ? `${talent.name} – ${talent.role} | Techstackgist`
      : 'Vetted Tech Professional Profile | Techstackgist',
    description: talent?.bio || 'Top 3% African technical professional vetted for production-grade engineering.',
    canonicalPath: '/talent-profile'
  });

  if (!talent) {
    return (
      <div className="w-full pt-32 pb-24 bg-slate-50 min-h-screen text-center">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No Profile Selected</h2>
          <p className="text-slate-600 mb-6 text-sm">Please select a talent profile from the talent directory.</p>
          <button
            onClick={() => onNavigate('talent')}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm cursor-pointer"
          >
            Go to Talent Directory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="talent-profile-page" className="w-full pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('talent')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Talent Directory</span>
          </button>
        </div>

        {/* Profile Header Hero Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src={talent.avatar}
                alt={talent.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-blue-500 shadow-xl"
              />
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {talent.name} – {talent.role}
                  </h1>
                  <span className="text-2xl">{talent.flag}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700 text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {talent.statusText}
                  </span>
                </div>
                
                <p className="text-blue-400 font-semibold text-base sm:text-lg mt-1">{talent.role} · Vetted by Techstackgist</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{talent.city}, {talent.country}</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{talent.timezone}</span>
                  </div>
                  <span className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span>{talent.experienceYears} Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Rate & Action */}
            <div className="w-full md:w-auto bg-slate-800/80 backdrop-blur-xs border border-slate-700/80 p-5 rounded-xl flex flex-row md:flex-col items-center md:items-end justify-between gap-3 shrink-0">
              <div className="text-left md:text-right">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-bold">Standard Rate</span>
                <span className="text-2xl font-black text-white">${talent.rateHourly}</span>
                <span className="text-xs text-slate-400 font-normal"> / hour</span>
              </div>
              <button
                onClick={() => onHireTalent(talent)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-blue-600/30"
              >
                <span>Hire {talent.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Bio & Experience */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Bio Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>Executive Summary &amp; Engineering Philosophy</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {talent.bio}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Available for 40 hrs/week full-time contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct GitHub, Jira &amp; Slack integration</span>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>Featured Engineering Projects</span>
              </h2>

              <div className="space-y-6">
                {talent.featuredProjects.map((project, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 text-base mb-1">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map((t, tidx) => (
                        <span key={tidx} className="text-xs bg-white text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md font-mono">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200/60 p-2 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Impact: {project.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remote Work Setup & Reliability Infrastructure */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-blue-600" />
                <span>Hardware, Network &amp; Reliability Infrastructure</span>
              </h2>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Techstackgist enforces mandatory remote setup standards for all active talent to ensure uninterrupted global collaboration:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Wifi className="w-3.5 h-3.5 text-blue-600" />
                    <span>Fiber High-Speed Internet</span>
                  </div>
                  <span className="text-slate-600">Dual primary + 4G LTE backup connections (50+ Mbps down/up).</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inverter / Solar Power Backup</span>
                  </div>
                  <span className="text-slate-600">Continuous 8+ hour battery backup ensuring zero power downtime.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Vetting & Skills */}
          <div className="space-y-6">
            
            {/* Vetting Score Card */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-blue-800/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">TSG Vetting Index</span>
                <span className="text-xs bg-blue-500/30 text-blue-200 px-2.5 py-0.5 rounded-full font-semibold">Top 3%</span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-white">{talent.vettingScore}%</span>
                <span className="text-xs text-blue-300">Overall Benchmark</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Evaluated through algorithmic code screening, real-world system architecture, live pair programming, and professional communication standards.
              </p>
              <div className="text-[11px] text-blue-200 border-t border-blue-800/60 pt-2 flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Verified by Techstackgist Engineering Board</span>
              </div>
            </div>

            {/* Skills & Stack */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                Core Competencies &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {talent.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-slate-600" />
                  <span>Education &amp; Certification</span>
                </span>
                <span className="text-sm font-semibold text-slate-800">{talent.educationOrCert}</span>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1 flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-slate-600" />
                  <span>Languages</span>
                </span>
                <span className="text-sm text-slate-700">{talent.languages.join(', ')}</span>
              </div>
            </div>

            {/* Hire Action Card with 14-day trial */}
            <div className="bg-white rounded-2xl border-2 border-blue-600 p-6 shadow-md text-center">
              <h4 className="text-base font-bold text-slate-900 mb-1">14-Day Risk-Free Trial</h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Work directly with {talent.name} for two weeks. If you are not completely satisfied, you owe nothing.
              </p>
              <button
                onClick={() => onHireTalent(talent)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hire {talent.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 block mt-2">
                Need more info? Contact {PRIMARY_CONTACT.supportEmail}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
