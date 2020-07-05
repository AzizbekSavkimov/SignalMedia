require('dotenv').config()

export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'СИГНАЛ МЕДИА',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,700;1,400&display=swap'
            },
            {rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png'},
            {rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png'},
            {rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png'},
            {rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png'},
            {rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png'},
            {rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png'},
            {rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png'},
            {rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png'},
            {rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png'},
            {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png'},
            {rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico'},
            {rel: 'manifest', href: '/icons/manifest.json'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        '@/assets/global.scss',
        '@/assets/main.scss',
        '@/assets/vue-carousel.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/vue-carousel', ssr: false },
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/style-resources',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],
    styleResources: {
        scss: [
            '@/assets/scss/media-queries.scss',
            '@/assets/scss/mixins.scss',
            '@/assets/scss/var.scss'
        ]
    },
    server: {
        port: process.env.PORT || 8000,
        host: process.env.HOST || '127.0.0.1'
    },
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
