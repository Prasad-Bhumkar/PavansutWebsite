import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Translation } from '../data/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
  availableLanguages: { code: string; name: string; native: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const availableLanguages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'semi-en', name: 'Semi-English', native: 'Semi-English' }
];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState('en');

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('pavansut-language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('pavansut-language', lang);
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
