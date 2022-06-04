import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'main',
    path: '/',
    component: () => import('../views/MainPage'),
  },
  {
    name: 'product',
    path: '/product/:id',
    component: () => import('../views/ProductPage'),
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('../views/CartPage'),
  },
  {
    name: 'notfound',
    path: '*',
    component: () => import('../views/NotFoundPage'),
  }
];

const router = new VueRouter({ routes });

export default router;
