import { createStore } from 'vuex'

export default createStore({

    state: {
        startForm: true,
        startGame: false,
        level1: false,
        level2: false,
    },
    getters: {
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
    },
    mutations: {

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
        
    }
})