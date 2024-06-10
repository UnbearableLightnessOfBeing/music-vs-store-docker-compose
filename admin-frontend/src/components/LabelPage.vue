<script setup lang="ts">
import LabelForm from './LabelForm.vue';
import { LabelForm as LabelFormType, Label } from '../types/labels';
import { AxiosError } from 'axios';
import { ref } from 'vue'
import api from '../../api'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const form = ref<LabelFormType>({
  name: ''
})

const getLabel = async () => {
  const res = await api.get<{ label: Label }>(`/labels/${route.params.id}`)
  form.value.name = res.data.label.name
}
getLabel()

const errorMessage = ref("");

type ErrorMessage = {
  message: string;
};

const updateLabel = async () => {
  try {
    await api.put(`/labels/${route.params.id}`, form.value);
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
      @click="updateLabel"
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
