import { defineConfig } from "fumapress";
import { fumadocsMdx } from "fumapress/adapters/mdx";
import { metaSchema, pageSchema } from "fumapress/adapters/mdx/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import { translations } from "@/lib/i18n";
import { ProjectIcon, resolveProjectIcon } from "@/lib/projects";

const docs = defineDocs({
  dir: "docs",
  docs: {
    async: true,
    schema: pageSchema,
    lastModified: true,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mode: "static",
  translations,
  content: docs.toFumadocsSource(),
  site: {
    name: "Topper",
    baseUrl: "https://topper-mc.github.io/Wiki/",
    git: {
      provider: "github",
      user: "Topper-MC",
      repo: "Wiki",
      branch: "main",
    },
  },
  loaderOptions: {
    icon(icon) {
      return resolveProjectIcon(icon);
    },
  },
  defaultLayoutProps: {
    nav: {
      title: (
        <>
          <ProjectIcon project="topper" className="size-5" />
          <span>Topper</span>
        </>
      ),
    },
    githubUrl: "https://github.com/Topper-MC",
    links: [
      {
        type: "menu",
        text: "Projects",
        on: "nav",
        items: [
          {
            text: "Topper",
            description: "Core leaderboard plugin for Minecraft servers",
            url: "/topper/",
            icon: <ProjectIcon project="topper" className="size-5" />,
          },
          {
            text: "TimedTopper",
            description: "Timed leaderboard addon with automatic resets",
            url: "/timedtopper/",
            icon: <ProjectIcon project="timedtopper" className="size-5" />,
          },
          {
            text: "GroupTopper",
            description: "Group-based leaderboard calculations",
            url: "/grouptopper/",
            icon: <ProjectIcon project="grouptopper" className="size-5" />,
          },
          {
            text: "Cachy",
            description: "High-performance player data caching plugin",
            url: "/cachy/",
            icon: <ProjectIcon project="cachy" className="size-5" />,
          },
        ],
      },
    ],
  },
  meta: {
    root() {
      return (
        <>
          <link rel="icon" href="https://topper-mc.github.io/Assets/topper/logo.svg" type="image/svg+xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
            rel="stylesheet"
          />
        </>
      );
    },
  },
}).adapters(fumadocsMdx());
