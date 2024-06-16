import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login page',
      component: () => import ('../views/login.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard page',
      component: () => import ('../views/dashboard.vue')
    },
    {
      path: '/purchase',
      name: 'Purchase page',
      component: () => import ('../views/purchase.vue')
    },
    {
      path: '/supply',
      name: 'Supply page',
      component: () => import ('../views/supply.vue')
    },
    {
      path: '/product',
      name: 'All product page',
      component: () => import ('../views/product.vue')
    },
    {
      path: '/category',
      name: 'Product category page',
      component: () => import ('../views/category.vue')
    },
    {
      path: '/user',
      name: 'User page',
      component: () => import ('../views/user.vue')
    },
    {
      path: '/account',
      name: 'Account page',
      component: () => import ('../views/account.vue')
    }
  ]
})

export default router
