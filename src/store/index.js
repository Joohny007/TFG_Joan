import { createStore } from 'vuex'

export default createStore({

    state: {
        preForm: [],
        startForm: true,
        startGame: false,
        level1: false,
        level2: false,
        level3: false,
        ID: 0,
        testMode: true,
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
        getID: state =>{
            return state.ID
        },
        getTestMode: state =>{
            return state.testMode
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
        
        setID(state, ID){
            state.ID = ID;
        },
    }
})