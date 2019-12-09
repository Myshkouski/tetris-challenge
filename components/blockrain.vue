<template lang="pug">
    div
        div#game(ref="game")
    //- div.wrapper
    //-     div.close-icon
</template>

<script>
    export default {
        data() {
            return {
                blockrainOptions: {
                    playButtonText: 'Играть',
                    playText: 'Броcаем ответный #tetrischallenge!',
                    gameOverText: 'Игра окончена',
                    restartButtonText: 'Играть снова',
                    scoreText: 'Очки',
                    // onLine: this.onLine,
                    difficulty: 'nice'
                }
            }
        },

        mounted() {
            window.$ = window.jQuery = require('jquery')
            require('~/assets/blockrain')
            const $game = $(this.$refs.game)

            $game.blockrain(this.blockrainOptions)
            $game.blockrain('theme', 'modern')
            // $game.blockrain('controls', true)
        },

        methods: {
            // onStart() {},
            // onRestart() {},
            // onGameOver(score) {
            //     this.$emit('update:score', score)
            // },
            // onLine(lines, scoreIncrement, score) {
            //     this.$emit('update:score', score)
            // }
        }
    }
</script>

<style lang="sass" scoped>
    @import url('~/assets/blockrain.css')

    // .wrapper
        // position: relative

    #game
        width: 90vw
        height: 90vh
    
    // .close-icon
    //     position: absolute
    //     cursor: pointer
    //     width: 1.5rem
    //     height: 1.5rem
    //     border-radius: 50%
    //     right: 2rem
    //     top: 2rem
    //     background-image: url('~assets/close.png')
    //     background-size: cover
    //     background-repeat: no-repeat
    //     z-index: 999
</style>