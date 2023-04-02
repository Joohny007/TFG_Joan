<template>
    <h1>2o día: Consecuencias</h1>  

    <div class="row">
        <div class="column">
            <input id="estrés" type="image" v-bind:src="require('../images/estrés.jpg')" alt="" style="width: 100%;" @click="mark('estrés')">
            <p>Estrés</p>
        </div>
        <div class="column">
            <input id="cansancio" type="image" v-bind:src="require('../images/cansancio.png')" alt="" style="width: 100%;" @click="mark('cansancio')">
            <p>Cansancio</p>
        </div>
        <div class="column">
            <input id="depresión" type="image" v-bind:src="require('../images/estrés.jpg')" alt="" style="width: 100%;" @click="mark('depresión')">
            <p>Depresión</p>
        </div>
        <div class="column">
            <input id="mal_humor" type="image" v-bind:src="require('../images/mal humor.jpg')" alt="" style="width: 100%;" @click="mark('mal_humor')">
            <p>Mal humor</p>
        </div>
        <div class="column">
            <input id="nervios" type="image" v-bind:src="require('../images/estrés.jpg')" alt="" style="width: 100%;" @click="mark('nervios')">
            <p>Nervios</p>
        </div>
        <div class="column">
            <input id="hambre" type="image" v-bind:src="require('../images/hambre.jpg')" alt="" style="width: 100%;" @click="mark('hambre')">
            <p>Hambre</p>
        </div>
        <div class="column">
            <input id="malasnotas" type="image" v-bind:src="require('../images/malas notas.jpg')" alt="" style="width: 100%;" @click="mark('malasnotas')">
            <p>Mal rendimiento académico</p>
        </div>
    </div>
    <button id="comprobar_level2" class="buttonQuestion" style="margin: auto;" @click="verification2(); nextLevel('comprobar_level2', 'next_level2')">Comprobar</button>
    <button id="next_level2" class="buttonQuestion" style="margin: auto; display: none;" type="button" @click="setLevel2(); setLevel3()">NEXT</button>
</template>

<script>
    export default {
        name: "Level_2",
        methods: {
            mark: function(id) {
                if (document.getElementById(id).style.border == "10px solid cyan"){
                    document.getElementById(id).style.border = "0px solid cyan";
                }else{
                    document.getElementById(id).style.border = "10px solid cyan";
                    document.getElementById(id).style.borderRadius = "5px";
                    document.getElementById(id).style.padding = "5px";
                }
            },

            verification2: function() {
                var wrongAns = 0
                var correctAns = 0
                if(document.getElementById('estrés').style.border == "10px solid cyan"){
                    wrongAns += 1
                }else{correctAns += 1}
                if(document.getElementById('cansancio').style.border == "10px solid cyan"){
                    correctAns += 1
                }else{wrongAns += 1}
                if(document.getElementById('depresión').style.border == "10px solid cyan"){
                    correctAns += 1
                }else{wrongAns += 1}
                if(document.getElementById('mal_humor').style.border == "10px solid cyan"){
                    correctAns += 1
                }else{wrongAns += 1}
                if(document.getElementById('nervios').style.border == "10px solid cyan"){
                    wrongAns += 1
                }else{correctAns += 1}
                if(document.getElementById('hambre').style.border == "10px solid cyan"){
                    wrongAns += 1
                }else{correctAns += 1}
                if(document.getElementById('malasnotas').style.border == "10px solid cyan"){
                    correctAns += 1
                }else{wrongAns += 1}
                this.$store.commit('setCorrectAnswers', correctAns)
                this.$store.commit('setWrongAnswers', wrongAns)
            },


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