import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  theme: {
    extend: {
      colors: {
        blu: {
          50: "#e8f2ff",
          100: "#d1e4ff",
          200: "#a3c9ff",
          300: "#75afff",
          400: "#4794ff",
          500: "#1979ff",
          600: "#1461cc",
          700: "#0f4999",
          800: "#0a3066",
          900: "#051833"
        },
        tangerine: {
          50: "#fff5f1",
          100: "#ffebe4",
          200: "#ffd7c9",
          300: "#ffc4ad",
          400: "#ffb092",
          500: "#ff9c77",
          600: "#cc7d5f",
          700: "#995e47",
          800: "#663e30",
          900: "#331f18"
        },
        yello: {
          50: "#fcffec",
          100: "#f8ffd8",
          200: "#f1ffb1",
          300: "#eaff8b",
          400: "#e3ff64",
          500: "#dcff3d",
          600: "#b0cc31",
          700: "#849925",
          800: "#586618",
          900: "#2c330c"
        },
        whiteoff: "#f6faff",
        blackoff: "#00050d",
      }
    }
  }
})
