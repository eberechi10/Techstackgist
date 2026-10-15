import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2, Sparkles, Send, Check } from 'lucide-react';

const TOPIC_OPTIONS = [
  { id: 'talent', label: 'African Tech Talent & Hiring' },
  { id: 'academy', label: 'Practical Academy & Courses' },
  { id: 'ecosystem', label: 'Tech Ecosystem & Insights' }
];

export const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    'talent',
    'academy',
    'ecosystem'
  ]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');

  // Check if previously subscribed
  useEffect(() => {
    try {
      const saved = localStorage.getItem('techstackgist_newsletter_email');
      if (saved) {
        setSubscribedEmail(saved);
        setStatus('success');
      }
    } catch {
      // LocalStorage unavailable in restricted context
    }
  }, []);

  const toggleTopic = (id: string) => {
    setSelectedTopics(prev => 
      prev.includes(id) 
        ? prev.length > 1 
          ? prev.filter(t => t !== id) 
          : prev // keep at least one
        : [...prev, id]
    );
  };

  const validateEmail = (val: string): boolean => {
    const trimmed = val.trim();
    if (!trimmed) {
      setErrorMessage('Please enter your email address to subscribe.');
      return false;
    }
    // Standard RFC-compliant relaxed regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmed)) {
      setErrorMessage('Please enter a valid email address (e.g. name@company.com).');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateEmail(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate async API call with realistic latency
    setTimeout(() => {
      try {
        localStorage.setItem('techstackgist_newsletter_email', email.trim());
      } catch {
        // ignore
      }
      setSubscribedEmail(email.trim());
      setStatus('success');
      setEmail('');
    }, 700);
  };

  const handleReset = () => {
    try {
      localStorage.removeItem('techstackgist_newsletter_email');
    } catch {
      // ignore
    }
    setSubscribedEmail('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div 
      id="newsletter-subscription"
      className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative subtle ambient glow */}
      <div 
        className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Information Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Weekly Tech & Talent Briefing</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Stay ahead with curated African tech intelligence
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Get weekly updates on screened African software engineers, remote hiring market rates, tech trends, and new practical academy cohorts delivered straight to your inbox.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>14,000+ tech leaders & devs</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>1-click unsubscribe anytime</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Zero spam, guaranteed</span>
            </span>
          </div>
        </div>

        {/* Right Form / State Column */}
        <div className="lg:col-span-6">
          {status === 'success' ? (
            <div 
              role="status" 
              className="bg-slate-950/80 border border-emerald-500/40 rounded-xl p-6 sm:p-7 text-left space-y-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    You&apos;re subscribed to the Techstackgist Briefing!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Updates will be sent to <span className="text-emerald-300 font-medium">{subscribedEmail}</span>. We&apos;ve sent a welcome issue with our African Developer Benchmark Guide to your inbox.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-400">
                  Topics: {selectedTopics.map(t => TOPIC_OPTIONS.find(o => o.id === t)?.label.split(' ')[0]).join(', ')}
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-2 cursor-pointer transition-colors"
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Optional Topic selector */}
              <div>
                <span className="block text-xs font-medium text-slate-400 mb-2">
                  Select your areas of interest (optional):
                </span>
                <div className="flex flex-wrap gap-2">
                  {TOPIC_OPTIONS.map((topic) => {
                    const isSelected = selectedTopics.includes(topic.id);
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => toggleTopic(topic.id)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-blue-300'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                        aria-pressed={isSelected}
                      >
                        {isSelected && <Check className="w-3 h-3 text-blue-400" />}
                        {topic.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Email Input Field & Submit Action */}
              <div>
                <label 
                  htmlFor="footer-newsletter-email" 
                  className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
                >
                  Work or personal email <span className="text-blue-400">*</span>
                </label>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="footer-newsletter-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') {
                          setStatus('idle');
                          setErrorMessage('');
                        }
                      }}
                      placeholder="e.g. alex@company.com"
                      required
                      aria-required="true"
                      aria-invalid={status === 'error' ? 'true' : 'false'}
                      aria-describedby={status === 'error' ? 'newsletter-error-msg' : 'newsletter-privacy-note'}
                      className={`w-full h-12 pl-10 pr-4 bg-slate-950 text-white placeholder-slate-500 rounded-xl border text-sm sm:text-base focus:outline-none transition-colors ${
                        status === 'error'
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
                          : 'border-slate-700 hover:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-blue-600/60 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-blue-600/20 cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Inline Validation Error */}
                {status === 'error' && errorMessage && (
                  <p 
                    id="newsletter-error-msg" 
                    role="alert" 
                    className="mt-2 text-xs text-rose-400 flex items-center gap-1.5 font-medium"
                  >
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </p>
                )}

                {/* Privacy & Anti-Spam note */}
                <p 
                  id="newsletter-privacy-note" 
                  className="mt-2.5 text-xs text-slate-500 leading-normal"
                >
                  We care about your privacy. Unsubscribe anytime with a single click. No spam, ever.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
