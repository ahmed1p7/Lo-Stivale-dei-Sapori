import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const tartareItems = [
  {
    key: 'tartare-bovino',
    price: '€22',
  },
  {
    key: 'tartare-tonno',
    price: '€23',
  },
  {
    key: 'carpaccio',
    price: '€20',
  },
];

const zizzonaItems = [
  {
    key: 'zizzona',
    price: '€30',
  },
  {
    key: 'zizzona-1k',
    price: '€20',
  },
];

export default function TartarePage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Tartare Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t('tartare-title', language)}
        </h2>
        <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
          {t('tartare-desc-page', language)}
        </p>

        <div className="bg-card rounded-lg p-8 border border-accent/20">
          <div className="space-y-2">
            {tartareItems.map((item) => (
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

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Zizzona Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t('zizzona-title', language)}
        </h2>
        <p className="text-muted-foreground mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
          {t('zizzona-desc-page', language)}
        </p>

        <div className="bg-card rounded-lg p-8 border border-accent/20">
          <div className="space-y-2">
            {zizzonaItems.map((item) => (
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
    </div>
  );
}
