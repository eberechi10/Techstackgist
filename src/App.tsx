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

import { TalentDetailModal } from './components/modals/TalentDetailModal';
import { HireTalentModal } from './components/modals/HireTalentModal';
import { StartProjectModal } from './components/modals/StartProjectModal';
import { CourseEnrollModal } from './components/modals/CourseEnrollModal';

export default function App() {
  // Manage current view with URL route synchronization
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Modal States
  const [selectedTalentForDetail, setSelectedTalentForDetail] = useState<TalentProfile | null>(null);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [preselectedTalentForHire, setPreselectedTalentForHire] = useState<TalentProfile | null>(null);
  
  const [startProjectOpen, setStartProjectOpen] = useState(false);
  const [selectedServiceForProject, setSelectedServiceForProject] = useState<ServiceItem | null>(null);

  const [courseEnrollOpen, setCourseEnrollOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<Course | null>(null);

  // Parse path on mount
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace('/', '') as PageId;
      const validPages: PageId[] = ['home', 'products', 'services', 'academy', 'talent', 'companies', 'about', 'contact'];
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

  const openHireModal = (talent?: TalentProfile) => {
    if (talent) {
      setPreselectedTalentForHire(talent);
    } else {
      setPreselectedTalentForHire(null);
    }
    setHireModalOpen(true);
  };

  const openStartProject = (service?: ServiceItem) => {
    setSelectedServiceForProject(service || null);
    setStartProjectOpen(true);
  };

  const openCourseEnroll = (course: Course) => {
    setSelectedCourseForEnroll(course);
    setCourseEnrollOpen(true);
  };

  return (
    <div id="techstackgist-app" className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Persistent Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenHireModal={() => openHireModal()}
        onOpenTalentExplore={() => navigateTo('talent')}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenHireModal={openHireModal}
            onOpenTalentDetail={(talent) => setSelectedTalentForDetail(talent)}
            onOpenStartProject={openStartProject}
            onOpenCourseEnroll={openCourseEnroll}
          />
        )}

        {currentPage === 'talent' && (
          <TalentPage
            onOpenHireModal={openHireModal}
            onOpenTalentDetail={(talent) => setSelectedTalentForDetail(talent)}
          />
        )}

        {currentPage === 'academy' && (
          <AcademyPage
            onOpenCourseEnroll={openCourseEnroll}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenStartProject={openStartProject}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage />
        )}

        {currentPage === 'companies' && (
          <CompaniesPage
            onOpenHireModal={() => openHireModal()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenHireModal={() => openHireModal()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Persistent Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenHireModal={() => openHireModal()}
        onOpenTalentExplore={() => navigateTo('talent')}
      />

      {/* Interactive Modals */}
      <TalentDetailModal
        talent={selectedTalentForDetail}
        onClose={() => setSelectedTalentForDetail(null)}
        onRequestInterview={(talent) => {
          setSelectedTalentForDetail(null);
          openHireModal(talent);
        }}
      />

      <HireTalentModal
        isOpen={hireModalOpen}
        onClose={() => {
          setHireModalOpen(false);
          setPreselectedTalentForHire(null);
        }}
        preselectedTalent={preselectedTalentForHire}
      />

      <StartProjectModal
        isOpen={startProjectOpen}
        onClose={() => {
          setStartProjectOpen(false);
          setSelectedServiceForProject(null);
        }}
        selectedService={selectedServiceForProject}
      />

      <CourseEnrollModal
        course={selectedCourseForEnroll}
        onClose={() => {
          setCourseEnrollOpen(false);
          setSelectedCourseForEnroll(null);
        }}
      />

    </div>
  );
}
