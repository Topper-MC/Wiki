import React from 'react';
import Link from 'fumadocs-core/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { createHomeLayout } from 'fumapress/layouts/home';

const HomeLayout = createHomeLayout();

export default function TopperHome(): React.JSX.Element {
  return (
    <HomeLayout>
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <img
            src="https://topper-mc.github.io/Assets/topper/logo.svg"
            alt="Topper Logo"
            className="w-28 h-28 mb-6 object-contain drop-shadow"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Topper
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground mb-8">
            Another leaderboard plugin for Minecraft servers
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/topper/quickstart/"
              className={buttonVariants({ color: 'primary', className: 'px-6 py-2.5 text-sm font-medium' })}
            >
              Explore Documentation ⚡
            </Link>
            <Link
              href="https://modrinth.com/plugin/topper-lb"
              external
              className={buttonVariants({ color: 'outline', className: 'px-6 py-2.5 text-sm font-medium' })}
            >
              Download Modrinth
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-6 w-full">
        <div className="max-w-5xl mx-auto">
          <Cards className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
              icon={<span className="text-2xl">🪶</span>}
              title="Lightweight"
              description="Minimal resource usage and blazing-fast performance."
            />
            <Card
              icon={<span className="text-2xl">🏆</span>}
              title="Leaderboard"
              description="Complete leaderboard system for tracking and displaying player rankings."
            />
            <Card
              icon={<span className="text-2xl">🗄️</span>}
              title="Multiple Providers"
              description="Support YAML, JSON, SQLITE & MYSQL storage backends."
            />
            <Card
              icon={<span className="text-2xl">🧩</span>}
              title="Placeholders"
              description="Flexible placeholder support for integration with other plugins."
            />
            <Card
              icon={<span className="text-2xl">🤝</span>}
              title="Friendly for All Servers"
              description="Works seamlessly from small servers to large-scale deployments."
            />
            <Card
              icon={<span className="text-2xl">🪝</span>}
              title="Multiple Hooks"
              description="Integration with PlaceholderAPI, MiniPlaceholders, LuckPerms, and more."
            />
          </Cards>
        </div>
      </section>
    </HomeLayout>
  );
}
