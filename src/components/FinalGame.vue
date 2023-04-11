<template>
    <div>
        {{this.$store.getters.getCorrectAnswers}},
        {{this.$store.getters.getWrongAnswers}}
    </div>
</template>