<template lang="pug">
    div.wrapper
        div.controls
        div.tetris-icon#close-icon(v-if="launched" @click="stop")
        div.tetris-zone#rotate(v-if="launched" @click="game.blockrain('rotate')")
            //- span left
        div.tetris-zone#left(v-if="launched" @click="game.blockrain('left')")
            //- span left
        div.tetris-zone#right(v-if="launched" @click="game.blockrain('right')")
            //- span left
        div.game(ref="game")
</template>

<script>
    export default {
        data() {
            return {
                blockrainOptions: {
                    playButtonText: 'Играть',
                    playText: '#tetrischallenge приняли, броcаем ответный!',
                    gameOverText: 'Игра окончена',
                    restartButtonText: 'Играть снова',
                    scoreText: 'Очки',
                    touchControls: false,
                    controls: false,
                    onLine: this.onLine,
                    onStart: this.onStart,
                    onRestart: this.onRestart,
                    onGameOver: this.onGameOver
                },

                launched: false,
                game: null
            }
        },

        mounted() {
            window.$ = window.jQuery = require('jquery')
            require('~/assets/blockrain/blockrain.jquery.libs.js')
            require('~/assets/blockrain/blockrain.jquery.src.js')
            require('~/assets/blockrain/blockrain.jquery.themes.js')
            const $game = $(this.$refs.game)
            this.game = $game


            $game.blockrain(this.blockrainOptions)
            $game.blockrain('theme', 'custom')
        },

        methods: {
            onStart() {
                this.launched = true
            },
            onRestart() {
                this.launched = true
            },
            onGameOver(score) {
                this.launched = false
                this.$emit('update:score', score)
            },
            onLine(lines, scoreIncrement, score) {
                this.$emit('update:score', score)
            },
            stop() {
                this.launched = false
                this.game.blockrain('gameover')
                this.$emit('update:score', this.game.blockrain('score'))
            }
        }
    }
</script>

<style lang="css" src="~/assets/blockrain/blockrain.css"></style>
<style lang="sass" scoped>
    .blockrain-touch

</style>
<style lang="sass">
    .wrapper
        position: relative
        width: 100%
        height: 100%
    
    .game
        margin: 0 auto
        width: 480px
        max-width: 100%
        height: 640px
        max-height: 100%
    
    @media screen and (max-width: 499px)
        .game
            width: 324px
            height: 432px
    
    @media screen and (max-width: 399px)
        .game
            width: 262px
            height: 352px

    .tetris-icon
        position: absolute
        cursor: pointer
        width: 1.5rem
        height: 1.5rem
        border-radius: 50%
        background-size: cover
        background-repeat: no-repeat
        z-index: 99
    
    .blockrain-game-start-holder, .blockrain-game-over-holder
        z-index: 999
    
    .blockrain-start-msg
        font-size: 2rem
        line-height: 2rem

    @media screen and (max-width: 350px)
        .blockrain-start-msg
            font-size: 1.5rem
            line-height: 1.5rem

    .blockrain-game-over-holder, .blockrain-start-holder
        background-color: transparent
    
    .blockrain-btn, .blockrain-game-over-btn, .blockrain-start-btn
        border-radius: 1rem
        cursor: pointer
        font-size: inherit

        &::before, &::after
            border: none


    #close-icon
        left: 2rem
        top: 2rem
        background-image: url('~assets/close.png')
        z-index: 990
    
    .tetris-zone
        position: absolute
        display: flex
        justify-content: center
        align-items: flex-end
        width: 30%
        height: 100%
        z-index: 99

        &#left
            left: 0
            width: 30%
        &#rotate
            left: 30%
            width: 40%
        &#right
            left: 70%
            width: 30%
        
</style>