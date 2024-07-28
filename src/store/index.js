import Vue from 'vue'
import Vuex from 'vuex'
import routeModule from './routeModule'
import gameModule from './gameModule'
import textModule from './textModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    routeModule: routeModule,
    gameModule: gameModule,
    textModule: textModule
  }
})
