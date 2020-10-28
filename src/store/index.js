import { createStore } from 'vuex'
import axios from 'axios'

const Testing = 'http://127.0.0.1:8000/api/';
const BACKENDURL = Testing;

// const pythonanywhere = 'https://vincentkarani.pythonanywhere.com/api/';
// const BACKENDURL = pythonanywhere;


export default createStore({
  state: {
    projects: [],
    categories: []
  },
  getters: {
    allProjects: (state) => state.projects,
    allCategories: (state) => state.categories,

  },
  mutations: {
    setProjects: (state, projects) => state.projects = projects,
    addProject: (state, project) => state.projects.push(project),
    setCategories: (state, categories) => state.categories = categories,

  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get(BACKENDURL + 'projects/')
        .catch((error) => {
          console.log(error)
        })
      commit('setProjects', response.data)
      return response.data
    },

    async addProject({ commit }, newProject) {
      const response = await axios.post(BACKENDURL + 'projects/', newProject)
        .catch((error) => {
          console.log(error)
        })
      commit('addProject', response.data)
      return response.data
    },
    async fetchCategories({ commit }) {
      const token = localStorage.getItem('user-token')
      const response = await axios.get(BACKENDURL + 'categories/', {
        headers: {
          'Authorization': `Token ${token}`
        }
      })
        .catch((error) => {
          console.log(error)
        })
      commit('setCategories', response.data)
      return response.data
    },

  },

  modules: {
  }
})
