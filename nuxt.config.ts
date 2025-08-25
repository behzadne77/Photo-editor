// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  
  css: [
  '/assets/css/main.css'
],
  
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'fa',
        iso: 'fa-IR',
        name: 'فارسی',
        dir: 'rtl',
        file: 'fa.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        dir: 'ltr',
        file: 'en.json'
      }
    ],
    defaultLocale: 'fa',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
