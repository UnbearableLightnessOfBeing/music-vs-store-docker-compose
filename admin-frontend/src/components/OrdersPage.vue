<script setup lang="ts">
import { Order } from '../types/orders'
import { ref } from 'vue'
import api from '../../api'

const orders = ref<Order[]>([])

const getOrders = async () => {
  const res = await api.get<{ orders: Order[] }>('/orders')
  orders.value = res.data.orders
}
getOrders()

</script>

<template>
  <div class="space-y-4">
    <div class="border shadow-sm rounded-lg p-2">
      <div class="relative w-full overflow-auto">
        <table class="w-full caption-bottom text-sm">
          <thead class="[&amp;_tr]:border-b">
            <tr
              class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
            >
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]"
              >
                ID
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Дата
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Сумма
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Способ оплаты
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Доставка
              </th>
              <th
                class="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right"
              >
              </th>
            </tr>
          </thead>
          <tbody class="[&amp;_tr:last-child]:border-0">
            <tr
              v-for="order in orders"
              :key="order.id"
              class="border-b data-[state=selected]:bg-muted hover:bg-gray-50"
            >
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
              >
                {{ order.id }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-md"
              >
                {{ new Date(order.created_at.Time).toLocaleDateString('ru') }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-md"
              >
                {{ order.price_int }} Руб
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-md"
              >
                {{ order.payment_method.String }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-md"
              >
                {{ order.delivery_method.String }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"
              >
                <div class="flex gap-4 justify-end">
                  <router-link
                    :to="`/admin/orders/${order.id}`"
                    class="px-3 py-2 bg-green-500 rounded-md w-fit text-white cursor-pointer"
                  >
                    Подробнее
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

