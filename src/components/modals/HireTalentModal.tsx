import React, { useState } from 'react';
import { TalentProfile } from '../../types';
import { X, CheckCircle2, ShieldCheck, Briefcase, Building, Send, Clock, Mail, ExternalLink, Copy, Loader2, AlertCircle } from 'lucide-react';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult, FORMSUBMIT_ACTION } from '../../utils/email';

interface HireTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTalent?: TalentProfile | null;
}

export const HireTalentModal: React.FC<HireTalentModalProps> = ({
  isOpen,
  onClose,
  preselectedTalent
}) => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    roleCategory: preselectedTalent ? preselectedTalent.role : 'Frontend Developer',
    seniority: 'Mid to Senior Level',
    engagementType: 'Full-Time Remote',
    timeline: 'Immediately (within 2 weeks)',
    notes: preselectedTalent ? `Interested in evaluating candidate: ${preselectedTalent.name} (${preselectedTalent.role} - ${preselectedTalent.country})` : ''
  });

  if (!isOpen) return null;

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
${formData.notes}

---
Dispatched via Techstackgist Platform
Target Destination: ${PRIMARY_CONTACT.email}
Direct Phone: ${PRIMARY_CONTACT.phone}`;

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
  };

  const copyDetails = () => {
    const text = `To: ${PRIMARY_CONTACT.email}\nCompany: ${formData.companyName}\nContact: ${formData.contactName}\nEmail: ${formData.workEmail}\nRole: ${formData.roleCategory}\nNotes: ${formData.notes}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      id="hire-talent-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            id="close-hire-modal-btn"
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-2">
            <Building className="w-3.5 h-3.5" />
            Global Employer Intake
          </div>
          <h3 className="text-xl font-bold text-white">
            Hire Screened African Tech Talent
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Access vetted software engineers, designers, and data specialists. Inquiries route directly to our placement desk.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Hiring Brief Sent to Email
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.contactName || 'there'}</strong>. Your hiring request for <strong className="text-slate-900">{formData.companyName || 'your team'}</strong> has been dispatched directly to <strong className="text-blue-600">{PRIMARY_CONTACT.email}</strong>.
            </p>

            {deliveryResult?.needsActivation && (
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left max-w-md mx-auto flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>One-Time Activation Notice:</strong> FormSubmit sent an activation email to <strong>{PRIMARY_CONTACT.email}</strong>. Please check your inbox (or spam) and click &quot;Activate Form&quot; to allow incoming messages to land automatically.
                </div>
              </div>
            )}

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <Mail className="w-4 h-4 text-blue-600" />
                Dispatch & Next Steps
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>Routed directly to: <strong>{PRIMARY_CONTACT.email}</strong></li>
                <li>Candidate matches will be sent to <strong>{formData.workEmail}</strong>.</li>
                <li>Need urgent staffing? Call/WhatsApp <strong>{PRIMARY_CONTACT.phone}</strong>.</li>
              </ul>
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
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Return to Platform
              </button>
            </div>
          </div>
        ) : (
          <form action={FORMSUBMIT_ACTION} method="POST" onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {preselectedTalent && (
              <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center gap-3">
                <img 
                  src={preselectedTalent.avatar} 
                  alt={preselectedTalent.name} 
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="text-xs">
                  <span className="text-slate-500">Selected Candidate:</span>
                  <div className="font-bold text-slate-900">
                    {preselectedTalent.name} ({preselectedTalent.role} {preselectedTalent.flag})
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Labs or Stratum UK"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Work Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="sarah@company.com"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Target Tech Role
                </label>
                <select
                  value={formData.roleCategory}
                  onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                >
                  <option value="Frontend Developer">Frontend Developer (React/TS)</option>
                  <option value="Full Stack Software Engineer">Full Stack Engineer (Node/Python)</option>
                  <option value="UI/UX Designer">UI/UX Designer (Figma/Product)</option>
                  <option value="Data Analyst / BI">Data Analyst / BI (SQL/Python)</option>
                  <option value="Cybersecurity Analyst">Cybersecurity Analyst</option>
                  <option value="Cloud / DevOps Engineer">Cloud & DevOps (AWS/K8s)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Engagement Model
                </label>
                <select
                  value={formData.engagementType}
                  onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                >
                  <option value="Full-Time Remote">Full-Time Remote (40h/week)</option>
                  <option value="Part-Time / Contract">Part-Time / Contract (20h/week)</option>
                  <option value="Project-Based Deliverable">Project-Based Sprint</option>
                  <option value="Evaluating Talent Pool">Initial Evaluation / Advisory</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Role Details & Tech Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Describe your tech stack, team setup, or specific experience required..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              ></textarea>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Sends directly to {PRIMARY_CONTACT.email}</span>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
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

          </form>
        )}

      </div>
    </div>
  );
};
