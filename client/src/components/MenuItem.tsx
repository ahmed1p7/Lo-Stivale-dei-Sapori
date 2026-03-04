interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
}

export default function MenuItem({ name, description, price }: MenuItemProps) {
  return (
    <div className="py-4 border-b border-accent/10 last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-accent" style={{ fontFamily: 'Playfair Display, serif' }}>
            {name}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1" style={{ fontFamily: 'Lato, sans-serif' }}>
              {description}
            </p>
          )}
        </div>
        <div className="text-lg font-bold text-accent whitespace-nowrap" style={{ fontFamily: 'Playfair Display, serif' }}>
          {price}
        </div>
      </div>
    </div>
  );
}
