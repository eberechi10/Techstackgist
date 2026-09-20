import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  ArrowRight, 
  ShieldCheck, 
  Code, 
  Cpu, 
  Layers, 
  Briefcase 
} from 'lucide-react';

export const HeroNetworkVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedNode, setSelectedNode] = useState<string>('Lagos');

  // Cycle through the stages every 3.5s automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const pipeline = [
    {
      num: 1,
      title: 'Learn',
      subtitle: 'Hands-on practical tracks',
      tag: 'Industry Curriculum'
    },
    {
      num: 2,
      title: 'Build',
      subtitle: 'Production code & portfolios',
      tag: 'Real-world Capstones'
    },
    {
      num: 3,
      title: 'Work',
      subtitle: 'Screened talent marketplace',
      tag: 'Direct Global Matching'
    },
    {
      num: 4,
      title: 'Grow',
      subtitle: 'Continuous career progression',
      tag: 'High-Impact Retention'
    }
  ];

  const talentNodes = [
    { city: 'Lagos', country: 'Nigeria', flag: '🇳🇬', role: 'Frontend & Full Stack', pros: '340+ active', tz: 'WAT' },
    { city: 'Nairobi', country: 'Kenya', flag: '🇰🇪', role: 'Data & Cloud Eng', pros: '210+ active', tz: 'EAT' },
    { city: 'Accra', country: 'Ghana', flag: '🇬🇭', role: 'UI/UX & Product', pros: '160+ active', tz: 'GMT' },
    { city: 'Kigali', country: 'Rwanda', flag: '🇷🇼', role: 'DevOps & Mobile', pros: '95+ active', tz: 'CAT' },
    { city: 'Cape Town', country: 'South Africa', flag: '🇿🇦', role: 'Backend & Systems', pros: '180+ active', tz: 'SAST' },
  ];

  const globalDestinations = [
    { city: 'London', flag: '🇬🇧', type: 'Fintech & SaaS' },
    { city: 'Berlin', flag: '🇩🇪', type: 'Health & Deep Tech' },
    { city: 'New York', flag: '🇺🇸', type: 'Scale-ups' },
    { city: 'Toronto', flag: '🇨🇦', type: 'E-commerce & AI' },
  ];

  return (
    <div 
      id="hero-network-interface"
      className="relative rounded-2xl bg-slate-950 border border-slate-800 p-5 sm:p-6 lg:p-7 shadow-2xl text-white overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Header bar with status */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
              Talent Ecosystem Online
            </span>
          </div>
          <span className="text-slate-600 text-xs">•</span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Sub-Saharan Tech Nodes
          </span>
        </div>

        <div className="text-[11px] font-mono bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
          Sync: 99.8% Verified
        </div>
      </div>

      {/* The 4-Stage Engine: Learn -> Build -> Work -> Grow */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-2.5">
          <span className="uppercase tracking-wider text-[11px] font-bold text-slate-300">
            Platform Pipeline
          </span>
          <span className="text-blue-400 text-xs">Continuous Loop</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {pipeline.map((step) => {
            const isCurrent = activeStep === step.num;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                  isCurrent
                    ? 'bg-blue-950/60 border-blue-500 shadow-xs shadow-blue-500/20'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-blue-400' : 'text-slate-500'}`}>
                    0{step.num}
                  </span>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping"></span>
                  )}
                </div>
                <div className="font-bold text-sm text-white mb-0.5">{step.title}</div>
                <div className="text-[11px] text-slate-400 line-clamp-1">{step.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Network Interface: African Talent Nodes Connecting to Global Companies */}
      <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-4 relative overflow-hidden">
        
        {/* Visual Connectivity Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Active Talent Corridors</span>
          </div>
          <span className="text-[11px] text-slate-400">
            Click any regional node to inspect capacity
          </span>
        </div>

        {/* African Nodes Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {talentNodes.map((node) => {
            const isSelected = selectedNode === node.city;
            return (
              <button
                key={node.city}
                onClick={() => setSelectedNode(node.city)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-blue-600 border-blue-400 text-white font-semibold shadow-xs'
                    : 'bg-slate-950/90 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{node.flag}</span>
                <span>{node.city}</span>
                <span className="text-[10px] opacity-75 font-mono">({node.tz})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Hub Detail Card */}
        {(() => {
          const current = talentNodes.find(n => n.city === selectedNode) || talentNodes[0];
          return (
            <div className="bg-slate-950/80 rounded-lg border border-slate-800 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{current.flag}</span>
                  <span className="font-bold text-sm text-white">{current.city}, {current.country}</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800 font-mono">
                    Timezone {current.tz}
                  </span>
                </div>
                <div className="text-xs text-slate-300">
                  Specialization: <span className="text-white font-medium">{current.role}</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                  ● {current.pros} assessed and ready for remote roles
                </div>
              </div>

              {/* Connecting Global Companies targets */}
              <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Connected Global Hubs
                </div>
                <div className="flex sm:justify-end gap-1.5">
                  {globalDestinations.map(d => (
                    <span 
                      key={d.city}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-1"
                      title={d.type}
                    >
                      <span>{d.flag}</span>
                      <span>{d.city}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Floating status ticker */}
        <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Rigorous screening: Technical tests & live architectural defense</span>
          </div>
          <div className="text-blue-400 font-semibold flex items-center gap-1">
            <span>Fast hiring turnaround: &lt; 72 hours</span>
          </div>
        </div>

      </div>

    </div>
  );
};
