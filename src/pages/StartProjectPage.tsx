import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { PageId, ServiceItem } from '../types';
import { 
  CheckCircle2, 
  Code2, 
  Send, 
  Clock, 
  Sparkles, 
  Mail, 
  Copy, 
  Loader2, 
  ArrowLeft,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult } from '../utils/email';

interface StartProjectPageProps {
  onNavigate: (page: PageId) => void;
  selectedService?: ServiceItem | null;
}

export const StartProjectPage: React.FC<StartProjectPageProps> = ({
  onNavigate,
  selectedService
}) => {
  useSEO({
    title: selectedService 
      ? `Start Project: ${selectedService.title} – Techstackgist`
      : 'Start a Digital Project – Techstackgist',
    description: 'Build enterprise-grade software, SaaS web applications, mobile apps, and cloud systems with Techstackgist Digital Solutions team.',
    canonicalPath: '/start-project'
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: selectedService ? selectedService.title : 'Web Development & SaaS Platforms',
    budgetRange: '$5,000 – $15,000',
    timeline: '1 – 2 Months',
    projectOverview: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const subjectLine = `[TSG Project Scope] ${formData.serviceType} - ${formData.company || formData.name}`;
    const bodyContent = `NEW DIGITAL SOLUTIONS / PROJECT BRIEF
=====================================
Client Contact Name: ${formData.name}
Email Address: ${formData.email}
Company / Organization: ${formData.company || 'Direct Client'}
Service Requested: ${formData.serviceType}
Budget Range: ${formData.budgetRange}
Timeline: ${formData.timeline}

Project Overview & Requirements:
${formData.projectOverview || 'No description provided'}

---
Dispatched via Techstackgist Platform
Target Destination: ${PRIMARY_CONTACT.email}
Phone & WhatsApp Support: ${PRIMARY_CONTACT.phone}
Physical HQ: ${PRIMARY_CONTACT.address}`;

    const result = await submitEmailForm({
      name: formData.name,
      email: formData.email,
      subject: subjectLine,
      message: bodyContent,
      extraDetails: {
        "Company": formData.company || 'Direct Client',
        "Service": formData.serviceType,
        "Budget Range": formData.budgetRange,
        "Timeline": formData.timeline
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyDetails = () => {
    const text = `To: ${PRIMARY_CONTACT.email}\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.serviceType}\nBudget: ${formData.budgetRange}\nOverview: ${formData.projectOverview}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="start-project-page" className="w-full pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Professional Services</span>
          </button>
        </div>

        {/* Hero Header Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Cycle Product Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Start Your Digital Project
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              From MVP scoping to full-scale SaaS production, we architect, design, and engineer robust digital systems that scale with your business goals.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24h Initial Scoping Call</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Modular Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fixed Scope or Sprint-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Ongoing Maintenance & SLAs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Service Card if preselected */}
        {selectedService && (
          <div className="bg-white border-2 border-blue-500/80 rounded-2xl p-5 mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  Requested Service
                </span>
                <span className="text-xs text-slate-500 font-medium">{selectedService.typicalTimeline}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{selectedService.title}</h3>
              <p className="text-sm text-slate-600 mt-0.5">{selectedService.description}</p>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        {submitted ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Project Brief Dispatched!
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto mb-6 text-sm sm:text-base leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our engineering leads are analyzing your brief for <strong className="text-slate-900">{formData.serviceType}</strong> and will schedule a technical discovery call via <span className="text-blue-600 font-medium">{formData.email}</span>.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Explore Other Services
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                Submit Another Project
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Samuel Okafor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="samuel@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex FinTech Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Service Area *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Web Development & SaaS Platforms">Web Development & SaaS Platforms</option>
                    <option value="Mobile App Development (iOS & Android)">Mobile App Development (iOS & Android)</option>
                    <option value="UI/UX Design & Prototyping">UI/UX Design & Prototyping</option>
                    <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                    <option value="API Development & Integrations">API Development & Integrations</option>
                    <option value="Enterprise Software Solutions">Enterprise Software Solutions</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Under $5,000">Under $5,000 (MVP / Prototype)</option>
                    <option value="$5,000 – $15,000">$5,000 – $15,000 (Standard Production)</option>
                    <option value="$15,000 – $40,000">$15,000 – $40,000 (Full-Scale System)</option>
                    <option value="$40,000+">$40,000+ (Enterprise Platform)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Desired Delivery Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Urgent (2 - 4 Weeks)">Urgent (2 – 4 Weeks)</option>
                    <option value="1 – 2 Months">1 – 2 Months</option>
                    <option value="3 – 6 Months">3 – 6 Months</option>
                    <option value="Flexible / Phased">Flexible / Phased Sprints</option>
                  </select>
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Project Brief & Technical Scope
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about what you want to build: target audience, key features, integrations (payment, auth, AI, data), and expected outcomes..."
                  value={formData.projectOverview}
                  onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={copyDetails}
                  className="px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Details' : 'Copy Brief'}</span>
                </button>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
