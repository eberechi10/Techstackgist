import React, { useState } from 'react';
import { Course } from '../../types';
import { X, CheckCircle2, GraduationCap, Calendar, Clock, BookOpen, Layers, Award, Mail, ExternalLink, Copy, Send, Loader2, AlertCircle } from 'lucide-react';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult } from '../../utils/email';

interface CourseEnrollModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseEnrollModal: React.FC<CourseEnrollModalProps> = ({
  course,
  onClose
}) => {
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'Beginner',
    reason: 'Transitioning to tech / job-ready skills'
  });

  if (!course) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const subjectLine = `[TSG Academy Enrollment] ${course.title} - ${formData.fullName}`;
    const bodyContent = `NEW ACADEMY COHORT APPLICATION
==============================
Applicant Full Name: ${formData.fullName}
Email Address: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Target Program: ${course.title}
Program Tuition: ${course.tuition}
Program Duration: ${course.duration}
Current Experience Level: ${formData.experienceLevel}

---
Dispatched via Techstackgist Platform
Target Destination: ${PRIMARY_CONTACT.email}
Admissions Hotline: ${PRIMARY_CONTACT.phone}`;

    const result = await submitEmailForm({
      name: formData.fullName,
      email: formData.email,
      subject: subjectLine,
      message: bodyContent,
      extraDetails: {
        "Phone / WhatsApp": formData.phone,
        "Target Program": course.title,
        "Tuition": course.tuition,
        "Duration": course.duration,
        "Experience Level": formData.experienceLevel
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
  };

  const copyDetails = () => {
    const text = `To: ${PRIMARY_CONTACT.email}\nProgram: ${course.title}\nApplicant: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLevel: ${formData.experienceLevel}`;
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
      id="course-enroll-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            Practical Academy Pathway
          </div>
          <h3 className="text-xl font-bold text-white">
            {course.title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-slate-300 mt-2 flex-wrap">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              {course.level}
            </span>
            <span className="text-emerald-400 font-semibold">
              ● {course.cohortStatus}
            </span>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Application Sent to Email
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Welcome, <strong>{formData.fullName}</strong>. Your application for <strong>{course.title}</strong> has been dispatched directly to <strong className="text-blue-600">{PRIMARY_CONTACT.email}</strong>.
            </p>

            {deliveryResult?.needsActivation && (
              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left max-w-md mx-auto flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>One-Time Activation Notice:</strong> FormSubmit sent an activation email to <strong>{PRIMARY_CONTACT.email}</strong>. Please check your inbox (or spam) and click &quot;Activate Form&quot; to allow incoming messages to land automatically.
                </div>
              </div>
            )}
            
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-600" />
                Enrollment Routing:
              </div>
              <div>• Destination: <strong>{PRIMARY_CONTACT.email}</strong></div>
              <div>• Total Tuition: <strong>{course.tuition}</strong></div>
              <div>• Admissions Phone & WhatsApp: <strong>{PRIMARY_CONTACT.phone}</strong></div>
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
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
            
            {/* Practical Capstones Preview */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                Portfolio Capstones You Will Build:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {course.practicalProjects.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Student Registration Details
                </h4>
                <span className="text-[11px] text-blue-600">
                  Sends directly to {PRIMARY_CONTACT.email}
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chinelo Okonkwo"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="chinelo@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 / +254 / +233..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  >
                    <option value="Complete Beginner">Complete Beginner (No prior tech background)</option>
                    <option value="Basic Self-Taught">Basic Knowledge / Self-Taught</option>
                    <option value="Looking to Upskill">Practicing Professional Seeking Upskilling</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-600">
                  Tuition: <strong className="text-slate-900">{course.tuition}</strong>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send to Email & Enroll</span>
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
