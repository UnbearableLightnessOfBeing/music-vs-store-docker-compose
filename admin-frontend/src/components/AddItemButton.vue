<script setup lang="ts">
defineProps<{
  text: string
  path: string
}>()
</script>

<template>
  <router-link
    :to="path"
    class="flex gap-3 justify-center items-center w-fit text-white bg-green-500 p-4 rounded-md hover:bg-green-400"
  >
    <div
      class="p-2 border-2 border-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
    >
      <p class="text-2xl h-[36px]">+</p>
    </div>
    <div class="text-lg font-semibold">{{ text }}</div>
  </router-link>
</template>

<style scoped lang=""></style>
