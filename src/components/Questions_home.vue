<template>
    
  <div id="introform" class="general-box rounded">
    <div class="col-md-8 shadow rounded px-5 py-4 bg-light">
      <h1 class="">¡BIENVENIDOS A MI TRABAJO!</h1>
      <p>Mi nombre es Joan y este minijuego que estás viendo es la parte práctica de mi trabajo final de carrera.
        Por este motivo os agradezco mucho vuestro tiempo y esfuerzo en darle un par de minutos a este juego cortito.
      </p>
      <p>A continuación os aparecerá un test muy corto en el que podéis responder con total sinceridad, vuestras respuestas son <strong>anónimas</strong>.</p>
      <p>Grácias de antemano!😁</p>
      <p><span style="color: red; font-size:xx-large; padding: 10px;">&#9888;</span>Por cierto, este es tu ID <strong style="font-size: xx-large;">{{this.$store.getters.getID}}</strong>, RECUERDALO porque al final lo necesitarás<span style="color: red; font-size:xx-large; padding: 10px;">&#9888;</span></p>
      <button class="button-62" style="margin: auto;" type="button" @click="nextQuestion('introform', 'startform'); /*skipForm('none', 'skip')*/">NEXT</button>
    </div>
  </div>
      
      <button id="skip" v-if="this.$store.getters.getTestMode" class="button-62" style="margin: auto; display: none;" type="button" @click="setStartForm(); setStartGame(); skipForm('skip', 'none')">SKIP</button>
      <form style>
        <div id="startform" class="general-box rounded" style="display:none">
          <div class="col-md-4 shadow rounded px-5 py-4 bg-light">
            <h1 class="text-center" style="padding-bottom: 10px;">Cuestionario Inicial</h1>
            
            <div id="genero" class="formRadio radioText">
              <h5>¿Con qué género te identificas?</h5>
              <input type="radio" id="mujer" name="genero" value="mujer" required>
              <label for="mujer">Mujer</label>
              <input type="radio" id="hombre" name="genero" value="hombre">
              <label for="hombre">Hombre</label>
              <input type="radio" id="otro" name="genero" value="otro">
              <label for="otro">Otro</label>
              <button class="button-62 mg-3" style="margin: auto;" type="button" @click="nextQuestion('genero', 'edad')">NEXT</button>
            </div>

            <div id="edad" style="display:none">
              <div class="formRadio radioText">
                <h5>Qué edad tienes?</h5>
                <input type="radio" id="rango1" name="edad" value="De 10 a 13" required>
                <label for="rango1">De 10 a 13</label>
                <input type="radio" id="rango2" name="edad" value="De 14 a 17">
                <label for="rango2">De 14 a 17</label>
                <input type="radio" id="rango3" name="edad" value="Más de 18">
                <label for="rango3">Más de 18</label>
                <button class="button-62 mg-3" style="margin: auto;" type="button" @click="nextQuestion('edad', 'question1')">NEXT</button>
              </div>
            </div>

            <div id="question1" style="display:none">
              <div class="formRadio radioText">
                <h5>¿Cuántas horas pasas al día con el móvil/tablet?</h5>
                <input type="radio" id="1.1" name="question1" value="Menos de 1 hora" required>
                <label for="1.1">Menos de 1 hora</label>
                <input type="radio" id="1.2" name="question1" value="Entre 1 y 3 horas">
                <label for="1.2">Entre 1 y 3 horas</label>
                <input type="radio" id="1.3" name="question1" value="Más de 3 horas">
                <label for="1.3">Más de 3 horas</label>
                <button class="button-62 mg-3" style="margin: auto;" type="button" @click="nextQuestion('question1', 'question2')">NEXT</button>
              </div>
            </div>

            <div id="question2" style="display:none">
              <div class="formRadio radioText">
                <h5>¿Sueles irte a la cama con el móvil/tablet?</h5>
                <input type="radio" id="2.1" name="question2" value="Sí" required>
                <label for="2.1">Sí</label>
                <input type="radio" id="2.2" name="question2" value="No">
                <label for="2.2">No</label>
                <button class="button-62 mg-3" style="margin: auto;" type="button" @click="nextQuestion('question2', 'question3')">NEXT</button>
              </div>
            </div>

            <div id="question3" style="display:none">
              <div class="formRadio radioText">
                <h5>¿Qué tipo de aplicaciones sueles utilizar antes de irte a dormir?</h5>
                <p>(Puedes marcar varias respuestas)</p>
                <div>
                  <label for="3.1" class="form-control1" >
                    <input type="checkbox" id="3.1" name="question3" value="Redes sociales (Whatsapp/Instagram/Youtube/Tiktok/etc…)" required>Redes sociales (Whatsapp/Instagram/Youtube/Tiktok/etc…)
                  </label>
                  <label for="3.2" class="form-control1" >
                    <input type="checkbox" id="3.2" name="question3" value="Series o películas en Netflix/HBO/Amazon Video/etc…">Series o películas en Netflix/HBO/Amazon Video/etc…
                  </label>
                  <label for="3.3" class="form-control1" >
                    <input type="checkbox" id="3.3" name="question3" value="Videojuegos">Videojuegos
                  </label>
                  <label for="3.4" class="form-control1" >
                    <input type="checkbox" id="3.4" name="question3" value="Escuchar musica">Escuchar musica
                  </label>
                  <label for="3.5" class="form-control1" >
                    <input type="checkbox" id="3.5" name="question3" value="Leer noticias/artículos para actualizarte sobre la actualidad">Leer noticias/artículos para actualizarte sobre la actualidad
                  </label>
                  <label for="3.6" class="form-control1" ><input type="checkbox" id="3.6" name="question3" value="Otras">Otras</label>
                </div>
                <button class="button-62 mg-3" style="margin: auto;" type="button" @click="nextQuestion('question3', 'question4')">NEXT</button>
              </div>
            </div>
            
            <div id="question4" style="display:none">
              <div class="formRadio radioText">
                <h5>¿Cuánto rato pasas con el móvil/tablet en la cama antes de irte a dormir?</h5>
                <input type="radio" id="4.1" name="question4" value="Menos de 1 hora" required>
                <label for="4.1">Menos de 1 hora</label>
                <input type="radio" id="4.2" name="question4" value="Entre 1 y 2 horas">
                <label for="4.2">Entre 1 y 2 horas</label>
                <input type="radio" id="4.3" name="question4" value="Más de 2 horas">
                <label for="4.3">Más de 2 horas</label>
                <button class="button-62 mg-3" style="margin: auto;" type="button" @click="nextQuestion('question4', 'ultima')">NEXT</button>
              </div>
            </div>

            <div id="ultima" style="display:none">
              <div class="formRadio radioText">
                <h5>¿Alguna vez te ha ocurrido que no puedes dormir y te has puesto a utilizar el móvil/tablet?</h5>
                <input type="radio" id="ultima.1" name="ultima" value="Sí" required>
                <label for="ultima.1">Sí</label>
                <input type="radio" id="ultima.2" name="ultima" value="No">
                <label for="ultima.2">No</label>
                <button class="button-62 mg-3" style="margin: auto;" type="button" @click="nextQuestion('ultima','send'); setStartForm(); setStartGame()">NEXT</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      
      
      <!-- <div id="p2" class="red-square "  style="width:200px; height: 200px; background-color: tomato; display:none"></div> -->
    <!-- </div>
  </div> -->
</template>
  
  <script>
  import emailjs from 'emailjs-com'
  export default {
    name: 'Questions_home',
    methods: {
      nextQuestion: function(id, nextId){
        if(nextId == 'startform'){
          setTimeout(() => {
              document.getElementById(id).style.display = 'none';
              document.getElementById(nextId).style.display = 'flex';
            }, 500);
        }
        if(nextId == 'send' && document.querySelector('input[type=radio][name='+id+']:checked')){
          this.saveForm();
        } else if(document.querySelector('input[type=radio][name='+id+']:checked') || document.querySelector('input[type=checkbox][name='+id+']:checked')){
          if(document.getElementById(nextId)){
            setTimeout(() => {
                document.getElementById(nextId).style.display = 'flex';
            }, 500);
            
          }
          if(document.getElementById(id)){
            setTimeout(() => {
                document.getElementById(id).style.display = 'none';
            }, 500);
              
          }
        }
      },
      setStartForm: function(){
        this.$store.commit('setStartForm', !this.$store.getters.getStartForm)
      },
      setStartGame: function(){
        this.$store.commit('setStartGame', !this.$store.getters.getStartGame)
      },
      sendEmail() {
        var templateParams = {
            name: this.$store.getters.getID,
            message: JSON.stringify(this.$store.getters.getPreForm)
        };  
        try {
            emailjs.send('service_79eh769','template_eo3q8ne', templateParams, 'LJ18S2FIl99pGUONf')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
            }, function(error) {
                console.log('FAILED...', error);
            });
        } catch(error) {
            console.log({error})
        }
    },
    saveForm: function(){
      var genero = document.querySelector('input[type=radio][name=genero]:checked').value;
      var edad = document.querySelector('input[type=radio][name=edad]:checked').value;
      var question1 = document.querySelector('input[type=radio][name=question1]:checked').value;
      var question2 = document.querySelector('input[type=radio][name=question2]:checked').value;
      var question3 = [];
        var checkboxes = document.querySelectorAll('input[type=checkbox][name=question3]:checked');
        if (checkboxes.length > 0) {
          for (var i = 0; i < checkboxes.length; i++) {
            question3.push(checkboxes[i].value);
          }
        }
      var question4= document.querySelector('input[type=radio][name=question4]:checked').value;
      var ultima= document.querySelector('input[type=radio][name=ultima]:checked').value;
      var preForm = [genero, edad, question1, question2, question3, question4, ultima];
      console.log(preForm);
      this.$store.commit('setPreForm', preForm);
      this.sendEmail()
    },
    skipForm: function(id, nextId) {
      if(id == 'none'){
        setTimeout(() => {
          document.getElementById(nextId).style.display = 'block';
        }, 500);
      }
      else{
        document.getElementById(id).style.display = 'none';
      }
    }

  }
  }
  </script>
  
  <style scoped>
  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }

  .form-control1{
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    padding: 10px;
  }


  input[type="checkbox"] {
    display: grid;
    place-content: center;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    color: black;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
  }
  .form-control1 + .form-control1 {
    margin-top: 1em;
  }
  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #FBAB7E; /* Fondo del checkbox */
    border-radius: 0.15em;
  }
  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
  input[type="checkbox"]:hover {
    box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
  }

  
  </style>
  <!-- <h1>Questionari prueba</h1>
    <div id="form_box">
        <p>A que hora es mejor irse a dormir?</p>
        <button id="answer1">21:00</button>
        <button id="answer2">22:00</button>
        <button id="answer3">3:00</button>
    </div> -->