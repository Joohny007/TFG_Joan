<template>
    <h1>1r día: Qué es el insomnio tecnológico?</h1>  
    
    <div 
        class="drop-zone-initial"
        @drop="onDrop($event, 1)"
        @dragenter.prevent
        @dragover.prevent
    >
        <div 
            v-for="item in getList(1)" 
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
        @drop="onDrop($event, 3)"
        @dragenter.prevent
        @dragover.prevent
    >
        <div 
            v-for="item in getList(3)" 
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
        @drop="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
    >
        <div 
            v-for="item in getList(2)" 
            :key="item.id" 
            class="drag-el" 
            draggable="true" 
            @dragstart="startDrag($event, item)"
        >
            {{ item.title }}
        </div>
    </div>

    <p>en nuestro organismo. Esta es la hormona encargada de vigilar nuestro ciclo de sueño.</p>
    <button id="comprobar_level1" class="buttonQuestion" style="margin: auto;" @click="verification1(); nextLevel('comprobar_level1', 'next_level1')">Comprobar</button>
    <button id="next_level1" class="buttonQuestion" style="margin: auto; display: none;" type="button" @click="setLevel1(); setLevel2()">NEXT</button>
</template>


<script>
    import { ref } from 'vue'
    export default{
        setup() {
            const items = ref([
                { id: 0, title: 'luz azul', list: 1},
                { id: 1, title: 'insomnio', list: 1},
                { id: 2, title: 'melatonina', list: 1},
            ])

            const getList = (list) => {
                return items.value.filter((item) => item.list == list)
            }

            const startDrag = (event, item) => {
                console.log(item)
                event.dataTransfer.dropEffect = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('itemID', item.id)
            }

            const onDrop = (event, list) => {
                const itemID = event.dataTransfer.getData('itemID')
                var item = null;
                if(getList(list).length < 1 || list == 1){
                  item = items.value.find((item) => item.id == itemID);
                  item.list = list;
                }                  
            }

            return {
                getList,
                onDrop,
                startDrag,
            }
        },
        methods: {
          verification1: function(){
            if(this.getList(3)[0].id == 0){
              document.getElementById(3).children[0].classList.add('right')

            }else{
              document.getElementById(3).children[0].classList.add('wrong')
            }

            if(this.getList(2)[0].id == 2){
              document.getElementById(2).children[0].classList.add('right')

            }else{
              document.getElementById(2).children[0].classList.add('wrong')
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