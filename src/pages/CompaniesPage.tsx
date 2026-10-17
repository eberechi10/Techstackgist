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
  Coins,
  FileCheck,
  Scale,
  Award,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { PRIMARY_CONTACT } from '../utils/email';

interface CompaniesPageProps {
  onOpenHireModal: () => void;
}

export const CompaniesPage: React.FC<CompaniesPageProps> = ({ onOpenHireModal }) => {
  useSEO({
    title: 'Hire African Engineering Teams | Techstackgist',
    description: 'Scale remote engineering capacity with vetted African tech talent. We manage sourcing, technical vetting, payroll, and compliance with a 14-day risk-free trial.',
    canonicalPath: '/companies',
    keywords: ['hire remote engineers Africa', 'tech talent recruitment Africa', 'EOR Africa tech', 'remote engineering pods Nigeria', 'African developers for hire']
  });

  return (
    <div id="companies-page-container" className="pt-28 pb-20 w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Global Tech Recruitment &amp; Remote Teams
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Hire Vetted African Engineering Teams with Techstackgist
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Techstackgist connects international technology companies with the top 3% of software engineers, cloud architects, and data specialists across Nigeria, Kenya, Ghana, Rwanda, and South Africa. We manage rigorous technical vetting, payroll compliance, and performance oversight so you can ship features faster.
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

        {/* 3 Engagement Models */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Flexible Engagement Models for Every Team Stage
            </h2>
            <p className="text-sm text-slate-600">
              Whether you need to augment your existing sprint team or spin up an autonomous product squad, we tailor the structure to your roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Staff Augmentation</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Embed pre-vetted individual contributors directly into your existing engineering squads. They participate in daily standups, review PRs, and work during your preferred hours.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct GitHub/Slack integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Immediate start within 72 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Flexible monthly commitments</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenHireModal}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors cursor-pointer"
              >
                Explore Augmentation
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-blue-600 shadow-sm flex flex-col justify-between relative">
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Dedicated Engineering Pods</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Turnkey cross-functional teams complete with Technical Lead, Frontend/Backend developers, QA Automation, and Scrum Master ready to take ownership of full product epics.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Autonomous sprint execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Pre-aligned communication protocols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Comprehensive velocity reporting</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenHireModal}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Deploy an Engineering Pod
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Contract-to-Hire</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Test talent in production before making a permanent full-time hiring commitment. Transition engineers to your direct global payroll seamlessly after 3 to 6 months.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero upfront placement fee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>14-day zero-risk trial period</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Full IP &amp; contract transition support</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenHireModal}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors cursor-pointer"
              >
                Inquire Contract-to-Hire
              </button>
            </div>
          </div>
        </div>

        {/* 3 Step Pipeline */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Our 3-Stage Vetting &amp; Placement Pipeline
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
              <h3 className="text-lg font-bold text-slate-900 mb-2">We source &amp; screen</h3>
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
            <h2 className="text-2xl font-bold text-white mb-2">
              Why leading international tech companies choose African talent
            </h2>
            <p className="text-xs text-slate-400">
              High motivation, English native fluency, favorable timezones, and world-class problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/70">
              <Globe className="w-6 h-6 text-blue-400 mb-2" />
              <h4 className="font-bold text-sm text-white mb-1">Timezone Alignment</h4>
              <p className="text-xs text-slate-300">
                UK &amp; Europe: 0 to +2 hrs overlap.<br />
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
              <h4 className="font-bold text-sm text-white mb-1">IP &amp; Legal Safety</h4>
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
              Have questions regarding international contracts or cross-border invoicing? Reach us at {PRIMARY_CONTACT.supportEmail}.
            </div>
            <button
              onClick={onOpenHireModal}
              className="px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              Speak with a Talent Partner
            </button>
          </div>
        </div>

        {/* Enterprise Hiring FAQ */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 mb-16 shadow-2xs">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Enterprise hiring and compliance FAQs
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Practical answers for CTOs, VPs of Engineering, and talent acquisition teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">How does the 14-day trial period work?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If at any point during the initial 14 calendar days you feel the matched developer is not meeting expectations, you may terminate immediately with zero ongoing obligations or request an immediate alternative candidate.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">How are payroll and cross-border taxes handled?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Techstackgist operates as the Employer of Record (EOR) or contractor manager. You receive a simple, consolidated monthly invoice in USD, EUR, or GBP, while we handle local taxes, pensions, and statutory filings.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">What background checks are conducted?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every engineer undergoes identity verification, past employer reference checks, criminal background checks where permissible by law, and verification of academic credentials.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">Can we transition talent to permanent direct hire?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes. Under our contract-to-hire arrangement, you have the option to transition contractors onto your direct entity payroll after 3 to 6 months with pre-defined, transparent buyout terms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
