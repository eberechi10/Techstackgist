import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { 
  ShieldCheck, 
  Globe, 
  Target, 
  Users, 
  GraduationCap, 
  Code2, 
  Box, 
  Briefcase,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  ExternalLink,
  AlertCircle,
  Building2,
  Cpu
} from 'lucide-react';
import { PageId } from '../types';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult } from '../utils/email';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenHireModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenHireModal }) => {
  useSEO({
    title: 'About Techstackgist Hub | Mission, Innovation & Contacts',
    description: 'Discover Techstackgist Hub—bridging the global tech deficit by equipping, employing, and deploying Africa\'s brightest software engineers. Contact our headquarters in Awada, Onitsha.',
    canonicalPath: '/about',
    keywords: ['about Techstackgist Hub', 'African tech ecosystem', 'Ebetech Digital Solutions', '6 Chinyereugo Udozor ST Awada', 'hire African developers', 'tech training Nigeria']
  });

  // Contact Form State within About Page
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deliveryResult, setDeliveryResult] = useState<SendEmailResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry / Partnership',
    message: ''
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const result = await submitEmailForm({
      name: formData.name,
      email: formData.email,
      subject: `[About/Contact Inquiry] ${formData.subject} - from ${formData.name}`,
      message: formData.message,
      extraDetails: {
        "Source Page": "About & Contact Hub",
        "Inquiry Subject": formData.subject
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
  };

  const copyContactSummary = () => {
    const text = `Contact: Techstackgist Hub\nHeadquarters: ${PRIMARY_CONTACT.address}, ${PRIMARY_CONTACT.location}\nEmail: ${PRIMARY_CONTACT.email}\nPhone: ${PRIMARY_CONTACT.phone}\nInquiry: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\nMessage: ${formData.message}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="about-page-container" className="pt-28 pb-24 w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ============================================================ */}
        {/* 1. HERO / MISSION HEADER */}
        {/* ============================================================ */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-3">
            <span>About Techstackgist Hub</span>
            <span aria-hidden="true">·</span>
            <span>Est. Sub-Saharan Africa</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Building Africa&apos;s unified backbone for technology skills, digital solutions, and elite engineering talent.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-5 leading-relaxed">
            Techstackgist Hub was founded to break the barriers holding African tech potential back. Rather than running disconnected training classes or generic job boards, we operate an integrated ecosystem that trains, builds production software, and deploys vetted African engineers to forward-thinking companies worldwide.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-6">
            <button
              onClick={() => {
                const el = document.getElementById('contact-hub-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Contact Our Headquarters</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenHireModal}
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              Hire Tech Talent
            </button>
            <button
              onClick={() => onNavigate('talent')}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 font-semibold text-sm transition-all cursor-pointer"
            >
              Explore Talent Network
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. THE CORE MANIFESTO */}
        {/* ============================================================ */}
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 block">
              The Techstackgist Thesis
            </span>
            <blockquote className="text-xl sm:text-3xl font-extrabold leading-snug text-slate-100">
              &ldquo;Tech skills. Digital solutions. Global talent. We connect people and businesses with real technology products, professional services, practical education, and skilled African engineers.&rdquo;
            </blockquote>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Africa has the world&apos;s youngest, fastest-growing population. With global tech demand outpacing local supplies in Europe and North America, our platform ensures African engineers gain practical production chops and direct global placements without bureaucratic friction.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-8 border-t border-slate-800 text-slate-300">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">14,850+</span>
              <span className="text-xs text-slate-400">Developers in Network</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 block">320+</span>
              <span className="text-xs text-slate-400">Software Projects Delivered</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">&lt; 72h</span>
              <span className="text-xs text-slate-400">Candidate Matching Speed</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white block">99.4%</span>
              <span className="text-xs text-slate-400">Client Retention Rate</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. FOUR CONNECTED PILLARS */}
        {/* ============================================================ */}
        <div>
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Four Connected Pillars
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A self-reinforcing flywheel that powers education, enterprise software delivery, and direct employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-all">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Global Talent Network</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We rigorously vet senior African software engineers, UI/UX designers, data scientists, and DevOps specialists. Companies can onboard full-time remote engineers or dedicated pods in under 72 hours.
              </p>
              <button 
                onClick={() => onNavigate('talent')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Browse Talent Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-amber-400 transition-all">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Practical Academy</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Our tracks focus entirely on production code, systems architecture, and live capstone deployments. Students work with industry mentors and graduate with real pull requests, not theoretical certificates.
              </p>
              <button 
                onClick={() => onNavigate('academy')}
                className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
              >
                <span>Explore Academy Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-400 transition-all">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Digital Solutions & Enterprise Engineering</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We design, architect, and ship high-performance web portals, mobile apps, payment gateways, and cloud backends for funded startups, enterprises, and institutions across the continent and beyond.
              </p>
              <button 
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
              >
                <span>View Engineering Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-purple-400 transition-all">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold mb-4">
                <Box className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Technology Products & Toolkits</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We build in-house SaaS platforms, developer SDKs, benchmarking systems, and remote management tools engineered to solve African operational hurdles and supercharge productivity.
              </p>
              <button 
                onClick={() => onNavigate('products')}
                className="text-xs font-semibold text-purple-600 hover:text-purple-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Discover Digital Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. PAN-AFRICAN PRESENCE & HUB CORRIDORS */}
        {/* ============================================================ */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-extrabold text-slate-900">
              Active Regional Corridors Across Africa
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Coordinated from our headquarters in Awada, Nigeria, our community connects builders across major Sub-Saharan technology hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl block mb-1">🇳🇬</span>
              <strong className="text-xs text-slate-900 block font-bold">Onitsha (HQ) & Lagos</strong>
              <span className="text-[11px] text-slate-500">Nigeria</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl block mb-1">🇰🇪</span>
              <strong className="text-xs text-slate-900 block font-bold">Nairobi</strong>
              <span className="text-[11px] text-slate-500">Kenya</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl block mb-1">🇬🇭</span>
              <strong className="text-xs text-slate-900 block font-bold">Accra</strong>
              <span className="text-[11px] text-slate-500">Ghana</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl block mb-1">🇷🇼</span>
              <strong className="text-xs text-slate-900 block font-bold">Kigali</strong>
              <span className="text-[11px] text-slate-500">Rwanda</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl block mb-1">🇿🇦</span>
              <strong className="text-xs text-slate-900 block font-bold">Cape Town</strong>
              <span className="text-[11px] text-slate-500">South Africa</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl block mb-1">🌍</span>
              <strong className="text-xs text-slate-900 block font-bold">London / Remote</strong>
              <span className="text-[11px] text-slate-500">Global Partners</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. DEDICATED CONTACT & HEADQUARTERS SECTION */}
        {/* ============================================================ */}
        <div id="contact-hub-section" className="pt-6">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Contact Techstackgist Hub</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get in touch with our team.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Have questions about hiring talent, commissioning a software build, enrolling in our academy, or visiting our hub? Reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Headquarters Address
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {PRIMARY_CONTACT.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {PRIMARY_CONTACT.location}
                  </p>
                  <span className="text-[11px] text-blue-600 font-medium block mt-1.5">
                    Techstackgist Hub / Ebetech Digital Solutions
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Official Email
                  </span>
                  <a 
                    href={`mailto:${PRIMARY_CONTACT.email}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors break-all"
                  >
                    {PRIMARY_CONTACT.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fast response within 24 hours on all business inquiries
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Phone & WhatsApp Direct Line
                  </span>
                  <a 
                    href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                    className="text-sm font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    {PRIMARY_CONTACT.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Available for phone consultations & WhatsApp messaging
                  </p>
                </div>
              </div>

              {/* Hours & Response Card */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
                  <Clock className="w-4 h-4" />
                  <span>Operating Hours & Support</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <p><strong>Monday – Friday:</strong> 8:00 AM – 6:00 PM WAT (GMT+1)</p>
                  <p><strong>Saturday:</strong> 9:00 AM – 4:00 PM WAT</p>
                  <p><strong>Sunday:</strong> Closed (Emergency Support Active)</p>
                </div>
                <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Organization · Techstackgist Hub</span>
                </div>
              </div>

            </div>

            {/* Direct Message Form Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Dispatched</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.subject}</em> has been transmitted to <strong className="text-blue-600">{PRIMARY_CONTACT.email}</strong>.
                  </p>

                  {deliveryResult?.needsActivation && (
                    <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-left max-w-md mx-auto flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Activation Notice:</strong> If this is your first submission, an activation email from FormSubmit is sent to <strong>{PRIMARY_CONTACT.email}</strong> to begin automatic delivery.
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    {deliveryResult?.gmailUrl && (
                      <a
                        href={deliveryResult.gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
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
                        className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <span>Open Mail App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={copyContactSummary}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied Details!' : 'Copy Summary'}</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Messages are sent directly to {PRIMARY_CONTACT.email} with rapid turnarounds.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Adekunle"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. samuel@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                    >
                      <option value="Hiring African Tech Talent">Hiring African Tech Talent</option>
                      <option value="Enterprise Digital Solutions & Engineering">Enterprise Digital Solutions & Engineering</option>
                      <option value="Techstackgist Academy Admissions">Techstackgist Academy Admissions</option>
                      <option value="Strategic Partnership / Hub Collaboration">Strategic Partnership / Hub Collaboration</option>
                      <option value="Visiting Headquarters in Awada">Visiting Headquarters in Awada</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, talent requirements, or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <span>Send Message to Techstackgist</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Direct recipient: {PRIMARY_CONTACT.email}</span>
                    <span>Awada, Onitsha · Nigeria</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
