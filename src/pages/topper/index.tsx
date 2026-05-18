import { ProductLandingPage } from '@site/src/components/ui/ProductLandingPage';

export default function TopperHome(): React.JSX.Element {
  return (
    <ProductLandingPage
      title="Topper"
      tagline="Another leaderboard plugin for Minecraft servers"
      logo="https://topper-mc.github.io/Assets/topper/logo.svg"
      actions={[
        { text: 'Explore Documentation ⚡', link: '/topper/quickstart/', primary: true },
        { text: 'Download Modrinth', link: 'https://modrinth.com/plugin/topper-lb' },
      ]}
      features={[
        { title: 'Lightweight', description: 'Minimal resource usage and blazing-fast performance.', emoji: '🪶' },
        { title: 'Leaderboard', description: 'Complete leaderboard system for tracking and displaying player rankings.', emoji: '🏆' },
        { title: 'Multiple Providers', description: 'Support YAML, JSON, SQLITE & MYSQL storage backends.', emoji: '🗄️' },
        { title: 'Placeholders', description: 'Flexible placeholder support for integration with other plugins.', emoji: '🧩' },
        { title: 'Friendly for All Servers', description: 'Works seamlessly from small servers to large-scale deployments.', emoji: '🤝' },
        { title: 'Multiple Hooks', description: 'Integration with PlaceholderAPI, MiniPlaceholders, LuckPerms, and more.', emoji: '🪝' },
      ]}
    />
  );
}
