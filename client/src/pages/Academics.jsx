import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { educationalStreams } from '../data/schoolData';
import StreamCard from '../components/StreamCard';
import AnimatedSection from '../components/AnimatedSection';

export default function Academics() {
  const { t } = useLanguage();

  const streamIcons = {
    marathi: 'fas fa-book-open',
    'semi-english': 'fas fa-language',
    english: 'fas fa-globe-americas'
  };

  const curriculum = [
    {
      level: 'Pre-Primary',
      age: '3-5 years',
      subjects: ['Basic Literacy', 'Numeracy', 'Art & Craft', 'Physical Activities', 'Music', 'Moral Values'],
      icon: 'fas fa-baby'
    },
    {
      level: 'Primary (Class 1-3)',
      age: '6-8 years',
      subjects: ['Languages', 'Mathematics', 'Environmental Studies', 'Computer Basics', 'Art', 'Physical Education'],
      icon: 'fas fa-child'
    },
    {
      level: 'Upper Primary (Class 4-6)',
      age: '9-11 years',
      subjects: ['Languages', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Art & Craft', 'Sports'],
      icon: 'fas fa-user-graduate'
    }
  ];

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-primary to-school-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-black font-bold text-responsive-3xl mb-6">
            {t.academics.title}
          </h1>
          <p className="text-responsive-lg max-w-3xl mx-auto text-black">
            {t.academics.subtitle}
          </p>
        </div>
      </section>

      {/* Educational Streams */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {educationalStreams.map((stream) => (
              <StreamCard 
                key={stream.id}
                stream={stream}
                icon={streamIcons[stream.id]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Curriculum Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum is designed to foster holistic development through age-appropriate learning experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {curriculum.map((level, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
                <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${level.icon} text-white text-2xl`} aria-hidden="true"></i>
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">{level.level}</h3>
                <p className="text-school-primary font-medium mb-4">{level.age}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {level.subjects.map((subject, subIndex) => (
                      <span 
                        key={subIndex}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-6">
                Assessment & Evaluation
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-chart-line text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Continuous Assessment</h3>
                    <p className="text-gray-600">Regular evaluation through projects, assignments, and interactive activities to track student progress.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clipboard-check text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Formative Evaluation</h3>
                    <p className="text-gray-600">Ongoing feedback mechanism to identify learning gaps and provide timely support.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-medal text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Holistic Development</h3>
                    <p className="text-gray-600">Assessment includes academic performance, creativity, social skills, and physical development.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Students engaged in interactive learning and assessment activities" 
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Extracurricular Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond academics, we offer diverse activities to nurture talents and develop well-rounded personalities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Cultural Programs', icon: 'fas fa-music', color: 'bg-purple-500' },
              { name: 'Sports & Games', icon: 'fas fa-trophy', color: 'bg-green-500' },
              { name: 'Science Club', icon: 'fas fa-atom', color: 'bg-blue-500' },
              { name: 'Art & Craft', icon: 'fas fa-paint-brush', color: 'bg-pink-500' },
              { name: 'Drama & Theatre', icon: 'fas fa-theater-masks', color: 'bg-indigo-500' },
              { name: 'Environmental Club', icon: 'fas fa-leaf', color: 'bg-green-600' },
              { name: 'Reading Club', icon: 'fas fa-book-reader', color: 'bg-yellow-500' },
              { name: 'Community Service', icon: 'fas fa-hands-helping', color: 'bg-red-500' }
            ].map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${activity.icon} text-white`} aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold text-gray-900">{activity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
