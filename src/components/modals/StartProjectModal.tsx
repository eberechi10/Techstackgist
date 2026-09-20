import React, { useState } from 'react';
import { ServiceItem } from '../../types';
import { X, CheckCircle2, Code2, Send, Clock, Sparkles, Mail, ExternalLink, Copy, Loader2, AlertCircle } from 'lucide-react';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult } from '../../utils/email';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceType: selectedService ? selectedService.title : 'Web Development',
    budgetRange: '$5,000 – $15,000',
    timeline: '1 – 2 Months',
    projectOverview: ''
  });

  if (!isOpen) return null;

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
${formData.projectOverview}

---
Dispatched via Techstackgist Platform
Target Destination: ${PRIMARY_CONTACT.email}
Phone & WhatsApp Support: ${PRIMARY_CONTACT.phone}`;

    const result = await submitEmailForm({
      name: formData.name,
      email: formData.email,
      subject: subjectLine,
      message: bodyContent,
      extraDetails: {
        "Company": formData.company,
        "Service Type": formData.serviceType,
        "Budget": formData.budgetRange,
        "Timeline": formData.timeline
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
  };

  const copyDetails = () => {
    const text = `To: ${PRIMARY_CONTACT.email}\nClient: ${formData.name} (${formData.email})\nCompany: ${formData.company}\nService: ${formData.serviceType}\nBudget: ${formData.budgetRange}\nOverview: ${formData.projectOverview}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      id="start-project-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-2">
            <Code2 className="w-3.5 h-3.5" />
            Digital Solutions & Services
          </div>
          <h3 className="text-xl font-bold text-white">
            Need Technology? We Build It.
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Partner with Techstackgist&apos;s product and engineering teams. Inquiries route directly to our solution architects.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Project Brief Sent to Email
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>! Your project brief for <strong>{formData.serviceType}</strong> has been dispatched directly to <strong className="text-blue-600">{PRIMARY_CONTACT.email}</strong>.
            </p>

            {deliveryResult?.needsActivation && (
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left max-w-md mx-auto flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>One-Time Activation Notice:</strong> FormSubmit sent an activation email to <strong>{PRIMARY_CONTACT.email}</strong>. Please check your inbox (or spam) and click &quot;Activate Form&quot; to allow incoming messages to land automatically.
                </div>
              </div>
            )}

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 text-left max-w-md mx-auto space-y-1.5">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600" />
                Delivery Routing:
              </div>
              <div>• Destination: <strong>{PRIMARY_CONTACT.email}</strong></div>
              <div>• We will reply to: <strong>{formData.email}</strong></div>
              <div>• Direct Line: <strong>{PRIMARY_CONTACT.phone}</strong></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {deliveryResult?.gmailUrl && (
                <a
                  href={deliveryResult.gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {deliveryResult?.mailtoUrl && (
                <a
                  href={deliveryResult.mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open in Mail App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={copyDetails}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Brief'}</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tunde Balogun"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tunde@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="e.g. Fintech Africa or Start-up name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Desired Service
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                >
                  <option value="Web Development">Web Development (Next.js/React)</option>
                  <option value="UI/UX Design">UI/UX Design (Figma Systems)</option>
                  <option value="Software Development">Software Development (Full Stack)</option>
                  <option value="Data Solutions">Data Solutions & BI Dashboards</option>
                  <option value="Cybersecurity">Cybersecurity & Security Audits</option>
                  <option value="Digital Transformation">Digital Transformation & Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Estimated Budget
                </label>
                <select
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                >
                  <option value="Under $5,000">Under $5,000 (MVP / Prototype)</option>
                  <option value="$5,000 – $15,000">$5,000 – $15,000 (Standard Product)</option>
                  <option value="$15,000 – $40,000">$15,000 – $40,000 (Complex Enterprise)</option>
                  <option value="$40,000+">$40,000+ (Multi-month Program)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Project Overview & Goals
              </label>
              <textarea
                rows={3}
                required
                placeholder="What are you building? What problems should this solution solve?"
                value={formData.projectOverview}
                onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              ></textarea>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500">
                Sends directly to {PRIMARY_CONTACT.email}
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-sm text-slate-600 font-semibold hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send to Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
