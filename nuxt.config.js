export default {
  
  ssr: false,
  target: 'static',

  head: {
    title: 'Daouda BA 👨🏽‍💻 | Fullstack Developer',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Daouda BA 👨🏽‍💻, Fullstack Developer' },
      { property: 'og:description', content: 'Daouda BA 👨🏽‍💻, Fullstack Developer, Based in DAKAR, Senegal' },
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@600&display=swap' }
    ],
    script: [
      {
      "data-host": "https://microanalytics.io",
      "data-dnt": false,
      src: "https://microanalytics.io/js/script.js",
      id: process.env.MICROANALYTICS_ANALYTICS_ID,
      async: true,
      defer: true
      },
    ]
  },

  css: [],
  plugins: [],
  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/robots',
    ['vue-scrollto/nuxt', { duration: 500, easing: 'ease' }],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.json'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.json'
    }
    ],
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en'
    } 
  },

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
      title: 'Daouda BA 👨🏽‍💻 | Fullstack Developer',
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

  axios: {},

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