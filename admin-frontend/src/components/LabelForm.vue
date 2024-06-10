<script setup lang="ts">
import InputField from './InputField.vue';
import { LabelForm } from '../types/labels'

defineProps<{
  form: LabelForm
}>()

defineEmits<{
  (e: 'update:formValue', propName: keyof LabelForm, value: LabelForm): void
}>()
</script>

<template>
  <div class="space-y-4">
    <input-field
      :model-value="form.name"
      name="name"
      label="Нвзвание"
      placeholder="Введите название"
      required
      @update:model-value="(value: string | number | boolean) => $emit('update:formValue', 'name', value)"
    />
  </div>
</template>

<style scoped>

</style>
