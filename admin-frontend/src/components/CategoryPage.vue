<script setup lang="ts">
import CategoryForm from './CategoryForm.vue';
import { CategoryForm as CFType, Category } from '../types/categories';
import { AxiosError } from 'axios';
import { ref } from 'vue'
import api from '../../api'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const form = ref<CFType>({
  name: '',
  slug: ''
})

const image = ref<string | null>(null)

const getCategory = async () => {
  const res = await api.get<{ category: Category }>(`/categories/${route.params.id}`)
  form.value.name = res.data.category.name
  form.value.slug = res.data.category.slug
  if (res.data.category.img_url.Valid) {
    console.log(res.data.category)
    image.value = res.data.category.img_url.String
  }
}
getCategory()

const errorMessage = ref("");

type ErrorMessage = {
  message: string;
};

const updateCategory = async () => {
  try {
    await api.put(`/categories/${route.params.id}`, form.value);
    router.push({ path: "/admin/categories" });
  } catch (error) {
    errorMessage.value = (<ErrorMessage>(
      (<AxiosError>error).response?.data
    ))?.message;
  }
};

const formRef = ref<HTMLFormElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const addImage = async () => {
  if (inputRef.value) {
    if (inputRef.value.files) {
      await api.post(`/categories/${route.params.id}/image`, {
        image: inputRef.value.files[0]
      }, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      formRef.value?.reset()
    }
  }
  getCategory()
}
</script>

<template>
  <div class="max-w-[1000px] space-y-4">
    <div class="space-y-2">
        <h2 class="text-2xl">Изображения</h2> 
        <div 
          v-if="image !== null"
          class="max-w-[250px] relative group"
        >
          <img 
            :src="image"
          />
        </div>
        <div v-else>Нет изображений</div>
        <form 
          ref="formRef" 
          class="space-y-2 ml-auto w-fit"
          @submit.prevent
        >
          <label for="image">Поменять/добавить изображение</label>
          <div class="block">
            <input ref="inputRef" type="file" id="image" name="image">
            <button 
              class="px-4 py-2 rounded-sm border border-green-400 hover:bg-green-400 hover:text-white"
              @click="addImage"
            >
              Добавить
            </button>
          </div>
        </form>
    </div>
    <category-form 
      :form="form"
      @update:formValue="(propName, value) => {
        // @ts-ignore ???
        form[propName] = value
      }"
    />
    <button
      class="px-4 py-2 rounded-sm text-xl bg-green-400 text-white hover:bg-emerald-400"
      @click="updateCategory"
    >
      Изменить
    </button>
    <div
      v-if="errorMessage"
      class="p-5 rounded-md bg-rose-400 w-fit text-white"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>

</style>

