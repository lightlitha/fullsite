import Vue from 'vue'
import App from './App.vue'
import router from './core/router'
import vuetify from './core/plugins/vuetify'
import './core/plugins'

import BlackDashboard from './core/plugins/black'

Vue.config.productionTip = false
Vue.use(BlackDashboard)

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
