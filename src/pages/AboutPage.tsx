import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Copy,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { PageId } from '../types';
import { PRIMARY_CONTACT, submitEmailForm, SendEmailResult } from '../utils/email';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenHireModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenHireModal }) => {
  useSEO({
    title: 'About Techstackgist | Our Story, Vision & Mission',
    description: 'Techstackgist is a technology skills and opportunity ecosystem built to bridge the gap between people and the opportunities created by technology. Discover our vision, mission, and pathways.',
    canonicalPath: '/about',
    keywords: ['about Techstackgist', 'Techstackgist story', 'technology skills ecosystem', 'African tech talent', 'tech education Africa', 'zero to mastery', 'Onitsha tech hub']
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
      subject: `[About Inquiry] ${formData.subject} - from ${formData.name}`,
      message: formData.message,
      extraDetails: {
        "Source Page": "About Techstackgist Hub",
        "Inquiry Subject": formData.subject
      }
    });

    setDeliveryResult(result);
    setIsSending(false);
    setSubmitted(true);
  };

  const copyContactSummary = () => {
    const text = `Contact: Techstackgist Hub\nHeadquarters: ${PRIMARY_CONTACT.address}, ${PRIMARY_CONTACT.location}\nSupport Email: ${PRIMARY_CONTACT.supportEmail}\nAdmin Email: ${PRIMARY_CONTACT.adminEmail}\nPhone: ${PRIMARY_CONTACT.phone}\nInquiry: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\nMessage: ${formData.message}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="about-page-container" className="pt-28 pb-24 w-full bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ============================================================ */}
        {/* 1. HERO / EDITORIAL HEADER */}
        {/* ============================================================ */}
        <section className="max-w-4xl space-y-6 pt-4">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-600">
            About Techstackgist · Our Story
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
            Turning access into skills, skills into opportunities, and opportunities into impact.
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
            Techstackgist is a technology skills and opportunity ecosystem built to bridge the gap between people and the opportunities created by technology.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('story-manifesto-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Read Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenHireModal}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-sm transition-all cursor-pointer shadow-xs"
            >
              Hire Vetted Talent
            </button>
            <button
              onClick={() => onNavigate('academy')}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-sm transition-all cursor-pointer shadow-xs"
            >
              Explore Academy
            </button>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. VISION, MISSION & PURPOSE (NEAR-BLACK, CLEAN EDITORIAL CARDS) */}
        {/* ============================================================ */}
        <section id="vision-mission-purpose-section" className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Vision, Mission &amp; Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
                  01 / Vision
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 mb-3 tracking-tight">
                  Vision
                </h3>
                <p className="text-base text-slate-800 leading-relaxed">
                  To build a world where everyone has the opportunity to acquire valuable technology skills, create solutions, earn sustainable income, and create opportunities for others.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Opportunity · Solutions · Sustainable Income
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
                  02 / Mission
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 mb-3 tracking-tight">
                  Mission
                </h3>
                <p className="text-base text-slate-800 leading-relaxed">
                  To make technology education, tools, and opportunities accessible, practical, and affordable, taking people from zero to mastery and connecting their skills to real-world opportunities.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Practical · Affordable · Zero to Mastery
              </div>
            </div>

            {/* Purpose */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
                  03 / Purpose
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 mb-3 tracking-tight">
                  Purpose
                </h3>
                <p className="text-base text-slate-800 leading-relaxed">
                  To bridge the technology and opportunity gap by transforming learners into skilled professionals, creators, entrepreneurs, and employers.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
                Learners &rarr; Professionals &rarr; Employers
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. WHAT IS TECHSTACKGIST? (THE CORE STORY MANIFESTO) */}
        {/* ============================================================ */}
        <section id="story-manifesto-section" className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-10">
          
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block">
              The Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              What is Techstackgist?
            </h2>
            <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed">
              Techstackgist is a technology skills and opportunity ecosystem built to bridge the gap between people and the opportunities created by technology.
            </p>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-slate-800 leading-relaxed max-w-3xl border-l-2 border-slate-950 pl-6 sm:pl-8">
            <p>
              We believe that access to technology should not be limited by a person&apos;s background, experience, or financial circumstances.
            </p>
            <p>
              We provide accessible and affordable technology education, practical experience, tools, and pathways to real-world opportunities; helping people progress from zero to mastery.
            </p>
            <p className="font-semibold text-slate-950">
              But our goal goes beyond teaching technology.
            </p>
            <p>
              We want people to use what they learn to earn, create, innovate, solve problems, build businesses, and create opportunities for others.
            </p>
          </div>

          {/* Three Transformation Pathways */}
          <div className="pt-6 border-t border-slate-200">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
              Our Pathways of Transformation
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-slate-500 block mb-2">Pathway 01</span>
                <div className="text-sm text-slate-600 mb-1">From</div>
                <div className="text-lg font-bold text-slate-950">Learner</div>
                <div className="text-sm font-semibold text-slate-900 my-2">&darr; to</div>
                <div className="text-lg font-extrabold text-slate-950">Professional</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-slate-500 block mb-2">Pathway 02</span>
                <div className="text-sm text-slate-600 mb-1">From</div>
                <div className="text-lg font-bold text-slate-950">Job Seeker</div>
                <div className="text-sm font-semibold text-slate-900 my-2">&darr; to</div>
                <div className="text-lg font-extrabold text-slate-950">Job Creator</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono text-slate-500 block mb-2">Pathway 03</span>
                <div className="text-sm text-slate-600 mb-1">From</div>
                <div className="text-lg font-bold text-slate-950">Consumer of Technology</div>
                <div className="text-sm font-semibold text-slate-900 my-2">&darr; to</div>
                <div className="text-lg font-extrabold text-slate-950">Creator of Solutions</div>
              </div>

            </div>
          </div>

          {/* Impact Statement Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 text-white">
            <div className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-3">
              The Techstackgist Mandate
            </div>
            <p className="text-xl sm:text-2xl font-bold leading-snug text-white">
              &ldquo;Techstackgist is about turning access into skills, skills into opportunities, and opportunities into impact.&rdquo;
            </p>
          </div>

        </section>

        {/* ============================================================ */}
        {/* 4. FOUR INTEGRATED PILLARS (CLEAN ARCHITECTURE) */}
        {/* ============================================================ */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
              How The Ecosystem Operates
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              The Four Unified Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">Pillar 01</span>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Practical Academy</h3>
                <p className="text-sm text-slate-800 leading-relaxed mb-6">
                  Hands-on, rigorous curriculum taking individuals from absolute zero to production mastery in software engineering, UI/UX design, data science, and cloud systems.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('academy')}
                className="text-xs font-semibold text-slate-950 hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Academy Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">Pillar 02</span>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Vetted Talent Network</h3>
                <p className="text-sm text-slate-800 leading-relaxed mb-6">
                  Screened, benchmarked African software engineers, product designers, and DevOps professionals ready to embed seamlessly into global engineering teams.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('talent')}
                className="text-xs font-semibold text-slate-950 hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Browse Talent Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">Pillar 03</span>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Digital Solutions &amp; Engineering Services</h3>
                <p className="text-sm text-slate-800 leading-relaxed mb-6">
                  End-to-end bespoke product architecture, web platforms, mobile applications, and enterprise systems delivered on-schedule by senior engineering pods.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold text-slate-950 hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Engineering Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">Pillar 04</span>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Software Products &amp; Developer Tools</h3>
                <p className="text-sm text-slate-800 leading-relaxed mb-6">
                  Proprietary digital products, performance monitors, assessment suites, and developer productivity tools built to empower modern businesses.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('products')}
                className="text-xs font-semibold text-slate-950 hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Digital Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. ACTIVE REGIONAL CORRIDORS */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
              Geographic Footprint
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
              Active Regional Corridors Across Africa
            </h3>
            <p className="text-sm text-slate-700 mt-1">
              Headquartered in Awada, Onitsha, Nigeria, our community connects builders, mentors, and partner employers across key technology hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-xs text-slate-950 block font-bold">Onitsha (HQ) &amp; Lagos</strong>
              <span className="text-[11px] text-slate-600">Nigeria</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-xs text-slate-950 block font-bold">Nairobi</strong>
              <span className="text-[11px] text-slate-600">Kenya</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-xs text-slate-950 block font-bold">Accra</strong>
              <span className="text-[11px] text-slate-600">Ghana</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-xs text-slate-950 block font-bold">Kigali</strong>
              <span className="text-[11px] text-slate-600">Rwanda</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-xs text-slate-950 block font-bold">Cape Town</strong>
              <span className="text-[11px] text-slate-600">South Africa</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="text-xs text-slate-950 block font-bold">London / Remote</strong>
              <span className="text-[11px] text-slate-600">Global Partners</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. HEADQUARTERS & CONTACT SECTION */}
        {/* ============================================================ */}
        <section id="contact-hub-section" className="space-y-8 pt-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
              Direct Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Get in touch with Techstackgist
            </h2>
            <p className="text-sm sm:text-base text-slate-700 mt-2">
              Have questions about hiring talent, commissioning custom solutions, enrolling in our academy, or strategic partnerships? Contact our headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <MapPin className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Headquarters Address
                  </span>
                  <p className="text-sm font-semibold text-slate-950 leading-snug">
                    {PRIMARY_CONTACT.address}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {PRIMARY_CONTACT.location}
                  </p>
                  <span className="text-[11px] text-slate-700 font-medium block mt-1.5">
                    Techstackgist Hub / Ebetech Digital Solutions
                  </span>
                </div>
              </div>

              {/* Email Channels Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <Mail className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div className="space-y-3 flex-1 min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Official Email Channels
                  </span>
                  
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Customer Support &amp; Talent Inquiries:</span>
                    <a 
                      href={`mailto:${PRIMARY_CONTACT.supportEmail}`}
                      className="text-sm font-semibold text-slate-950 hover:underline transition-colors break-all"
                    >
                      {PRIMARY_CONTACT.supportEmail}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-500 block font-medium">Administration &amp; Partnerships:</span>
                    <a 
                      href={`mailto:${PRIMARY_CONTACT.adminEmail}`}
                      className="text-sm font-semibold text-slate-950 hover:underline transition-colors break-all"
                    >
                      {PRIMARY_CONTACT.adminEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <Phone className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Phone &amp; WhatsApp Direct Line
                  </span>
                  <a 
                    href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                    className="text-sm font-semibold text-slate-950 hover:underline transition-colors"
                  >
                    {PRIMARY_CONTACT.phone}
                  </a>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Available for consultations &amp; messaging
                  </p>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-900 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Clock className="w-4 h-4 text-slate-300" />
                  <span>Operating Hours (WAT / GMT+1)</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <p><strong>Monday – Friday:</strong> 8:00 AM – 6:00 PM WAT</p>
                  <p><strong>Saturday:</strong> 9:00 AM – 4:00 PM WAT</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>

            </div>

            {/* Direct Message Form Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">Message Transmitted</h3>
                  <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <em>{formData.subject}</em> has been dispatched directly to <strong className="text-slate-950">{PRIMARY_CONTACT.supportEmail}</strong> and <strong className="text-slate-950">{PRIMARY_CONTACT.adminEmail}</strong>.
                  </p>

                  {deliveryResult?.needsActivation && (
                    <div className="p-3.5 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-800 text-left max-w-md mx-auto flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                      <div>
                        <strong>Notice:</strong> If this is your first submission, an activation verification from FormSubmit has been sent to our inbox to enable automated delivery.
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    {deliveryResult?.gmailUrl && (
                      <a
                        href={deliveryResult.gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
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
                        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <span>Open Mail App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={copyContactSummary}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copied ? 'Copied Details!' : 'Copy Summary'}</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-slate-950 text-white text-xs font-semibold cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-950">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Messages are sent directly to {PRIMARY_CONTACT.supportEmail} and {PRIMARY_CONTACT.adminEmail}.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-800 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Samuel Adekunle"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-800 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. samuel@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-800 mb-1">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
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
                    <label className="block text-xs font-medium text-slate-800 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements, project, or inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 pt-1">
                    <span>Recipients: {PRIMARY_CONTACT.supportEmail} · {PRIMARY_CONTACT.adminEmail}</span>
                    <span>Awada, Onitsha · Nigeria</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
