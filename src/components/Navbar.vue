<template>
  <header
    class="shadow-sm sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 "
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <router-link to="/">
          <h3 class="font-bold text-gray-600 text-2xl">MaraTrustFunds</h3>
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
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <router-link
        to="/"
        class="mt-1 block px-2 py-1 text-gray-600 font-semibold rounded hover:text-green-700 sm:mt-0 sm:ml-3"
        >Home</router-link
      >
            <router-link
        to="/projects"
        class="mt-1 block px-2 py-1 text-gray-600 font-semibold rounded hover:text-green-700 sm:mt-0 sm:ml-3"
        >Projects</router-link
      >

      <router-link
        to="/tenders"
        class="mt-1 block px-2 py-1 text-gray-600 font-semibold rounded hover:text-green-700 sm:mt-0 sm:ml-3"
        >Tenders</router-link
      >

      <router-link
        to="/about"
        class="mt-1 block px-2 py-1 text-gray-600 font-semibold rounded hover:text-green-700 sm:mt-0 sm:ml-3"
        >About Us</router-link
      >
      <router-link
        to="/contact-us"
        class="mt-1 block px-2 py-1 text-gray-600 font-semibold rounded hover:text-green-700 sm:mt-0 sm:ml-3"
        >Contact Us</router-link
      >
      <div class="login-section">
        <div v-if="!loggedIn" class="flex flex-col sm:flex-row">
          <router-link
            to="/login"
            class="mt-1 inline-block px-4 py-1 text-gray-600  text-sm font-bold rounded hover:text-green-700 sm:mt-0 sm:ml-3"
            >Log in</router-link
          >
          <router-link
            to="/register"
            class="mt-1 inline-block px-4 py-1 text-gray-600 text-sm font-bold rounded  hover:text-green-700 sm:mt-0 sm:ml-3"
            >Sign Up</router-link
          >
        </div>
        <div v-else class="flex flex-col">
          <router-link
            to="/my-projects"
            class="mt-1 block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-3"
            >My Projects</router-link
          >
          <router-link
            to="/about"
            class="mt-1 block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-3"
            >Logout</router-link
          >
        </div>
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
};
</script>
