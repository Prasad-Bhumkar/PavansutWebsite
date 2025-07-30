import React from 'react';
import { Link } from 'react-router-dom';
import { facilities, facultyMembers } from '../data/schoolData';
import { useLanguage } from '../contexts/LanguageContext';
import { schoolStats } from '../data/schoolData';
import StreamCard from '../components/StreamCard';
import FacilityCard from '../components/FacilityCard';
import FacultyCard from '../components/FacultyCard';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();

  const streamIcons = {
    marathi: 'fas fa-book-open',
    'semi-english': 'fas fa-language',
    english: 'fas fa-globe-americas'
  };

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-school-primary to-school-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="absolute inset-0"
          aria-hidden="true"
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="mb-6">
                <span className="inline-block bg-school-secondary px-4 py-2 rounded-full text-sm font-semibold text-white">
                  <i className="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>
                  Established 2010 • Markal, Maharashtra
                </span>
              </div>
              
              <h1 className="font-poppins font-bold text-responsive-3xl leading-tight mb-6">
                {t.hero.title.split('Pavansut School')[0]}
                <span className="text-school-secondary">Pavansut School</span>
                {t.hero.title.split('Pavansut School')[1]}
              </h1>
              
              <p className="text-responsive-lg text-gray-100 mb-8 max-w-2xl leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <button className="bg-school-accent hover:bg-school-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-school-accent focus:ring-offset-2 focus:ring-offset-school-primary">
                    <i className="fas fa-calendar-check mr-2" aria-hidden="true"></i>
                    {t.hero.cta_primary}
                  </button>
                </Link>
                <Link href="/admissions">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-school-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-school-primary">
                    <i className="fas fa-download mr-2" aria-hidden="true"></i>
                    {t.hero.cta_secondary}
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-responsive-2xl font-bold mb-1">{schoolStats.yearsOfExcellence}</div>
                <div className="text-sm text-gray-200">{t.hero.stats.years}</div>
              </div>
              <div className="text-center">
                <div className="text-responsive-2xl font-bold mb-1">{schoolStats.studentsEnrolled}</div>
                <div className="text-sm text-gray-200">{t.hero.stats.students}</div>
              </div>
              <div className="text-center">
                <div className="text-responsive-2xl font-bold mb-1">{schoolStats.qualifiedTeachers}</div>
                <div className="text-sm text-gray-200">{t.hero.stats.teachers}</div>
              </div>
              <div className="text-center">
                <div className="text-responsive-2xl font-bold mb-1">{schoolStats.languageStreams}</div>
                <div className="text-sm text-gray-200">{t.hero.stats.streams}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-responsive-3xl text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Pavansut School campus building with traditional architecture" 
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-white text-lg" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">{t.about.mission.title}</h3>
                  <p className="text-gray-600">{t.about.mission.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-globe text-white text-lg" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">{t.about.vision.title}</h3>
                  <p className="text-gray-600">{t.about.vision.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-heart text-white text-lg" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">{t.about.values.title}</h3>
                  <p className="text-gray-600">{t.about.values.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Streams Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-responsive-3xl text-gray-900 mb-4">
              {t.academics.title}
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
              {t.academics.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {(t.academics.streams || []).map((stream, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * (index + 1) }} key={stream.id}>
                <StreamCard 
                  stream={stream}
                  icon={streamIcons[stream.id]}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/academics">
              <button className="bg-school-primary hover:bg-school-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-school-primary focus:ring-offset-2">
                {t.home_page.learn_more_programs}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-responsive-3xl text-gray-900 mb-4">
              {t.facilities.title}
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
              {t.facilities.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.slice(0, 6).map((facility, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * (index + 1) }} key={facility.id}>
                <FacilityCard facility={facility} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/facilities">
              <button className="bg-school-secondary hover:bg-school-secondary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-school-secondary focus:ring-offset-2">
                {t.home_page.explore_facilities}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-responsive-3xl text-gray-900 mb-4">
              {t.faculty.title}
            </h2>
            <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
              {t.faculty.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.slice(0, 3).map((faculty) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * (faculty.id) }} key={faculty.id}>
                <FacultyCard faculty={faculty} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faculty">
              <button className="bg-school-accent hover:bg-school-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-school-accent focus:ring-offset-2">
                {t.home_page.meet_faculty}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}