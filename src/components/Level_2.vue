<template>
    <h1>2o día: Consecuencias</h1>  

    <div class="row">
        <div class="column">
            <img v-bind:src="require('./images/cansancio.png')" alt="">
        </div>
    </div>
    <button id="comprobar_level2" class="buttonQuestion" style="margin: auto;" @click="verification2(); nextLevel('comprobar_level2', 'next_level2')">Comprobar</button>
    <button id="next_level2" class="buttonQuestion" style="margin: auto; display: none;" type="button" @click="setLevel2(); setLevel3()">NEXT</button>
</template>

<script>
    export default {
        name: "Level_2",
        methods: {
            nextLevel: function(id, nextId){
            document.getElementById(id).style.display="none"
            document.getElementById(nextId).style.display="block"
            },

            setLevel2: function(){
                this.$store.commit('setLevel2', !this.$store.getters.getLevel2)
            },
            setLevel3: function(){
                this.$store.commit('setLevel3', !this.$store.getters.getLevel3)
            },
        }
    }
</script>