import React from 'react';
import Link from 'fumadocs-core/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { createHomeLayout } from 'fumapress/layouts/home';
import { ProjectIcon } from '@/lib/projects';

const HomeLayout = createHomeLayout();

export default function GroupTopperHome(): React.JSX.Element {
  return (
    <HomeLayout>
      <title>GroupTopper</title>
      <meta
        name="description"
        content="An addon for Group Leaderboard"
      />
      <meta property="og:title" content="GroupTopper" />
      <meta
        property="og:description"
        content="An addon for Group Leaderboard"
      />
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <ProjectIcon
            project="grouptopper"
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
              description="Seamlessly integrates with the core Topper leaderboard plugin."
            />
            <Card
              icon={<span className="text-2xl">👥</span>}
              title="Group Metrics"
              description="Support Towny, Factions, Parties, or custom grouping calculations."
            />
            <Card
              icon={<span className="text-2xl">⚡</span>}
              title="Optimized & Fast"
              description="Low overhead background score calculation and caching."
            />
            <Card
              icon={<span className="text-2xl">🧩</span>}
              title="Placeholder Support"
              description="Display group leaderboard values and placements anywhere."
            />
            <Card
              icon={<span className="text-2xl">💾</span>}
              title="Storage Options"
              description="Multiple storage options for saving group metrics."
            />
            <Card
              icon={<span className="text-2xl">🔧</span>}
              title="Easy Setup"
              description="Simple configuration to map groups and top holders."
            />
          </Cards>
        </div>
      </section>
    </HomeLayout>
  );
}
