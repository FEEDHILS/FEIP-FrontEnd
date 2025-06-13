// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    '@nuxt/ui',
  ],

  googleFonts: {
    families: {
      'Open Sans': [400, 700],
      Montserrat: true,
    }
  },
})
