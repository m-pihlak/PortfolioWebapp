import * as texts from '@/assets/text/texts.json'

const textModule = {
    state: {
        texts: {}
    },
    getters: {
      getText: (state) => (name) => {
        console.log(name)
        console.log(state.texts[name])
        return state.texts[name].sections;
      }
    },
    mutations: {
      updateTexts(state) {
        state.texts = texts.default
      }
    },
    actions: {
      updateTexts ({ commit }) {
        commit('updateTexts')
      }
    }
}

export default textModule;