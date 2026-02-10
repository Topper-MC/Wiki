<template>
  <input
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="form-input"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string | number
  id?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>

<style scoped>
.form-input {
  display: block;
  width: 100%;
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid var(--sl-color-gray-5); /* border-gray-300 / dark:border-gray-700 approx */
  background-color: var(--sl-color-bg); /* dark:bg-gray-800 approx */
  color: var(--sl-color-text); /* dark:text-gray-300 approx */
  padding: 0.5rem; /* p-2 */
  font-size: 0.875rem; /* sm:text-sm */
  line-height: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
}

.form-input:focus {
  outline: 2px solid var(--sl-color-accent); /* focus:ring-indigo-500 */
  border-color: var(--sl-color-accent); /* focus:border-indigo-500 */
}
</style>
