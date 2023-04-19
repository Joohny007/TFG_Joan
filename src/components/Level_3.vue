<template>
    <div class="general-box rounded">
        <div class="col-md-8 shadow rounded px-5 py-4 bg-light">
            <h1>3r día: Soluciones</h1>
            <div class="gameArea">
                <h3>{{results}}</h3>
                <h4 style="padding-bottom: 10px;">Current Box: {{ currVal }}</h4>
                <div class="boxHolder">
                    <div class="box" style="padding: 10px;"
                        v-for="(box, index) in boxData" :key="index"
                        >
                        <button class="rounded"
                            :id="'box_' + index"
                            :class="box.show ? 'show' : '' "
                            style="margin-bottom: 15px; "
                            @click="showBox(index, box.value)">
                            <p v-if="!box.show">Click Here</p>
                            <span>{{ box.value }}</span>
                        </button>
                    </div>
                </div>
            </div>
            <a id="popup3_link" class="button-62" href="#popup3" style="padding: 10px; margin: auto; display: none;" type="button">NEXT</a>
        </div>
    </div>
    <div id="popup3" class="overlay">
        <div class="popup">
            <h2>Soluciones</h2>
            <div class="content">
                <p>Existen soluciones farmacológicas como no farmacológicas. En este trabajo de investigación, me gustaría centrarme en las no farmacológicas ya que se puede combatir el insomnio tecnológico con simples pasos.</p>

                <p>Para este fin, me veo obligado a recurrir a la <strong>higiene del sueño</strong>, la cual consiste en una serie de prácticas que consisten en alejar o evitar todo aquello que te puede alterar el sueño y promover aquellas cosas que te ayudan a dormir:</p>
                <ol class="alternating-colors">
                    <li>
                        <strong>Dejar el móvil o la tablet mínimo 30 minutos antes de acostarnos.</strong>
                        
                    </li>
                    <li>
                        <strong>Evitar siestas durante el dia</strong>
                        
                    </li>
                    <li>
                        <strong>Evitar cenar tarde por la noche</strong>
                        
                    </li>
                    <li>
                        <strong>Evitar hacer ejercicio tarde</strong>
                        
                    </li>
                    <li>
                        <strong>Evitar sustancias que alteren el sueño (alcohol, cafeína, nicotina)</strong>
                        
                    </li>
                    <li>
                        <strong>Propiciar un buen entorno para el sueño (oscuro, fresco, tranquilo)</strong>
                        
                    </li>
                </ol>
                <button id="next_level2" class="button-62" style="margin: auto;" type="button" @click="setLevel3(); setFinalGame()">NEXT</button>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: "Level_3",
        data() {
            return {
                boxData: [
                    { id:1, value: "Dejar el móvil o la tablet mínimo 30 minutos antes de acostarnos.", show: false },
                    { id:2, value: "Evitar siestas durante el dia", show: false },
                    { id:3, value: "Evitar siestas durante el dia", show: false },
                    { id:4, value: "Dejar el móvil o la tablet mínimo 30 minutos antes de acostarnos.", show: false },
                    { id:5, value: "Evitar hacer ejercicio tarde", show: false },
                    { id:6, value: "Evitar cenar tarde por la noche", show: false },
                    { id:7, value: "Evitar cenar tarde por la noche", show: false },
                    { id:8, value: "Evitar hacer ejercicio tarde", show: false },
                    { id:9, value: "Evitar sustancias que alteren el sueño (alcohol, cafeína, nicotina)", show: false },
                    { id:10, value: "Propiciar un buen entorno para el sueño (oscuro, fresco, tranquilo)", show: false },
                    { id:11, value: "Propiciar un buen entorno para el sueño (oscuro, fresco, tranquilo)", show: false },
                    { id:12, value: "Evitar sustancias que alteren el sueño (alcohol, cafeína, nicotina)", show: false },
                ],
                currVal: null,
                result: '',
                correctMatches: []
            }
        },
        methods: {
            showBox(_id, _value) {
                if (this.boxData[_id].show) {
                    return;
                }

                this.boxData[_id].show = true;
                const button = document.getElementById(`box_${_id}`);
                button.classList.add("show");

                if (this.currVal === null) {
                    this.currVal = _value;
                } else if (_value === this.currVal) {
                    this.result = "Great!";
                    this.currVal = null;
                    this.correctMatches.push(this.currVal, _value)
                    if(this.correctMatches.length == 12){
                        document.getElementById('popup3_link').style.display="inline-block"
                    }
                        
                } else {
                    this.result = "Try Again!";
                    this.boxData.map(box => box.show = false);
                    this.correctMatches = [];

                    setTimeout(() => {
                        this.boxData[_id].show = false;
                        const button = document.getElementById(`box_${_id}`);
                        button.classList.remove("show");
                    }, 1000);

                    this.currVal = null;
                }
            },

            setLevel3: function(){
                this.$store.commit('setLevel3', !this.$store.getters.getLevel3)
            },

            setFinalGame: function(){
                this.$store.commit('setFinalGame', !this.$store.getters.getFinalGame)
            },
        }
    }
    </script>
  
  <style scoped>
  * {
    transition: all 0.5s;
  }
  .gameArea {
    width: 100%;
    float: center;
  }
  .boxHolder {
    display: block;
    width: auto;
    margin: 0 auto;
  }
  .box {
    width: 25%;
    float: left
  }
  

.box button { 
    width: 100%;
    height: 100px;
    border: 1px solid #ddd;
    background-color: #F7CE68;
}

button p {
    /* margin-top: 46px; */
    margin-bottom: 0;
}

button.show p { margin: 0; }

.box button span {
    display: none;
}

.box button.show span {
    display: inline-block;
}

.box button.match {
    border-color: green;
}
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