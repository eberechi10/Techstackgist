import React from 'react';
import { useSEO } from '../utils/seo';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Globe, 
  Users, 
  ArrowRight, 
  ArrowUpRight, 
  Lock, 
  Coins 
} from 'lucide-react';

interface CompaniesPageProps {
  onOpenHireModal: () => void;
}

export const CompaniesPage: React.FC<CompaniesPageProps> = ({ onOpenHireModal }) => {
  useSEO({
    title: 'Hire & Scale Engineering Teams in Africa | Techstackgist for Enterprise',
    description: 'Global companies partner with Techstackgist for compliant hiring, employer-of-record services, payroll, and high-performance remote engineering pods in Africa.',
    canonicalPath: '/companies',
    keywords: ['hire remote engineers Africa', 'tech talent recruitment Africa', 'EOR Africa tech', 'remote engineering pods Nigeria', 'African developers for hire']
  });

  return (
    <div id="companies-page-container" className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Global Tech Recruitment & Remote Teams
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build your team with Techstackgist.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            Access a growing network of African technology professionals who are trained, assessed, and ready for global opportunities. We bridge senior engineering talent from Lagos, Nairobi, Accra, Kigali, and Cape Town directly into your engineering workflows.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenHireModal}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Hire Tech Talent Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>Average placement turnaround: &lt; 72 hours</span>
            </div>
          </div>
        </div>

        {/* 3 Step Pipeline */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            How we connect you with vetted talent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
              <div className="text-2xl font-extrabold text-blue-600 font-mono mb-2">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tell us what you need</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Share your tech stack requirements, seniority tier, and working hours. Whether you need an individual React specialist or an entire cross-functional squad.
              </p>
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Custom intake within 15 minutes</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
              <div className="text-2xl font-extrabold text-blue-600 font-mono mb-2">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">We source & screen</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We evaluate candidates against production architectural challenges, code readability, and live behavioral communication standards.
              </p>
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Only top 3% pass defense</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative">
              <div className="text-2xl font-extrabold text-blue-600 font-mono mb-2">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Meet your candidates</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Review video intros, GitHub PR defenses, and interview candidates directly. Start on a 2-week risk-free trial period.
              </p>
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% satisfaction replacement guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why African Tech Talent */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white mb-16">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Why leading international tech companies choose Africa
            </h3>
            <p className="text-xs text-slate-400">
              High motivation, English native fluency, favorable timezones, and world-class problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/70">
              <Globe className="w-6 h-6 text-blue-400 mb-2" />
              <h4 className="font-bold text-sm text-white mb-1">Timezone Alignment</h4>
              <p className="text-xs text-slate-300">
                UK & Europe: 0 to +2 hrs overlap.<br />
                US East Coast: 4 to 6 hrs overlap.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/70">
              <Coins className="w-6 h-6 text-emerald-400 mb-2" />
              <h4 className="font-bold text-sm text-white mb-1">Cost-Efficiency</h4>
              <p className="text-xs text-slate-300">
                Save 40–60% compared to Western contractor rates while paying premium, career-defining African compensation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/70">
              <Lock className="w-6 h-6 text-purple-400 mb-2" />
              <h4 className="font-bold text-sm text-white mb-1">IP & Legal Safety</h4>
              <p className="text-xs text-slate-300">
                Standard international IP assignment agreements and strict non-disclosure protections.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/70">
              <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
              <h4 className="font-bold text-sm text-white mb-1">Zero Overhead</h4>
              <p className="text-xs text-slate-300">
                We handle currency exchange, invoices, local tax compliance, and performance oversight.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Have questions regarding international contracts or cross-border invoicing?
            </div>
            <button
              onClick={onOpenHireModal}
              className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              Speak with a Talent Partner
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
