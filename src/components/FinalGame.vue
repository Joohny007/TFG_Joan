<template>
    <div class="general-box rounded">
        <div class="col-md-8 shadow rounded px-5 py-4 bg-light">
            🧡<h1>¡Muchas grácias por jugar!</h1>🧡
            <p>Has hecho un total de <strong>{{this.$store.getters.getCorrectAnswers}}</strong> aciertos y un total de <strong>{{this.$store.getters.getWrongAnswers}}</strong> fallos cometidos.</p>
            <p>Para acabar necesitaría que rellenaras este formulario con tu ID ( <strong style="font-size: xx-large;">{{this.$store.getters.getID}}</strong> ) en el que no tardarás más de 5 minutos en completarlo <a href="https://forms.gle/dYxKihLmUwGcXjH7A">https://forms.gle/dYxKihLmUwGcXjH7A</a>.</p>
            <div style="padding: 10px;">
                <img class="rounded" v-bind:src="require('../images/minions-heart.gif')" alt="" style="width: 30%">
            </div>
        </div>
    </div>
</template>