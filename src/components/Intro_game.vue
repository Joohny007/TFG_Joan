<template>
  <div class="general-box rounded">
    <div class="col-md-8 shadow rounded px-5 py-4 bg-light">
      <h1>Introducción de los minijuegos</h1>
      <p>El juego va a consistir en 3 minijuegos en los que se valorará cuanto conocimiento tiene la sociedad actual sobre este tema.</p>
      <p>El <strong>primer minijuego</strong> consiste en rellenar huecos con las palabras que te aparecen arriba, así de simple.</p>
      <p>El <strong>segundo minijuego</strong> se trata de escoger (con selección múltiple) cuales crees que son las consecuencias del insomnio tecnológico.</p>
      <p>Y el <strong>último minijuego</strong> es un memory, se trata de hacer parejas.</p>
      <button class="button-62" style="margin: auto;" type="button" @click="setStartGame(); setLevel1()">NEXT</button>
    </div>
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