import Vue from 'vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSelectImage from 'vue-select-image'

Vue.use(BootstrapVue)
Vue.use(VueSelectImage)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')