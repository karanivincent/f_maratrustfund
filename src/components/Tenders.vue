<template>
  <div class="w-full h-auto bg-gray-100 mx-auto  pt-4 ">
    <div class=" pb-8 ">
      <div class="card sm:w-2/3 mx-auto">
        <div class="card-header mx-auto text-left bg-white py-3 shadow-xs">
          <h1
            class=" text-center text-2xl tracking-tights font-medium leading-tight text-green-600 "
          >
            Projects Available
          </h1>
        </div>
        <div class="card-body">
          <section>
            <div v-if="allProjects">
              <div
                v-for="(project, i) in allProjects"
                :key="i"
                class=" shadow-lg p-3 mt-1  bg-white mx-auto text-gray-800 hover:text-green-600 hover:bg-gray-100"
                @click="viewDetail(project.id)"
              >
                <div>
                  <h1
                    class=" text-lg tracking-tights capitalize font-medium leading-tight "
                    >{{ project.name }}</h1
                  >
                </div>
                <div>
                  <p class="my-1 leading-tight text-sm  text-gray-700 ">
                    {{ project.description }}
                  </p>
                </div>
                <div
                  class="flex justify-between align-center text-gray-600 text-sm py-1"
                >
                  <div> Opened: {{ project.opened_on }} </div>
                  <div> Deadline: {{ project.closed_on }} </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import format from "date-fns/format";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
    };
  },

  computed: {
    ...mapGetters(["allProjects"]),
  },

  created() {
    this.fetchProjects()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    ...mapActions(["fetchProjects"]),

    formatDate(date, form) {
      const rawDate = new Date(date);
      const formatedDate = format(rawDate, form);
      return formatedDate;
    },

    viewDetail(id){
      this.$router.push({
        name: "ProjectDetails",
        params: {
          id 
          }
      })
    }
  },
};
</script>

<style></style>
