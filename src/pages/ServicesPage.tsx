import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { ServiceItem } from '../types';
import { SERVICES } from '../data/mockData';
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  Calculator,
  ArrowUpRight,
  GitBranch,
  Rocket,
  Search,
  Lock,
  Globe,
  HelpCircle
} from 'lucide-react';
import { PRIMARY_CONTACT } from '../utils/email';

interface ServicesPageProps {
  onOpenStartProject: (service?: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenStartProject }) => {
  useSEO({
    title: 'Software Engineering Services | Techstackgist',
    description: 'End-to-end product engineering, cloud migrations, AI integrations, and digital transformation delivered by high-caliber African engineering squads.',
    canonicalPath: '/services',
    keywords: ['software development Africa', 'custom web applications', 'cloud migrations Nigeria', 'AI integration services', 'dedicated engineering teams']
  });

  // Interactive scope estimator states
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development']);
  const [teamSize, setTeamSize] = useState<'Dedicated Squad' | 'Specialist Pair' | 'Single Lead'>('Specialist Pair');
  const [timelineWeeks, setTimelineWeeks] = useState<number>(6);

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const estimatedCost = () => {
    let base = selectedServices.length * 3500;
    if (teamSize === 'Dedicated Squad') base *= 1.8;
    if (teamSize === 'Specialist Pair') base *= 1.3;
    return Math.round(base);
  };

  return (
    <div id="services-page-container" className="pt-28 pb-20 w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Engineering &amp; Product Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Enterprise Software Solutions &amp; Product Engineering by Techstackgist
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Techstackgist assembles high-caliber product designers, frontend and backend engineers, cloud architects, and cybersecurity specialists to build and ship production software on schedule. From MVPs to enterprise migrations, our dedicated teams deliver clean, scalable code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {srv.typicalTimeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {srv.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {srv.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Typical Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {srv.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Stack:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {srv.technologies.map(t => (
                      <span key={t} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenStartProject(srv)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Methodology Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xs">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Our 4-Stage Agile Delivery Framework
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We eliminate guesswork with a battle-tested sprint lifecycle that guarantees transparency, predictable velocity, and uncompromising quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                01
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Architecture Discovery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Technical feasibility study, entity relationship modeling, API contract definitions, and timeline estimation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                02
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Sprint Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                2-week bi-weekly sprints with staging builds, automated tests, and asynchronous Loom demos for immediate stakeholder feedback.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                03
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Security &amp; QA Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rigorous penetration testing, OWASP compliance verification, cross-browser audits, and load testing prior to release.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-3">
                04
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Handover &amp; Warranty</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete IP transfer, clean GitHub repos, CI/CD configuration, and a 30-day post-launch warranty with zero defect guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Scope & Estimate Calculator */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Delivery Estimator
            </div>
            <h2 className="text-2xl font-bold text-white">
              Estimate your custom engineering project
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select your required capabilities and squad formation to preview target budget and delivery timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-8 space-y-6">
              
              {/* Select Services */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  1. Select Required Capabilities:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES.map(srv => {
                    const isSelected = selectedServices.includes(srv.title);
                    return (
                      <button
                        key={srv.id}
                        onClick={() => toggleService(srv.title)}
                        className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 border-blue-400 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {srv.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Team Formation */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  2. Squad Formation:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['Single Lead', 'Specialist Pair', 'Dedicated Squad'] as const).map(fmt => (
                    <button
                      key={fmt}
                      onClick={() => setTeamSize(fmt)}
                      className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                        teamSize === fmt
                          ? 'bg-blue-600 border-blue-400 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Slider */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    3. Target Delivery Sprint Timeline:
                  </label>
                  <span className="text-xs font-bold text-blue-400">{timelineWeeks} Weeks</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={16}
                  value={timelineWeeks}
                  onChange={(e) => setTimelineWeeks(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

            </div>

            {/* Estimated Output Card */}
            <div className="lg:col-span-4 bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                  Estimated Scope
                </span>
                <div className="text-3xl font-extrabold text-white mt-1 mb-2 font-mono">
                  ${estimatedCost().toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Includes full architecture specifications, code repositories, automated tests, and 30-day post-launch warranty.
                </p>

                <div className="text-xs space-y-1.5 text-slate-300 border-t border-slate-800 pt-3 mb-4">
                  <div>• Modules: {selectedServices.join(', ')}</div>
                  <div>• Squad: {teamSize}</div>
                  <div>• Timeline: ~{timelineWeeks} Weeks</div>
                </div>
              </div>

              <button
                onClick={() => onOpenStartProject()}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Detailed Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Services FAQ Accordion */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 mb-16 shadow-2xs">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Common questions about working with Techstackgist
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Transparent terms, legal protections, and clear engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">Who owns the intellectual property and code?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You retain 100% ownership of all source code, design assets, and architectural documents upon milestone completion, backed by international IP assignment agreements.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">What happens after the project launches?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every project includes our 30-day post-launch warranty where our engineers resolve any critical bugs at no additional cost. We also provide ongoing maintenance retainers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">How fast can an engineering squad start?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Following technical discovery and scope sign-off, our dedicated engineering squads can typically mobilize and begin sprint 1 within 5 to 7 business days.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">How do we communicate throughout the project?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We integrate directly into your workflow via shared Slack channels, GitHub/GitLab repositories, weekly sprint video demos, and daily asynchronous standups.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
