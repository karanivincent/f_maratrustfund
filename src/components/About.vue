<template>
    <div class="w-full bg-gray-100">
         <div>
                <div class="w-full flex">
                    <h1 class=" font-light p-2 pl0 text-green-600 font-bold text-3xl">
                        <span class="border-gray-400 border-b-4 ">Contact</span> us
                    </h1>
                </div>
                <div class="p-6">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name">
                                First Name
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Jane">
                            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-last-name">
                                Last Name
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name" type="text" placeholder="Doe">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password">
                                E-mail
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email" type="email">
                            <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-password">
                                Message
                            </label>
                            <textarea
                                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                id="message"></textarea>
                            <p class="text-gray-600 text-xs italic">Re-size can be disabled by set  resize-none /
                                resize-y /
                                resize-x / resize</p>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button
                                class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button">
                                Send
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </div>

            </div>

        <div class="container mt-4 px-20">
            <div>

                <div class="w-full flex">
                    <h1 class=" font-light p-2 pl0 text-green-600 font-bold text-3xl">
                        <span class="border-gray-400 border-b-4 ">About</span> us
                    </h1>
                </div>
                <div class="w-full pb-8">
                    <p class="tracking-wide text-lg p-6 text-gray-700">
                        The Mara Trust Funds is a Non-profit organisation aimed at ensuring a sustainable human a
                        sustainable human wildlife society.

                        We aim at ensuring promoting wildlife bordering communities(the Maasai's) culture, through
                        empowering programmes like education , provision of clean water(borehole drilling) beekeeping
                        and
                        road construction among many other activities.

                        As an organization we are focused to be culture ambassadors for the Maa community. We also aim
                        to
                        esnure preservation of wildlife and natural environment through real-time
                        surveillance/monitoring.

                        We cover the Maasai Mara and Serengeti game reserves and Our Offices are located in Narok Town.
                    </p>
                </div>
            </div>

           


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>