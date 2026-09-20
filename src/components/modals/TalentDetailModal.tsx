import React from 'react';
import { TalentProfile } from '../../types';
import { 
  X, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Star, 
  Briefcase, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle2, 
  Calendar,
  Languages
} from 'lucide-react';

interface TalentDetailModalProps {
  talent: TalentProfile | null;
  onClose: () => void;
  onRequestInterview: (talent: TalentProfile) => void;
}

export const TalentDetailModal: React.FC<TalentDetailModalProps> = ({
  talent,
  onClose,
  onRequestInterview
}) => {
  if (!talent) return null;

  return (
    <div 
      id="talent-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        
        {/* Header Banner */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            id="close-talent-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img
              src={talent.avatar}
              alt={talent.name}
              className="w-18 h-18 rounded-2xl object-cover border-2 border-blue-500 shadow-md"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-white">{talent.name}</h3>
                <span className="text-lg">{talent.flag}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {talent.statusText}
                </span>
              </div>
              <p className="text-blue-400 font-medium text-sm mt-0.5">{talent.role}</p>
              
              <div className="flex items-center gap-4 mt-2 text-xs text-slate-300 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {talent.city}, {talent.country}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {talent.timezone}
                </span>
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  TSG Vetting Score: {talent.vettingScore}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Professional Summary
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {talent.bio}
            </p>
          </div>

          {/* Core Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Verified Technical Competencies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {talent.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/80 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Capstones / Verified Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
              <span>Verified Projects & Work Samples</span>
              <span className="text-[11px] text-emerald-600 font-medium lowercase">
                Code audited & verified
              </span>
            </h4>
            <div className="space-y-3">
              {talent.featuredProjects.map((proj, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-slate-900">{proj.title}</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Impact: {proj.impact}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials & Rates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                Education & Certifications
              </div>
              <div className="text-xs font-semibold text-slate-800">
                {talent.educationOrCert}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5 font-medium">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                Experience & Rate Benchmark
              </div>
              <div className="text-xs font-semibold text-slate-800">
                {talent.experienceYears}+ years · <span className="text-blue-600">${talent.rateHourly}/hr</span> (or monthly contract)
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          
          <button
            id="modal-request-interview-btn"
            onClick={() => {
              onRequestInterview(talent);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold shadow-xs transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Request Interview / Hire {talent.name.split(' ')[0]}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
