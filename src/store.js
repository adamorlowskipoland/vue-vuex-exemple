import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vuex Short Exemple',
    links: [
      'http://google.com',
      'http://maps.google.com',
      'http://translate.google.com'
    ]
  },
  getters: {
    // countLinks: state => {
    //   return state.links.length
    // }
    countLinks (state) {
      return state.links.length
    }
  },
  mutations: {
    // ADD_LINK: (state, link) => {
    //   state.links.push(link)
    // },
    ADD_LINK (state, link) {
      state.links.push(link)
    }
  },
  actions: {

  }
})
