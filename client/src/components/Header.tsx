import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const localeMap: Record<string, string> = {
    en: 'en-US',
    ar: 'ar-SA',
    it: 'it-IT',
    fr: 'fr-FR',
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    
    return date.toLocaleDateString(localeMap[language] || 'en-US', options);
  };
  
  const languages: { code: 'en' | 'ar' | 'it' | 'fr', label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
    { code: 'it', label: 'IT' },
    { code: 'fr', label: 'FR' },
  ];
  
  const currentLang = languages.find(lang => lang.code === language)?.label || 'EN';

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-background via-background to-background/80 border-b border-accent/20 backdrop-blur-sm">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('restaurant-name', language)}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-2" style={{ fontFamily: 'Lato, sans-serif' }}>
              {formatDate(currentDate)}
            </p>
          </div>
          
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="font-semibold flex items-center gap-2"
            >
              {currentLang}
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-accent/20 rounded-lg shadow-lg py-2 min-w-[100px] z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-accent/10 transition-colors ${
                      language === lang.code ? 'bg-accent/20 text-accent font-semibold' : ''
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </header>
  );
}
