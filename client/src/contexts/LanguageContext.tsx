import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isArabic: boolean;
  isEnglish: boolean;
  isItalian: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isArabic: language === 'ar',
        isEnglish: language === 'en',
        isItalian: language === 'it',
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
