import { createStore } from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import db from '@/firebase'
import axios from 'axios'
export default createStore({
  state: {
    tenders: [],
    todos: []

  },
  getters: {
    allTenders: (state) => state.tenders,
    allTodos: (state) => state.todos

  },
  mutations: {
    ...vuexfireMutations,
    setTodos: (state, todos) => state.todos = todos,
    pushTender: (state, tender) => state.tenders.push(tender)
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response.data);
      commit('setTodos', response.data)
    },

    addTender({ commit }, tender) {
      commit('pushTender', tender)
      return (this.state.tenders)
    },

    bindTenders: firestoreAction(({ bindFirestoreRef }) => {

      return bindFirestoreRef('tenders', db.collection('tenders'))
    }),

    // unbindTenders: firestoreAction(({ unbindFirestoreRef }) => {
    //   unbindFirestoreRef('tenders')
    // })
  },
  modules: {
  }
})
