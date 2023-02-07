<template>
    <!-- <p draggable="true">Este es un item que puedo arrastrar</p>  -->
    <p>Cuando revisamos el movil de noche, la luz de nuestras pantallas emite una radiación conocida como </p>
    <div 
        class="drop-zone"
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
    <p>, la cual inhibe la liberación de </p>
    <div 
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
</template>
<script>
    import { ref } from 'vue'
    export default{
        setup() {
            const items = ref([
                { id: 0, title: 'luz azul', list: 1},
                { id: 1, title: 'insomnio', list: 1},
                { id: 2, title: 'melatonina', list: 2},
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
                const item = items.value.find((item) => item.id == itemID)
                item.list = list
            }

            return {
                getList,
                onDrop,
                startDrag,
            }
        }
    }

</script>