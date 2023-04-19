<template>
    <div class="general-box rounded">
        <div class="col-md-8 shadow rounded px-5 py-4 bg-light">
            🧡<h1>¡Muchas gracias por jugar!</h1>🧡
            <div>
                <img class="rounded" v-bind:src="require('../images/minions-heart.gif')" alt="" style="width: 30%">
                <p>{{this.$store.getters.getCorrectAnswers}}, {{this.$store.getters.getWrongAnswers}}</p>
            </div>
        </div>
    </div>
</template>