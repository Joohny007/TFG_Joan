<template>
    <div>
        <p>El juego va a consistir en 3 minijuegos para que demuestres un poco los conocimientos sobre
            el insomnio tecnológico y además puedas aprender un poco más.
        </p>
        <button class="buttonQuestion" style="margin: auto;" type="button" @click="setStartGame(); setLevel1()">NEXT</button>
    </div>
</template>

<script>
  export default {
    name: 'Intro_game',
    methods: {
      setLevel1: function(){
        this.$store.commit('setLevel1', !this.$store.getters.getLevel1)
      },
      setStartGame: function(){
        this.$store.commit('setStartGame', !this.$store.getters.getStartGame)
      },
      setTestComponent: function(){
        this.$store.commit('setTestComponent', !this.$store.getters.getTestComponent)
      },
    }
  }
</script>