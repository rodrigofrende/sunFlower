import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import store from "@/store"

import { BootstrapVue, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faFontAwesome)
library.add(faInstagram)
library.add(faFacebook)
library.add(faWhatsapp)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons )

Vue.use(Vuex)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
