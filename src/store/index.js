import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

const routeModule = {
  state: {
    routeIndex: 0
  },
  getters: {
    getBack(state) {
      var backIndex = state.routeIndex - 1
      if (backIndex < 0)
        backIndex = router.options.routes.length - 1
      return router.options.routes[backIndex]
    },
    getForward(state) {
      var forwardIndex = state.routeIndex + 1
      if (forwardIndex > router.options.routes.length - 1)
        forwardIndex = 0
      return router.options.routes[forwardIndex]
    }
  },
  mutations: {
    updateRouteIndex(state, payload) {
      const length = router.options.routes.length
      for(let i = 0; i < length; i++) {
        if (router.options.routes[i].path == payload?.path) {
          state.routeIndex = i
          break
        }
      }
    }
  },
  actions: {
    updateRouteIndex ({ commit }, payload) {
      commit('updateRouteIndex', payload)
    }
  }
}


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
    routeModule: routeModule
  }
})
