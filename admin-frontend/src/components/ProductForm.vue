<script setup lang="ts">
import InputField from './InputField.vue';
import { InputType } from '../types/input'
import { ProductForm } from '../types/products'
import { Label } from '../types/labels'
import { Category } from '../types/categories'
import { ref } from 'vue'
import api from '../../api'

defineProps<{
  form: ProductForm
}>()

defineEmits<{
  (e: 'update:formValue', propName: keyof ProductForm, value: ProductForm): void
}>()

const labels = ref<Label[]>([]);

(async () => {
  const res = await api.get<{ labels: Label[] }>("/labels");
  labels.value = res.data.labels;
})();

const categories = ref<Category[]>([]);
(async () => {
  const res = await api.get<{ categories: Category[] }>("/categories");
  categories.value = res.data.categories;
})();
</script>

<template>
  <div class="space-y-4">
    <input-field
      :model-value="form.name"
      name="name"
      label="Нaзвание"
      placeholder="Введите название"
      required
      @update:model-value="(value: string | number | boolean) => $emit('update:formValue', 'name', value)"
    />
    <input-field
      :model-value="form.price_int"
      :type="InputType.NUMBER"
      name="price_int"
      label="Цена"
      placeholder="Введите цену"
      required
      @update:model-value="(value: string | number | boolean) => $emit('update:formValue', 'price_int', value)"
    />
    <input-field :model-value="''" name="label_id" label="Прoизводитель">
      <select
        class="border border-primary p-1 rounded-sm"
        :value="form.label_id"
        @change="(evt) => $emit('update:formValue', 'label_id', Number((<HTMLSelectElement>evt.target).value))"
      >
        <option :value="0" class="hidden" selected>
          Введите производителя
        </option>
        <option v-for="label in labels" :key="label.id" :value="label.id">
          {{ label.name }}
        </option>
      </select>
    </input-field>

    <input-field :model-value="''" name="category_id" label="Категория">
      <select
        class="border border-primary p-1 rounded-sm"
        :value="form.category_id"
        @change="(evt) => $emit('update:formValue', 'category_id', Number((<HTMLSelectElement>evt.target).value))"
      >
        <option :value="0" class="hidden" selected>
          Выберите категорию
        </option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </input-field>

    <input-field
      :model-value="form.description"
      :type="InputType.TEXTAREA"
      name="description"
      label="Описание"
      placeholder="Введите описание"
      @update:model-value="(value: string | number | boolean) => $emit('update:formValue', 'description', value)"
    />
    <input-field
      :model-value="form.characteristics"
      :type="InputType.TEXTAREA"
      name="characteristics"
      label="Характериcтики"
      placeholder="Введите описание характеристик"
      @update:model-value="(value: string | number | boolean) => $emit('update:formValue', 'characteristics', value)"
    />
    <input-field
      :model-value="form.in_stock"
      :type="InputType.CHECKBOX"
      name="in_stock"
      label="В наличии"
      required
      @update:model-value="(value: string | number | boolean) => $emit('update:formValue', 'in_stock', value)"
    />
  </div>
</template>

<style scoped></style>
