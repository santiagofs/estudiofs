// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    // "@nuxt/content", // Temporarily disabled due to better-sqlite3 issues
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/eslint",
    "@nuxt/image",
  ],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
