<script setup lang="ts">
import AddItemButton from './AddItemButton.vue';
import { Label } from  '../types/labels'
import api from '../../api'
import  { ref } from 'vue'

const labels = ref<Label[]>([])

const getLabels = async () => {
  const res = await api.get<{ labels: Label[] }>('/labels')
  labels.value = res.data.labels
}
getLabels()

const deleteLabel = async (id: number) => {
  await api.delete(`/labels/${id}`)
  getLabels()
}

</script>

<template>
  <div class="space-y-4">
    <add-item-button 
      :path="'/admin/labels/create'"
      :text="'Создать нового производителя'"
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
                class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell"
              >
                Название
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
              v-for="label in labels"
              :key="label.id"
              class="border-b data-[state=selected]:bg-muted hover:bg-gray-50"
            >
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium"
              >
                {{ label.id }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-md"
              >
                {{ label.name }}
              </td>
              <td
                class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right"
              >
                <div class="flex gap-4 justify-end">
                  <router-link
                    :to="`/admin/labels/${label.id}`"
                    class="px-3 py-2 bg-green-500 rounded-md w-fit text-white cursor-pointer"
                  >
                    Изменить
                  </router-link>
                  <div
                    class="px-3 py-2 bg-rose-500 rounded-md w-fit text-white cursor-pointer"
                    @click="deleteLabel(label.id)"
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

<style scoped>

</style>
