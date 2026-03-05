import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const specialItems = [
  {
    key: 'stivale',
    price: '€28',
  },
  {
    key: 'trilogi',
    price: '€30',
  },
];

export default function SpecialPage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t('special-title', language)}
        </h2>
        <p className="text-muted-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
          {t('special-desc-page', language)}
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-accent/20">
        <div className="space-y-2">
          {specialItems.map((item) => (
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
