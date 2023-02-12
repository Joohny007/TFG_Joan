<!-- <template>
    <div class="row">
      <div class="col-2">
        <div class="form-group">
          <div
            class="btn-group-vertical buttons"
            role="group"
            aria-label="Basic example"
          >
            <button class="btn btn-secondary" @click="add">Add</button>
            <button class="btn btn-secondary" @click="replace">Replace</button>
          </div>
  
          <div class="form-check">
            <input
              id="disabled"
              type="checkbox"
              v-model="enabled"
              class="form-check-input"
            />
            <label class="form-check-label" for="disabled">DnD enabled</label>
          </div>
        </div>
      </div>
  
      <div class="col-6">
        <h3>Draggable {{ draggingInfo }}</h3>
  
        <draggable
          :list="list"
          :disabled="!enabled"
          class="list-group"
          ghost-class="ghost"
          :move="checkMove"
          @start="dragging = true"
          @end="dragging = false"
        >
          <div
            class="list-group-item"
            v-for="element in list"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
  
      <rawDisplayer class="col-3" :value="list" title="List" />
    </div>
  </template>
  
  <script>
  import draggable from "vuedraggable";
  let id = 1;
  export default {
    name: "Level_1",
    display: "Level_1",
    order: 0,
    components: {
      draggable
    },
    data() {
      return {
        enabled: true,
        list: [
          { name: "John", id: 0 },
          { name: "Joao", id: 1 },
          { name: "Jean", id: 2 }
        ],
        dragging: false
      };
    },
    computed: {
      draggingInfo() {
        return this.dragging ? "under drag" : "";
      }
    },
    methods: {
      add: function() {
        this.list.push({ name: "Juan " + id, id: id++ });
      },
      replace: function() {
        this.list = [{ name: "Edgard", id: id++ }];
      },
      checkMove: function(e) {
        window.console.log("Future index: " + e.draggedContext.futureIndex);
      }
    }
  };
  </script>
  <style scoped>
  .buttons {
    margin-top: 35px;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  </style> -->

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

    
    <p>Cuando revisamos el movil de noche, la luz de nuestras pantallas emite una radiación conocida como </p>
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
    <button @click="verification1()">Comprobar</button>
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

                
                
                /*
                const dropZone = document.getElementById("drop-zone");

                function clearDropZone() {
                  while (dropZone.firstChild) {
                    dropZone.removeChild(dropZone.firstChild);
                  }
                }*/

                  
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
          }
        }
    }

</script>