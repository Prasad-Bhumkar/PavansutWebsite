import React from 'react';
import { facilities } from '../data/schoolData';
import { useLanguage } from '../contexts/LanguageContext';
import FacilityCard from '../components/FacilityCard';
import { motion } from 'framer-motion';

export default function Facilities() {
  const { t } = useLanguage();

  const additionalFeatures = [
    {
      title: 'Clean Drinking Water',
      description: 'RO purified water systems throughout the campus',
      icon: 'fas fa-tint'
    },
    {
      title: 'Power Backup',
      description: 'Uninterrupted power supply with solar panels and generators',
      icon: 'fas fa-bolt'
    },
    {
      title: 'Safety & Security',
      description: 'CCTV surveillance and secure campus environment',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Health Care',
      description: 'First aid facility and regular health check-ups',
      icon: 'fas fa-heartbeat'
    },
    {
      title: 'Transportation',
      description: 'School bus service covering nearby villages',
      icon: 'fas fa-bus'
    },
    {
      title: 'Canteen',
      description: 'Nutritious meals and healthy snacks available',
      icon: 'fas fa-utensils'
    }
  ];

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-primary to-school-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-poppins font-bold  text-black text-responsive-3xl mb-6">
            {t.facilities.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-responsive-lg max-w-3xl mx-auto text-black">
            {t.facilities.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 * (index + 1) }} key={facility.id}>
                <FacilityCard facility={facility} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support services to ensure a safe, healthy, and conducive learning environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * (index + 1) }} key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${feature.icon} text-white`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-6">
                Modern Infrastructure
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-school-secondary text-lg" aria-hidden="true"></i>
                  <span className="text-gray-700">15 well-ventilated and spacious classrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-school-secondary text-lg" aria-hidden="true"></i>
                  <span className="text-gray-700">Digital smart boards in every classroom</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-school-secondary text-lg" aria-hidden="true"></i>
                  <span className="text-gray-700">Dedicated laboratories for science and computer studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-school-secondary text-lg" aria-hidden="true"></i>
                  <span className="text-gray-700">Comprehensive library with 3000+ books</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-school-secondary text-lg" aria-hidden="true"></i>
                  <span className="text-gray-700">Multi-purpose sports ground and indoor games area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-school-secondary text-lg" aria-hidden="true"></i>
                  <span className="text-gray-700">Green campus with gardens and play areas</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <img 
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Modern school infrastructure showcasing smart classrooms and learning spaces" 
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Technology Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage modern technology to enhance learning experiences and prepare students for the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Interactive Whiteboards',
                description: 'Touch-enabled boards for engaging lessons',
                icon: 'fas fa-chalkboard-teacher',
                color: 'bg-blue-500'
              },
              {
                title: 'High-Speed Internet',
                description: 'Reliable connectivity throughout campus',
                icon: 'fas fa-wifi',
                color: 'bg-green-500'
              },
              {
                title: 'Digital Library',
                description: 'Access to online books and resources',
                icon: 'fas fa-tablet-alt',
                color: 'bg-purple-500'
              },
              {
                title: 'Learning Management System',
                description: 'Digital platform for assignments and tracking',
                icon: 'fas fa-laptop',
                color: 'bg-orange-500'
              }
            ].map((tech, index) => (
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * (index + 1) }} key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-14 h-14 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${tech.icon} text-white`} aria-hidden="true"></i>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}