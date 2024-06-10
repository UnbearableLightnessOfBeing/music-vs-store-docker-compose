import { createWebHistory, createRouter } from 'vue-router'
import UsersTable from '../src/components/UsersTable.vue'
import DashboardPage from '../src/components/DashboardPage.vue'
import CategoriesPage from '../src/components/CategoriesPage.vue'
import LabelsPage from '../src/components/LabelsPage.vue'
import LabelPage from '../src/components/LabelPage.vue'
import CreateLabel from '../src/components/CreateLabel.vue'
import OrdersPage from '../src/components/OrdersPage.vue'
import OrderPage from '../src/components/OrderPage.vue'
import ProductsPage from '../src/components/ProductsPage.vue'
import ProductPage from '../src/components/ProductPage.vue'
import CreateProduct from '../src/components/CreateProduct.vue'
import CreateCategory from '../src/components/CreateCategory.vue'
import CategoryPage from '../src/components/CategoryPage.vue'

const routes = [
  { path: '/admin/', component: DashboardPage },
  { path: '/admin/users', component: UsersTable },
  { path: '/admin/products', component: ProductsPage },
  { path: '/admin/products/create', component: CreateProduct },
  { path: '/admin/products/:id', component: ProductPage },
  { path: '/admin/categories', component: CategoriesPage },
  { path: '/admin/categories/create', component: CreateCategory },
  { path: '/admin/categories/:id', component: CategoryPage },
  { path: '/admin/labels', component: LabelsPage },
  { path: '/admin/labels/create', component: CreateLabel },
  { path: '/admin/labels/:id', component: LabelPage },
  { path: '/admin/orders', component: OrdersPage },
  { path: '/admin/orders/:id', component: OrderPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

