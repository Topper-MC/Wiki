import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  return (
    <header className="hero hero--primary" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Topper Wiki Portal
        </Heading>
        <p className="hero__subtitle">
          Welcome to the documentation hub for Topper and its ecosystem plugins.
        </p>
      </div>
    </header>
  );
}

interface PortalItem {
  title: string;
  emoji: string;
  description: string;
  link: string;
}

const PortalList: PortalItem[] = [
  {
    title: 'Topper',
    emoji: '🏆',
    description: 'The core, high-performance leaderboard plugin for Minecraft servers. Track, sort, and display any player statistics.',
    link: '/topper/',
  },
  {
    title: 'TimedTopper',
    emoji: '⏳',
    description: 'Timed leaderboard addon for Topper. Reset stats periodically and distribute rewards automatically to top players.',
    link: '/timedtopper/',
  },
  {
    title: 'GroupTopper',
    emoji: '👥',
    description: 'Group leaderboard addon for Topper. Calculate ranking metrics based on Towny, Factions, Parties, or LuckPerms groups.',
    link: '/grouptopper/',
  },
  {
    title: 'Cachy',
    emoji: '💾',
    description: 'High-performance player data caching mod/plugin. Efficiently store online player metrics with zero lag.',
    link: '/cachy/',
  },
];

function PortalCard({ title, emoji, description, link }: PortalItem) {
  return (
    <div className="col col--6" style={{ marginBottom: '2rem' }}>
      <div className="card" style={{ height: '100%', border: '1px solid var(--ifm-color-emphasis-300)', display: 'flex', flexDirection: 'column' }}>
        <div className="card__header" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.25rem' }}>
          <span style={{ fontSize: '2.5rem' }}>{emoji}</span>
          <Heading as="h2" style={{ margin: 0 }}>{title}</Heading>
        </div>
        <div className="card__body" style={{ padding: '0 1.25rem 1.25rem', flexGrow: 1 }}>
          <p style={{ fontSize: '1rem', color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem' }}>{description}</p>
          <div>
            <Link className="button button--primary button--block" to={link}>
              Explore {title} Wiki ⚡
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Welcome to Topper Wiki Portal"
      description="Gateway to Topper, TimedTopper, GroupTopper, and Cachy plugin documentations."
    >
      <HomepageHeader />
      <main>
        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <div className="row">
              {PortalList.map((props, idx) => (
                <PortalCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
