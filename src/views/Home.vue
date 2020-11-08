<template>
  <div class="home">
    <div class="">
      <section id="one" class=" ">
        <div
          :style="{
            'background-image':
              'url(' + require('@/assets/images/maratrustfundcover.jpg') + ')',
          }"
          class="bg-fixed bg-cover bg-right h-screen py-56 bg-opacity-50"
        >
          <div class="flex flex-col  h-full text-white px-40">
            <h1 class="text-2xl text-gray-400">Who We Are</h1>
            <h3 class=" font-semibold text-5xl pt-5">Mara Trust Funds</h3>
            <p class=" text-xs"
              >Community Development,through Aid and empowerment.</p
            >
            <div class="py-10">
              <button
                class="mx-2 bg-green-600 font-semibold px-4 py-2 rounded hover:bg-green-800"
              >
                Learn More</button
              >
              <button
                class="mx-2 border font-semibold px-8 py-2 rounded hover:bg-green hover:text-green-600 hover:border-green-600"
              >
                <font-awesome-icon
                  icon="play"
                  aria-hidden="true"
                  class="mx-1 "
                ></font-awesome-icon>
                Video
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="two" class=" h-screen pt-20">
        <div class=" mx-auto px-10 py-20 w-2/3 ">
          <h3
            class=" font-semibold text-gray-700 text-2xl mx-auto text-center pb-4 tracking-wider"
          >
            Testimonials</h3
          >

          <splide :options="options" class="">
            <splide-slide>
              <div class="flex flex-col pb-8  ">
                <div class="mx-auto pb-6 ">
                  <img src="profile.png" class="sm:rounded w-24" />
                </div>
                <div
                  class=" text-gray-900 text-opacity-75 text-lg text-center bg-gray-200 bg-opacity-75 px-6 py-10 rounded-sm"
                >
                   <p> <span class=" font-semibold text-2xl">“</span>
                    Through the donations of the beehives, our group has been able to increase production of honey tenfolds. We have created employment for our members.
                     <span class=" font-semibold text-2xl">”</span></p
                  >
                </div>
                <div>
                  <h3
                    class="text-gray-800 pt-4 text-center font-semibold tracking-wide "
                    >George Mwaniki</h3
                  >
                  <h4 class=" text-gray-900 text-opacity-50 py-1 text-center"
                    >Mara Fruit Growers</h4
                  >
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="flex flex-col pb-8  ">
                <div class="mx-auto pb-6 ">
                  <img src="profile.png" class="sm:rounded w-24" />
                </div>
                <div
                  class=" text-gray-900 text-opacity-75 text-lg text-center bg-gray-200 bg-opacity-75 px-6 py-10 rounded-sm"
                >
                  <p> <span class=" font-semibold text-2xl">“</span>
                    We are grateful for the beads donations from Maasai Mara trust Funds, Through your generous hands we have been able to Increase our sales and provide a living for our families.
<span class=" font-semibold text-2xl">”</span>
                    </p
                  >
                </div>
                <div>
                  <h3
                    class="text-gray-800 pt-4 text-center font-semibold tracking-wide "
                    >Joseph Kuyoni,
</h3
                  >
                  <h4 class=" text-gray-900 text-opacity-50 py-1 text-center"
                    >Maasai Beadworks</h4
                  >
                </div>
              </div>            </splide-slide>

              <splide-slide>
                              <div class="flex flex-col pb-8  ">
                <div class="mx-auto pb-6 ">
                  <img src="profile.png" class="sm:rounded w-24" />
                </div>
                <div
                  class=" text-gray-900 text-opacity-75 text-lg text-center bg-gray-200 bg-opacity-75 px-6 py-10 rounded-sm"
                >
                  <p> <span class=" font-semibold text-2xl">“</span>
                    Through Maasai Trust Funds, Sekenani road was constructed and we are now able to transport our milk and meat to our local center. We are entirely grateful for this.
                    <span class=" font-semibold text-2xl">”</span>
                    </p
                  >
                </div>
                <div>
                  <h3
                    class="text-gray-800 pt-4 text-center font-semibold tracking-wide "
                    >George Leyian</h3
                  >
                  <h4 class=" text-gray-900 text-opacity-50 py-1 text-center"
                    >Member, maasai mara Vision Welfare
</h4
                  >
                </div>
              </div>
              </splide-slide>
          </splide>
        </div>
      </section>
      <section id="three" class=" sectionthree pt-6">
        <About />
      </section>
      <section id="four" class="pt-6">
        <About />
      </section>
      <section id="five" class="pt-6">
        <About />
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  components: {
    About,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type:'loop',
        rewind: true,
        width: 800,
        perPage: 1,
        gap: "1rem",
        arrows: false,
      },
    };
  },
};
</script>
<style>
.sectionthree {
  background-color: purple;
}

.splide__pagination__page {
  background-color: gray;
}

.splide__pagination__page.is-active {
  background-color: lightgray;
}
</style>
