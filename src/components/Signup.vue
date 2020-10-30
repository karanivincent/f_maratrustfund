<template>
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 ">
        <!-- Col -->

        <!-- Col -->
        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 class="pt-4 text-2xl text-center">Sign Up!</h3>
          <div v-if="!otp"> 
              <Form
            @submit="getOTP"
            v-slot="{ errors }"
            :validation-schema="validationRules"
            class="px-8 pt-6 pb-4 mb-4 bg-white rounded"
          >
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="name"
              >
                Full Name
              </label>
              <Field
                as="input"
                v-model="user.name"
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="Username"
              />
              <p class="text-xs italic text-red-500">{{ errors.name }}</p>
            </div>
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
              </label>
              <Field
                as="input"
                v-model="user.email"
                class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="email"
                type="text"
                placeholder="johndoe@gmail.com"
              />
              <p class="text-xs italic text-red-500">{{ errors.email }}</p>
            </div>
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password1"
              >
                Password
              </label>
              <Field
                as="input"
                v-model="user.password1"
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="password1"
                type="password"
                placeholder="******************"
              />
              <p class="text-xs italic text-red-500">{{ errors.password1 }}</p>
            </div>
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="password2"
              >
                Confirm Password
              </label>
              <Field
                as="input"
                v-model="user.password2"
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="password2"
                type="password"
                placeholder="******************"
              />
              <p class="text-xs italic text-red-500">{{ errors.password2 }}</p>
            </div>

            <div class="mb-6 text-center">
              <button
                @click="getOTP"
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Next
              </button>
            </div>

            <hr class=" border-t" />
          </Form>
          </div>
          <div v-else>
              <div>
                  Code sent to {{user.email}}. Please check your email and enter the code.
              </div>
              <div class="flex">
                  <label for="otp" class=" text-lg font-semibold px-2 py-1"> Key</label>
                  <input v-model="user.otp" name="otp"  type="text"
                                  class="px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline">
              </div>
              <div class="flex justify-between pb-4">
                  <button @click="otp=false"         class="block font-semibold text-sm text-green-600 rounded border border-green-600 focus:outline-none  hover:bg-green-600 hover:text-gray-100  hover:shadow-inner py-1 px-2 ">
Back</button>
                  <button  @click="verify"       class="block font-semibold text-sm text-green-600 rounded border border-green-600 focus:outline-none  hover:bg-green-600 hover:text-gray-100  hover:shadow-inner py-1 px-2 ">
Verify</button>
              </div>
          </div>
          

          <div class="px-8 text-gray-600">
            Already have an account?
            <a
              class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="./forgot-password.html"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BACKENDURL from "@/globalvariables";
import { Field, Form } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    Field,
    Form,
  },
  data() {
    const validationRules = yup.object().shape({
      name: yup
        .string()
        .required()
        .label("Full name"),
      email: yup
        .string()
        .required()
        .label("Email Address"),
      password1: yup
        .string()
        .required()
        .label("Password"),

      password2: yup
        .string()
        .required()
        .label("Confirmation Password"),
    });
    return {
      validationRules,
      otp: false,
      user: {
        name: "",
        email: "",
        password1: "",
        password2: "",
        otp: "",
      },
    };
  },
  methods: {
    getOTP() {
      axios.post(`${BACKENDURL}accounts/validate_email/`, { email: this.user.email })
      .then((res)=>{
      this.otp = true;
      console.log(res)

      })
      .catch((err)=> console.log(err));
    },
    verify(){
        if(this.otp!=""){
const user = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password1,
        otp: this.user.otp,
        }
              axios.post(`${BACKENDURL}accounts/validate_otp/`, user)
      .then((res)=>{
      this.otp = true;
      console.log(res)

      })
      .catch((err)=> console.log(err));
        }
        
    }
  },
};
</script>

<style></style>
