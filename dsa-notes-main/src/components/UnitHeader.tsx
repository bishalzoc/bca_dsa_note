interface UnitHeaderProps {
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
}

const UnitHeader = ({ badge, badgeColor, title, subtitle }: UnitHeaderProps) => (
  <div className="flex items-center gap-4 mb-6 mt-10">
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold font-mono text-background shrink-0"
      style={{ background: badgeColor }}
    >
      {badge}
    </div>
    <div>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <p className="text-sm text-text-dim">{subtitle}</p>
    </div>
  </div>
);

export default UnitHeader;
