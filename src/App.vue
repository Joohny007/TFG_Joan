<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100">
      <div class="h-100 d-flex justify-content-center align-items-center">
        <div class="col-md-5 shadow rounded px-5 py-4 bg-white text-left">
          <Questions_home/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Questions_home from './components/Questions_home.vue'

export default {
  name: 'App',
  components: {
    Questions_home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
