import SideBar from '@/components/black/SidebarPlugin'
import Notify from '@/components/black/NotificationPlugin'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import RTLPlugin from './RTLPlugin'

// css assets
import '@/assets/black/sass/black-dashboard.scss'
import '@/assets/black/css/nucleo-icons.css'
import '@/assets/black/demo/demo.css'
import '@/assets/black/css/custom.css'

export default {
  install (Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(SideBar)
    Vue.use(Notify)
    Vue.use(RTLPlugin)
  },
}
