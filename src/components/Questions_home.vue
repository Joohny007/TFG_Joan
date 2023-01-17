<template>
  <div id="p1" class="blue-square "  style="width:200px; height: 200px; background-color: aqua;"></div>
  <div id="p2" class="red-square "  style="width:200px; height: 200px; background-color: tomato; display:none"></div>
  <button type="button" @click="nextQuestion()">PEGAME</button>

  
  
  <!-- <form id="form_box">
    <div class="row">
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Nombre Completo <span class="text-danger">*</span></label>
        <input type="text" class="form-control form control-lg">
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Email <span class="text-danger">*</span></label>
        <input type="text" class="form-control form control-lg">
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Nombre Completo <span class="text-danger">*</span></label>
        <input type="text" class="form-control form control-lg">
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg">Nombre Completo <span class="text-danger">*</span></label>
        <input type="text" class="form-control form control-lg">
      </div>
    </div>
  </form> -->
</template>
  
  <script>
  
  export default {
    name: 'Questions_home',
    methods: {
    nextQuestion: function(){
      document.getElementById("p1").style.display="none"
      document.getElementById("p2").style.display="block"
    }
  }

  }
  </script>
  
  <style>
  
  </style>
  <!-- <h1>Questionari prueba</h1>
    <div id="form_box">
        <p>A que hora es mejor irse a dormir?</p>
        <button id="answer1">21:00</button>
        <button id="answer2">22:00</button>
        <button id="answer3">3:00</button>
    </div> -->