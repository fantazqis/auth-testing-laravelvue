import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        toDo: [
            {
                title: "menyapu"
            },
            {
                title: "cuci"
            }
        ]
    },
    getters: {
        getTodo(state) {
            return state.toDo
        }
    }
})