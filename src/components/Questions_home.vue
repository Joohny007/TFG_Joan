<template>
   <div id="introform">
        <p>Hola {{msgJuan}} my name is Joan and I want to introduce you to my TFG 😁</p>
        <button class="" style="margin: auto;" type="button" @click="nextQuestion('introform', 'startform')">NEXT</button>
    </div>

  <form style>
    <div id="startform" style="display:none">
      <h1 class="text-center text-primary">Cuestionario Inicial</h1>
      <div id="genero" class="formRadio radioText">
        <h5>¿Con qué género te identificas?</h5>
        <input type="radio" id="mujer" name="genero" value="mujer" required>
        <label for="mujer">Mujer</label>
        <input type="radio" id="hombre" name="genero" value="hombre">
        <label for="hombre">Hombre</label>
        <input type="radio" id="otro" name="genero" value="otro">
        <label for="otro">Otro</label>
        <button class="buttonQuestion" style="margin: auto;" type="button" @click="nextQuestion('genero', 'edad')">NEXT</button>
      </div>
    </div>

    <div id="edad" class="formRadio radioText" style="display:none">
      <h5>Qué edad tienes?</h5>
      <input type="radio" id="rango1" name="edad" value="De 10 a 13" required>
      <label for="rango1">De 10 a 13</label>
      <input type="radio" id="rango2" name="edad" value="De 14 a 17">
      <label for="rango2">De 14 a 17</label>
      <input type="radio" id="rango3" name="edad" value="Más de 18">
      <label for="rango3">Más de 18</label>
      <button class="buttonQuestion" style="margin: auto;" type="button" @click="nextQuestion('edad', 'horas_diarias')">NEXT</button>
    </div>

    <div id="horas_diarias" class="formRadio radioText" style="display:none">
      <h5>¿Cuántas horas pasas al día con el móvil/tablet?</h5>
      <input type="radio" id="rango1" name="horas_diarias" value="Menos de 1 hora" required>
      <label for="rango1">Menos de 1 hora</label>
      <input type="radio" id="rango2" name="horas_diarias" value="Entre 1 y 3 horas">
      <label for="rango2">Entre 1 y 3 horas</label>
      <input type="radio" id="rango3" name="horas_diarias" value="Más de 3 horas">
      <label for="rango3">Más de 3 horas</label>
      <button class="buttonQuestion" style="margin: auto;" type="button" @click="nextQuestion('horas_diarias', 'cama')">NEXT</button>
    </div>

    <div id="cama" class="formRadio radioText" style="display:none">
      <h5>¿Sueles irte a la cama con el móvil/tablet?</h5>
      <input type="radio" id="mujer" name="cama" value="mujer" required>
      <label for="si">Sí</label>
      <input type="radio" id="hombre" name="cama" value="hombre">
      <label for="no">No</label>
      <button class="buttonQuestion" style="margin: auto;" type="button" @click="nextQuestion('cama', 'aplicaciones')">NEXT</button>
    </div>

    <div id="aplicaciones" class="formRadio radioText" style="display:none">
      <h5>¿Qué tipo de aplicaciones sueles utilizar antes de irte a dormir?</h5>
      <input type="radio" id="mujer" name="aplicaciones" value="mujer" required>
      <label for="mujer">Redes sociales (Whatsapp/Instagram/Youtube/Tiktok/etc…)</label>
      <input type="radio" id="hombre" name="aplicaciones" value="hombre">
      <label for="hombre">Series o películas en Netflix/HBO/Amazon Video/etc…</label>
      <input type="radio" id="otro" name="aplicaciones" value="otro">
      <label for="otro">Videojuegos</label>
      <input type="radio" id="otro" name="aplicaciones" value="otro">
      <label for="otro">Escuchar musica</label>
      <input type="radio" id="otro" name="aplicaciones" value="otro">
      <label for="otro">Leer noticias/artículos para actualizarte sobre la actualidad</label>
      <input type="radio" id="otro" name="aplicaciones" value="otro">
      <label for="otro">Otras</label>
      <button class="buttonQuestion" style="margin: auto;" type="button" @click="nextQuestion('aplicaciones', 'horas_cama')">NEXT</button>
    </div>
    
    <div id="horas_cama" class="formRadio radioText" style="display:none">
      <h5>¿Cuánto rato pasas con el móvil/tablet en la cama antes de irte a dormir?</h5>
      <input type="radio" id="mujer" name="horas_cama" value="mujer" required>
      <label for="mujer">Menos de 1 hora</label>
      <input type="radio" id="hombre" name="horas_cama" value="hombre">
      <label for="hombre">Entre 1 y 2 horas</label>
      <input type="radio" id="otro" name="horas_cama" value="otro">
      <label for="otro">Más de 2 horas</label>
      <button class="buttonQuestion" style="margin: auto;" type="button" @click="nextQuestion('horas_cama', 'ultima')">NEXT</button>
    </div>

    <div id="ultima" class="formRadio radioText" style="display:none">
      <h5>¿Alguna vez te ha ocurrido que no puedes dormir y te has puesto a utilizar el móvil/tablet?</h5>
      <input type="radio" id="mujer" name="ultima" value="mujer" required>
      <label for="mujer">Sí</label>
      <input type="radio" id="hombre" name="ultima" value="hombre">
      <label for="hombre">No</label>
      <button class="buttonQuestion" style="margin: auto;" type="button" @click="setStartForm(); setStartGame()">NEXT</button>
    </div>
  </form>

  
  
  <div id="p2" class="red-square "  style="width:200px; height: 200px; background-color: tomato; display:none"></div>

  
  
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
    nextQuestion: function(id, nextId){
      document.getElementById(id).style.display="none"
      document.getElementById(nextId).style.display="block"
    },
    setStartForm: function(){
      this.$store.commit('setStartForm', !this.$store.getters.getStartForm)
    },
    setStartGame: function(){
      this.$store.commit('setStartGame', !this.$store.getters.getStartGame)
    },
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