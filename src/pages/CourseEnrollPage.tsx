import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { PageId, Course } from '../types';
import { 
  CheckCircle2, 
  GraduationCap, 
  Send, 
  Clock, 
  BookOpen, 
  Layers, 
  Award, 
  Copy, 
  Loader2, 
  ArrowLeft,
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult } from '../utils/email';

interface CourseEnrollPageProps {
  onNavigate: (page: PageId) => void;
  selectedCourse?: Course | null;
}

export const CourseEnrollPage: React.FC<CourseEnrollPageProps> = ({
  onNavigate,
  selectedCourse
}) => {
  useSEO({
    title: selectedCourse 
      ? `Enroll: ${selectedCourse.title} – Techstackgist Academy`
      : 'Apply to Techstackgist Academy – Practical Tech Training',
    description: 'Apply for project-based tech courses taught by active senior African engineers. Hands-on projects, industry mentorship, and career placement.',
    canonicalPath: '/enroll'
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseTitle: selectedCourse ? selectedCourse.title : 'Full-Stack Web Engineering',
    experienceLevel: 'Beginner',
    reason: 'Transitioning to software engineering career'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    const targetCourseName = selectedCourse ? selectedCourse.title : formData.courseTitle;
    const subjectLine = `[TSG Academy Enrollment] ${targetCourseName} - ${formData.fullName}`;
    const bodyContent = `NEW ACADEMY COHORT APPLICATION
==============================
Applicant Full Name: ${formData.fullName}
Email Address: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Target Program: ${targetCourseName}
${selectedCourse ? `Program Tuition: ${selectedCourse.tuition}\nProgram Duration: ${selectedCourse.duration}` : ''}
Current Experience Level: ${formData.experienceLevel}
Primary Goal / Motivation:
${formData.reason}

---
Dispatched via Techstackgist Platform
Target Destination: ${PRIMARY_CONTACT.email}
Admissions Hotline: ${PRIMARY_CONTACT.phone}
Academy HQ: ${PRIMARY_CONTACT.address}`;

    const result = await submitEmailForm({
      name: formData.fullName,
      email: formData.email,
      subject: subjectLine,
      message: bodyContent,
      extraDetails: {
        "Phone / WhatsApp": formData.phone,
        "Target Program": targetCourseName,
        "Tuition": selectedCourse?.tuition || 'Standard Cohort Rate',
        "Duration": selectedCourse?.duration || '12 Weeks',
        "Experience Level": formData.experienceLevel
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyDetails = () => {
    const text = `To: ${PRIMARY_CONTACT.email}\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse: ${selectedCourse?.title || formData.courseTitle}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="course-enroll-page" className="w-full pt-28 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('academy')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Academy Programs</span>
          </button>
        </div>

        {/* Hero Header Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Industry-Grade Training & Placement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Apply to TSG Academy
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Step into high-demand software engineering and digital careers with hands-on live cohorts, real-world project portfolios, and direct hiring pipelines.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Practical Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Real Production Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Industry Verified Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Talent Network Fast-Track</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Course Card if preselected */}
        {selectedCourse && (
          <div className="bg-white border-2 border-blue-500/80 rounded-2xl p-5 mb-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  Selected Program
                </span>
                <span className="text-xs text-slate-500 font-medium">{selectedCourse.duration} · {selectedCourse.level}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">{selectedCourse.title}</h3>
              <p className="text-sm text-slate-600 mt-0.5">{selectedCourse.description}</p>
            </div>
            <div className="text-right sm:border-l sm:border-slate-200 sm:pl-5 shrink-0">
              <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">Tuition</span>
              <span className="text-xl font-extrabold text-blue-600">{selectedCourse.tuition}</span>
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
              Application Received!
            </h2>
            <p className="text-slate-600 max-w-lg mx-auto mb-6 text-sm sm:text-base leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our admissions coordinator has received your application for <strong className="text-slate-900">{selectedCourse?.title || formData.courseTitle}</strong> and will contact you at <span className="text-blue-600 font-medium">{formData.email}</span> or via WhatsApp at <span className="font-semibold text-slate-800">{formData.phone}</span> with the onboarding packet.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('academy')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                Browse All Academy Courses
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                Apply for Another Course
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
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chioma Nwosu"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
                    placeholder="chioma@example.com"
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
                    Phone Number (WhatsApp Preferred) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Current Experience Level
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Complete Beginner (Zero prior coding)">Complete Beginner (Zero prior coding)</option>
                    <option value="Self-Taught / Basic Knowledge">Self-Taught / Basic Knowledge</option>
                    <option value="Computer Science Student / Grad">Computer Science Student / Grad</option>
                    <option value="Working Professional Switching to Tech">Working Professional Switching to Tech</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              {!selectedCourse && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Target Program
                  </label>
                  <select
                    value={formData.courseTitle}
                    onChange={(e) => setFormData({ ...formData, courseTitle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Full-Stack Web Engineering (React, Node, TypeScript)">Full-Stack Web Engineering (React, Node, TypeScript)</option>
                    <option value="Cloud Architecture & DevOps Foundations">Cloud Architecture & DevOps Foundations</option>
                    <option value="Modern UI/UX Design & Product Strategy">Modern UI/UX Design & Product Strategy</option>
                    <option value="Python Data Science & Machine Learning">Python Data Science & Machine Learning</option>
                    <option value="Cybersecurity Fundamentals & Network Defense">Cybersecurity Fundamentals & Network Defense</option>
                  </select>
                </div>
              )}

              {/* Row 4 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  What is your primary goal from this course?
                </label>
                <textarea
                  rows={4}
                  placeholder="Share a bit about your background, career dreams, or specific skills you are looking to master..."
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
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
                  <span>{copied ? 'Copied Application' : 'Copy Application'}</span>
                </button>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
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
