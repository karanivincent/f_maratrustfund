<template>
    <div class="parent w-full h-auto min-h-full bg-gray-100 mx-auto mt-4 pt-4 ">
        <div class="tab-card">
        <div class="flex  border-b">
            <div name="completed" class="cursor-pointer inline-block py-2  px-6  text-gray-700 "
                :class="{ 'border-b-2 text-green-600 border-green-600': focused=='completed', }"
                @click="focused='completed'">Completed</div>
            <div name="active" class="cursor-pointer px-6 py-2 text-gray-700"
                :class="{ 'border-b-2 text-green-600 border-green-600': focused=='active', }" @click="focused='active'">
                Active</div>
            <div name="applied" class="cursor-pointer px-6 py-2 text-gray-700"
                :class="{ 'border-b-2 text-green-600 border-green-600': focused=='applied', }" @click="focused='applied'">
                Applied</div>
        </div>
        <div class="tab-data">
            <div v-if="filteredProjects">
            <div v-for="(project, i) in filteredProjects" :key=i>
                <div>
                    {{project.project_name}}
                </div>
            </div>
            </div>
            <div v-else>
                You have no {{focused}} projects
            </div>


        </div>
        </div>
       
    </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return {
            focused: 'completed',
            projects: [
                {
                    type: 'completed',
                    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

                },
                                {
                    type: 'active',
                    detail: 'Architecto, perspiciatis iure voluptatibus, autem voluptatum praesentium.'

                },
                                {
                    type: 'applied',
                    detail: 'Dolorem qui ipsum ea excepturi ipsam animi repellendus neque ab cum quaerat natus officiis quas.'

                }
            ]   
        }
    },
    computed:{
        ...mapGetters(['myProjects']),
        filteredProjects(){
            var projects = null
            
            if(this.myProjects){
                if(this.focused =="applied"){
                    if(this.myProjects.applications){
                        projects = this.myProjects.applications.filter(function(element){
                            return element.approved ===false
                        })
                    }else return null
                    
                } else if(this.focused=="completed"){
                    if(this.myProjects.contracts){
                        projects = this.myProjects.contracts.filter(function(element){
                            return element.completed ===true
                        })

                    }else return null
                } else{
                    if(this.myProjects.contracts){
                        projects = this.myProjects.contracts.filter(function(element){
                            return element.completed ===false
                        })

                    }else return null
                }
                

            }else  return null

            return projects

        },
        tabData(){
            const focused = this.focused

            var data= this.projects.filter(function(element){
                return element.type===focused
            })

            return data
        }
    },
    methods:{
        ...mapActions(['userProjects']),
        kafunction(){
            console.log(this.myProjects)
        }

    },
    created(){
        this.userProjects()
    }
}    




</script>

<style>

</style>