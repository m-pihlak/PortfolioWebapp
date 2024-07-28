const gameModule = {
    state: {
      highScore: 0
    },
    getters: {
      getHighScore(state) {
        return state.highScore;
      }
    },
    mutations: {
      updateHighScore(state, payload) {
        state.highScore = state.highScore < payload.score ? payload.score : state.highScore
      }
    },
    actions: {
      updateHighScore ({ commit }, payload) {
        commit('updateHighScore', payload)
      }
    }
}

export default gameModule;