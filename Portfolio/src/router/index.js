import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import page404 from '../views/page404.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: home
    },
    {
      path: '/',
      name: 'page404',
      component: page404
    },
  ]
})

export default router
