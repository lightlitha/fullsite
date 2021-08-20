import Vue from 'vue'
import App from './App.vue'
import router from './core/router'
import vuetify from './core/plugins/vuetify'
import './core/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
