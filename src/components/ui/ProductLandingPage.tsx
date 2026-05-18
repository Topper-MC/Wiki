import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Card, CardGrid } from '@site/src/components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@docusaurus/router';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
};

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
  const location = useLocation();

  return (
    <Layout
      title={`${title} - Leaderboard Plugin`}
      description={description || tagline}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
        >
          <header className="hero hero--primary" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.img
            variants={itemVariants}
            src={logo}
            alt={`${title} Logo`}
            style={{ width: '120px', height: '120px', marginBottom: '1.5rem' }}
          />
          <motion.div variants={itemVariants}>
            <Heading as="h1" className="hero__title" style={{ fontSize: '3rem' }}>
              {title}
            </Heading>
          </motion.div>
          <motion.p variants={itemVariants} className="hero__subtitle" style={{ fontSize: '1.4rem', marginBottom: '2rem' }}>
            {tagline}
          </motion.p>
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
          </motion.div>
        </div>
      </header>

      <main style={{ padding: '4rem 0' }}>
        <div className="container">
          <CardGrid>
            {features.map((feature, idx) => (
              <Card key={idx} title={feature.title} emoji={feature.emoji} variants={itemVariants}>
                {feature.description}
              </Card>
            ))}
          </CardGrid>
        </div>
      </main>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
