<template>
  <div class="w-full h-full">
    <Navbar />

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user-detail"));
    if (user) {
      const expiry = new Date(user.expiry);
      const today = new Date();
      console.log(this.$store.state.user);
      console.log(expiry > today);

      if (expiry > today) {
        this.$store.commit("setUser", user);
        console.log(this.$store.state.user);
      }
    }
  },
};
</script>

<style></style>
