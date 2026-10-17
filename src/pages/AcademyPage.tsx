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
  Briefcase,
  HelpCircle,
  Calendar,
  Check,
  Zap,
  Target
} from 'lucide-react';
import { PRIMARY_CONTACT } from '../utils/email';

interface AcademyPageProps {
  onOpenCourseEnroll: (course: Course) => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({ onOpenCourseEnroll }) => {
  useSEO({
    title: 'Tech Training & Bootcamps | Techstackgist Academy',
    description: 'Master in-demand software engineering, data science, cloud architecture, and cybersecurity skills with hands-on bootcamps and job placement.',
    canonicalPath: '/academy',
    keywords: ['African tech bootcamps', 'software engineering training Nigeria', 'learn web development Africa', 'data science courses Africa', 'tech careers']
  });

  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);

  return (
    <div id="academy-page-container" className="pt-28 pb-20 w-full bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
            Practical Engineering Academy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Practical Tech Training &amp; Industry Bootcamps at Techstackgist
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Techstackgist Academy prepares engineers, data analysts, and security specialists to ship production-grade code on day one. We replace passive slide-reading with intensive, mentor-led cohort sprints, rigorous pull request reviews, and portfolio-defining capstone projects.
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
            <div className="text-xs font-bold text-slate-900">Career Placement</div>
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
                  Key Skills &amp; Frameworks
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
                <span className="text-xs text-slate-500 block">Tuition &amp; Installment Options:</span>
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

        {/* Learning Methodology Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 mb-16 shadow-2xs">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
              How Techstackgist Academy Turns Aspirations into Engineering Careers
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                The global demand for skilled software engineers, data professionals, and security experts has never been higher, yet many African graduates find themselves stuck with theoretical certifications that fail technical interviews. Techstackgist Academy was created to bridge this exact capability divide.
              </p>
              <p>
                Our learning methodology mirrors how world-class engineering organizations operate:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-600" />
                    <span>Real Git &amp; Pull Request Workflows</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    From your first day, code is written on feature branches, reviewed by mentors via GitHub pull requests, and deployed through automated CI/CD pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>Architectural Live Defenses</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Before graduating, students present their capstone architecture live to engineering directors, defending database choices, caching layers, and security trade-offs.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-purple-600" />
                    <span>Direct Pathway to TSG Talent Network</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    High-performing graduates are automatically inducted into the Techstackgist talent network, gaining access to remote contracts with global employers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span>Lifetime Access to Tech Alumni Hub</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Join over 4,500 active African developers in our alumni network for peer code reviews, hackathons, and referral opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academy FAQ Accordion */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mb-16 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl font-bold text-white">
              Everything you need to know about Techstackgist Academy
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Have questions about schedules, prerequisites, equipment, or payment plans? We have answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">Do I need prior coding experience to apply?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our tracks are scaffolded from foundational programming principles up to advanced production engineering. We provide preparatory modules prior to week 1 so determined beginners excel.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">What is the weekly time commitment?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Expect approximately 12–15 hours weekly, comprising live interactive sessions, mentor office hours, and independent project coding designed for working professionals.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">Are installment payment options available?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes. All programs feature zero-interest, 3-part flexible installment plans. You can also pay via local African debit cards or international payment gateways.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/60">
              <h3 className="font-bold text-sm text-white mb-2">How does career placement and hiring work?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Top graduates who complete all capstones and pass the architecture defense are fast-tracked into the Techstackgist talent pool, where international clients recruit for remote roles.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
