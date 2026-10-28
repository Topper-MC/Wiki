import { defineConfig } from "fumapress";
import { fumadocsMdx } from "fumapress/adapters/mdx";
import { metaSchema, pageSchema } from "fumapress/adapters/mdx/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import { translations } from "@/lib/i18n";
import { PROJECTS, ProjectIcon, resolveProjectIcon } from "@/lib/projects";
import { NavTitle } from "@/components/NavTitle";

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
      title: <NavTitle />,
    },
    githubUrl: "https://github.com/Topper-MC",
    links: [
      {
        type: "menu",
        text: "Projects",
        on: "nav",
        items: PROJECTS.map((project) => ({
          text: project.title,
          description: project.description,
          url: project.url,
          icon: <ProjectIcon project={project.id} className="size-5" />,
        })),
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
