import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export interface HeroAction {
  text: string;
  link: string;
  primary?: boolean;
}

interface DocHeroProps {
  title: string;
  tagline: string;
  logo?: string;
  actions?: HeroAction[];
}

export function DocHero({ title, tagline, logo, actions }: DocHeroProps) {
  return (
    <div
      className="hero hero--primary"
      style={{
        padding: '3rem 2rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
      }}
    >
      <div className="container">
        {logo && (
          <img
            src={logo}
            alt={`${title} Logo`}
            style={{
              width: '80px',
              height: '80px',
              marginBottom: '1rem',
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
            }}
          />
        )}
        <Heading as="h1" className="hero__title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          {title}
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.9 }}>
          {tagline}
        </p>
        {actions && actions.length > 0 && (
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {actions.map((action, idx) => (
              <Link
                key={idx}
                className={`button button--lg ${action.primary ? 'button--secondary' : 'button--outline button--secondary'}`}
                to={action.link}
              >
                {action.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
