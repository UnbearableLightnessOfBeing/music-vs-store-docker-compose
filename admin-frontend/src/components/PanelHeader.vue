<script setup lang="ts">
defineProps<{
  heading: string
}>()
</script>

<template>
  <header class="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6">
    <div class="text-2xl">{{ heading }}</div>
    <div class="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <form class="ml-auto flex-1 sm:flex-initial">
        <div class="relative">
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
            class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            class="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
            placeholder="Search..."
            type="search"
          />
        </div>
      </form>
    </div>
  </header>
</template>

<style scoped lang="css">

</style>
