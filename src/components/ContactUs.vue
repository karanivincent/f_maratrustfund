<template>
  <div class="p-6">
    <div class="w-full pb-10">
      <h1 class=" p-2  font-bold text-3xl text-center">
        Contact Us
      </h1>
    </div>
    <div class="flex flex-col sm:flex-row">
      <div class=" sm:w-3/5 ">
        <div class=" flex flex-col sm:flex-row">
          <div class=" w-full sm:w-1/2 flex flex-col">
            <label class=" tracking-wide text-xs py-2" for="grid-first-name">
              Name*
            </label>
            <input
              class="appearance-none   text-gray-600 border  rounded py-3 px-4 mb-3 sm:mr-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Your name..."
            />
          </div>
          <div class="w-full sm:w-1/2 flex flex-col">
            <label class=" tracking-wide  text-xs py-2 " for="grid-password">
              Email Address*
            </label>
            <input
              class="appearance-none   text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="Your email..."
            />
            <p class="text-gray-600 text-xs italic"
              >Some tips - as long as needed</p
            >
          </div>
        </div>

        <div class="flex flex-wrap mb-6 w-full">
          <label class="block tracking-wide  text-xs mb-2" for="grid-password">
            Message*
          </label>
          <textarea
            class=" no-resize appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
            id="message"
          ></textarea>

        </div>
      </div>
      <div
        class=" sm:w-2/5 flex flex-col justify-center py-6 sm:px-6 text-gray-600"
      >
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
    </div>
    <div class="flex justify-items-center">
      <button
        class="shadow mx-auto bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-5 rounded"
        type="button"
      >
        Send Message
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
