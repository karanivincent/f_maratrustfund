<template>
    <div class="container mx-auto">
        <div class="flex justify-center px-6 my-12">
            <!-- Row -->
            <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <!-- Col -->
                <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                    style="background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"></div>
                <!-- Col -->
                <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>

                    <Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="validationRules"
                            class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                Email
                            </label>
                            <Field as="input" v-model="user.email"
                                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': errors.email, 'focus:shadow-none': errors.email}"
                                name="email" type="text" placeholder="johndoe@abc.com" />
                                <p class="text-xs italic text-red-500">{{errors.email}}</p>

                        </div>
                        <div class="mb-4">
                            <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                Password
                            </label>
                            <Field as="input" v-model="user.password"
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-yellow-600 rounded shadow appearance-none   focus:outline-none"
                                :class="{ 'border-red-500': errors.password, 'focus:shadow-none': errors.password}"
                                name="password" type="password" placeholder="******************" />
                            <p class="text-xs italic text-red-500">{{errors.password}}</p>
                        </div>
 
                        <div class="mb-6 text-center">
                            <button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign In
                            </button>
                        </div>
                        <hr class="mb-6 border-t" />
                        <div class="text-center">
                            <router-link to="/register" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                Create an Account!
                            </router-link>
                        </div>
                        <div class="text-center">
                            <router-link to='/reset-password' class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                                Forgot Password?
                            </router-link >
                        </div>
                </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Field,
    Form
} from 'vee-validate';
import * as yup from 'yup';
import BACKENDURL from '@/globalvariables';
import axios from 'axios';

export default {
    components: {
        Field,
        Form,
    },

    data() {

        const validationRules = yup.object().shape({
            email: yup.string().required().label('Email Address'),
            password: yup.string().required().label('Password'),


        })
        return {
            validationRules,
            user: {
                email: '',
                password: ''

            }
        }
    },

    methods: {
        onSubmit() {


                axios.post(BACKENDURL + 'accounts/login/', this.user)
                    .then((res) => {
                        console.log(res)
                        localStorage.setItem('user-detail', JSON.stringify(res.data))
                        this.$router.push({
                            name:"Projects"
                        });
                    })
                    .catch((error) => {
                        localStorage.removeItem('user-detail')
                        if (error.response.status == 400) throw "Email or password is incorrect"
                        if (error.response.status == 403) throw "Maximum devices reached"
                    })
 

        }
    }

}
</script>

<style>

</style>