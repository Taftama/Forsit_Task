import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue'
import InventoryPage from '../views/InventoryPage.vue'
import RevenuePage from '../views/RevenuePage.vue'

const routes = [
  { path: '/', redirect: '/register' },
  { path: '/register', component: RegisterPage },
  { path: '/inventory', component: InventoryPage },
  { path: '/revenue', component: RevenuePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router