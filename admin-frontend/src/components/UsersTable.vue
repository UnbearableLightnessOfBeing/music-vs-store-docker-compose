<script setup lang="ts">
import api from '../../api'
import { ref } from 'vue'

type User = {
  id: number
  username: string
  email: string
  is_admin: {
    Bool: boolean,
    Valid: boolean
  }
}

const users = ref<User[]>([])

const fetchUsers = async () => {
  const res = await api.get<{ users: User[]}>('/users')
  users.value  = res.data.users
}
fetchUsers()

const userToggleIsAdmin = async (id: number) => {
  await api.put(`/users/${id}`)
  fetchUsers()
}
</script>

<template>
  <div class="border shadow-sm rounded-lg p-2">
    <div class="relative w-full overflow-auto">
      <table class="w-full caption-bottom text-sm">
        <thead class="[&amp;_tr]:border-b">
          <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
              ID
            </th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 min-w-[150px]">
              Name
            </th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
              Email
            </th>
            <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
              Admin
            </th>
            <th class="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="[&amp;_tr:last-child]:border-0">
          <tr v-for="user in users" :key="user.id" class="border-b data-[state=selected]:bg-muted hover:bg-gray-50">
            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{{ user.id }}</td>
            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{{ user.username }}</td>
            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
              {{ user.email }}
            </td>
            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">{{ user.is_admin.Bool ? 'Да' : 'Нет' }}</td>
            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">
              <div 
                v-if="!user.is_admin.Bool" 
                class="text-lime-500 hover:underline cursor-pointer"
                @click="userToggleIsAdmin(user.id)"
              >
                Дать права админа
              </div>
              <div 
                v-else 
                class="text-rose-500 hover:underline cursor-pointer"
                @click="userToggleIsAdmin(user.id)"
              >
                Забрать права админа
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="css">

</style>
