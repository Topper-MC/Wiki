import React from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { createHomeLayout } from 'fumapress/layouts/home';
import { PROJECTS, ProjectIcon } from '@/lib/projects';

const HomeLayout = createHomeLayout();

export default function Home(): React.JSX.Element {
  return (
    <HomeLayout>
      <title>Topper Wiki Portal</title>
      <meta
        name="description"
        content="Welcome to the documentation hub for Topper and its ecosystem plugins."
      />
      <meta property="og:title" content="Topper Wiki Portal" />
      <meta
        property="og:description"
        content="Welcome to the documentation hub for Topper and its ecosystem plugins."
      />
      {/* Hero Header */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <ProjectIcon
            project="topper"
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
          {PROJECTS.map((item) => (
            <Card
              key={item.title}
              icon={
                <ProjectIcon
                  project={item.id}
                  className="size-8 object-contain"
                />
              }
              title={item.title}
              description={item.description}
              href={item.url}
            />
          ))}
        </Cards>
      </section>
    </HomeLayout>
  );
}
