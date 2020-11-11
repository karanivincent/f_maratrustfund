<template>
  <div class=" py-40 px-6 bg-gray-800 h-screen">
    <div class="flex flex-col sm:flex-row">
      <div
        class=" sm:w-2/6 flex flex-col justify-start py-6 sm:px-6 text-gray-200"
      >
        <div class="w-full pb-5">
          <h1 class=" p-2  font-bold text-3xl ">
            Contact Us
          </h1>
        </div>
        <div class="py-2 flex">
          <font-awesome-icon icon="envelope" class=" mt-1 ml-2 " />
          <h3 class="pl-2">
            : support@maratrustfund.org
          </h3>
        </div>
        <div class="py-2 flex">
          <font-awesome-icon icon="link" class=" mt-1 ml-2 " />
          <h3 class="pl-2">
            : www.maratrusfund.org
          </h3>
        </div>
        <div class="py-2 flex">
          <font-awesome-icon icon="phone-volume" class=" mt-1 ml-2 " />
          <h3 class="pl-2">
            : +254-712-345-678
          </h3>
        </div>
        <div class="py-2 flex">
          <font-awesome-icon icon="clock" class=" mt-1 ml-2 " />
          <h3 class="pl-2">
            : 9:00 AM - 6:00 PM
          </h3>
        </div>
        <div class="py-2 flex">
          <font-awesome-icon icon="map-marker" class=" mt-1 ml-2 " />
          <h3 class="pl-2">
            : 1644 Nairobi
          </h3>
        </div>
      </div>
      <Form
        class=" sm:w-4/6 pr-10 "
        @submit="onSubmit"
        v-slot="{ errors }"
        :validation-schema="validationRules"
      >
        <div class="w-full pb-5">
          <h1 class=" p-2  font-bold text-3xl text-white">
            Contact Form
          </h1>
        </div>
        <div class=" flex flex-col sm:flex-row">
          <div class=" w-full sm:w-1/2 flex flex-col">
            <label
              class=" tracking-wide text-xs py-2 text-white"
              for="grid-first-name"
            >
              Your Name*
            </label>
            <Field
              as="input"
              v-model="name"
              id="grid-first-name"
              type="text"
              placeholder="Your name..."
              name="name"
              class="appearance-none bg-transparent   text-gray-400 border  rounded py-3 px-4 mb-3 sm:mr-10 leading-tight focus:outline-none focus:border-gray-500"

            />
                <span class=" text-red-500 text-xs italic" >{{errors.name}}</span>
          </div>
          <div class="w-full sm:w-1/2 flex flex-col">
            <label
              class=" tracking-wide  text-xs py-2 text-white"
              for="email"
            >
              Your Email*
            </label>
            <Field
              as="input"
              v-model="email"
              type="email"
              name="email"
              class="appearance-none bg-transparent   text-gray-400 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-200"
              id="email"
              placeholder="Your email..."
            />
            <p class="text-gray-600 text-xs italic"
              >Some tips - as long as needed</p
            >
          </div>
        </div>

        <div class="flex flex-wrap mb-6 w-full">
          <label
            class="block tracking-wide  text-xs mb-2 text-white"
            for="message"
          >
            Your Message*
          </label>
          <Field
              as="textarea"
              v-model="message"
              type="text"
              name="message"
            class=" no-resize appearance-none block w-full  text-gray-400 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-transparent focus:border-gray-500 h-32 resize-none"
            id="message"
          ></Field>
        </div>
        <div class="">
          <button
            type="submit"
            class="shadow mx-auto bg-green-600 hover:bg-green-800 focus:outline-none text-white font-bold py-3 px-5 rounded"
            :class="{' cursor-wait ': loading==true}"
            :disabled="loading"

          >
            <div v-if="loading">
              <font-awesome-icon icon="spinner"
                class=" animate-spin"
              />
            </div>
            <div v-else>
            Send Message

            </div>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import {
    Field,
    Form
} from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import BACKENDURL from "@/globalvariables";
export default {
    components: {
        Field,
        Form,
    },
    data() {

        const validationRules = yup.object().shape({
            name: yup.string().required().label('Name'),
            email: yup.string().email().required().label('Email'),
            message: yup.string().required().label('Message'),
   
  
        })
        return {
          loading: false,
            validationRules,
            name:"name",
            email:"name@name.name",
            message:"asdfasfasfasfasfasfsdf",
        };
    },
    methods: {
        onSubmit() {

          console.log("nimeclick")

          this.loading = true
          axios.post(`${BACKENDURL}api/messages/`, {
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then((res)=> {
            this.loading = false
            console.log(res)
            console.log("Saved")
          })
          .catch((err)=> console.log(err));

        }

    },
      
   

};
</script>

<style></style>
