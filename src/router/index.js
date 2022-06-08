import VueRouter from 'vue-router';

const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import('../views/MainPage'),
  },
  {
    name: 'product',
    path: '/product/:id',
    component: () => import('../views/ProductPage')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('../views/CartPage')
  },
  {
    name: 'notfound',
    path: '*',
    component: () => import('../views/NotFoundPage')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
