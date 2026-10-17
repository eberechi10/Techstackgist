import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { PRODUCTS } from '../data/mockData';
import { ProductItem } from '../types';
import { 
  Box, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Download, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  HelpCircle,
  X,
  Mail,
  Check
} from 'lucide-react';
import { PRIMARY_CONTACT } from '../utils/email';

export const ProductsPage: React.FC = () => {
  useSEO({
    title: 'Digital Products & Tools | Techstackgist',
    description: 'Explore production-grade digital tools, developer starter kits, SaaS platforms, and talent benchmarking tools engineered by Techstackgist.',
    canonicalPath: '/products',
    keywords: ['African SaaS products', 'developer kits Africa', 'Techstack Talent Portal', 'African tech software', 'digital tools Nigeria']
  });

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [modalInquirySent, setModalInquirySent] = useState<boolean>(false);
  const [inquiryEmail, setInquiryEmail] = useState<string>('');

  const categories = ['All', 'SaaS Products', 'Digital Tools', 'Templates', 'Educational Resources', 'Business Tools'];

  const filteredProducts = PRODUCTS.filter(p => 
    activeFilter === 'All' ? true : p.category === activeFilter
  );

  const handleOpenProduct = (prod: ProductItem) => {
    setSelectedProductForModal(prod);
    setModalInquirySent(false);
    setInquiryEmail('');
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail || !inquiryEmail.includes('@')) return;
    setModalInquirySent(true);
  };

  return (
    <div id="products-page-container" className="pt-28 pb-20 w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold mb-3">
            <Box className="w-3.5 h-3.5" />
            Software Suites & Accelerators
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Software Products & Digital Tools Built by Techstackgist
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Techstackgist engineers practical software solutions, developer boilerplates, and enterprise platforms tailored for emerging markets. From vetted talent screening systems to African payment-integrated application templates and compensation benchmarks, our digital products bridge critical infrastructure gaps for growing ventures.
          </p>
        </div>

        {/* Value Proposition Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Production-Ready Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every tool and boilerplate is built to scalable production standards, incorporating automated unit tests, strict TypeScript types, and zero technical debt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Compliant & Secure by Default</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full alignment with NDPR and GDPR requirements, industry-grade encryption, and secure authentication flows for fintech, edtech, and enterprise applications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">Ecosystem Integration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Seamlessly wired with African payment processors like Paystack and Flutterwave, local SMS gateways, and cloud deployment pipelines.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    {prod.category}
                  </span>
                  {prod.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                      {prod.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {prod.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {prod.description}
                </p>

                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Core Capabilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {prod.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-slate-500">{prod.stats}</span>
                  <span className="font-bold text-slate-900">{prod.pricing}</span>
                </div>
                <button
                  onClick={() => handleOpenProduct(prod)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Product Access</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Narrative Section: Who We Are & What We Do */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xs">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Building Scalable Software Infrastructure for the Next Generation of African Enterprises
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                At Techstackgist, we believe that software created for African founders and engineering teams should solve the tangible, everyday operational bottlenecks unique to our markets. Traditional Silicon Valley boilerplates frequently neglect regional realities: multi-currency volatility, fragmented local payment switches, irregular internet latency, and distinct compliance mandates across West and East Africa.
              </p>
              <p>
                Our product development collective focuses on three foundational tracks:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>
                  <strong>Hiring & Talent Assessment Platforms:</strong> Algorithmic screening tools and coding playgrounds designed to assess African software engineers against real-world production repos rather than esoteric puzzle questions.
                </li>
                <li>
                  <strong>Developer Accelerators & DevKits:</strong> Pre-wired application scaffolds configured with TypeScript, Next.js, Flutterwave, Paystack, and identity verification modules that shave months off new product launch cycles.
                </li>
                <li>
                  <strong>Market Intelligence & Compensation Benchmarks:</strong> Actionable compensation reports and hiring indexes that help both global enterprises and domestic startups establish transparent, competitive compensation bands.
                </li>
              </ul>
              <p>
                Whether you are a startup founder looking to launch in weeks or an enterprise engineering manager seeking specialized tooling, Techstackgist products give you an unassailable head start.
              </p>
            </div>
          </div>
        </div>

        {/* Products FAQ Accordion */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mb-16 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl font-bold text-white">
              Questions about Techstackgist digital products
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Everything you need to know about access, commercial licensing, integrations, and enterprise deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">Can we white-label or customize Techstackgist products?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes. Our commercial and enterprise tiers include white-label rights, custom domain routing, and bespoke feature customization delivered directly by our core engineering squads.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">How do we get support for DevKit and boilerplate code?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All purchased developer tools and templates include continuous access to our developer Discord, private GitHub repository updates, and priority email support at {PRIMARY_CONTACT.supportEmail}.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">How are payments processed for product licenses?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We accept major international credit cards, US bank transfers, and local African currencies (NGN, KES, GHS, ZAR) via integrated Paystack and Flutterwave gateways with automated tax invoicing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">What security audits are conducted on the software?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our tools undergo continuous dependency vulnerability scans, OWASP top 10 auditing, and strict authentication verification to guarantee maximum protection for production workloads.
              </p>
            </div>
          </div>
        </div>

        {/* Product Access / Inquiry Modal */}
        {selectedProductForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {selectedProductForModal.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedProductForModal.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {selectedProductForModal.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-500">License Tier:</span>
                  <span className="font-bold text-slate-900">{selectedProductForModal.pricing}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Adoption:</span>
                  <span className="font-medium text-slate-700">{selectedProductForModal.stats}</span>
                </div>
              </div>

              {modalInquirySent ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-emerald-900">Inquiry Received</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Access instructions and documentation links have been dispatched to <strong>{inquiryEmail}</strong>. You can also reach our engineering desk directly at <strong>{PRIMARY_CONTACT.supportEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setSelectedProductForModal(null)}
                    className="mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendInquiry} className="space-y-4">
                  <div>
                    <label htmlFor="product-inquiry-email" className="block text-xs font-bold text-slate-700 mb-1">
                      Enter your work or team email for instant access:
                    </label>
                    <input
                      id="product-inquiry-email"
                      type="email"
                      required
                      placeholder="engineer@company.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Get Access &amp; Documentation</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center">
                    Direct access provided within 1 business day · Zero spam commitment
                  </p>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
