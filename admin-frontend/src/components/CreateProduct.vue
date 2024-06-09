<script setup lang="ts">
import ProductForm from "./ProductForm.vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../../api";
import { AxiosError } from "axios";
import type { ProductForm as ProductFormType } from '../types/products'

const router = useRouter();

const form = reactive<ProductFormType>({
  name: "",
  price_int: 0,
  in_stock: false,
  label_id: 0,
  description: "",
  characteristics: "",
});

const errorMessage = ref("");

type ErrorMessage = {
  message: string;
};

const createProduct = async () => {
  try {
    await api.post("/products", form);
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
      @click="createProduct"
    >
      Создать
    </button>
    <div
      v-if="errorMessage"
      class="p-5 rounded-md bg-rose-400 w-fit text-white"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped></style>
