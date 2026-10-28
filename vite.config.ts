import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import press from "fumapress/vite";
import { fumadocsMdx } from "fumadocs-mdx/vite";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { remarkGithubAlerts } from "./src/plugins/remark-github-alerts";
import { transformerMetaHighlight } from "./src/plugins/transformer-meta-highlight";

export default defineConfig({
  plugins: [
    press({
      basePath: "/Wiki/",
    }),
    fumadocsMdx({
      globalOptions: {
        mdxOptions: {
          remarkPlugins: [remarkGithubAlerts],
          rehypeCodeOptions: {
            ...rehypeCodeDefaultOptions,
            transformers: [
              ...(rehypeCodeDefaultOptions.transformers ?? []),
              transformerMetaHighlight(),
            ],
          },
        },
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@site": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
