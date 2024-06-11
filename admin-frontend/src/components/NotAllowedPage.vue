<script setup lang="ts">
import api from '../../api'

const checkAuth = async() => {
  await api.get('/check-auth') 
}
checkAuth()
</script>

<template>
  <div class="text-center mt-20 space-y-[20px]">
    <div class="text-4xl text-center text-red-400">
      Вы не можете просматривать эту страницу
    </div>
    <div class="text-xl">
      <a class="text-purple-400 hover:underline" href="../">Авторизуйтесь</a> на сайте с правами администратора
    </div>
  </div>
</template>

<style scoped></style>
