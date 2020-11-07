<template>
            <!-- Row -->
         
                <!-- Col -->
                <div class="mx-auto w-full sm:w-1/2 bg-white rounded-lg lg:rounded-l-none pb-10 pt-12">
                    <h3 class="pt-4 text-2xl font-semibold text-center text-gray-700">Login</h3>

                    <Form @submit="onSubmit" v-slot="{ errors }" :validation-schema="validationRules"
                            class="mx-auto  px-8 pt-6 pb-4 bg-white rounded">
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
                                class="flex justify-center mx-auto px-4 py-2 font-bold text-white bg-green-600 rounded hover:bg-green-400 focus:outline-none focus:shadow-outline"
                                type="submit">
                                <h3>Sign In</h3>
                                <font-awesome-icon icon="sign-in-alt" class=" mt-1 mx-2" />

                            </button>
                        </div>
                        <hr class="mb-6 border-t" />
                        <div class="text-center">
                            <router-link to="/register" class="inline-block text-sm text-green-600 align-baseline hover:text-green-400">
                                Create an Account!
                            </router-link>
                        </div>
                        <div class="text-center">
                            <router-link to='/reset-password' class="inline-block text-sm text-green-600 align-baseline hover:text-green-400">
                                Forgot Password?
                            </router-link >
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