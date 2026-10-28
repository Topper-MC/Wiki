import React from 'react';
import Link from 'fumadocs-core/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { createHomeLayout } from 'fumapress/layouts/home';

const HomeLayout = createHomeLayout();

export default function GroupTopperHome(): React.JSX.Element {
  return (
    <HomeLayout>
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <img
            src="https://topper-mc.github.io/Assets/grouptopper/logo.svg"
            alt="GroupTopper Logo"
            className="w-28 h-28 mb-6 object-contain drop-shadow"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            GroupTopper
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground mb-8">
            An addon for Group Leaderboard
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/grouptopper/installation/"
              className={buttonVariants({ color: 'primary', className: 'px-6 py-2.5 text-sm font-medium' })}
            >
              Explore Documentation ⚡
            </Link>
            <Link
              href="https://modrinth.com/plugin/grouptopper"
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
              icon={<span className="text-2xl">🚀</span>}
              title="Run on Topper"
              description="Built as an addon of Topper - the better leaderboard plugin."
            />
            <Card
              icon={<span className="text-2xl">⚡</span>}
              title="Lightweight & High Performance"
              description="Heavy optimization designed for big servers with minimal resource usage."
            />
            <Card
              icon={<span className="text-2xl">👥</span>}
              title="Support for Many Group Plugins"
              description="Compatible with Towny, LuckPerms, Parties, Factions, and more."
            />
            <Card
              icon={<span className="text-2xl">📊</span>}
              title="Built-in Group Strategies"
              description="Min, Max, Total, and other built-in strategies for group calculations."
            />
            <Card
              icon={<span className="text-2xl">🧩</span>}
              title="Placeholders"
              description="Get information of group rankings with flexible placeholder support."
            />
            <Card
              icon={<span className="text-2xl">💾</span>}
              title="Multiple Storage Backends"
              description="Support YAML, JSON, SQLITE & MYSQL storage options."
            />
          </Cards>
        </div>
      </section>
    </HomeLayout>
  );
}
