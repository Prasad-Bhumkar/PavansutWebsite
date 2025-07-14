import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For static website - show success message without backend submission
    setTimeout(() => {
      setShowSuccessMessage(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);

      // Hide success message after 4 seconds
      setTimeout(() => setShowSuccessMessage(false), 4000);
    }, 1000);
  };

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: 'fab fa-youtube', href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' }
  ];

  return (
    <main id="main-content" role="main">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-school-primary to-school-primary-dark text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins text-black font-bold text-responsive-3xl mb-6">
            {t.contact.title}
          </h1>
          <p className="text-responsive-lg max-w-3xl mx-auto  text-black">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-poppins font-bold text-2xl mb-8">{t.contact.info.title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t.contact.info.address.title}</h4>
                    <p className="text-gray-300 whitespace-pre-line">
                      {t.contact.info.address.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t.contact.info.phone.title}</h4>
                    <p className="text-gray-300 whitespace-pre-line">
                      {t.contact.info.phone.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t.contact.info.email.title}</h4>
                    <p className="text-gray-300 whitespace-pre-line">
                      {t.contact.info.email.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-white" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{t.contact.info.hours.title}</h4>
                    <p className="text-gray-300 whitespace-pre-line">
                      {t.contact.info.hours.value}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-poppins font-semibold text-lg mb-4">{t.contact.followUs}</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-10 h-10 bg-gray-700 ${social.color} rounded-full flex items-center justify-center transition-colors duration-200`}
                      aria-label={social.label}
                    >
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="font-poppins font-bold text-2xl mb-6">{t.contact.form.title}</h3>
              
              {showSuccessMessage && (
                <div className="mb-6 p-4 bg-green-600 text-white rounded-lg">
                  <i className="fas fa-check-circle mr-2" aria-hidden="true"></i>
                  Thank you for your interest! Please contact us directly using the information provided above.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.firstName}
                    </label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-school-primary" 
                      placeholder="Enter your first name" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      {t.contact.form.lastName}
                    </label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-school-primary" 
                      placeholder="Enter your last name" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-school-primary" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-school-primary" 
                    placeholder="Enter your phone number" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-school-primary" 
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">{t.contact.form.subjects.admission}</option>
                    <option value="campus-visit">{t.contact.form.subjects.campusVisit}</option>
                    <option value="general">{t.contact.form.subjects.general}</option>
                    <option value="other">{t.contact.form.subjects.other}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-school-primary resize-none" 
                    placeholder="Enter your message here..." 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-school-primary hover:bg-school-primary-dark disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-school-primary focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2" aria-hidden="true"></i>
                      {t.contact.form.submit}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Markal village, easily accessible from surrounding areas.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-school-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-map-marked-alt text-white text-2xl" aria-hidden="true"></i>
            </div>
            <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
              Interactive Map Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're working on integrating an interactive map to help you locate our school easily. 
              In the meantime, please use the address provided above or contact us for directions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-school-primary hover:bg-school-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                <i className="fas fa-directions mr-2" aria-hidden="true"></i>
                Get Directions
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                <i className="fas fa-phone mr-2" aria-hidden="true"></i>
                Call for Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
