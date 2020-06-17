import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        personInfo: []
    },
    getters: {},
    mutations: {
        getData(state, data) {
            state.personInfo.push(data);
        }
    },
    actions: {}
})