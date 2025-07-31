import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/about', label: t.navigation.about },
    { to: '/academics', label: t.navigation.academics },
    { to: '/facilities', label: t.navigation.facilities },
    { to: '/faculty', label: t.navigation.faculty },
    { to: '/admissions', label: t.navigation.admissions }
  ];

  

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-youtube', href: '#', label: 'YouTube' },
    { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-school-primary rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white" aria-hidden="true"></i>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg">Pavansut School</h3>
                <p className="text-sm text-gray-400">Markal, Maharashtra</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational Streams */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">{t.footer.educationalStreams}</h4>
            <ul className="space-y-2">
              {(t.academics.streams || []).map((stream, index) => (
                <li key={index} className="text-gray-400 text-sm">{stream.title}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">{t.footer.contactInfo}</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <i className="fas fa-map-marker-alt mr-2 text-school-primary" aria-hidden="true"></i>
                Markal Village, Tal. Shirur<br />
                <span className="ml-6">Dist. Pune, Maharashtra 412208</span>
              </p>
              <p className="text-gray-400">
                <i className="fas fa-phone mr-2 text-school-primary" aria-hidden="true"></i>
                +91 98765 43210
              </p>
              <p className="text-gray-400">
                <i className="fas fa-envelope mr-2 text-school-primary" aria-hidden="true"></i>
                info@pavansutschool.edu.in
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold text-md mb-3">{t.contact.followUs}</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-school-primary rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <i className={social.icon} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              {t.footer.designedWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
