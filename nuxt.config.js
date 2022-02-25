import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    '@nuxtjs/tailwindcss',
    '~/modules/google-fonts'
  ],
  css: [
    '~/assets/css/app.css'
  ],
  googleFonts: {
    display: 'swap',
    useStylesheet: true,
    inject: true,
    download: true,
    families: {
      'Inter': [300, 400, 500, 600, 700]
    }
  },
  publicRuntimeConfig: {
    appNetwork: process.env.APPLICATION_NETWORK,
    appContractAddress: process.env.APPLICATION_CONTRACT_ADDRESS,
    appId: process.env.APPLICATION_ID,
    serverUrl: process.env.SERVER_URL,
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: [
        '@headlessui/vue', 'vue'
      ]
    }
  }
})
