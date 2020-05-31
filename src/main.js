import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import routerOptions from './router/routerOptions'
import storeOptions from './stores/store'

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(routerOptions);
const store = new Vuex.Store(storeOptions);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
