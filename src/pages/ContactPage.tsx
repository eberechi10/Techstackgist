import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Clock, ShieldCheck, Copy, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult } from '../utils/email';

export const ContactPage: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hiring African Talent',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const result = await submitEmailForm({
      name: formData.name,
      email: formData.email,
      subject: `[TSG Inquiry] ${formData.subject} - from ${formData.name}`,
      message: formData.message,
      extraDetails: {
        "Inquiry Topic": formData.subject
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
  };

  const copyDetails = () => {
    const text = `To: ${PRIMARY_CONTACT.email}\nSubject: [TSG Inquiry] ${formData.subject} - from ${formData.name}\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="contact-page-container" className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            Direct Communication & Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let&apos;s build the future of technology together.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Whether you&apos;re a global company seeking vetted African engineering talent, an organization looking for bespoke software solutions, or an aspiring builder, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Inquiry Sent to Email</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.subject}</em> has been dispatched directly to <strong className="text-blue-600">{PRIMARY_CONTACT.email}</strong>.
                </p>

                {deliveryResult?.needsActivation && (
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left max-w-md mx-auto flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>One-Time Activation Notice:</strong> FormSubmit sent an activation email to <strong>{PRIMARY_CONTACT.email}</strong>. Please check your inbox (or spam) and click &quot;Activate Form&quot; to allow incoming messages to land automatically.
                    </div>
                  </div>
                )}

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 text-left max-w-md mx-auto space-y-2">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Direct Delivery Details:
                  </div>
                  <div className="text-slate-600">
                    <div>• Recipient: <strong>{PRIMARY_CONTACT.email}</strong></div>
                    <div>• Sender: <strong>{formData.email}</strong></div>
                    <div>• Phone Support: <strong>{PRIMARY_CONTACT.phone}</strong></div>
                  </div>
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
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}</span>
                  </button>
                  
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Send a Direct Inquiry
                  </h3>
                  <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md font-medium">
                    Sends to {PRIMARY_CONTACT.email}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Cole"
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
                      placeholder="david@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="Hiring African Talent">Hiring African Talent (Recruitment & Sourcing)</option>
                    <option value="Digital Services & Project Scoping">Digital Services & Custom Software Scoping</option>
                    <option value="Academy Cohort Enrollment">Academy Cohort & Student Inquiries</option>
                    <option value="Enterprise Partnership">Strategic Partnership & Ecosystem Collaboration</option>
                    <option value="General Question">General Technology Solutions Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your team, project requirements, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Direct delivery to {PRIMARY_CONTACT.email}
                  </span>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending to Email...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send to Email</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Regional Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Headquarters Contact */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Primary Contacts</span>
              </h3>
              
              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block mb-0.5 font-bold uppercase tracking-wider text-[10px]">
                      Physical Address:
                    </span>
                    <span className="text-white font-medium leading-relaxed">
                      {PRIMARY_CONTACT.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block mb-0.5 font-bold uppercase tracking-wider text-[10px]">
                      Direct Email:
                    </span>
                    <a 
                      href={`mailto:${PRIMARY_CONTACT.email}`} 
                      className="text-blue-400 font-semibold hover:text-blue-300 transition-colors break-all"
                    >
                      {PRIMARY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block mb-0.5 font-bold uppercase tracking-wider text-[10px]">
                      Phone / WhatsApp:
                    </span>
                    <a 
                      href={`tel:${PRIMARY_CONTACT.phoneRaw}`} 
                      className="text-white font-semibold hover:text-emerald-400 transition-colors"
                    >
                      {PRIMARY_CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Operating hours: Monday – Friday, 8am – 6pm (WAT / GMT+1)</span>
              </div>
            </div>

            {/* Regional Presence */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Pan-African Ecosystem Coverage
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span>🇳🇬</span> <strong>Nigeria:</strong> Onitsha, Lagos, and Abuja
                </li>
                <li className="flex items-center gap-2">
                  <span>🇰🇪</span> <strong>Kenya:</strong> Nairobi Hub
                </li>
                <li className="flex items-center gap-2">
                  <span>🇬🇭</span> <strong>Ghana:</strong> Accra Hub
                </li>
                <li className="flex items-center gap-2">
                  <span>🇷🇼</span> <strong>Rwanda:</strong> Kigali Hub
                </li>
                <li className="flex items-center gap-2">
                  <span>🇿🇦</span> <strong>South Africa:</strong> Cape Town
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
