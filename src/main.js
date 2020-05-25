import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '../router/router';

import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

const routes = {
  '/auth/signin': SignIn,
  '/auth/signup': SignUp
}

Vue.config.productionTip = false

new Vue({
  vuetify,
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || App
    }
  },
  router: router,
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
