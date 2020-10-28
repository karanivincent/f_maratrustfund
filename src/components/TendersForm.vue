<template>
    <div class="w-full px-32 pt-6 pb-24">
        <Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="validationRules">
            <div class="w-full flex flex-col mb-2">
                <label for="project_name" class="block py-2 uppercase font-bold text-xs text-gray-700">name</label>
                <Field as="input" type="text" name="project_name"  placeholder="Enter name of project"
                    v-model="project.name"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white " />
                <span class=" text-red-500 text-xs italic" >{{errors.project_name}}</span>
            </div>
            <div class="w-full flex flex-col mb-2">
                <label for="project_description"
                    class="block my-1 uppercase font-bold text-xs text-gray-700 tracking-wide ">description</label>
                <Field as="textarea" name="project_description"  placeholder="Enter a short description"
                    v-model="project.description"
                    class="block appearance-none h-48 p-3 resize-none rounded outline-none bg-gray-100 text-gray-700 border focus:border-gray-500 border-gray-200 focus:bg-white "></Field>
                <span class=" text-red-500 text-xs italic" >{{errors.project_description}}</span>
            </div>
            <div>
                <label for="deadline"
                    class="block my-1 uppercase font-bold text-xs text-gray-700 tracking-wide ">Deadline</label>
                <Field as="input" type="date" name="deadline" 
                    v-model="project.closed_on"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white "/>
                <span class=" text-red-500 text-xs italic" >{{errors.deadline}}</span>
            </div>
            <div class="w-full flex flex-col mb-2">
                <label for="project_category"
                    class="block py-2 uppercase font-bold text-xs text-gray-700">Category</label>
                <Field
                    as="select"
                    
                    name="project_category"
                    
                    v-model="project.category"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white ">
                    <option v-for="(category, i) in allCategories" :key="i" :value="category.id">{{category.name}}</option>
                </Field>
                <span class=" text-red-500 text-xs italic" >{{errors.project_category}}</span>
            </div>
            <div class="w-full flex flex-col mb-2">
                <label for="project_state" class="block py-2 uppercase font-bold text-xs text-gray-700">state</label>
                 <Field
                    as="select"
                    name="project_state"
                    
                    v-model="project.state"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white ">
                    <option value="tendering" selected>Tendering</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="stalled">Stalled</option>

                </Field>
                <span class=" text-red-500 text-xs italic" >{{errors.project_state}}</span>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                    <button
                    
                        class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        Submit
                    </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
        </Form>
    </div>
</template>

<script>
import {
    Field,
    Form
} from 'vee-validate';
import * as yup from 'yup';
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        Field,
        Form,
    },
    data() {

        const validationRules = yup.object().shape({
            project_name: yup.string().required().label('Project name'),
            project_description: yup.string().required().label('Description'),
            deadline: yup.string().required().label('Deadline'),
            project_category: yup.string().required().label('Category'),
            project_state: yup.string().required().label('Project State')
  
        })
        return {
            validationRules,
            project: {
                name: '',
                description: '',
                state: '',
                category: '',
                closed_on: '',
            },
            loading: false
        };
    },
    computed: mapGetters(['allCategories']),
    methods: {
        ...mapActions(['addProject', 'fetchCategories']),
        onSubmit() {
            this.loading = true
            this.addProject(this.project)
            .then((res)=>{
                console.log(res)
            })
        }

    },
      created() {
    this.fetchCategories().then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
   
  },
};
</script>

<style></style>
