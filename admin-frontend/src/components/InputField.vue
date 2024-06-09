<script setup lang="ts" generic="T extends string | number | boolean">
import { InputType } from "../types/input";

const props = withDefaults(
  defineProps<{
    modelValue: T;
    name: string;
    label: string;
    required?: boolean;
    type?: InputType;
    placeholder?: string;
  }>(),
  {
    type: InputType.TEXT,
  }
);

const emits = defineEmits<{
  (e: "update:modelValue", value: T): void;
}>();

const updateModelValue = (event: Event) => {
  switch (props.type) {
    case InputType.TEXT:
      emits(
        "update:modelValue",
        // @ts-ignore generic issue
        String((<HTMLInputElement>event.target).value)
      );
      break;
    case InputType.TEXTAREA:
      emits(
        "update:modelValue",
        // @ts-ignore generic issue
        String((<HTMLInputElement>event.target).value)
      );
      break;
    case InputType.NUMBER:
      emits(
        "update:modelValue",
        // @ts-ignore generic issue
        Number((<HTMLInputElement>event.target).value)
      );
      break;
    case InputType.CHECKBOX:
      emits(
        "update:modelValue",
        // @ts-ignore generic issue
        Boolean((<HTMLInputElement>event.target).checked)
      );
      break;
  }
};
</script>

<template>
  <div class="space-y-2">
    <div class="flex gap-1 items-center justify-start">
      <span v-if="required" class="text-rose-400">*</span
      ><label class="text-sm" :for="name">{{ label }}</label>
    </div>
    <slot>
      <input
        v-if="
          type === InputType.TEXT ||
          type === InputType.NUMBER ||
          type === InputType.CHECKBOX
        "
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        class="px-4 py-2 border border-hover rounded-sm outline-1 outline-secondary bg-gray-50"
        :class="[
          { 'w-fit cursor-pointer': type === InputType.CHECKBOX },
          { 'w-full': type === InputType.NUMBER },
          { 'w-full': type === InputType.TEXT },
        ]"
        :value="modelValue"
        :checked="type === InputType.CHECKBOX ? modelValue : undefined"
        @input="updateModelValue"
        @change="updateModelValue"
      />
      <textarea
        v-else-if="type === InputType.TEXTAREA"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        class="px-4 py-2 border border-hover rounded-sm w-full outline-1 outline-secondary bg-gray-50"
        @input="updateModelValue"
        >{{ modelValue }}</textarea
      >
    </slot>
  </div>
</template>

<style scoped></style>
