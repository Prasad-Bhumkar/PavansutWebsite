import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: t.navigation.home },
    { href: '/about', label: t.navigation.about },
    { href: '/academics', label: t.navigation.academics },
    { href: '/facilities', label: t.navigation.facilities },
    { href: '/faculty', label: t.navigation.faculty },
    { href: '/admissions', label: t.navigation.admissions },
    { href: '/contact', label: t.navigation.contact }
  ];

  const getLanguageDisplayName = (langCode: string) => {
    const lang = availableLanguages.find(l => l.code === langCode);
    return lang ? lang.native : langCode;
  };

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#main-content" 
        className="skip-nav sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-school-primary text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <header 
        className={`bg-white shadow-sm sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-white/95' : ''
        }`} 
        role="banner"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-school-primary rounded-full flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-lg lg:text-xl" aria-hidden="true"></i>
              </div>
              <div>
                <h1 className="font-poppins font-bold text-lg lg:text-xl text-gray-900">Pavansut School</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Markal, Maharashtra</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`nav-link transition-colors duration-200 font-medium ${
                    location === link.href 
                      ? 'text-school-primary border-b-2 border-school-primary' 
                      : 'text-gray-700 hover:text-school-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-gray-100 border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-school-primary" 
                  aria-label="Select Language"
                >
                  {availableLanguages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.native}
                    </option>
                  ))}
                </select>
                <i className="fas fa-chevron-down absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none" aria-hidden="true"></i>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-school-primary hover:bg-gray-100 transition-colors duration-200" 
                aria-label="Toggle mobile menu" 
                aria-expanded={isMobileMenuOpen}
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true"></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
                      location === link.href
                        ? 'text-school-primary bg-blue-50'
                        : 'text-gray-700 hover:text-school-primary hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
