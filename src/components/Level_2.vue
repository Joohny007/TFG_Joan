<template>
    <div class="general-box rounded">
        <div class="col-md-6 shadow rounded px-5 py-4 bg-light">
            <h1>2o día: Consecuencias</h1>  
            <p>Selecciona las imagenes que creas que son las posibles consecuencias y una vez hayas seleccionado todas, haz click en "Comprobar"</p>

            <div class="row" style="padding-bottom: 10px;">
                <div class="column">
                    <input id="estrés" type="image" v-bind:src="require('../images/estrés.jpg')" alt="" style="width: 85%; height: auto;" @click="mark('estrés')">
                    <p>Estrés</p>
                </div>
                <div class="column">
                    <input id="cansancio" type="image" v-bind:src="require('../images/cansancio.png')" alt="" style="width: 85%; height: auto;" @click="mark('cansancio')">
                    <p>Cansancio</p>
                </div>
                <div class="column">
                    <input id="depresión" type="image" v-bind:src="require('../images/depressed.jpg')" alt="" style="width: 85%; height: auto;" @click="mark('depresión')">
                    <p>Depresión</p>
                </div>
                <div class="column">
                    <input id="mal_humor" type="image" v-bind:src="require('../images/bad mood.jpg')" alt="" style="width: 85%; height: auto;" @click="mark('mal_humor')">
                    <p>Mal humor</p>
                </div>
                <div class="column">
                    <input id="nervios" type="image" v-bind:src="require('../images/nervios.jpg')" alt="" style="width: 85%; height: auto;" @click="mark('nervios')">
                    <p>Nervios</p>
                </div>
                <div class="column">
                    <input id="malasnotas" type="image" v-bind:src="require('../images/bad grades.jpg')" alt="" style="width: 85%; height: auto;" @click="mark('malasnotas')">
                    <p>Mal rendimiento académico</p>
                </div>
                <div class="column">
                    <input id="hambre" type="image" v-bind:src="require('../images/hambre.jpg')" alt="" style="width: 85%; height: auto;" @click="mark('hambre')">
                    <p>Hambre</p>
                </div>
                <div class="col-md-8 rounded px-5 py-4 bg-light">
                    <ul id="mis-seleccionados">
                        <h2>Seleccionados:</h2>
                        <li v-for="(element, index) in selectedElementNames" :key="index">{{ element }}</li>
                    </ul>
                </div>

            </div>
            <button id="comprobar_level2" class="button-62" style="margin: auto;" @click="verification2(); nextLevel('comprobar_level2', 'popup2_link')">Comprobar</button>
            <a id="popup2_link" class="button-62" href="#popup2" style="padding: 10px; margin: auto; display: none;" type="button">NEXT</a>
        </div>
    </div>

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
        data: function() {
            return {
                selectedElements: []
            };
        },
        computed: {
            selectedElementNames: function() {
                return this.selectedElements.map(function(element) {
                    return element.name;
                });
            }
        },
        methods: {
            mark: function(id) {
                if (document.getElementById(id).style.border == "5px solid cyan"){
                    document.getElementById(id).style.border = "0px solid cyan";
                    this.selectedElements = this.selectedElements.filter(function(element) {
                        return element.id !== id;
                    });
                }else{
                    document.getElementById(id).style.border = "5px solid cyan";
                    document.getElementById(id).style.borderRadius = "5px";
                    document.getElementById(id).style.padding = "5px";
                    this.selectedElements.push({ id: id, name: document.getElementById(id).nextElementSibling.textContent });
                    console.log(this.selectedElementNames.find(element => element == 'Estrés'));
                }
            },

            verification2: function() {
                var wrongAns = 0
                var correctAns = 0
                if(document.getElementById('estrés').style.border == "5px solid cyan"){
                    document.getElementById('estrés').classList.add('wrong')
                    document.getElementById('estrés').style.padding = "0px";
                    wrongAns += 1
                }else{correctAns += 1; document.getElementById('estrés').classList.add('right'); document.getElementById('estrés').style.padding = "0px";}
                if(document.getElementById('cansancio').style.border == "5px solid cyan"){
                    document.getElementById('cansancio').classList.add('right')
                    document.getElementById('cansancio').style.padding = "0px";
                    correctAns += 1
                }else{wrongAns += 1; document.getElementById('cansancio').classList.add('wrong'); document.getElementById('cansancio').style.padding = "0px";}
                if(document.getElementById('depresión').style.border == "5px solid cyan"){
                    document.getElementById('depresión').classList.add('right')
                    document.getElementById('depresión').style.padding = "0px";
                    correctAns += 1
                }else{wrongAns += 1; document.getElementById('depresión').classList.add('wrong'); document.getElementById('depresión').style.padding = "0px";}
                if(document.getElementById('mal_humor').style.border == "5px solid cyan"){
                    document.getElementById('mal_humor').classList.add('right')
                    document.getElementById('mal_humor').style.padding = "0px";
                    correctAns += 1
                }else{wrongAns += 1; document.getElementById('mal_humor').classList.add('wrong'); document.getElementById('mal_humor').style.padding = "0px";}
                if(document.getElementById('nervios').style.border == "5px solid cyan"){
                    document.getElementById('nervios').classList.add('wrong')
                    document.getElementById('nervios').style.padding = "0px";
                    wrongAns += 1
                }else{correctAns += 1; document.getElementById('nervios').classList.add('right'); document.getElementById('nervios').style.padding = "0px";}
                if(document.getElementById('hambre').style.border == "5px solid cyan"){
                    document.getElementById('hambre').classList.add('wrong')
                    document.getElementById('hambre').style.padding = "0px";
                    wrongAns += 1
                }else{correctAns += 1; document.getElementById('hambre').classList.add('right'); document.getElementById('hambre').style.padding = "0px";}
                if(document.getElementById('malasnotas').style.border == "5px solid cyan"){
                    document.getElementById('malasnotas').classList.add('right')
                    document.getElementById('malasnotas').style.padding = "0px";
                    correctAns += 1
                }else{wrongAns += 1; document.getElementById('malasnotas').classList.add('wrong'); document.getElementById('malasnotas').style.padding = "0px";}
                this.$store.commit('setCorrectAnswers', correctAns)
                this.$store.commit('setWrongAnswers', wrongAns)
            },


            nextLevel: function(id, nextId){
                document.getElementById(id).style.display="none"
                document.getElementById(nextId).style.display="inline-block"
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