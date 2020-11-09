import { createStore } from "vuex";
import axios from "axios";
import BACKENDURL from "@/globalvariables";

export default createStore({
  state: {
    user: null,
    projects: [],
    categories: [],
    userProjects: null,
  },
  getters: {
    allProjects: (state) => state.projects,
    allCategories: (state) => state.categories,
    myProjects: (state) => state.userProjects,
    user: (state) => state.user,
  },
  mutations: {
    logout: (state) => (state.user = null),
    setUser: (state, user) => {
      console.log(user)
      state.user = user
    },
    setProjects: (state, projects) => (state.projects = projects),
    addProject: (state, project) => state.projects.push(project),
    setCategories: (state, categories) => (state.categories = categories),
    setUserProjects: (state, userProjects) =>
      (state.userProjects = userProjects),
  },
  actions: {
    // async login({ commit }, details) {

    //   const response = await axios.post(BACKENDURL + "accounts/login/", details)
    //     .catch((error) => {

    //       if (error.response.status == 400) {
    //         this.passworderrors = "Email or password is incorrect";
    //         throw "Email or password is incorrect";
    //       }
    //       if (error.response.status == 403) throw "Maximum devices reached";
    //     });
    // },

    async logout({ commit }) {

      const sth = Object

      await axios
        .post(`${BACKENDURL}accounts/logout/`, sth, {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Token ${this.state.user.token}`
          },
        })
        .then((res) => {

          console.log(`then: ${res}`)
          localStorage.removeItem("user-detail")
          commit("logout")

        }

        )
        .catch((error) => {
          console.log(error.response.data.detail);
        });
    },
    async fetchProjects({ commit }) {
      const response = await axios
        .get(BACKENDURL + "/api/projects/")
        .catch((error) => {
          console.log(error);
        });
      commit("setProjects", response.data);
      return response.data;
    },

    async userProjects({ commit }) {
      var user = localStorage.getItem("user-detail");
      user = JSON.parse(user);
      const response = await axios
        .post(
          `${BACKENDURL}/api/my_projects/`,
          { user_id: 7 },
          { headers: { Authorization: `Token ${user.token}` } }
        )
        .then((response) => commit("setUserProjects", response.data))
        .catch(() => {
          console.log(response);
        });
    },

    async addProject({ commit }, newProject) {
      const response = await axios
        .post(BACKENDURL + "/api/projects/", newProject)
        .catch((error) => {
          console.log(error);
        });
      commit("addProject", response.data);
      return response.data;
    },
    async fetchCategories({ commit }) {
      const token = localStorage.getItem("user-token");
      const response = await axios
        .get(BACKENDURL + "/api/categories/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .catch((error) => {
          console.log(error);
        });
      commit("setCategories", response.data);
      return response.data;
    },
  },

  modules: {},
});
