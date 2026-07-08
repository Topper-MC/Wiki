import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Card, CardGrid } from '@site/src/components/ui/Card';

export interface ActionButton {
  text: string;
  link: string;
  primary?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  emoji?: string;
}

interface ProductLandingPageProps {
  title: string;
  tagline: string;
  logo: string;
  description?: string;
  actions: ActionButton[];
  features: FeatureItem[];
}

export function ProductLandingPage({
  title,
  tagline,
  logo,
  description,
  actions,
  features,
}: ProductLandingPageProps): React.JSX.Element {
  return (
    <Layout
      title={`${title} - Leaderboard Plugin`}
      description={description || tagline}
    >
      <header className="hero hero--primary" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <img
            src={logo}
            alt={`${title} Logo`}
            style={{ width: '120px', height: '120px', marginBottom: '1.5rem' }}
          />
          <Heading as="h1" className="hero__title" style={{ fontSize: '3rem' }}>
            {title}
          </Heading>
          <p className="hero__subtitle" style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
            {tagline}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {actions.map((action, idx) => {
              const isExternal = action.link.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={idx}
                    className={`button button--lg ${action.primary ? 'button--secondary' : 'button--outline button--secondary'}`}
                    href={action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {action.text}
                  </a>
                );
              }
              return (
                <Link
                  key={idx}
                  className={`button button--lg ${action.primary ? 'button--secondary' : 'button--outline button--secondary'}`}
                  to={action.link}
                >
                  {action.text}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <main style={{ padding: '4rem 0' }}>
        <div className="container">
          <CardGrid>
            {features.map((feature, idx) => (
              <Card key={idx} title={feature.title} emoji={feature.emoji}>
                {feature.description}
              </Card>
            ))}
          </CardGrid>
        </div>
      </main>
    </Layout>
  );
}
