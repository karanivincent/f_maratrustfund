import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSignInAlt, faArrowRight, faCalendarCheck, faEnvelope, faLink, faClock, faPhoneVolume, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faArrowRight, faCalendarCheck, faSignInAlt, faEnvelope, faLink, faClock, faPhoneVolume, faMapMarker)

import "./assets/css/tailwind.css"
import Scrollspy from 'vue2-scrollspy';
var VueScrollTo = require('vue-scrollto');



const app = createApp(App)
    .use(store)
    .use(router)
    .use(Scrollspy)
    .use(VueScrollTo)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

