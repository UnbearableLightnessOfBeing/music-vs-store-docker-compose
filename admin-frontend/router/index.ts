import { createWebHistory, createRouter } from 'vue-router'
import UsersTable from '../src/components/UsersTable.vue'
import ProductsPage from '../src/components/ProductsPage.vue'

const routes = [
  { path: '/admin/', component: UsersTable },
  { path: '/admin/products', component: ProductsPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

