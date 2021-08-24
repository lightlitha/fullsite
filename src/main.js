import Vue from 'vue'
import App from './App.vue'
import router from './core/router'
import vuetify from './core/plugins/vuetify'
import i18n from './core/services/i18n'
import './core/plugins'

import BlackDashboard from './core/plugins/black'

Vue.config.productionTip = false
Vue.use(BlackDashboard)

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')
