import React from 'react';
import Link from 'fumadocs-core/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { createHomeLayout } from 'fumapress/layouts/home';

const HomeLayout = createHomeLayout();

export default function CachyHome(): React.JSX.Element {
  return (
    <HomeLayout>
      <title>Cachy</title>
      <meta
        name="description"
        content="A Minecraft plugin for caching player data"
      />
      <meta property="og:title" content="Cachy" />
      <meta
        property="og:description"
        content="A Minecraft plugin for caching player data"
      />
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <img
            src="https://topper-mc.github.io/Assets/topper/logo.svg"
            alt="Cachy Logo"
            className="w-28 h-28 mb-6 object-contain drop-shadow"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Cachy
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground mb-8">
            A Minecraft plugin for caching player data
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/cachy/config/"
              className={buttonVariants({ color: 'primary', className: 'px-6 py-2.5 text-sm font-medium' })}
            >
              Explore Documentation ⚡
            </Link>
            <Link
              href="https://github.com/Topper-MC/Cachy"
              external
              className={buttonVariants({ color: 'outline', className: 'px-6 py-2.5 text-sm font-medium' })}
            >
              GitHub Repository
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-6 w-full">
        <div className="max-w-5xl mx-auto">
          <Cards className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
              icon={<span className="text-2xl">💾</span>}
              title="Data Caching"
              description="Efficient caching of online player data with minimal overhead."
            />
            <Card
              icon={<span className="text-2xl">🚀</span>}
              title="High Performance"
              description="Optimized data storage and retrieval for server efficiency."
            />
            <Card
              icon={<span className="text-2xl">🔄</span>}
              title="Dynamic Updates"
              description="Real-time synchronization of player data across the server."
            />
            <Card
              icon={<span className="text-2xl">🗄️</span>}
              title="Multiple Storage Options"
              description="Support for various storage backends for flexible deployment."
            />
            <Card
              icon={<span className="text-2xl">🔍</span>}
              title="Query System"
              description="Powerful query capabilities for data retrieval and analysis."
            />
            <Card
              icon={<span className="text-2xl">🔌</span>}
              title="Plugin Integration"
              description="Integration with PlaceholderAPI and other popular plugins."
            />
          </Cards>
        </div>
      </section>
    </HomeLayout>
  );
}
