import { ProductLandingPage } from '@site/src/components/ui/ProductLandingPage';

export default function TimedTopperHome(): React.JSX.Element {
  return (
    <ProductLandingPage
      title="TimedTopper"
      tagline="An addon for Timely Leaderboard"
      logo="https://topper-mc.github.io/Assets/timedtopper/logo.svg"
      actions={[
        { text: 'Explore Documentation ⚡', link: '/timedtopper/config/', primary: true },
        { text: 'Download SpigotMC', link: 'https://www.spigotmc.org/resources/timedtopper.116995/' },
        { text: 'Download Modrinth', link: 'https://modrinth.com/plugin/timedtopper' },
      ]}
      features={[
        { title: 'Run on Topper', description: 'Built as an addon of Topper - the better leaderboard plugin.', emoji: '🚀' },
        { title: 'Configurable Reset Time', description: 'Configure the leaderboard to reset after your desired time interval.', emoji: '⏱️' },
        { title: 'Lightweight & High Performance', description: 'Heavy optimization for minimal server impact and blazing-fast performance.', emoji: '⚡' },
        { title: 'Placeholders', description: 'Get top values and remaining time with flexible placeholder support.', emoji: '🧩' },
        { title: 'Multiple Storage Backends', description: 'Support YAML, JSON, SQLITE & MYSQL storage options.', emoji: '💾' },
        { title: 'Rewards System', description: 'Automated reward distribution to top players for each time period.', emoji: '🎁' },
        { title: 'Developer API', description: 'Full API access for developers to extend functionality.', emoji: '💻' },
      ]}
    />
  );
}
