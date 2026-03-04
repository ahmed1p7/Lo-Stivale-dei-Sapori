import MenuItem from '@/components/MenuItem';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/translations';

const contorni = [
  {
    key: 'insalata',
    price: '€8',
  },
  {
    key: 'patate-forno',
    price: '€6',
  },
  {
    key: 'verdure',
    price: '€7',
  },
  {
    key: 'patate-mblacchiuse',
    price: '€8',
  },
];

export default function ContorniPage() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {t('contorni-title', language)}
        </h2>
        <p className="text-muted-foreground" style={{ fontFamily: 'Lato, sans-serif' }}>
          {language === 'en'
            ? 'Carefully selected side dishes to complement your main course perfectly.'
            : 'أطباق جانبية مختارة بعناية لتكمل طبقك الرئيسي بشكل مثالي.'}
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-accent/20">
        <div className="space-y-2">
          {contorni.map((item) => (
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
