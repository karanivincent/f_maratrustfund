<template>
  <div class="w-full bg-gray-100 mx-auto mt-4 px-6 pt-16 pb-40">
    <div class="px-6 ">
      <div class="mx-auto text-left">
        <h1 class=" text-center text-2xl tracking-tights font-medium leading-tight text-green-600 "> Tenders Available
        </h1>
      </div>
      <div v-if="tenders">
        <div>
          Hauna mashida
        </div>
        <div v-for="(tender, i) in tenders" :key="i"
          class=" sm:w-6/12 shadow-lg p-3 mt-4 bg-white rounded-sm mx-auto">
          <div>
            1
            <h1 class=" text-lg tracking-tights font-medium leading-tight text-teal-500">{{tender.name}}</h1>

          </div>
          <div>
            <p class="my-1 leading-relaxed text-lg text-gray-800 ">
              {{tender.description}}
            </p>
          </div>
          <div class="flex justify-between align-center py-1">
            <div class="text-gray-600 text-sm ">
              <!-- <div> Opened: {{formatDate(tender.application.opened, 'P')}} </div>
              <div> Deadline: {{formatDate(tender.application.closed, 'P')}} </div> -->

            </div>
            <button
              class="bg-blue-500 font-bold text-white rounded my-1 mr-10 px-3 py-1 hover:bg-blue-400 focus:outline-none focus:shadow-outline ">
              Apply</button>
          </div>

        </div>
      </div>
      <div v-else>
        <div>
        niko hapa juu ya shida zako

        </div>
      </div>

    </div>
    <button @click="kafunction"> click me</button>
        <button @click="anotherKafunction"> another click me</button>


    <TendersForm />
  </div>
</template>

<script>
import format from 'date-fns/format'
import TendersForm from './TendersForm'
import { mapActions, mapState } from 'vuex'

export default {
  components:{
    TendersForm
  },
  data() {
    return {

      // tenders: [
      //   {
      //     application: { closed:"2020-10-25",opened :"2020-10-25"},
      //     category: "category1",
      //   description: "very longasdfasdfsdfs",
      //   name:"Another trial",
      //   state: "Tendering"
      //   },
      //           {
      //     application: { closed:"2020-10-25",opened :"2020-10-25"},
      //     category: "category1",
      //   description: "very longasdfasdfsdfs",
      //   name:"Another trial",
      //   state: "Tendering"
      //   }
      // ]
     
    }
  },
  watch:{
    tenders(newState, oldState){
      console.log(`Updated from ${oldState} to ${newState}`)
      this.$forceUpdate();
    }
  },
  computed: {
    ...mapState(['tenders']),
    computedTenders(){
      return this.tenders
    }
  },
// firestore: {
//     tenders: db.collection('tenders'),
//   },
  created() {
    this.bindTenders().then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    // db.collection('tenders').onSnapshot(res => {

    //   const changes = res.docChanges();
    //   changes.forEach(change => {
    //     if (change.type === 'added') {
    //       this.tenders.push({
    //         ...change.doc.data(),
    //         id: change.doc.id
    //       })
    //     }
    //   })
    // })
  },

  methods: {
    forceTenderUpdate(){
      this.$forceUpdate();
    },

    kafunction(){
      const another =         {
          application: { closed:"2020-10-25",opened :"2020-10-25"},
          category: "category1",
        description: "very longasdfasdfsdfs",
        name:"Another trial",
        state: "Tendering"
        }
      this.addTender(another).then((res)=>{
        console.log(res)
      })

    },

    anotherKafunction(){
      console.log(this.tenders)
    },

    ...mapActions(["bindTenders", "addTender"]),

    formatDate(date, form){
          const rawDate = new Date(date)
          const formatedDate = format(rawDate, form)
          return formatedDate


    }
  },
}
</script>

<style>

</style>