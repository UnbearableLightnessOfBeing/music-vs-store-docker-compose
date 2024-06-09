<script setup lang="ts">
import InputField from './InputField.vue';
import { InputType } from '../types/input'
import { CategoryForm } from '../types/categories'

defineProps<{
  form: CategoryForm
}>()

defineEmits<{
  (e: 'update:formValue', propName: keyof CategoryForm, value: CategoryForm): void
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
    <input-field
      :model-value="form.slug"
      name="slug"
      label="Slug"
      placeholder="Введите slug"
      required
      @update:model-value="(value: string | number | boolean) => $emit('update:formValue', 'slug', value)"
    />
  </div>
</template>

<style scoped>

</style>
