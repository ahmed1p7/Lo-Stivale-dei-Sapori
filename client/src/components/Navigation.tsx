import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';
import { Button } from './ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  'cover',
  'taglieri',
  'special',
  'tartare',
  'bruschette',
  'primi',
  'grigliate',
  'contorni',
  'baby',
];

const sectionLabels: Record<string, string> = {
  cover: 'nav-cover',
  taglieri: 'nav-taglieri',
  special: 'nav-special',
  tartare: 'nav-tartare',
  bruschette: 'nav-bruschette',
  primi: 'nav-primi',
  grigliate: 'nav-grigliate',
  contorni: 'nav-contorni',
  baby: 'nav-baby',
};

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const { language, isArabic } = useLanguage();

  return (
    <nav className="sticky top-[120px] z-40 bg-background/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container py-4">
        <div className={`flex overflow-x-auto gap-2 pb-2 ${isArabic ? 'flex-row-reverse' : ''}`}>
          {sections.map((section) => (
            <Button
              key={section}
              variant={activeSection === section ? 'default' : 'outline'}
              size="sm"
              onClick={() => onSectionChange(section)}
              className={`whitespace-nowrap font-semibold transition-all ${
                activeSection === section
                  ? 'bg-accent text-accent-foreground'
                  : 'border-accent/30 hover:border-accent/60'
              }`}
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {t(sectionLabels[section], language)}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
