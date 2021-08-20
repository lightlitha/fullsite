import Vue from 'vue'
import VRouter from 'vue-router'

import staticR from '@/core/router/modules/static'

Vue.use(VRouter)
export const staticRoutes = staticR

const createRouter = () =>
  new VRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes: staticRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
