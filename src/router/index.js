import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue'),
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})

router.afterEach((to, from) => {
  NProgress.done();
})

export default router;
