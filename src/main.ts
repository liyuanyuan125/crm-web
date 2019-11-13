import 'amfe-flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Toast, Dialog } from 'vant'

Vue.config.productionTip = false

Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
