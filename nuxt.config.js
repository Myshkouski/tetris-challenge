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
        base: '/tetris-challenge/'
    }
}