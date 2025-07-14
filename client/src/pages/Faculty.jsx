import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { facultyMembers } from '../data/schoolData';
import FacultyCard from '../components/FacultyCard';
import AnimatedSection from '../components/AnimatedSection';

export default function Faculty() {
  const { t } = useLanguage();

  const departmentStats = [
    {
      title: 'Total Faculty',
      count: '15',
      icon: 'fas fa-users',
      color: 'bg-school-primary'
    },
    {
      title: 'Post Graduates',
      count: '12',
      icon: 'fas fa-graduation-cap',
      color: 'bg-school-secondary'
    },
    {
      title: 'Years Experience',
      count: '10+',
      icon: 'fas fa-calendar-alt',
      color: 'bg-school-accent'
    },
    {
      title: 'Specializations',
      count: '8',
      icon: 'fas fa-star',
      color: 'bg-purple-500'
    }
  ];

  const teachingApproach = [
    {
      title: 'Student-Centered Learning',
      description: 'Our teaching methods focus on individual student needs and learning styles.',
      icon: 'fas fa-user-friends'
    },
    {
      title: 'Interactive Teaching',
      description: 'Engaging classroom sessions with hands-on activities and discussions.',
      icon: 'fas fa-comments'
    },
    {
      title: 'Technology Integration',
      description: 'Modern tools and digital resources enhance traditional teaching methods.',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Continuous Assessment',
      description: 'Regular evaluation and feedback to track student progress effectively.',
      icon: 'fas fa-chart-line'
    }
  ];

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-primary to-school-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold  text-black text-responsive-3xl mb-6">
            {t.faculty.title}
          </h1>
          <p className="text-responsive-lg max-w-3xl mx-auto text-black">
            {t.faculty.subtitle}
          </p>
        </div>
      </section>

      {/* Faculty Statistics */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {departmentStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`w-14 h-14 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${stat.icon} text-white`} aria-hidden="true"></i>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.count}</div>
                <div className="text-gray-600 text-sm">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Meet Our Faculty
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of educators brings together years of experience, expertise, and passion for nurturing young minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Our Teaching Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where every student can thrive through innovative teaching methods and personalized attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingApproach.map((approach, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${approach.icon} text-white`} aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">{approach.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-6">
                Professional Development
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-book-reader text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Continuous Learning</h3>
                    <p className="text-gray-600">Our faculty regularly participates in workshops, seminars, and training programs to stay updated with the latest educational practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-school-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-users-cog text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Collaborative Teaching</h3>
                    <p className="text-gray-600">Regular collaboration sessions between faculty members to share best practices and innovative teaching methods.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-award text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Recognition Program</h3>
                    <p className="text-gray-600">We recognize and appreciate outstanding teaching performance through various awards and incentive programs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Faculty members engaged in professional development and collaborative teaching" 
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
