<script setup lang="ts">
import AddItemButton from "./AddItemButton.vue";
import { Category } from "../types/categories";
import { ref } from "vue";
import api from "../../api";

const categories = ref<Category[]>([]);

const getCategories = async () => {
  const res = await api.get<{ categories: Category[] }>("/categories");
  categories.value = res.data.categories;
}
getCategories()

const deleteCategory = async (id: number) => {
  await api.delete(`/categories/${id}`)
  getCategories()
}

</script>

<template>
  <div class="space-y-4">
    <add-item-button
      :path="'/admin/categories/create'"
      :text="'Создать новую категорию'"
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
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 min-w-[150px]"
              >
                Название
              </th>
              <th
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Slug
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
              v-for="ctgr in categories"
              :key="ctgr.id"
              class="border-b data-[state=selected]:bg-muted hover:bg-gray-50"
            >
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
              >
                {{ ctgr.id }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                <div class="w-[100px] h-[100px]">
                  <img
                    v-if="ctgr.img_url !== null && !ctgr.img_url.Valid"
                    class="max-w-[100px]"
                    :src="'/assets/images/no-image.jpg'"
                  />
                  <img
                    v-else
                    class="w-full h-full object-cover"
                    :src="ctgr.img_url.String"
                  />
                </div>
              </td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                {{ ctgr.name }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                {{ ctgr.slug }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"
              >
                <div class="flex gap-4 justify-end">
                  <router-link
                    :to="`/admin/categories/${ctgr.id}`"
                    class="px-3 py-2 bg-green-500 rounded-md w-fit text-white cursor-pointer"
                  >
                    Изменить
                  </router-link>
                  <div
                    class="px-3 py-2 bg-rose-500 rounded-md w-fit text-white cursor-pointer"
                    @click="deleteCategory(ctgr.id)"
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

<style scoped></style>
