import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const babyMenu = [
  {
    key: 'pasta-sugo',
    price: '€8',
  },
  {
    key: 'baby-hamburger',
    price: '€10',
  },
];

export default function BabyPage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t('baby-title', language)}
        </h2>
        <p className="text-muted-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
          {language === 'en'
            ? 'Delicious and nutritious options specially prepared for our younger guests.'
            : 'خيارات لذيذة ومغذية مُحضرة خصيصاً لضيوفنا الصغار.'}
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-accent/20">
        <div className="space-y-2">
          {babyMenu.map((item) => (
            <MenuItem
              key={item.key}
              name={t(item.key, language)}
              description={t(`${item.key}-desc`, language)}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
