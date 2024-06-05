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
        <transition 
          mode="out-in"
          enter-active-class="transition"
          leave-active-class="transition"
          enter-from-class="opacity-0 translate-y-2"
          leave-to-class="opacity-0 translate-y-2"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</div>
  </div>
</template>

<style scoped>
</style>
