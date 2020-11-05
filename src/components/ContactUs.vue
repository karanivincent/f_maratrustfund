<template>
  <div class="p-6">
    <div class="w-full pb-10">
      <h1 class=" p-2  font-bold text-3xl text-center">
        Contact Us
      </h1>
    </div>
    <div class="flex ">
      <div class=" w-3/5">
            <div class=" flex flex-stretch">
                <div class="w-1/2 flex flex-col">
                        <label
                            class=" tracking-wide text-xs py-2"
                            for="grid-first-name"
                        >
                            Name*
                        </label>
                        <input
                            class="appearance-none   text-gray-600 border  rounded py-3 px-4 mb-3 mr-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-first-name"
                            type="text"
                            placeholder="Your name..."
                        />
                </div>
                <div class="w-1/2 flex flex-col">
                    <label
                    class=" tracking-wide  text-xs py-2 "
                    for="grid-password"
                    >
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
                    <label
                    class="block tracking-wide  text-xs mb-2"
                    for="grid-password"
                    >
                    Message*
                    </label>
                    <textarea
                    class=" no-resize appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                    id="message"
                    ></textarea>
                    <p class="text-gray-600 text-xs italic">
                    Re-size can be disabled by set resize-none / resize-y / resize-x /
                    resize</p
                    >
            </div>
            
      </div>
      <div class=" w-2/5 flex flex-col justify-center py-6 px-6 text-gray-600">
            <div class="py-2">
                : support@maratrustfund.org
            </div>
            <div class="py-2">
                : www.maratrusfund.org
            </div>
            <div class="py-2">
                : +254-712-345-678
            </div>
            <div class="py-2">
                : 9:00 AM - 6:00 PM
            </div>
            <div class="py-2">
                : 1644 Nairobi
            </div>
      </div>
    </div>
    <div class="">
                <button
                class="shadow bg-green-600 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-5 rounded"
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
