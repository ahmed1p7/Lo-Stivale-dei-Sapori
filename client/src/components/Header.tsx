import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-background via-background to-background/80 border-b border-accent/20 backdrop-blur-sm">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('restaurant-name', language)}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-2" style={{ fontFamily: 'Lato, sans-serif' }}>
              {t('season-year', language)}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button
                variant={language === 'it' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('it')}
                className="font-semibold"
              >
                IT
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="font-semibold"
              >
                EN
              </Button>
              <Button
                variant={language === 'ar' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('ar')}
                className="font-semibold"
              >
                AR
              </Button>
              <Button
                variant={language === 'fr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className="font-semibold"
              >
                FR
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
    </header>
  );
}
