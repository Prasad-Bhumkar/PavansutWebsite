import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import StreamCard from '../components/StreamCard';
import { motion } from 'framer-motion';

export default function Academics() {
  const { t } = useLanguage();

  const streamIcons = {
    marathi: 'fas fa-book-open',
    'semi-english': 'fas fa-language',
    english: 'fas fa-globe-americas'
  };

  const streams = [
    {
      id: 'marathi',
      title: t.academics.marathi.title,
      subtitle: t.academics.marathi.subtitle,
      features: t.academics.marathi.features,
      bgColor: 'bg-orange-500',
      iconColor: 'text-orange-500',
      checkColor: 'text-orange-500',
      borderColor: 'border-orange-500'
    },
    {
      id: 'semi-english',
      title: t.academics.semiEnglish.title,
      subtitle: t.academics.semiEnglish.subtitle,
      features: t.academics.semiEnglish.features,
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-500',
      checkColor: 'text-blue-500',
      borderColor: 'border-blue-500'
    },
    {
      id: 'english',
      title: t.academics.english.title,
      subtitle: t.academics.english.subtitle,
      features: t.academics.english.features,
      bgColor: 'bg-green-500',
      iconColor: 'text-green-500',
      checkColor: 'text-green-500',
      borderColor: 'border-green-500'
    }
  ];

  

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-primary to-school-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-poppins text-black font-bold text-responsive-3xl mb-6">
            {t.academics.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-responsive-lg max-w-3xl mx-auto text-black">
            {t.academics.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Educational Streams */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {streams.map((stream, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * (index + 1) }} key={stream.id}>
                <StreamCard
                  stream={stream}
                  icon={streamIcons[stream.id]}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              {t.academics_page.curriculum_title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.academics_page.curriculum_subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-baby text-white text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">{t.academics_page.pre_primary_level}</h3>
              <p className="text-school-primary font-medium mb-4">{t.academics_page.pre_primary_age}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">{t.academics_page.key_subjects}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.academics_page.pre_primary_subjects.map((subject, subIndex) => (
                    <span 
                      key={subIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-child text-white text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">{t.academics_page.primary_level}</h3>
              <p className="text-school-primary font-medium mb-4">{t.academics_page.primary_age}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">{t.academics_page.key_subjects}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.academics_page.primary_subjects.map((subject, subIndex) => (
                    <span 
                      key={subIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user-graduate text-white text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">{t.academics_page.upper_primary_level}</h3>
              <p className="text-school-primary font-medium mb-4">{t.academics_page.upper_primary_age}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">{t.academics_page.key_subjects}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {t.academics_page.upper_primary_subjects.map((subject, subIndex) => (
                    <span 
                      key={subIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-6">
                {t.academics_page.assessment_title}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-chart-line text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.academics_page.continuous_assessment_title}</h3>
                    <p className="text-gray-600">{t.academics_page.continuous_assessment_text}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clipboard-check text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.academics_page.formative_evaluation_title}</h3>
                    <p className="text-gray-600">{t.academics_page.formative_evaluation_text}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-medal text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{t.academics_page.holistic_development_title}</h3>
                    <p className="text-gray-600">{t.academics_page.holistic_development_text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Students engaged in interactive learning and assessment activities" 
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              {t.academics_page.extracurricular_title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t.academics_page.extracurricular_subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t.academics_page.cultural_programs, icon: 'fas fa-music', color: 'bg-purple-500' },
              { name: t.academics_page.sports_games, icon: 'fas fa-trophy', color: 'bg-green-500' },
              { name: t.academics_page.science_club, icon: 'fas fa-atom', color: 'bg-blue-500' },
              { name: t.academics_page.art_craft, icon: 'fas fa-paint-brush', color: 'bg-pink-500' },
              { name: t.academics_page.drama_theatre, icon: 'fas fa-theater-masks', color: 'bg-indigo-500' },
              { name: t.academics_page.environmental_club, icon: 'fas fa-leaf', color: 'bg-green-600' },
              { name: t.academics_page.reading_club, icon: 'fas fa-book-reader', color: 'bg-yellow-500' },
              { name: t.academics_page.community_service, icon: 'fas fa-hands-helping', color: 'bg-red-500' }
            ].map((activity, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * (index + 1) }} key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${activity.icon} text-white`} aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold text-gray-900">{activity.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
