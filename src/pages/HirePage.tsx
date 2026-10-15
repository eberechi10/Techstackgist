import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { PageId, TalentProfile } from '../types';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Briefcase, 
  Building, 
  Send, 
  Clock, 
  Mail, 
  ExternalLink, 
  Copy, 
  Loader2, 
  AlertCircle,
  ArrowLeft,
  Calendar,
  Lock,
  Zap,
  Star,
  Users
} from 'lucide-react';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult, FORMSUBMIT_ACTION } from '../utils/email';

interface HirePageProps {
  onNavigate: (page: PageId) => void;
  preselectedTalent?: TalentProfile | null;
  onClearPreselectedTalent?: () => void;
}

export const HirePage: React.FC<HirePageProps> = ({
  onNavigate,
  preselectedTalent,
  onClearPreselectedTalent
}) => {
  useSEO({
    title: preselectedTalent 
      ? `Hire ${preselectedTalent.name} (${preselectedTalent.role}) – Techstackgist`
      : 'Hire Vetted African Tech Talent – Techstackgist',
    description: 'Hire top 3% African software engineers and technical leads. Fast placement in under 72 hours, rigorous vetting, and seamless remote onboarding.',
    canonicalPath: '/hire'
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    roleCategory: preselectedTalent ? preselectedTalent.role : 'Full-Stack Developer',
    seniority: 'Mid to Senior Level',
    engagementType: 'Full-Time Remote',
    timeline: 'Immediately (within 2 weeks)',
    notes: preselectedTalent 
      ? `Interested in hiring / interviewing candidate: ${preselectedTalent.name} (${preselectedTalent.role} - ${preselectedTalent.country})` 
      : ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const subjectLine = `[TSG Talent Request] ${formData.roleCategory} - ${formData.companyName} (${formData.contactName})`;
    const bodyContent = `NEW HIRING INQUIRY FOR AFRICAN TECH TALENT
==========================================
Company / Organization: ${formData.companyName}
Contact Person: ${formData.contactName}
Work Email: ${formData.workEmail}
Target Role Category: ${formData.roleCategory}
Seniority: ${formData.seniority}
Engagement Model: ${formData.engagementType}
Timeline: ${formData.timeline}
${preselectedTalent ? `Preselected Candidate: ${preselectedTalent.name} (${preselectedTalent.role} - ${preselectedTalent.country})` : ''}

Role & Stack Requirements:
${formData.notes || 'Not specified'}

---
Dispatched via Techstackgist Platform
Target Destination: ${PRIMARY_CONTACT.email}
Direct Phone: ${PRIMARY_CONTACT.phone}
Physical HQ: ${PRIMARY_CONTACT.address}`;

    const result = await submitEmailForm({
      name: formData.contactName,
      email: formData.workEmail,
      subject: subjectLine,
      message: bodyContent,
      extraDetails: {
        "Company": formData.companyName,
        "Role Category": formData.roleCategory,
        "Seniority": formData.seniority,
        "Engagement": formData.engagementType,
        "Timeline": formData.timeline
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyDetails = () => {
    const text = `To: ${PRIMARY_CONTACT.email}\nCompany: ${formData.companyName}\nContact: ${formData.contactName}\nEmail: ${formData.workEmail}\nRole: ${formData.roleCategory}\nNotes: ${formData.notes}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="hire-page" className="w-full pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate(preselectedTalent ? 'talent' : 'home')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to {preselectedTalent ? 'Talent Directory' : 'Overview'}</span>
          </button>
        </div>

        {/* Hero Header Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Vetted Engineering Talent Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Hire Vetted Tech Talent
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Tell us about your technical requirements. We match you with top 3% African engineers, verified in code quality, system design, and communication, ready for deployment in under 72 hours.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>&lt; 72h Candidate Match</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Full IP & NDA Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>2-Week Trial Period</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Timezone-Aligned Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Candidate Banner if present */}
        {preselectedTalent && (
          <div className="bg-white border-2 border-blue-500/80 rounded-2xl p-5 mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={preselectedTalent.avatar}
                alt={preselectedTalent.name}
                className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-xs"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                    Selected Profile
                  </span>
                  <span className="text-sm">{preselectedTalent.flag}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">{preselectedTalent.name}</h3>
                <p className="text-sm text-slate-600 font-medium">
                  {preselectedTalent.role} · ${preselectedTalent.rateHourly}/hr · {preselectedTalent.experienceYears}y exp
                </p>
              </div>
            </div>

            {onClearPreselectedTalent && (
              <button
                type="button"
                onClick={onClearPreselectedTalent}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline cursor-pointer"
              >
                Change or Clear Talent
              </button>
            )}
          </div>
        )}

        {/* Main Content Area */}
        {submitted ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Hiring Inquiry Dispatched!
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto mb-6 text-sm sm:text-base leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.contactName}</strong>. Our technical talent partner is reviewing your request for <strong className="text-slate-900">{formData.roleCategory}</strong> and will connect with you via <span className="text-blue-600 font-medium">{formData.workEmail}</span> within 24 business hours.
            </p>

            {/* Delivery Status Details */}
            <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-slate-500">Destination:</span>
                <span className="font-semibold text-slate-800">{PRIMARY_CONTACT.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Role:</span>
                <span className="font-semibold text-slate-800">{formData.roleCategory}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Company:</span>
                <span className="font-semibold text-slate-800">{formData.companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Support Hotline:</span>
                <span className="font-semibold text-slate-800">{PRIMARY_CONTACT.phone}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('talent')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Browse More Talent Profiles
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Company & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Health, Stripe, Tech Startup"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Row 2: Work Email & Role Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Target Role *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior React Engineer, DevOps Architect"
                    value={formData.roleCategory}
                    onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Row 3: Seniority, Engagement & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Seniority Level
                  </label>
                  <select
                    value={formData.seniority}
                    onChange={(e) => setFormData({ ...formData, seniority: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Senior (5+ yrs)">Senior (5+ yrs)</option>
                    <option value="Mid-Level (3-5 yrs)">Mid-Level (3-5 yrs)</option>
                    <option value="Lead / Principal Architect">Lead / Principal Architect</option>
                    <option value="Full Cross-Functional Team">Full Cross-Functional Team</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Engagement Model
                  </label>
                  <select
                    value={formData.engagementType}
                    onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Full-Time Remote (40h/wk)">Full-Time Remote (40h/wk)</option>
                    <option value="Contract / Project-Based">Contract / Project-Based</option>
                    <option value="Part-Time / Staff Augmentation">Part-Time (20h/wk)</option>
                    <option value="Direct Hire / Transition">Direct Hire Placement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Target Start Date
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Immediately (within 2 weeks)">Immediately (&lt; 2 weeks)</option>
                    <option value="Next Month">Next Month</option>
                    <option value="Next Quarter">Next Quarter</option>
                    <option value="Just Exploring Talent Pool">Just Exploring Talent Pool</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Notes / Tech Stack Requirements */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Technical Requirements, Stack & Job Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your tech stack (e.g. TypeScript, React, Go, PostgreSQL, AWS), key responsibilities, time zones, or any specific candidate preferences..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No upfront fees. Pay only when you hire.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={copyDetails}
                    className="px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied Details' : 'Copy Draft'}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex-1 sm:flex-initial px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Talent Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
