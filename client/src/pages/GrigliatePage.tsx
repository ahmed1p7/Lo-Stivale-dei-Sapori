import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const grilledImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663027448761/bBMCDdfoeZuqr7v5bwyN4h/grilled-meats-6m34fjiwLidkXR3SMhtYD3.webp';

const grigliate = [
  {
    key: 'calabria-griglia',
    price: '€26',
  },
  {
    key: 'caciocavallo-griglia',
    price: '€13',
  },
  {
    key: 'fiorentina',
    price: '€76 al Kg',
  },
  {
    key: 'entrecote',
    price: '€30',
  },
  {
    key: 'tomahawk',
    price: '€76 al kg',
  },
  {
    key: 'lombata-irlandese',
    price: '€80 al kg',
  },
  {
    key: 'picagna',
    price: '€30',
  },
  {
    key: 'ribeye-entrecote',
    price: '€30',
  },
];

export default function GrigliatePage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Section Header with Image */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('grigliate-title', language)}
          </h2>
          <p className="text-muted-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
            {t('grigliate-desc-page', language)}
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden border border-accent/20">
          <img
            src={grilledImage}
            alt="Grigliate"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-card rounded-lg p-8 border border-accent/20">
        <div className="space-y-2">
          {grigliate.map((item) => (
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
