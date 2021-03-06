import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/app-card',
    name: 'card-index',
    component: () => import('../views/applelike-card/index.vue')
  },
  {
    path: '/export-excel',
    name: 'excel-index',
    component: () => import('../views/export-excel/index.vue')
  },
  {
    path: '/fast-debug',
    name: 'fast-debug-index',
    component: () => import('../views/fast-debug-environment/index.vue')
  },
  {
    path: '/online-vue-editer',
    name: 'online-vue-editer',
    component: () => import('../views/online-vue-editer/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
