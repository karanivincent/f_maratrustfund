<template>
  <div class="w-full h-screen ">
    <Navbar/>
    <!-- <Todos/> -->
    <Tenders/>



  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Tenders from './components/Tenders';
// import Todos from './components/Todos'

export default {
  components: {
    Navbar,
    Tenders,
    // Todos
  }

}
</script>

<style>

</style>