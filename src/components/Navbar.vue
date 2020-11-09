<template>
  <header
    id="navbar"
    class=" w-full shadow-sm sm:grid sm:grid-cols-4 sm:justify-between sm:items-center sm:px-4 sm:py-3 sm:bg-gray-800 sm:bg-opacity-75 fixed top-0  "
  >
    <div
      class=" sm:col-span-1 flex items-center justify-between px-2 py-3 sm:p-0"
    >
      <div>
        <router-link to="/">
          <h3 class="font-bold text-green-500 text-3xl">MaraTrustFunds</h3>
        </router-link>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-700 hover:text-white focus:text-gray-700 focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      @click="isOpen = !isOpen"
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex  sm:p-0 sm:col-span-3"
    >
      <div
        v-scroll-spy-active
        class="sm:w-2/3  sm:flex sm:justify-evenly font-medium   text-gray-100 rounded cursor-pointer  "
      >
        <div
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500 cursor-pointer"
          @click="ScrollTO('#home')"
          >Home</div
        >
        <div
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500 cursor-pointer"
          @click="ScrollTO('#about')"
          >About Us</div
        >
        <div
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500 cursor-pointer"
          @click="ScrollTO('#projects')"
          >Tenders</div
        >
      
        <div
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500 cursor-pointer"
          @click="ScrollTO('#contact')"
          >Contact Us</div
        >
        <!-- <router-link
          to="/"
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500"
          v-scroll-to="'#one'"
  
          >Home</router-link
        >
        <router-link
          to="/projects"
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500"
          
          v-scroll-to="'#two'"
          >Projects</router-link
        >
  
        <router-link
          to="/tenders"
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500"        
          v-scroll-to="'#three'"
          >Tenders</router-link
        >
  
        <router-link
          to="/about"
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500"        
          v-scroll-to="'#four'"
          >About Us</router-link
        >
        <router-link
          to="/contact-us"
          class="mt-1 block px-1 py-1  sm:mt-0 sm:ml-3 hover:text-green-500"
          >Contact Us</router-link
        > -->
      </div>

      <div
        v-if="!$store.state.user"
        class="sm:w-1/3 flex flex-col sm:flex-row justify-end font-medium text-lg  text-gray-100   "
      >
        <router-link
          to="/login"
          class="mt-1 inline-block px-1 py-1  rounded hover:text-green-500 sm:mt-0 sm:ml-3"
          >Log in</router-link
        >
        <router-link
          to="/register"
          class="mt-1 inline-block px-1 py-1  rounded  hover:text-green-500 sm:mt-0 sm:ml-3"
          >Sign Up</router-link
        >
      </div>
      <div
        v-else
        class="sm:w-1/3 flex flex-col sm:flex-row justify-end font-medium text-lg  text-gray-100   "
        >
        <router-link
          to="/my-projects"
          class="mt-1 inline-block px-1 py-1  rounded  hover:text-green-500 sm:mt-0 sm:ml-3"
          >My Projects</router-link
        >
        <div
          @click="logout"
          class="mt-1 inline-block px-1 py-1  rounded  hover:text-green-500 sm:mt-0 sm:ml-3 cursor-pointer"
          >Logout</div
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false,
      isOpen: false,
    };
  },

  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add("sm:bg-gray-800");
        navbar.classList.add("shadow-sm");
      } else {
        navbar.classList.remove("sm:bg-gray-800");
        navbar.classList.remove("shadow-sm");
      }
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout')
    },

    ScrollTO(element) {
      if(this.$route.path!=='/'){
        this.$router.push({path:`/${element}`})
      }
      else{
      this.$scrollTo(element);

      }
      // console.log(this.$route.path)
      // var options = {
      //   container: "#container",
      //   easing: "ease-in",
      //   lazy: false,
      //   offset: -60,
      //   force: true,
      //   cancelable: true,

      //   x: false,
      //   y: true,
      // };
    },
  },
};
</script>
