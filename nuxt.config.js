import dotenv from 'dotenv'

dotenv.config()

export default {
    build: {
        parallel: true,
        // cache: true,
        // optimizeCSS: true,
        extractCSS: true,
        extend(config) {
            const ext = '.vue'
            const {
                extensions
            } = config.resolve
            const indexOfVue = extensions.indexOf(ext)

            if (~indexOfVue) {
                extensions.splice(indexOfVue, 1)
            }

            extensions.unshift(ext)
        }
    },

    generate: {
        dir: 'docs'
    },

    router: {
        base: '/tetris-challenge/'
    }
}