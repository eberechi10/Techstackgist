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
  ArrowUpRight
} from 'lucide-react';

interface ServicesPageProps {
  onOpenStartProject: (service?: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenStartProject }) => {
  useSEO({
    title: 'Enterprise Software Solutions & Product Engineering | Techstackgist',
    description: 'End-to-end product engineering, cloud migrations, AI integrations, and digital transformation services delivered by high-caliber African engineering teams.',
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
    <div id="services-page-container" className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Engineering & Product Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Need technology? We build it.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Techstackgist assembles high-caliber product designers, frontend and backend engineers, data architects, and cybersecurity specialists to deliver production software on schedule.
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

        {/* Interactive Scope & Estimate Calculator */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Delivery Estimator
            </div>
            <h3 className="text-2xl font-bold text-white">
              Estimate your custom engineering project
            </h3>
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

      </div>
    </div>
  );
};
