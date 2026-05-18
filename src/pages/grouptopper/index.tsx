import { ProductLandingPage } from '@site/src/components/ui/ProductLandingPage';

export default function GroupTopperHome(): React.JSX.Element {
  return (
    <ProductLandingPage
      title="GroupTopper"
      tagline="An addon for Group Leaderboard"
      logo="https://topper-mc.github.io/Assets/grouptopper/logo.svg"
      actions={[
        { text: 'Explore Documentation ⚡', link: '/grouptopper/installation/', primary: true },
        { text: 'Download Modrinth', link: 'https://modrinth.com/plugin/grouptopper' },
      ]}
      features={[
        { title: 'Run on Topper', description: 'Built as an addon of Topper - the better leaderboard plugin.', emoji: '🚀' },
        { title: 'Lightweight & High Performance', description: 'Heavy optimization designed for big servers with minimal resource usage.', emoji: '⚡' },
        { title: 'Support for Many Group Plugins', description: 'Compatible with Towny, LuckPerms, Parties, Factions, and more.', emoji: '👥' },
        { title: 'Built-in Group Strategies', description: 'Min, Max, Total, and other built-in strategies for group calculations.', emoji: '📊' },
        { title: 'Placeholders', description: 'Get information of group rankings with flexible placeholder support.', emoji: '🧩' },
        { title: 'Multiple Storage Backends', description: 'Support YAML, JSON, SQLITE & MYSQL storage options.', emoji: '💾' },
      ]}
    />
  );
}
