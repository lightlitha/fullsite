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
        path: 'password/reset',
        name: 'RecoverPassword',
        component: () => import('@/views/pages/password/Forgot.vue'),
      },
      {
        path: 'tnc',
        name: 'TAndC',
        component: () => import('@/views/pages/tandc/Index.vue'),
      },
    ],
  },
  {
    path: '/a',
    component: () => import('@/views/layouts/dashboard/Index.vue'),
    redirect: '/a/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/pages/dashboard/Index.vue'),
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/pages/orders/Browse.vue'),
      },
      {
        path: 'orders/{id}',
        name: 'OrderRead',
        component: () => import('@/views/pages/orders/Read.vue'),
      },
      {
        path: 'shipments',
        name: 'Shipments',
        component: () => import('@/views/pages/shipments/Browse.vue'),
      },
      {
        path: 'shipments/{id}',
        name: 'ShipmentRead',
        component: () => import('@/views/pages/shipments/Read.vue'),
      },
      {
        path: 'invoices',
        name: 'Invoices',
        component: () => import('@/views/pages/invoices/Browse.vue'),
      },
      {
        path: 'invoices/{id}',
        name: 'InvoiceRead',
        component: () => import('@/views/pages/invoices/Read.vue'),
      },
      {
        path: 'refunds',
        name: 'Refunds',
        component: () => import('@/views/pages/refunds/Browse.vue'),
      },
      {
        path: 'refunds/{id}',
        name: 'RefundRead',
        component: () => import('@/views/pages/refunds/Read.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'FourOhFour',
    component: () => import('@/views/pages/404/Index.vue'),
  },
]

export default routes
