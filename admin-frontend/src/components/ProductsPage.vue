<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import type { Product } from "../types/products";
import api from "../../api";
import AddItemButton from './AddItemButton.vue'

const products = ref<Product[]>([]);

const getProducts = async () => {
  const res = await api.get<{ products: Product[] }>("/products");
  products.value = res.data.products;
};

getProducts()

const deleteProduct = async (id: number) => {
  await api.delete(`/products/${id}`)
  getProducts()
}
</script>

<template>
  <div class="space-y-4">
    <add-item-button 
      :path="'/admin/products/create'"
      :text="'Создать новый товар'"
    />
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
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 min-w-[150px]"
              >
                Изображение
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Название
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Цена
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                В наличии
              </th>
              <th
                class="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right"
              >
                Действия
              </th>
            </tr>
          </thead>
          <tbody class="[&amp;_tr:last-child]:border-0">
            <tr
              v-for="product in products"
              :key="product.id"
              class="border-b data-[state=selected]:bg-muted hover:bg-gray-50"
            >
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
              >
                {{ product.id }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                <img
                  v-if="product.images === null || product.images.length === 0"
                  class="max-w-[100px]"
                  :src="'/assets/images/no-image.jpg'"
                />
                <img v-else class="max-w-[100px]" :src="product.images[0]" />
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-md"
              >
                {{ product.name }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell font-semibold"
              >
                {{ product.price_int }} ₽
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                <div v-if="product.in_stock" class="text-lg text-green-400">
                  Да
                </div>
                <div v-else class="text-lg text-rose-400">Нет</div>
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"
              >
                <div class="flex gap-4 justify-end">
                  <router-link
                    :to="`/admin/products/${product.id}`"
                    class="px-3 py-2 bg-green-500 rounded-md w-fit text-white cursor-pointer"
                  >
                    Изменить
                  </router-link>
                  <div
                    class="px-3 py-2 bg-rose-500 rounded-md w-fit text-white cursor-pointer"
                    @click="deleteProduct(product.id)"
                  >
                    Удалить
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css"></style>
