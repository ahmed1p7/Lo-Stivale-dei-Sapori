import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const taglierImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663027448761/bBMCDdfoeZuqr7v5bwyN4h/taglieri-platter-NfxR5ToVQsR3DkhPaRDNgG.webp';

const taglieri = [
  {
    key: 'calabria-docet',
    price: '€32',
    serves: '(per 2 persone)',
  },
  {
    key: 'piccola-calabria',
    price: '€16',
  },
  {
    key: 'vegetariano',
    price: '€16',
  },
  {
    key: 'stivale-tagliere',
    price: '€28',
    serves: '(per 2 persone)',
  },
  {
    key: 'trilogia-crudo',
    price: '€25',
  },
  {
    key: 'tagliere-umbro',
    price: '€32',
    serves: '(per 2 persone)',
  },
];

export default function TaglieriPage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Section Header with Image */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('taglieri-title', language)}
          </h2>
          <p className="text-muted-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
            {t('taglieri-desc-page', language)}
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden border border-accent/20">
          <img
            src={taglierImage}
            alt="Taglieri"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-card rounded-lg p-8 border border-accent/20">
        <div className="space-y-2">
          {taglieri.map((item) => (
            <MenuItem
              key={item.key}
              name={t(item.key, language)}
              description={t(`${item.key}-desc`, language)}
              price={item.price}
              serves={item.serves ? t('calabria-docet-serves', language) : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
