import { createStore } from 'vuex'

export default createStore({

    state: {
        preForm: [],
        startForm: true,
        startGame: false,
        level1: false,
        level2: false,
        level3: false,
        finalGame: false,
        testComponent: false,
        ID: 0,
        testMode: true,
        correctAnswers: 0,
        wrongAnswers: 0,
    },
    getters: {
        getPreForm: state =>{
            return state.preForm
        },
        getStartForm: state=>{
            return state.startForm;
        },

        getStartGame: state=>{
            return state.startGame;
        },

        getLevel1: state=>{
            return state.level1;
        },

        getLevel2: state=>{
            return state.level2;
        },
        getLevel3: state=>{
            return state.level3;
        },
        getFinalGame: state=>{
            return state.finalGame;
        },
        getID: state =>{
            return state.ID
        },
        getTestMode: state =>{
            return state.testMode
        },
        getCorrectAnswers: state =>{
            return state.correctAnswers
        },
        getWrongAnswers: state =>{
            return state.wrongAnswers
        },
        getTestComponent: state =>{
            return state.testComponent
        },
    },
    mutations: {
        setPreForm(state, formulary){
            state.preForm = formulary;
        },
        setStartForm(state, valor){
            state.startForm = valor;
        },
        setStartGame(state, valor){
            state.startGame = valor;
        },
        setLevel1(state, valor){
            state.level1 = valor;
        },
        setLevel2(state, valor){
            state.level2 = valor;
        },
        setLevel3(state, valor){
            state.level3 = valor;
        },
        setFinalGame(state, valor){
            state.finalGame = valor;
        },
        setID(state, ID){
            state.ID = ID;
        },
        setCorrectAnswers(state, valor){
            state.correctAnswers += valor
        },
        setWrongAnswers(state, valor){
            state.wrongAnswers += valor
        },
        setTestComponent(state, valor){
            state.testComponent = valor;
        },
    }
})