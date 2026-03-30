interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
  serves?: string;
}

export default function MenuItem({ name, description, price, serves }: MenuItemProps) {
  return (
    <div className="group py-5 border-b border-accent/10 last:border-b-0 hover:bg-accent/5 transition-all duration-300 rounded-lg px-2 -mx-2">
      <div className="flex justify-between items-baseline gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-lg md:text-xl font-semibold text-accent group-hover:text-primary transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
              {name}
            </h3>
            {serves && (
              <span className="text-xs text-muted-foreground italic bg-muted/30 px-2 py-0.5 rounded-full">
                {serves}
              </span>
            )}
          </div>
          {description && description.trim() && (
            <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              {description}
            </p>
          )}
        </div>
        <div className="text-lg md:text-xl font-bold text-accent whitespace-nowrap flex-shrink-0" style={{ fontFamily: 'Playfair Display, serif' }}>
          {price}
        </div>
      </div>
    </div>
  );
}
