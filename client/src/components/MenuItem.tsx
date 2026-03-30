import { useLanguage } from '@/contexts/LanguageContext';

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
}

export default function MenuItem({ name, description, price }: MenuItemProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="group py-5 border-b border-accent/10 last:border-b-0 hover:bg-accent/5 transition-all duration-300 rounded-lg px-2 -mx-2">
      <div className={`flex justify-between items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-semibold text-accent group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
            {name}
          </h3>
          {description && (
            <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              {description}
            </p>
          )}
        </div>
        <div className="text-lg md:text-xl font-bold text-accent whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}
