<template>
  <select
    :id="id"
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    class="form-select"
    v-bind="$attrs"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Option {
  label: string
  value: string | number
}

defineProps<{
  modelValue?: string | number
  id?: string
  options: Option[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>

<style scoped>
.form-select {
  display: block;
  width: 100%;
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid var(--sl-color-gray-5); /* border-gray-300 / dark:border-gray-700 */
  background-color: var(--sl-color-bg); /* dark:bg-gray-800 */
  color: var(--sl-color-text); /* dark:text-gray-300 */
  padding: 0.5rem; /* p-2 */
  font-size: 0.875rem; /* sm:text-sm */
  line-height: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
}

.form-select:focus {
  outline: 2px solid var(--sl-color-accent); /* focus:ring-indigo-500 */
  border-color: var(--sl-color-accent); /* focus:border-indigo-500 */
}
</style>
