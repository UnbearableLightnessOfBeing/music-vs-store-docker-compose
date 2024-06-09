<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Product, ProductForm as ProductFormType } from '../types/products'
import { convertResponseToProductForm } from '../types/products'
import ProductForm from "./ProductForm.vue";
import api from '../../api'
import { AxiosError } from 'axios';

const route = useRoute()
const router = useRouter()

const form = ref<ProductFormType>({
  name: "",
  price_int: 0,
  in_stock: false,
  label_id: 0,
  description: "",
  characteristics: "",
});

const getProduct = async () => {
  const res = await api.get<{ product: Product }>(`/products/${route.params.id}`)
  form.value = convertResponseToProductForm(res.data.product)
}
getProduct()

const errorMessage = ref("");

type ErrorMessage = {
  message: string;
};

const updateProduct = async () => {
  try {
    await api.put(`/products/${route.params.id}`, form.value);
    router.push({ path: "/admin/products" });
  } catch (error) {
    errorMessage.value = (<ErrorMessage>(
      (<AxiosError>error).response?.data
    ))?.message;
  }
};
</script>

<template>
  <div class="max-w-[1000px] space-y-4">
    <product-form 
      :form="form"
      @update:formValue="(propName, value) => {
        // @ts-ignore ???
        form[propName] = value
      }"
    />
    <button
      class="px-4 py-2 rounded-sm text-xl bg-green-400 text-white hover:bg-emerald-400"
      @click="updateProduct"
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
