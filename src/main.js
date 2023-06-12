import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

import VueRouter from "vue-router";
import {Router} from './Router/Router' ;
Vue.use(VueRouter)

Vue.prototype.$http = Axios;
const  router = new VueRouter(
  {routes:Router,
    mode:"history"
  }

);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
