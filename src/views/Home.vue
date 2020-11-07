<template>
  <div class="home">
    <div class="">

    <section id="one" class=" ">
      <div :style="{'background-image': 'url(' + require('@/assets/images/pexels-follow-alice-667200.jpg') + ')'}"
        class="bg-fixed bg-cover bg-right h-screen pt-12"
      >
            <About/>

      </div>

    </section>
        <section id="two" class="pt-6">
      <About/>
    </section>
        <section id="three" class="pt-6">
      <About/>
    </section>
        <section id="four" class="pt-6">
      <About/>
    </section>
        <section id="five" class="pt-6">
      <About/>
    </section>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About'

export default {
  name: 'Home',
  components: {
    About
  }
}
</script>
