// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      clientToken: process.env.NUXT_ENV_CLIENT_TOKEN,
      apiBaseURL: process.env.API_BASE_URL,
    },
  },
  modules: ['@pinia/nuxt'],
  plugins: [
    {
      src: '@/plugins/storyblok-design-system',
      mode: 'client',
    },
  ],
})
