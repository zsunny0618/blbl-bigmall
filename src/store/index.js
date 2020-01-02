import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checked: {
      isShow: false
    },
    age:18
  },
  getters: {
    checked(state) {
      return JSON.parse(JSON.stringify(state.checked))
    },
    age(state){
      return state.age
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})