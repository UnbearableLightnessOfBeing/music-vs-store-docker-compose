<script setup lang="ts">
import LabelForm from "./LabelForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../../api";
import { AxiosError } from "axios";
import type { LabelForm as LabelFormType} from '../types/labels'

const router = useRouter()

const form = ref<LabelFormType>({
  name: '',
})

const errorMessage = ref("");

type ErrorMessage = {
  message: string;
};

const createLabel = async () => {
  try {
    await api.post("/labels", form.value);
    router.push({ path: "/admin/labels" });
  } catch (error) {
    errorMessage.value = (<ErrorMessage>(
      (<AxiosError>error).response?.data
    ))?.message;
  }
};

</script>

<template>
  <div class="max-w-[1000px] space-y-4">
    <label-form 
      :form="form"
      @update:formValue="(propName, value) => {
        // @ts-ignore ???
        form[propName] = value
      }"
    />
    <button
      class="px-4 py-2 rounded-sm text-xl bg-green-400 text-white hover:bg-emerald-400"
      @click="createLabel"
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

<style scoped>

</style>

