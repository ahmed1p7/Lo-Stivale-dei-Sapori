import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';
import { useState, useEffect } from 'react';

const heroImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663027448761/bBMCDdfoeZuqr7v5bwyN4h/hero-italian-restaurant-UwJ8p2Jadc4vnmJJvthUAC.webp';

export default function CoverPage() {
  const { language } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the date every second to keep it live
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Locale mapping for date/time formatting based on language
  const localeMap: Record<string, string> = {
    en: 'en-US',
    ar: 'ar-SA',
    it: 'it-IT',
    fr: 'fr-FR',
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    
    return date.toLocaleDateString(localeMap[language] || 'en-US', options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(localeMap[language] || 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="space-y-8">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden border border-accent/20">
        <img
          src={heroImage}
          alt="Lo Stivale dei Sapori"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Cover Content */}
      <div className="bg-card rounded-lg p-8 md:p-12 border border-accent/20">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t('cover-title', language)}
        </h2>

        <div className="space-y-6">
          <p className="text-base md:text-lg text-foreground leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
            {t('wait-message', language)}
          </p>

          <div className="bg-background rounded-lg p-6 border border-accent/20">
            <p className="text-lg font-semibold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('cover-charge', language)}
            </p>
          </div>

          <div className="pt-4 border-t border-accent/20">
            <p className="text-sm text-muted-foreground italic" style={{ fontFamily: 'Lato, sans-serif' }}>
              {t('authentic-experience', language)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
