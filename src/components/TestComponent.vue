<template>
  

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
</template>