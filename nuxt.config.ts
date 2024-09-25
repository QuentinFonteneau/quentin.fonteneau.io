// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],

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
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  },
  compatibilityDate: "2024-09-19",
});
