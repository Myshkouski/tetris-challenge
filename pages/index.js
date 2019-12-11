import VueCompareImage from 'vue-compare-image'
import Blockrain from '~/components/blockrain'

export default {
    head: {
        title: '#tetrischallenge'
    },

    components: {
        'v-compare-image': VueCompareImage,
        'blockrain': Blockrain
    },

    data() {
        return {
            score: 0,
            email: 'kalmykov@bgpb.by',
            subject: '#tetris-challange'
        }
    },

    computed: {
        mailTo() {
            return `mailto:${this.email}?` + encodeURI(`subject=${this.subject}&body=У меня целых ${this.score} баллов!`)
        }
    },

    methods: {
        onScore(score) {
            this.score = score
        }
    }
}