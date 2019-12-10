import VueCompareImage from 'vue-compare-image'
import Blockrain from '~/components/blockrain'

export default {
    components: {
        'v-compare-image': VueCompareImage,
        'blockrain': Blockrain
    },

    data() {
        return {
            // percentage: 0.95
        }
    },

    methods: {
        onScore(score) {
            console.log(score)
        }
    }
}