import React, { useState, useMemo } from 'react';
import { useSEO } from '../utils/seo';
import { TalentProfile } from '../types';
import { TALENT_PROFILES } from '../data/mockData';
import { 
  Search, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

interface TalentPageProps {
  onOpenHireModal: (talent?: TalentProfile) => void;
  onOpenTalentDetail: (talent: TalentProfile) => void;
}

export const TalentPage: React.FC<TalentPageProps> = ({
  onOpenHireModal,
  onOpenTalentDetail
}) => {
  useSEO({
    title: 'Hire Top African Tech Talent | Vetted Remote Engineers – Techstackgist',
    description: 'Discover and hire pre-vetted African software engineers, AI developers, DevOps specialists, and UI/UX designers ready to integrate with global teams.',
    canonicalPath: '/talent',
    keywords: ['hire African engineers', 'remote software developers Africa', 'vetted tech talent', 'African UI/UX designers', 'AI engineers Africa']
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false);

  const categories = [
    'All',
    'Software Engineering',
    'Design & UX',
    'Data & AI',
    'Cybersecurity',
    'DevOps & Cloud'
  ];

  const countries = [
    'All',
    'Nigeria',
    'Ghana',
    'Kenya',
    'Rwanda',
    'South Africa'
  ];

  const filteredTalent = useMemo(() => {
    return TALENT_PROFILES.filter((t) => {
      const matchesSearch = 
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
      const matchesCountry = selectedCountry === 'All' || t.country === selectedCountry;
      const matchesAvail = !onlyAvailable || t.available;

      return matchesSearch && matchesCat && matchesCountry && matchesAvail;
    });
  }, [searchQuery, selectedCategory, selectedCountry, onlyAvailable]);

  return (
    <div id="talent-page-container" className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Vetted African Tech Talent Pool
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Screened engineering, design & data professionals ready to build.
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every candidate in our network has undergone code quality audits, real-world project defenses, and timezone collaboration verification. Hire full-time remote or fractional specialists in &lt; 48 hours.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-8 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by skill (React, Figma, Python, SQL), role, or name..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* Country Selector */}
            <div className="w-full md:w-52">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 bg-white"
              >
                <option value="All">All African Countries</option>
                <option value="Nigeria">Nigeria 🇳🇬</option>
                <option value="Ghana">Ghana 🇬🇭</option>
                <option value="Kenya">Kenya 🇰🇪</option>
                <option value="Rwanda">Rwanda 🇷🇼</option>
                <option value="South Africa">South Africa 🇿🇦</option>
              </select>
            </div>

            {/* Availability Toggle */}
            <button
              onClick={() => setOnlyAvailable(!onlyAvailable)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                onlyAvailable
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${onlyAvailable ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
              <span>Available Now</span>
            </button>

            {/* Direct Hire CTA */}
            <button
              onClick={() => onOpenHireModal()}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Custom Match Request</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
            <span className="text-xs text-slate-400 font-semibold mr-1 shrink-0">Field:</span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Talent Cards Grid */}
        {filteredTalent.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching talent found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search query, selecting &ldquo;All&rdquo; categories, or request a custom talent search from our pipeline.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedCountry('All'); }}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalent.map((talent) => (
              <div
                key={talent.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top card bar */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={talent.avatar} 
                        alt={talent.name}
                        className="w-14 h-14 rounded-xl object-cover border border-slate-200 group-hover:ring-2 group-hover:ring-blue-500 transition-all" 
                      />
                      <div>
                        <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {talent.name}
                        </h3>
                        <div className="text-xs font-semibold text-blue-700">
                          {talent.role}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                          <span>{talent.city}, {talent.country}</span>
                          <span>{talent.flag}</span>
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Available
                    </span>
                  </div>

                  {/* Vetting score & experience */}
                  <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-slate-50 border border-slate-100 mb-3.5">
                    <span className="flex items-center gap-1 text-slate-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      Assessment: <strong className="text-slate-900">{talent.vettingScore}%</strong>
                    </span>
                    <span className="text-slate-600">
                      {talent.experienceYears}+ years exp · <strong className="text-blue-600">${talent.rateHourly}/hr</strong>
                    </span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {talent.skills.map((s) => (
                      <span 
                        key={s}
                        className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {talent.bio}
                  </p>
                </div>

                {/* Footer Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenTalentDetail(talent)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    View Portfolio
                  </button>

                  <button
                    onClick={() => onOpenHireModal(talent)}
                    className="px-4 py-2 bg-slate-900 hover:bg-blue-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Interview</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Global Hiring Value Strip */}
        <div className="mt-14 p-8 rounded-2xl bg-slate-900 text-white grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-blue-400 font-mono text-sm font-bold mb-1">01 / SCREENING</div>
            <h4 className="font-bold text-white mb-1">Top 3% Technical Filter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every candidate is verified through algorithmic problem-solving, architectural defense, and production code analysis.
            </p>
          </div>

          <div>
            <div className="text-blue-400 font-mono text-sm font-bold mb-1">02 / TIMEZONE</div>
            <h4 className="font-bold text-white mb-1">Co-working Overlap</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sub-Saharan Africa shares identical or near-identical timezones (GMT to GMT+3) with the UK and Europe, and generous overlap with US East Coast.
            </p>
          </div>

          <div>
            <div className="text-blue-400 font-mono text-sm font-bold mb-1">03 / COMPLIANCE</div>
            <h4 className="font-bold text-white mb-1">Zero Payroll Friction</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Work with talent via standardized international contractor agreements or direct full-time payroll with localized tax compliance.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
