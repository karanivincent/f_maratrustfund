<template>
  <div class="parent w-full h-auto min-h-full mx-auto mt-4 pt-4 ">
    <Form
      @submit="changePassword"
      v-slot="{ errors }"
      :validation-schema="passwordSchema"
      class="flex flex-col"
    >
      <h2 class="  font-semibold text-lg text-green-700 mx-auto py-2">
        Change password</h2
      >
      <div class="grid grid-cols-5 pt-4 pb-4">
        <label for="oldpassword" class=" pt-1 col-span-2 px-2  text-gray-700"
          >Old Password
        </label>
        <div class="col-span-3 flex flex-col">
          <Field
            as="input"
            type="password"
            name="oldpassword"
            v-model="details.password_1"
            class=" mr-10 block appearance-none text-gray-700 outline-none border-b-2 border-gray-500 focus:border-gray-500 focus:bg-white "
          />

          <p class="text-xs italic text-red-500">{{ errors.oldpassword }}</p>
        </div>
      </div>
      <div class="grid grid-cols-5 pt-4 pb-4">
        <label for="newpassword" class=" pt-1 col-span-2 px-2  text-gray-700"
          >New Password
        </label>
        <div class="col-span-3 flex flex-col">
          <Field
            as="input"
            type="password"
            name="newpassword"
            v-model="details.password_2"
            class=" mr-10 block appearance-none text-gray-700 outline-none border-b-2 border-gray-500 focus:border-gray-500 focus:bg-white "
          />

          <p class="text-xs italic text-red-500">{{ errors.newpassword }}</p>
        </div>
      </div>
      <div class="grid grid-cols-5">
        <label for="confirm" class="pt-1 col-span-2 px-2  text-gray-700"
          >Confirm password
        </label>
        <div class="col-span-3 flex flex-col">
          <Field
            as="input"
            type="password"
            name="confirm"
            class=" mr-10  block appearance-none text-gray-700 outline-none border-b-2 border-gray-500 focus:border-gray-500 focus:bg-white "
          />

          <p class="text-xs italic text-red-500">{{ errors.confirm }}</p>
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
</template>

<script>
import * as yup from "yup";
import { Form, Field } from "vee-validate";
import axios from 'axios'

export default {
  components: {
    Form,
    Field,
  },
  data() {
    const passwordSchema = yup.object({
        oldpassword: yup.string().required("Old password is required"),
      newpassword: yup.string().required("Password is required").min(8, "Has to be 8 characters or more"),
      confirm: yup
        .string()
        .required("Password confirm is required")
        .oneOf([yup.ref("newpassword"), null], "Passwords must match"),
    });

    return {
      passwordSchema,
      details: {
        password_1: "",
        password_2: "",
      },
    };
  },
  methods:{
      changePassword(){
          var user = localStorage.getItem('user-detail')
      user = JSON.parse(user)
          axios.post(`${BACKENDURL}accounts/change_password/`, this.details, { headers: { 'Authorization': `Token ${user.token}` } })
      .then((res)=> {
      this.step = "otp";
      console.log(res)
      })
      .catch((err)=> {
        if(err.response.status==404) this.apiErrors.email = "Email is not recognised" 
        else console.log(err.response);
      });
      }
  }
};
</script>

<style></style>
