export default {
  
  /* Nuxt rendering mode ** See https://nuxtjs.org/api/configuration-mode */
  ssr: false,

  /* Nuxt target ** See https://nuxtjs.org/api/configuration-target */
  target: 'static',

  /* Headers of the page ** See https://nuxtjs.org/api/configuration-head */
  head: {
    title: 'Daouda BA 👨🏽‍💻 | Full-Stack Software Engineer',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Daouda BA 👨🏽‍💻, Full-Stack Software Engineer' },
      { property: 'og:description', content: 'Daouda BA 👨🏽‍💻, Full-Stack Software Engineer, Based in DAKAR, Senegal' },
      { property: 'og:url', content: 'https://daooda.dev' },
      { property: 'og:type', content: 'website' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap' }
    ]
  },

  /* Global CSS */
  css: [
  ],

  /* Plugins to load before mounting the App ** https://nuxtjs.org/guide/plugins */
  plugins: [
  ],

  /* Auto import components ** See https://nuxtjs.org/api/configuration-components */
  components: true,

  /* Nuxt.js dev-modules */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    ['vue-scrollto/nuxt', { duration: 500, easing: 'ease' }],
  ],

  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: ['/user', '/admin'],
    },
    {
      UserAgent: '*',
      Disallow: '/admin',
    },
  ],

  pwa: {
    meta: {
      title: 'Daouda BA 👨🏽‍💻 | Full-Stack Software Engineer',
      author: '@daoodaba975',
    },
    manifest: {
      name: 'Daouda BA 👨🏽‍💻',
      short_name: 'DEV',
      lang: 'en',
    },
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  /* Axios module configuration ** See https://axios.nuxtjs.org/options */
  axios: {},

  /* Build configuration ** See https://nuxtjs.org/api/configuration-build/ */
  build: {
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    }  
  },

}
