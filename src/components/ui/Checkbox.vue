<template>
  <div class="checkbox-container">
    <div class="checkbox-wrapper">
      <input
        :id="id"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
        class="form-checkbox"
        v-bind="$attrs"
      />
    </div>
    <div class="label-wrapper">
      <label :for="id" class="checkbox-label">
        <slot />
      </label>
      <p v-if="description" class="checkbox-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: boolean
  id?: string
  description?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: flex-start;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  height: 1.25rem; /* h-5 */
}

.form-checkbox {
  height: 1rem; /* h-4 */
  width: 1rem; /* w-4 */
  border-radius: 0.25rem; /* rounded */
  border: 1px solid var(--sl-color-gray-5); /* border-gray-300 */
  color: var(--sl-color-accent); /* text-indigo-600 */
  background-color: var(--sl-color-bg); /* dark:bg-gray-800 */
}

.form-checkbox:focus {
  outline: 2px solid var(--sl-color-accent); /* focus:ring-indigo-500 */
}

.label-wrapper {
  margin-left: 0.75rem; /* ml-3 */
  font-size: 0.875rem; /* text-sm */
}

.checkbox-label {
  font-weight: 500; /* font-medium */
  color: var(--sl-color-text); /* text-gray-700 / dark:text-gray-300 */
}

.checkbox-description {
  color: var(--sl-color-gray-3); /* text-gray-500 / dark:text-gray-400 */
}
</style>
