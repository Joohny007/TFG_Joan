<template>
    <h1>1r día: Qué es el insomnio tecnológico?</h1>
    <div id="level1.1">
        <div 
            class="drop-zone-initial"
            @drop="onDrop1($event, 11)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
                v-for="item in getList1(11)" 
                :key="item.id" 
                class="drag-el"
                style="display: inline;"
                draggable="true"
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>

        <p>El</p>
        <div 
            id="13"
            class="drop-zone"
            @drop="onDrop1($event, 13)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
                v-for="item in getList1(13)"
                :key="item.id" 
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>

        <p>es un</p>
        <div 
            id="12"
            class="drop-zone"
            @drop="onDrop1($event, 12)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
                v-for="item in getList1(12)" 
                :key="item.id" 
                class="drag-el" 
                draggable="true" 
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>
        <p>del sueño frecuente que puede causar dificultad para conciliar el sueño (quedarse dormido) o mantenerlo, o puede hacer que 
            nos despertemos demasiado temprano y no podamos volver a dormirnos.</p>
        
        <p style="display: none"><strong>Debes rellenar todos los huecos</strong></p>
        <button id="comprobar_level1.1" class="buttonQuestion" style="margin: auto;" @click="verification1_1();">Comprobar</button>
        <button id="next_level1.1" class="buttonQuestion" style="margin: auto; display: none;" type="button" @click="nextLevel('level1.1', 'level1.2');">NEXT</button>

    </div>


    <div id="level1.2" style="display: none;">
        <div 
            class="drop-zone-initial"
            @drop="onDrop2($event, 1)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
                v-for="item in getList2(1)" 
                :key="item.id" 
                class="drag-el"
                style="display: inline;"
                draggable="true"
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>

        
        <p>Cuando revisamos el móvil de noche, la luz de nuestras pantallas emite una radiación conocida como </p>
        <div 
            id="3"
            class="drop-zone"
            @drop="onDrop2($event, 3)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
                v-for="item in getList2(3)" 
                :key="item.id" 
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>


        <p>, la cual inhibe la liberación de </p>
        <div 
            id="2"
            class="drop-zone"
            @drop="onDrop2($event, 2)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
                v-for="item in getList2(2)" 
                :key="item.id" 
                class="drag-el" 
                draggable="true" 
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>

        <p>en nuestro organismo. A esta última se la conoce como la hormona encargada de vigilar nuestro ciclo de sueño. Todo esto ocurre cuando miramos alguna pantalla por la noche, causandonos dificultades de sueño, a esto se le llama</p>
        <div 
            id="4"
            class="drop-zone"
            @drop="onDrop2($event, 4)"
            @dragenter.prevent
            @dragover.prevent
        >
            <div 
                v-for="item in getList2(4)" 
                :key="item.id" 
                class="drag-el" 
                draggable="true" 
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>
        <button id="comprobar_level1.2" class="buttonQuestion" style="margin: auto;" @click="verification1_2();">Comprobar</button>
        <a id="popup1_link" class="button" href="#popup1" style="padding: 10px; margin: auto; display: none;" type="button">NEXT</a>

        
        <!-- <Popup_1 
			v-if="popupTriggers.buttonTrigger" 
			:togglePopup="() => togglePopup('buttonTrigger')">
			<h2>¿Qué es el insomnio tecnológico?</h2>
            <p>El insomnio tecnológico es una nueva enfermedad emergente que se basa en la dificultad</p>
		</Popup_1> -->
    </div>
    <p id="gap" style="color: red; padding-top: 20px; display: none"><strong>Debes rellenar todos los huecos</strong></p>
    <div id="popup1" class="overlay">
        <div class="popup">
            <h2>¿Qué es el insomnio tecnológico?</h2>
            <div class="content">
                <p>El <strong>insomnio tecnológico</strong> es una nueva enfermedad emergente que se basa en la dificultad para iniciar y mantener el sueño debido al uso excesivo e inadecuado de las nuevas tecnologías.</p>

                <p>Nuestro organismo tiene un <strong>“reloj biológico”</strong> principal que se encarga de regular el sueño. Este reloj está formado por células del cerebro que se comunican por impulsos eléctricos y controla los llamados ritmos circadianos.</p>

                    <p>Los <strong>ritmos circadianos</strong> son una serie de cambios tanto físicos como psíquicos que siguen un ciclo de veinticuatro horas. Están directamente relacionados con la luz y la oscuridad. Cuando está brillante afuera, nos volvemos más alerta. Cuando oscurece, el cuerpo produce una hormona llamada <strong>melatonina</strong> que induce el sueño.</p>

                        <p>Las pantallas de los aparatos electrónicos emiten la conocida <strong>luz azul</strong>, la cual entra por nuestra retina, impidiendo la liberación de melatonina y provocando de esta manera dificultades de sueño. Es decir, al mirar el móvil o la tablet por la noche lo que estamos haciendo es hacer que nuestro cerebro entienda que aún es de día y por lo tanto, retrasando la melatonina, la hormona del sueño, lo que genera dificultad para dormir.</p>

                <button id="next_level1.2" class="button" href="#popup1" style="margin: auto;" type="button" @click="setLevel1(); setLevel2()">NEXT</button>
            </div>
        </div>
    </div>
</template>


<script>
    import { ref } from 'vue'
    
    

    export default{
        setup() {
            const items1 = ref([
                { id: 10, title: 'luz azul', list: 11},
                { id: 11, title: 'insomnio', list: 11},
                { id: 12, title: 'melatonina', list: 11},
                { id: 13, title: 'ritmo circadiano', list: 11},
                { id: 14, title: 'trastorno', list: 11},
                { id: 15, title: 'enfermedad', list: 11},
            ])
            const items2 = ref([
                { id: 0, title: 'luz azul', list: 1},
                { id: 1, title: 'insomnio', list: 1},
                { id: 2, title: 'melatonina', list: 1},
                { id: 3, title: 'ritmo circadiano', list: 1},
                { id: 4, title: 'insomnio tecnológico', list: 1},
            ])
            
            /*Li passem el valor i em retorna la llista*/
            const getList1 = (list) => {
                return items1.value.filter((item) => item.list == list)
            }

            const getList2 = (list) => {
                return items2.value.filter((item) => item.list == list)
            }

            const startDrag = (event, item) => {
                console.log(item)
                event.dataTransfer.dropEffect = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('itemID', item.id)
            }
            const onDrop1 = (event, list) => {
                const itemID = event.dataTransfer.getData('itemID')
                var item = null;
                if(getList1(list).length < 1 || list == 11){
                  item = items1.value.find((item) => item.id == itemID);
                  item.list = list;
                }                  
            }
            const onDrop2 = (event, list) => {
                const itemID = event.dataTransfer.getData('itemID')
                var item = null;
                /* si la lista está vacia o ya tiene un elemento: */
                if(getList2(list).length < 1 || list == 1){
                  item = items2.value.find((item) => item.id == itemID);
                  item.list = list;
                }                  
            }

            return {
                getList1,
                getList2,
                onDrop1,
                onDrop2,
                startDrag,
            }
        },
        methods: {
            verification1_1: function(){
            var correctAns = 0;
            var wrongAns = 0;
            /*Si cap de les llistes està buida*/
            if(this.getList1(12).length != 0 && this.getList1(13).length != 0){
                if(this.getList1(13)[0].id == 11){
                    document.getElementById(13).children[0].classList.add('right')
                    correctAns += 1

                }else{
                    document.getElementById(13).children[0].classList.add('wrong')
                    wrongAns += 1
                }
            
                if(this.getList1(12)[0].id == 14){
                    document.getElementById(12).children[0].classList.add('right')
                    correctAns += 1

                }else{
                    document.getElementById(12).children[0].classList.add('wrong')
                    wrongAns += 1
                }
                this.nextLevel('comprobar_level1.1', 'next_level1.1')
                document.getElementById('gap').style.display="none"
                this.$store.commit('setCorrectAnswers', correctAns)
                this.$store.commit('setWrongAnswers', wrongAns)
            }
            else{
                document.getElementById('gap').style.display="block"
            }
          },

          verification1_2: function(){
            var correctAns = 0;
            var wrongAns = 0;
            if(this.getList2(2).length != 0 && this.getList2(3).length != 0 && this.getList2(4).length != 0){
                if(this.getList2(3)[0].id == 0){
                    document.getElementById(3).children[0].classList.add('right')
                    correctAns += 1

                }else{
                    document.getElementById(3).children[0].classList.add('wrong')
                    wrongAns += 1
                }

                if(this.getList2(2)[0].id == 2){
                    document.getElementById(2).children[0].classList.add('right')
                    correctAns += 1

                }else{
                    document.getElementById(2).children[0].classList.add('wrong')
                    wrongAns += 1
                }
                if(this.getList2(4)[0].id == 4){
                    document.getElementById(4).children[0].classList.add('right')
                    correctAns += 1

                }else{
                    document.getElementById(4).children[0].classList.add('wrong')
                    wrongAns += 1
                }
                this.nextLevel('comprobar_level1.2', 'popup1_link')
                document.getElementById('gap').style.display="none"
                this.$store.commit('setCorrectAnswers', correctAns)
                this.$store.commit('setWrongAnswers', wrongAns)
            }
            else{
                document.getElementById('gap').style.display="block"
            }
          },

          nextLevel: function(id, nextId){
            document.getElementById(id).style.display="none"
            document.getElementById(nextId).style.display="block"
          },

          setLevel2: function(){
            this.$store.commit('setLevel2', !this.$store.getters.getLevel2)
          },
          setLevel1: function(){
            this.$store.commit('setLevel1', !this.$store.getters.getLevel1)
          },
        }
    }

</script>
