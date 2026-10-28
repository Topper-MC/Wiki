import { defineConfig } from "fumapress";
import { fumadocsMdx } from "fumapress/adapters/mdx";
import { metaSchema, pageSchema } from "fumapress/adapters/mdx/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import { translations } from "./src/lib/i18n";

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
  defaultLayoutProps: {
    nav: {
      title: (
        <>
          <img
            src="https://topper-mc.github.io/Assets/topper/logo.svg"
            alt="Topper"
            className="size-5"
          />
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
            icon: (
              <img
                src="https://topper-mc.github.io/Assets/topper/logo.svg"
                alt="Topper"
                className="size-5"
              />
            ),
          },
          {
            text: "TimedTopper",
            description: "Timed leaderboard addon with automatic resets",
            url: "/timedtopper/",
            icon: (
              <img
                src="https://topper-mc.github.io/Assets/timedtopper/logo.svg"
                alt="TimedTopper"
                className="size-5"
              />
            ),
          },
          {
            text: "GroupTopper",
            description: "Group-based leaderboard calculations",
            url: "/grouptopper/",
            icon: (
              <img
                src="https://topper-mc.github.io/Assets/grouptopper/logo.svg"
                alt="GroupTopper"
                className="size-5"
              />
            ),
          },
          {
            text: "Cachy",
            description: "High-performance player data caching plugin",
            url: "/cachy/",
            icon: (
              <img
                src="https://topper-mc.github.io/Assets/topper/logo.svg"
                alt="Cachy"
                className="size-5"
              />
            ),
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
