const routes = [
  {
    path: '/',
    component: () => import('@/views/layouts/home/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/pages/home/Index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/pages/about/Index.vue'),
        meta: { src: require('@/assets/about.jpg') },
      },
      {
        path: 'contact-us',
        name: 'Contact',
        component: () => import('@/views/pages/contact-us/Index.vue'),
        meta: { src: require('@/assets/contact.jpg') },
      },
      {
        path: 'features',
        name: 'Features',
        component: () => import('@/views/pages/pro/Index.vue'),
        meta: { src: require('@/assets/pro.jpg') },
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/register/Index.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/login/Index.vue'),
      },
      {
        path: 'verify-email',
        name: 'VerifyEmail',
        component: () => import('@/views/pages/verify-email/Index.vue'),
      },
      {
        path: '*',
        name: 'FourOhFour',
        component: () => import('@/views/pages/404/Index.vue'),
      },
    ],
  },
]

export default routes
