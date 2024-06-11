<script setup lang="ts">
import { ref } from 'vue'
import api from '../../api'

const userCount = ref<number | null>(null)
const productCount = ref<number | null>(null)
const orderCount = ref<number | null>(null)
const revenue = ref<number | null>(null)

const getDashboardData = async () => {
  const res = await api.get<{
    userCount: number
    productCount: number
    orderCount: number
    revenue: number
  }>('/dashboard')

  userCount.value = res.data.userCount
  productCount.value = res.data.productCount
  orderCount.value = res.data.orderCount
  revenue.value = res.data.revenue
}

getDashboardData()
</script>

<template>
  <div class="">
  <div class="flex flex-col">
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-lg border bg-white shadow-sm">
          <div class="p-4">
            <h3 class="text-lg font-semibold">Всего пользователей</h3>
            <p class="text-4xl font-bold">{{ userCount }}</p>
          </div>
          <div class="flex items-center justify-center p-4">
            <svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="rounded-lg border bg-white shadow-sm">
          <div class="p-4">
            <h3 class="text-lg font-semibold">Всего товаров</h3>
            <p class="text-4xl font-bold">{{ productCount }}</p>
          </div>
          <div class="flex items-center justify-center p-4">
            <svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="rounded-lg border bg-white shadow-sm">
          <div class="p-4">
            <h3 class="text-lg font-semibold">Всего заказов</h3>
            <p class="text-4xl font-bold">{{ orderCount }}</p>
          </div>
          <div class="flex items-center justify-center p-4">
            <svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="rounded-lg border bg-white shadow-sm">
          <div class="p-4">
            <h3 class="text-lg font-semibold">Общая выручка</h3>
            <p class="text-4xl font-bold">{{ revenue }} ₽</p>
          </div>
          <div class="flex items-center justify-center p-4">
            <svg class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
</template>

<style scoped>

</style>
