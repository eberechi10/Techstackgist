import React from 'react';
import { PageId } from '../types';
import { 
  ArrowUpRight, 
  ShieldCheck
} from 'lucide-react';
import { NewsletterSubscription } from './NewsletterSubscription';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenHireModal: () => void;
  onOpenTalentExplore: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenHireModal,
  onOpenTalentExplore
}) => {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Subscription Component */}
        <div className="mb-14">
          <NewsletterSubscription />
        </div>

        {/* Top summary brand block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg">
                TSG
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-xl tracking-tight">
                  Techstackgist
                </span>
                <span className="text-xs text-blue-400 font-medium">
                  Africa&apos;s Technology Platform
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              <strong className="text-white font-semibold">Tech skills. Digital solutions. Global talent.</strong><br />
              Techstackgist connects people and businesses with technology products, professional services, practical education, and skilled African tech talent ready for the global economy.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Screened African Talent Pool
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Vetted & Assessment-Backed
              </span>
            </div>
          </div>

          {/* Column Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Ecosystem / Platform */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button 
                    onClick={() => { onNavigate('talent'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Talent Marketplace
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Practical Academy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Digital Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Technology Products
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('companies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    For Companies
                  </button>
                </li>
              </ul>
            </div>

            {/* Hubs & Talent */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Regional Hubs
              </h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span>🇳🇬</span> Nigeria (HQ & Nationwide)
                </li>
                <li className="flex items-center gap-2">
                  <span>🇰🇪</span> Nairobi, Kenya
                </li>
                <li className="flex items-center gap-2">
                  <span>🇬🇭</span> Accra, Ghana
                </li>
                <li className="flex items-center gap-2">
                  <span>🇷🇼</span> Kigali, Rwanda
                </li>
                <li className="flex items-center gap-2">
                  <span>🇿🇦</span> Cape Town, South Africa
                </li>
                <li className="flex items-center gap-2 text-blue-400">
                  <span>🌍</span> London / Remote Partners
                </li>
              </ul>
            </div>

            {/* Quick Actions & Navigation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Engage & Learn
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button 
                    onClick={onOpenHireModal}
                    className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-1 cursor-pointer"
                  >
                    Hire African Talent <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    About Us & Mission
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Contact & Headquarters
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      onNavigate('home');
                      setTimeout(() => {
                        const el = document.getElementById('faq-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Frequently Asked Questions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('talent'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Explore Talent Network
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Techstackgist Hub. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Positioned for Africa & Global Remote Collaboration
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
