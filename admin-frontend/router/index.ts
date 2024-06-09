import { createWebHistory, createRouter } from 'vue-router'
import UsersTable from '../src/components/UsersTable.vue'
import DashboardPage from '../src/components/DashboardPage.vue'
import CategoriesPage from '../src/components/CategoriesPage.vue'
import LabelsPage from '../src/components/LabelsPage.vue'
import OrdersPage from '../src/components/OrdersPage.vue'
import ProductsPage from '../src/components/ProductsPage.vue'
import ProductPage from '../src/components/ProductPage.vue'
import CreateProduct from '../src/components/CreateProduct.vue'

const routes = [
  { path: '/admin/', component: DashboardPage },
  { path: '/admin/users', component: UsersTable },
  { path: '/admin/products', component: ProductsPage },
  { path: '/admin/products/create', component: CreateProduct },
  { path: '/admin/products/:id', component: ProductPage },
  { path: '/admin/categories', component: CategoriesPage },
  { path: '/admin/labels', component: LabelsPage },
  { path: '/admin/orders', component: OrdersPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

