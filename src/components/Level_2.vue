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
    <button id="comprobar_level2" class="button-62" style="margin: auto;" @click="verification2(); nextLevel('comprobar_level2', 'popup2_link')">Comprobar</button>
    <a id="popup2_link" class="button-62" href="#popup2" style="padding: 10px; margin: auto; display: none;" type="button">NEXT</a>

    <div id="popup2" class="overlay">
        <div class="popup">
            <h2>Consecuencias</h2>
            <div class="content">
                <p>La tecnología ayuda a facilitar la educación, la comunicación y el entretenimiento, y los dispositivos tecnológicos se han convertido en un elemento crucial para navegar la vida diaria. Sin embargo, algunos dispositivos pueden interrumpir o afectar negativamente a nuestros ciclos de sueño.</p>

                <p>Como por ejemplo puede causar sobreestimulación antes de acostarse y, si no se maneja adecuadamente, reducir el tiempo de sueño. A continuación os dejo una lista  de las consecuencias que puede llegar a tener una persona:</p>
                <ol class="alternating-colors">
                    <li>
                        <strong>Reducción del tiempo de sueño</strong>
                        
                    </li>
                    <li>
                        <strong>Depresión</strong>
                        
                    </li>
                    <li>
                        <strong>Cansancio</strong>
                        
                    </li>
                    <li>
                        <strong>Mal humor</strong>
                        
                    </li>
                    <li>
                        <strong>Mal rendimiento académico</strong>
                        
                    </li>
                    <li>
                        <strong>Alto riesgo de hipertensión y enfermedad cardiovascular</strong>
                        
                    </li>
                </ol>
                <button id="next_level2" class="button-62" style="margin: auto;" type="button" @click="setLevel2(); setLevel3()">NEXT</button>
            </div>
        </div>
    </div>
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* body { 
  display: flex !important;
  flex-direction: column !important;
  max-width: 420px !important;
  padding: 32px !important;
  margin: 60px auto !important;
  border: 1px solid #eee !important;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.06) !important;
} */

* {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizelegibility;
	letter-spacing: -0.25px;
}
 ol {
	padding-left: 50px;
}
 li {
	color: #4f4f4f;
	padding-left: 16px;
	margin-top: 24px;
	position: relative;
	font-size: 16px;
	line-height: 22px;
}
 li:before {
	content: '';
	display: block;
	height: 42px;
	width: 42px;
	border-radius: 50%;
	border: 2px solid #ddd;
	position: absolute;
	top: -12px;
	left: -46px;
}
 ol.alternating-colors li:nth-child(odd):before {
	border-color: #0bad02;
}
 ol.alternating-colors li:nth-child(even):before {
	border-color: #2378d5;
}
</style>