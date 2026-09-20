import React, { useState } from 'react';
import { useSEO } from '../utils/seo';
import { Course } from '../types';
import { COURSES } from '../data/mockData';
import { 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Award, 
  Layers, 
  BookOpen, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  Terminal, 
  Briefcase 
} from 'lucide-react';

interface AcademyPageProps {
  onOpenCourseEnroll: (course: Course) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onOpenCourseEnroll }) => {
  useSEO({
    title: 'Techstackgist Academy | Practical Tech Training & Industry Bootcamps',
    description: 'Upskill with hands-on bootcamps in full-stack software engineering, data science, AI & machine learning, cloud architecture, and cybersecurity.',
    canonicalPath: '/academy',
    keywords: ['African tech bootcamps', 'software engineering training Nigeria', 'learn web development Africa', 'data science courses Africa', 'tech careers']
  });

  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);

  return (
    <div id="academy-page-container" className="pt-28 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
            Practical Engineering Academy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Learn skills that take you somewhere.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            The African tech landscape doesn&apos;t need more passive certificate-chasers; it needs engineers, designers, and analysts who can ship resilient software on day one.
          </p>
        </div>

        {/* 5 Core Pillars of TSG Academy */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12 text-center">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-blue-600 mb-1">Pillar 01</div>
            <div className="text-xs font-bold text-slate-900">Beginner → Advanced</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Scaffolded tracks</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-blue-600 mb-1">Pillar 02</div>
            <div className="text-xs font-bold text-slate-900">Practical Projects</div>
            <div className="text-[11px] text-slate-500 mt-0.5">No toy tutorials</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-blue-600 mb-1">Pillar 03</div>
            <div className="text-xs font-bold text-slate-900">Portfolio Building</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Live deployed apps</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-blue-600 mb-1">Pillar 04</div>
            <div className="text-xs font-bold text-slate-900">Assessments</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Defended live code</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
            <div className="text-xs font-bold text-blue-600 mb-1">Pillar 05</div>
            <div className="text-xs font-bold text-slate-900">Career Opportunities</div>
            <div className="text-[11px] text-slate-500 mt-0.5">TSG Talent Network</div>
          </div>
        </div>

        {/* Interactive Course Pathway Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Course Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Academy Program:
            </h3>
            {COURSES.map((course) => {
              const isSelected = selectedCourse.id === course.id;
              return (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-white border-slate-200 hover:border-blue-300 text-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {course.category}
                      </span>
                      <span className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {course.duration}
                      </span>
                    </div>
                    <div className="font-bold text-sm mt-1">{course.title}</div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Syllabus & Capstones Sheet */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Program Deep Dive
                </span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  ● {selectedCourse.cohortStatus}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                {selectedCourse.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedCourse.description}
              </p>

              {/* Skills Gained */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Skills & Frameworks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCourse.skillsGained.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Projects Capstones */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  Production Capstones You Build:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {selectedCourse.practicalProjects.map((proj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Path and Assessment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <span className="text-slate-500 block mb-0.5">Target Career Path:</span>
                  <strong className="text-slate-900">{selectedCourse.careerPath}</strong>
                </div>
                <div className="p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <span className="text-slate-500 block mb-0.5">Graduation Requirement:</span>
                  <strong className="text-slate-900">{selectedCourse.assessmentType}</strong>
                </div>
              </div>
            </div>

            {/* Bottom Tuition & CTA */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 block">Tuition & Installment Options:</span>
                <span className="text-base font-extrabold text-slate-900">{selectedCourse.tuition}</span>
              </div>

              <button
                onClick={() => onOpenCourseEnroll(selectedCourse)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                Apply for Next Cohort
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
