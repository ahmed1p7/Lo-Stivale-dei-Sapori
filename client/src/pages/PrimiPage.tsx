import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const pastaImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663027448761/bBMCDdfoeZuqr7v5bwyN4h/pasta-dishes-k87Yiy7aCvQ6nMAdYvPSRz.webp';

const primi = [
  {
    key: 'bacco',
    price: '€13',
  },
  {
    key: 'maccheroni',
    price: '€15',
  },
  {
    key: 'orecchiette',
    price: '€12',
  },
];

export default function PrimiPage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Section Header with Image */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('primi-title', language)}
          </h2>
          <p className="text-muted-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
            {t('primi-desc-page', language)}
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden border border-accent/20">
          <img
            src={pastaImage}
            alt="Primi Piatti"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-card rounded-lg p-8 border border-accent/20">
        <div className="space-y-2">
          {primi.map((item) => (
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
