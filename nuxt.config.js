import dotenv from 'dotenv'

dotenv.config()

export default {
    build: {
        parallel: true,
        // cache: true,
        // optimizeCSS: true,
        extractCSS: true        
    },

    generate: {
        dir: 'docs'     
    },

    router: {
        base: process.env.NODE_ENV =='production' ? process.env.ROUTER_BASE : '/'
    },

    modules: [
        ['@nuxtjs/pwa', { icons: true }]
    ],

    manifest: {
        name: '#tetrischallenge',
        short_name: '#tetrischallenge',
        description: 'Челлендж принят!',
        display: 'fullscreen',
        viewport: 'width=device-width, initial-scale=1, user-scalable=no',
        start_url: '/'
    },

    pwa: {
        workbox: {
            dev: process.env.NODE_ENV === 'development',
        },

        icon: {
            iconFileName: 'favicon.png'
        }
    }
}