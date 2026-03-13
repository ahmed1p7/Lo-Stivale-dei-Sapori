import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar' | 'it' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isArabic: boolean;
  isEnglish: boolean;
  isItalian: boolean;
  isFrench: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('ar')) return 'ar';
  if (browserLang.startsWith('it')) return 'it';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('en')) return 'en';
  
  // Default to English for unsupported languages
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  
  useEffect(() => {
    // Auto-detect browser language on mount
    const detectedLang = getBrowserLanguage();
    setLanguageState(detectedLang);
  }, []);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isArabic: language === 'ar',
        isEnglish: language === 'en',
        isItalian: language === 'it',
        isFrench: language === 'fr',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
