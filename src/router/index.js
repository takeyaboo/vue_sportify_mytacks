import { createWebHistory, createRouter } from 'vue-router'
import Sportify from '../components/Sportify.vue'

const routes = [
  {
    path: '/',
    name: 'Sportify',
    component: Sportify,
    props: (route) => {
      return { routeParams: route.query }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
