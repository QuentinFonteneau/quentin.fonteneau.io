// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

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
    plugins: [wasm(), topLevelAwait()],
    esbuild: {
      target: "esnext", // Pour s'assurer que esbuild supporte top-level await
    },
    build: {
      target: "esnext",
      rollupOptions: {
        external: ["env", "wasi_snapshot_preview1"],
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
