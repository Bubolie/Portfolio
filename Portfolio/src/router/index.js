import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import creation from '../views/creation.vue'
import contact from '../views/contact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: home
    },
    {
      path: '/creation',
      name: 'Mes Créations',
      component: creation
    },
    {
      path: '/contact',
      name: 'Me contacter',
      component: contact
    }
  ]
})

export default router
