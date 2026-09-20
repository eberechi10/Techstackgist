import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Box, 
  Building2, 
  Info, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenHireModal: () => void;
  onOpenTalentExplore: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenHireModal,
  onOpenTalentExplore
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'products', label: 'Products', icon: <Box className="w-4 h-4" /> },
    { id: 'services', label: 'Services', icon: <Code2 className="w-4 h-4" /> },
    { id: 'academy', label: 'Academy', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'talent', label: 'Talent', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'companies', label: 'For Companies', icon: <Building2 className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3' 
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* TSG Logo Brand */}
        <button
          id="nav-logo-btn"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold tracking-tight text-lg shadow-xs group-hover:bg-blue-600 transition-colors shrink-0">
            <span className="text-white">TSG</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight flex items-center gap-1.5 whitespace-nowrap">
              Techstackgist
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 whitespace-nowrap">
              African Tech Platform
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-2 xl:px-3.5 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50/80 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right CTA Buttons */}
        <div className="hidden md:flex items-center gap-2 xl:gap-3 shrink-0">
          <button
            id="nav-explore-talent-btn"
            onClick={onOpenTalentExplore}
            className="px-3 xl:px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Explore Talent
          </button>
          <button
            id="nav-hire-talent-btn"
            onClick={onOpenHireModal}
            className="inline-flex items-center gap-2 px-3.5 xl:px-4.5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold shadow-xs transition-all duration-200 hover:shadow-blue-500/20 hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">Hire Tech Talent</span>
            <ArrowUpRight className="w-4 h-4 opacity-80 shrink-0" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <button
            id="mobile-hire-btn"
            onClick={onOpenHireModal}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold whitespace-nowrap"
          >
            Hire Talent
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-link-${item.id}`}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-slate-400">{item.icon}</span>
                    {item.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              id="mobile-explore-talent-action"
              onClick={() => {
                onOpenTalentExplore();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Explore Talent Directory
            </button>
            <button
              id="mobile-hire-action"
              onClick={() => {
                onOpenHireModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Hire Tech Talent
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
