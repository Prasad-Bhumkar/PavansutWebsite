import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

export default function Admissions() {
  const { t } = useLanguage();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDownloadForm = () => {
    // In a real application, this would download the actual admission form
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-primary to-school-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold  text-black text-responsive-3xl mb-6">
            {t.admissions.title}
          </h1>
          <p className="text-responsive-lg max-w-3xl mx-auto text-black">
            {t.admissions.subtitle}
          </p>
        </div>
      </section>

      {/* Admission Process and Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-school-primary rounded-2xl p-8 text-white mb-8">
                <h3 className="font-poppins font-bold text-2xl mb-6">{t.admissions.process.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.admissions.process.steps.application.title}</h4>
                      <p className="text-sm text-gray-100">{t.admissions.process.steps.application.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.admissions.process.steps.assessment.title}</h4>
                      <p className="text-sm text-gray-100">{t.admissions.process.steps.assessment.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t.admissions.process.steps.confirmation.title}</h4>
                      <p className="text-sm text-gray-100">{t.admissions.process.steps.confirmation.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">{t.admissions.dates.title}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Applications Open:</span>
                    <span className="font-semibold text-gray-900">January 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Last Date for Submission:</span>
                    <span className="font-semibold text-gray-900">March 31, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Assessment Period:</span>
                    <span className="font-semibold text-gray-900">April 1-15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Academic Year Begins:</span>
                    <span className="font-semibold text-gray-900">June 1, 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6">{t.admissions.documents.title}</h3>
              <div className="space-y-4 mb-8">
                {t.admissions.documents.items.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className="fas fa-check-circle text-school-secondary" aria-hidden="true"></i>
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-4">{t.admissions.fees.title}</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Pre-Primary:</span>
                    <span className="font-semibold">₹15,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Class 1-3:</span>
                    <span className="font-semibold">₹18,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Class 4-6:</span>
                    <span className="font-semibold">₹22,000/year</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-3">
                    {t.admissions.fees.note}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={handleDownloadForm}
                  className="w-full bg-school-accent hover:bg-school-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-school-accent focus:ring-offset-2"
                >
                  <i className="fas fa-download mr-2" aria-hidden="true"></i>
                  {t.admissions.downloadForm}
                </button>
                
                {showSuccessMessage && (
                  <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                    <i className="fas fa-check-circle mr-2" aria-hidden="true"></i>
                    Admission form download initiated! Please check your downloads folder.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Admission requirements for different grade levels at Pavansut School.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: 'Pre-Primary',
                age: '3-4 years',
                requirements: ['Birth Certificate', 'Medical Certificate', 'Passport Photos'],
                icon: 'fas fa-baby',
                color: 'bg-pink-500'
              },
              {
                level: 'Class 1',
                age: '5-6 years',
                requirements: ['Pre-Primary Certificate', 'Transfer Certificate', 'Medical Records'],
                icon: 'fas fa-child',
                color: 'bg-green-500'
              },
              {
                level: 'Class 2-6',
                age: '7-11 years',
                requirements: ['Previous Grade Certificate', 'Transfer Certificate', 'Progress Report'],
                icon: 'fas fa-user-graduate',
                color: 'bg-blue-500'
              }
            ].map((criteria, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 ${criteria.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${criteria.icon} text-white text-2xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-1">{criteria.level}</h3>
                  <p className="text-gray-600 font-medium">{criteria.age}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Required Documents:</h4>
                  <ul className="space-y-2">
                    {criteria.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                        <i className="fas fa-dot-circle text-school-primary mr-2" aria-hidden="true"></i>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common questions about the admission process at Pavansut School.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'What is the admission process timeline?',
                answer: 'Applications open in January, with submissions due by March 31st. Assessment takes place in early April, and the new academic year begins in June.'
              },
              {
                question: 'Is there an entrance exam for admission?',
                answer: 'We conduct a simple interaction session for students and parents. For younger children, this is more of a play-based assessment to understand their readiness.'
              },
              {
                question: 'Can students switch between language streams?',
                answer: 'Yes, we provide proper counseling and assessment to ensure smooth transition and academic success.'
              },
              {
                question: 'What support is available for new students?',
                answer: 'We provide orientation programs, buddy systems, and counseling support to help new students adjust to our school environment.'
              },
              {
                question: 'Are scholarships available?',
                answer: 'Yes, we offer merit-based and need-based scholarships for deserving students. Please contact our admissions office for more details.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
