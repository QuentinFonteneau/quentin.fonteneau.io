// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from "@rollup/plugin-wasm";

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
    plugins: [wasm()],
    build: {
      rollupOptions: {
        external: ["shiki/dist/onig.wasm"], // Externaliser le fichier .wasm
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
    highlight: {
      theme: "nord",
      preload: ["javascript", "php", "vue"],
    },
  },
  shiki: {
    /* shiki options */
  },
  compatibilityDate: "2024-09-19",
});
