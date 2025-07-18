import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { schoolStats } from '../data/schoolData';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-primary to-school-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-poppins font-bold text-responsive-3xl mb-6 text-black">
            {t.about.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-responsive-lg max-w-3xl mx-auto text-black">
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Pavansut School campus building showcasing traditional and modern architecture" 
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-graduation-cap text-white text-lg" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">{t.about.mission.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.about.mission.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-globe text-white text-lg" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">{t.about.vision.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.about.vision.description}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-heart text-white text-lg" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">{t.about.values.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{t.about.values.description}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* School Statistics */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-center text-gray-900 mb-12">
              {t.about_page.glance_title}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-alt text-white text-xl" aria-hidden="true"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{schoolStats.established}</div>
                <div className="text-gray-600">{t.about_page.year_established}</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-school-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-white text-xl" aria-hidden="true"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{schoolStats.studentsEnrolled}</div>
                <div className="text-gray-600">{t.hero.stats.students}</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-school-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chalkboard-teacher text-white text-xl" aria-hidden="true"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{schoolStats.qualifiedTeachers}</div>
                <div className="text-gray-600">{t.hero.stats.teachers}</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-language text-white text-xl" aria-hidden="true"></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{schoolStats.languageStreams}</div>
                <div className="text-gray-600">{t.hero.stats.streams}</div>
              </div>
            </div>
          </motion.div>

          {/* History Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-center text-gray-900 mb-12">
              {t.about_page.journey_title}
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2010</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.about_page.foundation_title}</h3>
                  <p className="text-gray-600">{t.about_page.foundation_text}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2015</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.about_page.expansion_title}</h3>
                  <p className="text-gray-600">{t.about_page.expansion_text}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-school-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2020</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.about_page.digital_title}</h3>
                  <p className="text-gray-600">{t.about_page.digital_text}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2024</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.about_page.present_title}</h3>
                  <p className="text-gray-600">{t.about_page.present_text}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}