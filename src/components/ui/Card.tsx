
interface CardGridProps {
  children: React.ReactNode;
}

export function CardGrid({ children }: CardGridProps) {
  return (
    <div className="row" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      {children}
    </div>
  );
}

interface CardProps {
  title: string;
  emoji?: string;
  children: React.ReactNode;
}

export function Card({ title, emoji = '⭐', children }: CardProps) {
  return (
    <div className="col col--6" style={{ marginBottom: '1.5rem' }}>
      <div className="card" style={{ height: '100%', padding: '1.25rem', border: '1px solid var(--ifm-color-emphasis-200)', background: 'var(--ifm-color-emphasis-100)' }}>
        <div className="card__header" style={{ padding: 0, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.125rem' }}>{emoji}</span>
          <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--ifm-color-primary)' }}>{title}</h3>
        </div>
        <div className="card__body" style={{ padding: 0, fontSize: '0.875rem', color: 'var(--ifm-font-color-base)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
