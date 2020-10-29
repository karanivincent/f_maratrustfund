<template>
<div class="parent w-full h-auto min-h-full bg-gray-100 mx-auto mt-4 pt-4 ">
    <div class="card">
        <div class="card-title text-lg font-semibold text-green-600 px-2">
          <h1>
            {{project.name}}
          </h1>

        </div>
        <div class="card-body ">
          <div class=" text-gray-700 px-2">
          {{project.description}}

          </div>
          <div class="text-gray-500 flex flex-row justify-between px-2">
            <div>
            {{project.opened_on}}

            </div>
            <div>
            {{project.closed_on}}

            </div>
          </div>
          <div class="flex justify-end pr-4 py-2">
        <button @click="onApply"
        class=" font-semibold text-sm text-green-600 rounded border border-green-600 focus:outline-none  hover:bg-green-600 hover:text-gray-100  hover:shadow-inner py-1 px-2 ">
Apply
        </button>
          </div>

        </div>



    </div>
</div>
  
</template>

<script>
import {  mapGetters } from 'vuex'
import store from '@/store'
import axios from 'axios'
import BACKENDURL from '@/globalvariables'
export default {

    beforeRouteEnter(to, from, next) {
    if (to.params.id && store.state.projects.length) next();
    else next({ name: "Projects" });
  },

  data(){
    return {
      projectId: null,
    }

  },
    methods:{
      onApply(){
        var user = localStorage.getItem('user-detail')
        user = JSON.parse(user)
        console.log(user)

        const application = {
          project: this.project.id, 
          user: user.user.id
        }
        let axiosConfig = {
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Token ${user.token}`,
            }
        }
        console.log(application)
        axios.post(`${BACKENDURL}api/applications/`, application, axiosConfig)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
      }
    },
  
    created(){
      this.projectId = this.$route.params.id 
      console.log(this.projectId)
    },
    computed: {
    ...mapGetters(['allProjects']),
    project(){
      console.log(this.allProjects)
      const result = this.allProjects.find(({ id })=> id==this.projectId)

      return result
    }

      
 

  },

}
</script>

<style>

</style>