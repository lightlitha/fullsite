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
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/pages/products/Browse.vue'),
      },
      {
        path: 'products/{id}',
        name: 'ProductRead',
        component: () => import('@/views/pages/products/Read.vue'),
      },
      {
        path: 'products/add',
        name: 'ProductAdd',
        component: () => import('@/views/pages/products/Add.vue'),
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/pages/category/Browse.vue'),
      },
      {
        path: 'category/{id}',
        name: 'CategoryRead',
        component: () => import('@/views/pages/category/Read.vue'),
      },
      {
        path: 'category/add',
        name: 'CategoryAdd',
        component: () => import('@/views/pages/category/Add.vue'),
      },
      {
        path: 'attribute',
        name: 'attributes',
        component: () => import('@/views/pages/attributes/Browse.vue'),
      },
      {
        path: 'attribute/{id}',
        name: 'AttributeRead',
        component: () => import('@/views/pages/attributes/Read.vue'),
      },
      {
        path: 'attribute/add',
        name: 'AttributeAdd',
        component: () => import('@/views/pages/attributes/Add.vue'),
      },
      {
        path: 'attribute_family',
        name: 'Families',
        component: () => import('@/views/pages/families/Browse.vue'),
      },
      {
        path: 'attribute_family/{id}',
        name: 'FamilyRead',
        component: () => import('@/views/pages/families/Read.vue'),
      },
      {
        path: 'attribute_family/add',
        name: 'FamilyAdd',
        component: () => import('@/views/pages/families/Add.vue'),
      },
      {
        path: 'customer',
        name: 'Customers',
        component: () => import('@/views/pages/customer/Browse.vue'),
      },
      {
        path: 'costomer/{id}',
        name: 'CustomerRead',
        component: () => import('@/views/pages/customer/Read.vue'),
      },
      {
        path: 'customer/add',
        name: 'CustomerAdd',
        component: () => import('@/views/pages/customer/Add.vue'),
      },
      {
        path: 'groups',
        name: 'Groups',
        component: () => import('@/views/pages/group/Browse.vue'),
      },
      {
        path: 'groups/{id}',
        name: 'GroupRead',
        component: () => import('@/views/pages/group/Read.vue'),
      },
      {
        path: 'groups/add',
        name: 'GroupAdd',
        component: () => import('@/views/pages/group/Add.vue'),
      },
      {
        path: 'review',
        name: 'Reviews',
        component: () => import('@/views/pages/review/Browse.vue'),
      },
      {
        path: 'review/{id}',
        name: 'ReviewRead',
        component: () => import('@/views/pages/review/Read.vue'),
      },
      {
        path: 'review/add',
        name: 'ReviewAdd',
        component: () => import('@/views/pages/review/Add.vue'),
      },
      {
        path: 'catalog',
        name: 'Catalogs',
        component: () => import('@/views/pages/catalog/Browse.vue'),
      },
      {
        path: 'catalog/{id}',
        name: 'CatalogRead',
        component: () => import('@/views/pages/catalog/Read.vue'),
      },
      {
        path: 'catalog/add',
        name: 'CatalogAdd',
        component: () => import('@/views/pages/catalog/Add.vue'),
      },
      {
        path: 'cart',
        name: 'Carts',
        component: () => import('@/views/pages/cart/Browse.vue'),
      },
      {
        path: 'cart/{id}',
        name: 'CartRead',
        component: () => import('@/views/pages/cart/Read.vue'),
      },
      {
        path: 'cart/add',
        name: 'CartAdd',
        component: () => import('@/views/pages/cart/Add.vue'),
      },
      {
        path: 'campaign',
        name: 'Campaigns',
        component: () => import('@/views/pages/campaigns/Browse.vue'),
      },
      {
        path: 'campaign/{id}',
        name: 'CampaignRead',
        component: () => import('@/views/pages/campaigns/Read.vue'),
      },
      {
        path: 'campaigns/add',
        name: 'CampaignAdd',
        component: () => import('@/views/pages/campaigns/Add.vue'),
      },
      {
        path: 'emailtemplate',
        name: 'EmailTemplates',
        component: () => import('@/views/pages/emailtemplates/Browse.vue'),
      },
      {
        path: 'emailtemplate/{id}',
        name: 'EmailTemplateRead',
        component: () => import('@/views/pages/emailtemplates/Read.vue'),
      },
      {
        path: 'emailtemplate/add',
        name: 'EmailTemplateAdd',
        component: () => import('@/views/pages/emailtemplates/Add.vue'),
      },
      {
        path: 'event',
        name: 'Events',
        component: () => import('@/views/pages/events/Browse.vue'),
      },
      {
        path: 'event/{id}',
        name: 'EventRead',
        component: () => import('@/views/pages/events/Read.vue'),
      },
      {
        path: 'event/add',
        name: 'EventAdd',
        component: () => import('@/views/pages/events/Add.vue'),
      },
      {
        path: 'newsletter',
        name: 'Newsletters',
        component: () => import('@/views/pages/newsletter/Browse.vue'),
      },
      {
        path: 'newsletter/{id}',
        name: 'NewsletterRead',
        component: () => import('@/views/pages/newsletter/Read.vue'),
      },
      {
        path: 'newsletter/add',
        name: 'NewsletterAdd',
        component: () => import('@/views/pages/newsletter/Add.vue'),
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
