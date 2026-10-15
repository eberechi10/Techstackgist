import React, { useState, useEffect } from 'react';
import { PageId, TalentProfile, Course, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TalentPage } from './pages/TalentPage';
import { AcademyPage } from './pages/AcademyPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HirePage } from './pages/HirePage';
import { StartProjectPage } from './pages/StartProjectPage';
import { CourseEnrollPage } from './pages/CourseEnrollPage';
import { TalentProfilePage } from './pages/TalentProfilePage';

export default function App() {
  // Manage current view with URL route synchronization
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Contextual Data States for dedicated action pages
  const [selectedTalentForDetail, setSelectedTalentForDetail] = useState<TalentProfile | null>(null);
  const [preselectedTalentForHire, setPreselectedTalentForHire] = useState<TalentProfile | null>(null);
  const [selectedServiceForProject, setSelectedServiceForProject] = useState<ServiceItem | null>(null);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<Course | null>(null);

  // Parse path on mount and browser navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace('/', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'products', 
        'services', 
        'academy', 
        'talent', 
        'companies', 
        'about', 
        'contact',
        'hire',
        'start-project',
        'enroll',
        'talent-profile'
      ];
      if (validPages.includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenHire = (talent?: TalentProfile) => {
    setPreselectedTalentForHire(talent || null);
    navigateTo('hire');
  };

  const handleOpenStartProject = (service?: ServiceItem) => {
    setSelectedServiceForProject(service || null);
    navigateTo('start-project');
  };

  const handleOpenCourseEnroll = (course: Course) => {
    setSelectedCourseForEnroll(course);
    navigateTo('enroll');
  };

  const handleOpenTalentDetail = (talent: TalentProfile) => {
    setSelectedTalentForDetail(talent);
    navigateTo('talent-profile');
  };

  return (
    <div id="techstackgist-app" className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Persistent Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenHireModal={() => handleOpenHire()}
        onOpenTalentExplore={() => navigateTo('talent')}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenHireModal={handleOpenHire}
            onOpenTalentDetail={handleOpenTalentDetail}
            onOpenStartProject={handleOpenStartProject}
            onOpenCourseEnroll={handleOpenCourseEnroll}
          />
        )}

        {currentPage === 'talent' && (
          <TalentPage
            onOpenHireModal={handleOpenHire}
            onOpenTalentDetail={handleOpenTalentDetail}
          />
        )}

        {currentPage === 'academy' && (
          <AcademyPage
            onOpenCourseEnroll={handleOpenCourseEnroll}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenStartProject={handleOpenStartProject}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage />
        )}

        {currentPage === 'companies' && (
          <CompaniesPage
            onOpenHireModal={() => handleOpenHire()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenHireModal={() => handleOpenHire()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {/* Dedicated Action Pages (Replaced modals with dedicated full-page routes) */}
        {currentPage === 'hire' && (
          <HirePage
            onNavigate={navigateTo}
            preselectedTalent={preselectedTalentForHire}
            onClearPreselectedTalent={() => setPreselectedTalentForHire(null)}
          />
        )}

        {currentPage === 'start-project' && (
          <StartProjectPage
            onNavigate={navigateTo}
            selectedService={selectedServiceForProject}
          />
        )}

        {currentPage === 'enroll' && (
          <CourseEnrollPage
            onNavigate={navigateTo}
            selectedCourse={selectedCourseForEnroll}
          />
        )}

        {currentPage === 'talent-profile' && (
          <TalentProfilePage
            talent={selectedTalentForDetail}
            onNavigate={navigateTo}
            onHireTalent={(talent) => handleOpenHire(talent)}
          />
        )}
      </main>

      {/* Persistent Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenHireModal={() => handleOpenHire()}
        onOpenTalentExplore={() => navigateTo('talent')}
      />

    </div>
  );
}
