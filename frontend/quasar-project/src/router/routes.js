const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/IndexPage', component: () => import('pages/IndexPage.vue') },
      { path: '/LocationPage', component: () => import('pages/LocationPage.vue') },
      { path: '/PretrazivanjePage', component: () => import('pages/PretrazivanjePage.vue') },
      { path: '/AboutPage', component: () => import('pages/AboutPage.vue') },
      { path: '/PopisKnjigaPage', component: () => import('pages/PopisKnjigaPage.vue') },
      { path: '/LoginPage', component: () => import('pages/LoginPage.vue') },
      { path: '/RegisterPage', component: () => import('pages/RegisterPage.vue') }
      
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
