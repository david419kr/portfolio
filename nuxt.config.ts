// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/portfolio/'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'ko', name: '한국어', iso: 'ko-KR', file: 'ko.json' },
      { code: 'ja', name: '日本語', iso: 'ja-JP', file: 'ja.json' }
    ],
    defaultLocale: 'ja',
    lazy: true,
    langDir: 'locales/'
  }
})