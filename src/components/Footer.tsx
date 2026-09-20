import React from 'react';
import { PageId } from '../types';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Phone,
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Linkedin, 
  Twitter, 
  Github,
  Sparkles
} from 'lucide-react';
import { PRIMARY_CONTACT } from '../utils/email';

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
                Engage
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
                    onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Send Direct Inquiry
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    About Our Mission
                  </button>
                </li>
                <li>
                  <a 
                    href={`mailto:${PRIMARY_CONTACT.email}`} 
                    className="hover:text-white transition-colors text-xs text-blue-400 block pt-1"
                  >
                    {PRIMARY_CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Dedicated Contacts Strip at the bottom */}
        <div id="footer-contacts" className="py-8 border-b border-slate-800/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Address */}
            <div className="flex items-start gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Office Location
                </span>
                <p className="text-sm font-medium text-white leading-snug">
                  {PRIMARY_CONTACT.address}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-blue-900/50 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Email Address
                </span>
                <a 
                  href={`mailto:${PRIMARY_CONTACT.email}`}
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  {PRIMARY_CONTACT.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-emerald-900/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Phone & WhatsApp
                </span>
                <a 
                  href={`tel:${PRIMARY_CONTACT.phoneRaw}`}
                  className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                >
                  {PRIMARY_CONTACT.phone}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Techstackgist Technologies. All rights reserved.</span>
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
