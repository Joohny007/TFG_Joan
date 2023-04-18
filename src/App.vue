<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <!-- <img v-bind:src="require('./images/trump_mio.png')" alt=""> -->

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
    var animales = ['aardvark', 'albatross', 'alligator', 'alpaca', 'ant', 'anteater', 'antelope', 'ape', 'armadillo', 'baboon', 'badger', 'barracuda', 'bat', 'bear', 'beaver', 'bee', 'beetle', 'bird', 'bison', 'blackbird', 'boar', 'bobcat', 'buffalo', 'butterfly', 'camel', 'cat', 'caterpillar', 'cattle', 'cheetah', 'chicken', 'chimpanzee', 'chinchilla', 'clam', 'cobra', 'cockroach', 'cod', 'condor', 'coyote', 'crab', 'crane', 'crocodile', 'crow', 'deer', 'dog', 'dolphin', 'donkey', 'dove', 'dragonfly', 'duck', 'eagle', 'echidna', 'eel', 'elephant', 'elk', 'emu', 'falcon', 'ferret', 'fish', 'flamingo', 'fly', 'fox', 'frog', 'gazelle', 'gecko', 'gerbil', 'giraffe', 'gnu', 'goat', 'goldfish', 'goose', 'gorilla', 'grasshopper', 'guinea pig', 'gull', 'hamster', 'hare', 'hawk', 'hedgehog', 'hen', 'heron', 'hippopotamus', 'hornet', 'horse', 'hummingbird', 'hyena', 'iguana', 'impala', 'jackal', 'jaguar', 'jellyfish', 'kangaroo', 'kingfisher', 'koala', 'komodo dragon', 'kookaburra', 'ladybug', 'lark', 'lemming', 'lemur', 'leopard', 'lion', 'lizard', 'llama', 'lobster', 'locust', 'lynx', 'macaw', 'magpie', 'mallard', 'mammoth', 'manatee', 'mongoose', 'monkey', 'moose', 'mosquito', 'mouse', 'mule', 'narwhal', 'newt', 'nightingale', 'octopus', 'opossum', 'ostrich', 'otter', 'owl', 'ox', 'oyster', 'panda', 'panther', 'parrot', 'peacock', 'pelican', 'penguin', 'pheasant', 'pig', 'pigeon', 'polar bear', 'pony', 'porcupine', 'porpoise', 'prairie dog', 'quail', 'rabbit', 'raccoon', 'rat', 'rattlesnake', 'reindeer', 'rhinoceros', 'robin', 'rooster', 'salamander', 'salmon', 'sandpiper', 'sardine', 'scorpion', 'seagull', 'seahorse', 'seal', 'shark', 'sheep', 'shrew', 'skunk', 'snail', 'snake', 'sparrow', 'spider', 'squirrel', 'starling', 'stingray', 'stork', 'swallow', 'swan', 'tapir', 'tarsier', 'termite', 'tiger', 'toad', 'trout', 'turkey', 'turtle']
    var animal = Math.floor(Math.random() * animales.length);
    var numero = Math.floor(10 + Math.random() * 90)
    this.$store.commit('setID', animales[animal] + '_' + String(numero))
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