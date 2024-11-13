// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  target: "static",
  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/image"],
  routeRules: {
    "/": { prerender: true },
  },
  components: [
    {
      path: "~/components",
    },
  ],
  vite: {
    // Ajoutez ici toute configuration spécifique pour Vite
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  app: {
    rootTag: "body",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "fr",
      },
    },
  },

  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ["remark-reading-time"],
      rehypePlugins: [],
    },
    highlight: {
      theme: "one-dark-pro",
      langs: [
        "apache",
        "astro",
        "bash",
        "console",
        "css",
        "csv",
        "diff",
        "docker",
        "dotenv",
        "graphql",
        "html",
        "http",
        "javascript",
        "json",
        "log",
        "make",
        "markdown",
        "nginx",
        "php",
        "sass",
        "scss",
        "sql",
        "twig",
        "typescript",
        "vue",
        "yaml",
      ],
    },
  },
  compatibilityDate: "2024-09-19",
});
