import React from 'react';
import Link from 'fumadocs-core/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { createHomeLayout } from 'fumapress/layouts/home';

const HomeLayout = createHomeLayout();

export default function TimedTopperHome(): React.JSX.Element {
  return (
    <HomeLayout>
      <title>TimedTopper</title>
      <meta
        name="description"
        content="An addon for Timely Leaderboard"
      />
      <meta property="og:title" content="TimedTopper" />
      <meta
        property="og:description"
        content="An addon for Timely Leaderboard"
      />
      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <img
            src="https://topper-mc.github.io/Assets/timedtopper/logo.svg"
            alt="TimedTopper Logo"
            className="w-28 h-28 mb-6 object-contain drop-shadow"
          />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            TimedTopper
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground mb-8">
            An addon for Timely Leaderboard
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/timedtopper/config/"
              className={buttonVariants({ color: 'primary', className: 'px-6 py-2.5 text-sm font-medium' })}
            >
              Explore Documentation ⚡
            </Link>
            <Link
              href="https://www.spigotmc.org/resources/timedtopper.116995/"
              external
              className={buttonVariants({ color: 'outline', className: 'px-6 py-2.5 text-sm font-medium' })}
            >
              Download SpigotMC
            </Link>
            <Link
              href="https://modrinth.com/plugin/timedtopper"
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
              icon={<span className="text-2xl">⏱️</span>}
              title="Configurable Reset Time"
              description="Configure the leaderboard to reset after your desired time interval."
            />
            <Card
              icon={<span className="text-2xl">⚡</span>}
              title="Lightweight & High Performance"
              description="Heavy optimization for minimal server impact and blazing-fast performance."
            />
            <Card
              icon={<span className="text-2xl">🧩</span>}
              title="Placeholders"
              description="Get top values and remaining time with flexible placeholder support."
            />
            <Card
              icon={<span className="text-2xl">💾</span>}
              title="Multiple Storage Backends"
              description="Support YAML, JSON, SQLITE & MYSQL storage options."
            />
            <Card
              icon={<span className="text-2xl">🎁</span>}
              title="Rewards System"
              description="Automated reward distribution to top players for each time period."
            />
            <Card
              icon={<span className="text-2xl">💻</span>}
              title="Developer API"
              description="Full API access for developers to extend functionality."
            />
          </Cards>
        </div>
      </section>
    </HomeLayout>
  );
}
