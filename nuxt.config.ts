// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Eucalypt Social',
      bodyAttrs: { class: 'bg-whiteoff' },
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  supabase: {
    redirect: false,
    redirectOptions: {
      include: ['/feed/'],
      login: '/',
      callback: '/feed/',
    }
  }
})