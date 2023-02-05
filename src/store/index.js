import { createStore } from 'vuex'

export default createStore({

    state: {
        startForm: true,
        startGame: false,
    },
    getters: {
        getStartForm: state=>{
            return state.startForm;
        },

        getStartGame: state=>{
            return state.startGame;
        },
    },
    mutations: {

        setStartForm(state, valor){
            state.startForm = valor;
        },

        setStartGame(state, valor){
            state.startGame = valor;
        },
        
    }
})