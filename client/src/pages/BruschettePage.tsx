import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const bruschettaImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663027448761/bBMCDdfoeZuqr7v5bwyN4h/bruschette-display-i8Q6vkWCibRFsxUauNkNDC.webp';

const bruschette = [
  {
    key: 'caciocavallo',
    price: '€10',
  },
  {
    key: 'lardo',
    price: '€10',
  },
  {
    key: 'pomodori',
    price: '€10',
  },
  {
    key: 'calabrese',
    price: '€15',
  },
  {
    key: 'stivale-bruschetta',
    price: '€15',
  },
];

export default function BruschettePage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Section Header with Image */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('bruschette-title', language)}
          </h2>
          <p className="text-muted-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
            {language === 'en'
              ? 'Toasted Altamura bread topped with premium ingredients and traditional flavors.'
              : 'خبز ألتامورا محمص مع مكونات فاخرة والنكهات التقليدية.'}
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden border border-accent/20">
          <img
            src={bruschettaImage}
            alt="Bruschette"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-card rounded-lg p-8 border border-accent/20">
        <div className="space-y-2">
          {bruschette.map((item) => (
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
