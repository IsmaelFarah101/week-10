import Vue from 'vue'
import App from './App.vue'
//import  the vue routers
import VueRouter from 'vue-router'
import router from './router'

//importing bootstrap
import BootstrapVue from 'bootstrap-vue'

import StateAPIService from './services/stateService.js'

Vue.use(VueRouter)

//Vue.config.productionTip = false
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//setting up the api in vue

Vue.prototype.$stateService = StateAPIService

import "leaflet/dist/leaflet.css"
// setting up the routing in vue 
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
