import { ProductLandingPage } from '@site/src/components/ui/ProductLandingPage';

export default function CachyHome(): React.JSX.Element {
  return (
    <ProductLandingPage
      title="Cachy"
      tagline="A Minecraft plugin for caching player data"
      logo="https://topper-mc.github.io/Assets/topper/logo.svg"
      actions={[
        { text: 'Explore Documentation ⚡', link: '/cachy/config/', primary: true },
        { text: 'GitHub Repository', link: 'https://github.com/Topper-MC/Cachy' },
      ]}
      features={[
        { title: 'Data Caching', description: 'Efficient caching of online player data with minimal overhead.', emoji: '💾' },
        { title: 'High Performance', description: 'Optimized data storage and retrieval for server efficiency.', emoji: '🚀' },
        { title: 'Dynamic Updates', description: 'Real-time synchronization of player data across the server.', emoji: '🔄' },
        { title: 'Multiple Storage Options', description: 'Support for various storage backends for flexible deployment.', emoji: '🗄️' },
        { title: 'Query System', description: 'Powerful query capabilities for data retrieval and analysis.', emoji: '🔍' },
        { title: 'Plugin Integration', description: 'Integration with PlaceholderAPI and other popular plugins.', emoji: '🔌' },
      ]}
    />
  );
}
