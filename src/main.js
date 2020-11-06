import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSignInAlt, faArrowRight, faCalendarCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faArrowRight, faCalendarCheck, faSignInAlt, faEnvelope)

import "./assets/css/tailwind.css"



const app = createApp(App)
    .use(store)
    .use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

