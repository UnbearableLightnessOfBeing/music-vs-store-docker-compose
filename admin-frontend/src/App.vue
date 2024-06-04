<script setup lang="ts">
import AdminSidebar from './components/AdminSidebar.vue'
import PanelHeader from './components/PanelHeader.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <div class="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
  <div class="hidden border-r bg-gray-100/40 lg:block">
  <admin-sidebar />
  </div>
  <div class="flex flex-col">
    <panel-header 
      :heading="'Heading'"
    />
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</div>
  </div>
</template>

<style scoped>
</style>
