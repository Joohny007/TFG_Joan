<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <img v-bind:src="require('./images/trump_mio.png')" alt="">
      <div class="h-100 d-flex justify-content-center align-items-center">
        <div class="col-md-6 shadow rounded px-5 py-4 bg-light">
          <!-- <TFG_Intro/> -->
          <Questions_home v-if="this.$store.getters.getStartForm"/>
          <Intro_game v-if="this.$store.getters.getStartGame"/>
          <Level_1 v-if="this.$store.getters.getLevel1"></Level_1>
          <Level_2 v-if="this.$store.getters.getLevel2"></Level_2>
          <Level_3 v-if="this.$store.getters.getLevel3"></Level_3>
          <TestComponent v-if="this.$store.getters.getTestComponent"></TestComponent>
          <FinalGame v-if="this.$store.getters.getFinalGame"></FinalGame>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Questions_home from './components/Questions_home.vue'
import Intro_game from './components/Intro_game.vue'
import Level_1 from './components/Level_1.vue'
import Level_2 from './components/Level_2.vue'
import Level_3 from './components/Level_3.vue'
import TestComponent from './components/TestComponent.vue'
import FinalGame from './components/FinalGame.vue'


export default {
  name: 'App',
  data() {
    return {
      startGame:false,
    };
  },
  mounted() {
    this.$store.commit('setID', Math.floor(1000000 + Math.random() * 9000000))
  },
  components: {
    Questions_home,
    Intro_game,
    Level_1,
    Level_2,
    Level_3,
    TestComponent,
    FinalGame,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
<style lang="css">
  @import "./styles/style.css";
</style>