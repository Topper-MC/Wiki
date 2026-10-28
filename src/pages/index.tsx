import React from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { createHomeLayout } from 'fumapress/layouts/home';

const HomeLayout = createHomeLayout();

const PortalList = [
  {
    title: 'Topper',
    logo: 'https://topper-mc.github.io/Assets/topper/logo.svg',
    description: 'The core, high-performance leaderboard plugin for Minecraft servers. Track, sort, and display any player statistics.',
    link: '/topper/',
  },
  {
    title: 'TimedTopper',
    logo: 'https://topper-mc.github.io/Assets/timedtopper/logo.svg',
    description: 'Timed leaderboard addon for Topper. Reset stats periodically and distribute rewards automatically to top players.',
    link: '/timedtopper/',
  },
  {
    title: 'GroupTopper',
    logo: 'https://topper-mc.github.io/Assets/grouptopper/logo.svg',
    description: 'Group leaderboard addon for Topper. Calculate ranking metrics based on Towny, Factions, Parties, or LuckPerms groups.',
    link: '/grouptopper/',
  },
  {
    title: 'Cachy',
    logo: 'https://topper-mc.github.io/Assets/topper/logo.svg',
    description: 'High-performance player data caching mod/plugin. Efficiently store online player metrics with zero lag.',
    link: '/cachy/',
  },
];

export default function Home(): React.JSX.Element {
  return (
    <HomeLayout>
      {/* Hero Header */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <img
            src="https://topper-mc.github.io/Assets/topper/logo.svg"
            alt="Topper Logo"
            className="w-24 h-24 mb-6 object-contain drop-shadow"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fd-border bg-fd-secondary/50 text-xs font-medium text-fd-muted-foreground mb-6">
            <span>Minecraft Server Documentation Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Topper Wiki Portal
          </h1>
          <p className="text-lg md:text-xl text-fd-muted-foreground">
            Welcome to the documentation hub for Topper and its ecosystem plugins.
          </p>
        </div>
      </section>

      {/* Portal Grid */}
      <section className="py-6 w-full">
        <Cards className="grid-cols-1 md:grid-cols-2">
          {PortalList.map((item) => (
            <Card
              key={item.title}
              icon={
                <img
                  src={item.logo}
                  alt={item.title}
                  className="size-8 object-contain"
                />
              }
              title={item.title}
              description={item.description}
              href={item.link}
            />
          ))}
        </Cards>
      </section>
    </HomeLayout>
  );
}
