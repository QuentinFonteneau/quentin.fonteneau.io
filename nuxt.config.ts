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
    build: {
      rollupOptions: {
        external: ["sharp"],
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
    contentHead: false,
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
  image: {
    provider: "ipx", // ou un autre provider approprié
    presets: {
      default: {
        format: "webp",
      },
    },
  },
  runtimeConfig: {
    // Variables accessibles côté client
    public: {
      apiUrl: process.env.API_URL,
      basicAuthUsername: process.env.BASIC_AUTH_USERNAME,
      basicAuthPassword: process.env.BASIC_AUTH_PASSWORD,
    },
  },
  compatibilityDate: "2024-09-19",
});
