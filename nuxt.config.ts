// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/image", "nuxt-shiki"],

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
  },
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ["remark-reading-time"],
      rehypePlugins: [],
    },
  },
  shiki: {
    defaultTheme: "one-dark-pro",
  },
  compatibilityDate: "2024-09-19",
});
