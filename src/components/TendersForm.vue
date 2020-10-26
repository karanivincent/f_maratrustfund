<template>
    <div class="w-full px-32 pt-6 pb-24">
        <Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="validationRules">
            <div class="w-full flex flex-col mb-2">
                <label for="tender_name" class="block py-2 uppercase font-bold text-xs text-gray-700">name</label>
                <Field as="input" type="text" name="tender_name"  placeholder="Enter name of tender"
                    v-model="tender.name"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white " />
                <span class=" text-red-500 text-xs italic" >{{errors.tender_name}}</span>
            </div>
            <div class="w-full flex flex-col mb-2">
                <label for="tender_description"
                    class="block my-1 uppercase font-bold text-xs text-gray-700 tracking-wide ">description</label>
                <Field as="textarea" name="tender_description"  placeholder="Enter a short description"
                    v-model="tender.description"
                    class="block appearance-none h-48 p-3 resize-none rounded outline-none bg-gray-100 text-gray-700 border focus:border-gray-500 border-gray-200 focus:bg-white "></Field>
                <span class=" text-red-500 text-xs italic" >{{errors.tender_description}}</span>
            </div>
            <div>
                <label for="deadline"
                    class="block my-1 uppercase font-bold text-xs text-gray-700 tracking-wide ">Deadline</label>
                <Field as="input" type="date" name="deadline" 
                    v-model="tender.application.closed"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white "/>
                <span class=" text-red-500 text-xs italic" >{{errors.deadline}}</span>
            </div>
            <div class="w-full flex flex-col mb-2">
                <label for="tender_category"
                    class="block py-2 uppercase font-bold text-xs text-gray-700">Category</label>
                <Field
                    as="select"
                    
                    name="tender_category"
                    
                    v-model="tender.category"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white ">
                    <option selected>category1</option>
                    <option>category2</option>
                </Field>
                <span class=" text-red-500 text-xs italic" >{{errors.tender_category}}</span>
            </div>
            <div class="w-full flex flex-col mb-2">
                <label for="tender_state" class="block py-2 uppercase font-bold text-xs text-gray-700">state</label>
                 <Field
                    as="select"
                    name="tender_state"
                    
                    v-model="tender.state"
                    class="block appearance-none p-2 rounded text-gray-700 outline-none bg-gray-100 border border-gray-200 focus:border-gray-500 focus:bg-white ">
                    <option selected>Tendering</option>
                    <option>Active</option>
                    <option>Finished</option>
                </Field>
                <span class=" text-red-500 text-xs italic" >{{errors.tender_state}}</span>
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
// import format from 'date-fns/format';
import db from '@/firebase';

export default {
    components: {
        Field,
        Form,
    },
    data() {

        const validationRules = yup.object().shape({
            tender_name: yup.string().required().label('Tender name'),
            tender_description: yup.string().required().label('Description'),
            deadline: yup.string().required().label('Deadline'),
            tender_category: yup.string().required().label('Category'),
            tender_state: yup.string().required().label('Tender State')
  
        })
        return {
            validationRules,
            tender: {
                application: {
                    opened: '',
                    closed: ''
                },
                category: '',
                description: '',
                name: '',
                state: '',
                photos:[]
            },
            loading: false
        };
    },

    methods: {
        onSubmit() {
            this.loading = true
            const opened_date = new Date()
            const closed_date = new Date(this.tender.application.closed)
            this.tender.application.opened = opened_date
            this.tender.application.closed = closed_date

            db.collection('tenders')
            .add(this.tender)
            .then(( res )=>{
                this.loading = false
                console.log(res)
                this.$emit('tender-added', res)
            })
            .catch((error) => {
                console.log(error)
            })

            // console.log("Opened date: " + opened_date + ', ' + "Closed date: " + closed_date)


        },
        convertDate() {
            console.log(this.tender.application.closed)
            const mydate = new Date(this.tender.application.closed);
            console.log(mydate.toLocaleDateString())

        }
    },
};
</script>

<style></style>
