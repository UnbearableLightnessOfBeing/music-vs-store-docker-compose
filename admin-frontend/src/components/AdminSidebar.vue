<script setup lang="ts">
import { RouterLink } from 'vue-router'

const tabs = [
  { text:   'Dashboard', path: '/admin/' },
  { text:   'Пользователи', path: '/admin/users' },
  { text:   'Товары', path: '/admin/products' },
  { text:   'Категории', path: '/admin/categories' },
  { text:   'Производители', path: '/admin/labels' },
  { text:   'Заказы', path: '/admin/orders' }
]

</script>

<template>
  <div id="sidebar" class="flex flex-col gap-2">
    <div class="flex h-[60px] items-center px-6">
      <a class="flex items-center gap-2 font-semibold" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
        <span class="">Music VS Store</span>
      </a>
    </div>
    <div class="flex-1">
      <nav class="grid items-start px-4 text-sm font-medium">
        <router-link
          v-for="(tab) in tabs"
          :to="tab.path"
          :key="tab.text"
          class="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          active-class="text-gray-900 bg-gray-200 hover:bg-gray-200 hover:text-gray-900 transition"
          href="#"
        >
          {{ tab.text }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="css">
</style>
