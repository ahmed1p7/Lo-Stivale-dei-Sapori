import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const grilledImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663027448761/bBMCDdfoeZuqr7v5bwyN4h/grilled-meats-6m34fjiwLidkXR3SMhtYD3.webp';

const grigliate = [
  {
    key: 'calabria-griglia',
    price: '€22',
  },
  {
    key: 'caciocavallo-griglia',
    price: '€18',
  },
  {
    key: 'fiorentina',
    price: '€45',
  },
  {
    key: 'entrecote',
    price: '€32',
  },
  {
    key: 'tomahawk',
    price: '€55',
  },
  {
    key: 'wagyu',
    price: '€60',
  },
  {
    key: 'picagna',
    price: '€28',
  },
  {
    key: 'spigola',
    price: '€35',
  },
];

export default function GrilliateP() {
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
            {language === 'en'
              ? 'Premium grilled selections featuring the finest cuts of meat and fresh seafood, expertly prepared over the flame.'
              : 'اختيارات مشوية فاخرة تضم أفضل قطع اللحم والمأكولات البحرية الطازجة، المحضرة بخبرة على اللهب.'}
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
