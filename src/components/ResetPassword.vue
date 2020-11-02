<template>
  <div class="parent w-full h-auto min-h-full mx-auto mt-4 pt-4 ">
    <div class="mx-auto py-12 sm:shadow-lg sm:w-2/3 px-4 ">
      <div v-if="step == 'email'" >
        
        <Form @submit="sendOtp" v-slot="{ errors }" class="flex flex-col">
          <h2 class="  font-semibold text-green-700 text-lg  mx-auto py-2">
          Enter registered email address</h2
        >
          <Field
            name="email"
            as="input"
            type="email"
            :rules="emailRules"
            v-model="details.email"
            class=" pt-4 w-1/3 mx-auto block appearance-none  font-medium text-gray-700 text-center outline-none border-b-2 border-gray-500 focus:border-gray-500 focus:bg-white "
          />
          <p class=" mx-auto text-sm font-semibold italic text-red-500">{{ errors.email }}</p>
          <p class=" mx-auto text-sm font-semibold italic text-red-500">{{apiErrors.email}}</p>


        <div
          class="py-2 mx-auto text-sm font-medium text-gray-600 tracking-tighter"
        >
          We will send a verification code to your email</div
        >
        <button
          type="submit"
          class=" shadow bg-green-600 hover:bg-green-400 focus:outline-none  text-white font-bold mt-4 mb-8 mx-8 py-2 rounded"
        >
          Email me a verification code</button>
        </Form>

      </div>
      <div v-else-if="step == 'otp'" >
        
        <Form @submit="verifyOtp" v-slot="{errors}" class="flex flex-col">
          <h2 class="  font-semibold text-lg text-green-700  mx-auto py-2">
          Verify your email address</h2
        >
        <h2 class="   text-gray-700 mx-auto py-2">
          Enter the verification code we sent to</h2
        >
        <h3 class="  font-bold text-gray-700 mx-auto py-2">
          {{ details.email }}
        </h3>
          <Field
            as="input"
            name="otp"
            :rules="otpRules"
            v-model="details.otp"
            type="email"
            class="pt-4 w-1/3 mx-auto block appearance-none  font-medium text-gray-700 text-center outline-none border-b-2 border-gray-500 focus:border-gray-500 focus:bg-white "
          />
          <p class="mx-auto text-sm font-semibold italic text-red-500">{{ errors.otp }}</p>
          <p class=" mx-auto text-sm font-semibold italic text-red-500">{{apiErrors.otp}}</p>

        <div
          class="py-2 mx-auto text-sm font-medium text-gray-600 tracking-tighter text-opacity-50"
        >
          Your verification code may take a few moments to arrive. <br />
          Didn't receive a verification code?
          <button type="submit" class="hover:text-green-800 text-green-600 font-semibold pl-2 focus:outline-none"
            >Resend</button
          ></div
        >
        <button
          class=" shadow bg-green-600 hover:bg-teal-400 focus:outline-none  text-white font-bold mt-4 mb-8 mx-4 py-2 rounded"
        >
          Verify</button
        >
                </Form>

      </div>
      <div v-else-if="step == 'password'">
        <Form
          @submit="savePassword"
          v-slot="{ errors }"
          :validation-schema="passwordSchema"
          class="flex flex-col"
        >
                  <h2 class="  font-semibold text-lg text-green-700 mx-auto py-2">
 Enter new password</h2>
          <div class="grid grid-cols-5 pt-4 pb-4">
            <label
              for="password1"
              class=" pt-1 col-span-2 px-2  text-gray-700"
              >New Password
            </label>
            <div class="col-span-3 flex flex-col">
              <Field
                as="input"
                type="password"
                name="password1"
                v-model="details.password1"
                class=" mr-10 block appearance-none text-gray-700 outline-none border-b-2 border-gray-500 focus:border-gray-500 focus:bg-white "
              />

              <p class="text-xs italic text-red-500">{{ errors.password1 }}</p>
            </div>
          </div>
          <div class="grid grid-cols-5">
            <label
              for="password2"
              class="pt-1 col-span-2 px-2  text-gray-700"
              >Confirm password
            </label>
            <div class="col-span-3 flex flex-col">
              <Field
                as="input"
                type="password"
                name="password2"
                v-model="details.password2"
                class=" mr-10  block appearance-none text-gray-700 outline-none border-b-2 border-gray-500 focus:border-gray-500 focus:bg-white "
              />

              <p class="text-xs italic text-red-500">{{ errors.password2 }}</p>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <button
              type="submit"
              class=" py-2 px-8 mr-20 shadow bg-green-600 hover:bg-teal-400 focus:outline-none  text-white font-bold mt-4 rounded"
            >
              Save</button
            >
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field } from "vee-validate";
import BACKENDURL from "@/globalvariables";
import * as yup from "yup";
import axios from 'axios';
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      emailRules: yup
        .string()
        .email("Invalid email!")
        .required("Please enter email to continue"),
      otpRules: yup
        .string()
        .required("Please enter code to continue")
        .max(6, "Invalid code please enter exactly 6 characters")
        .min(6, "Invalid code please enter exactly 6 characters"),

      passwordSchema: yup.object({
        password1: yup.string().required("Password is required"),
        password2: yup
          .string()
          .required("Password confirm is required")
          .oneOf([yup.ref("password1"), null], "Passwords must match"),
      }),

      step: "password",
      details: {
        email: "",
        otp: "",
        password1: "",
        password2: "",
      },
      apiErrors:{
        email: "",
        otp:""
      }
    };
  },
  methods: {
    sendOtp() {
      this.apiErrors.email=""
      axios.post(`${BACKENDURL}accounts/validate_email_forgot/`, {email: this.details.email})
      .then((res)=> {
      this.step = "otp";
      console.log(res)
      })
      .catch((err)=> {
        if(err.response.status==404) this.apiErrors.email = "Email is not recognised" 
        else console.log(err.response);
      });

    },
    verifyOtp(){
            this.apiErrors.otp=""
      axios.post(`${BACKENDURL}accounts/validate_otp_forgot/`, {email: this.details.email, otp: this.details.otp})
      .then((res)=> {
      this.step = "password";
      console.log(res)
      })
      .catch((err)=> {
       console.log(err.response);
      });
    },
    savePassword() {
            axios.post(`${BACKENDURL}accounts/change_password_forgot/`, {email: this.details.email, otp: this.details.otp, password: this.details.password1})
      .then((res)=> {
      this.$router.push({
        name: "Login"
      })
      console.log(res)
      })
      .catch((err)=> {
       console.log(err.response);
      });
      
    },
  },
};
</script>

<style></style>
