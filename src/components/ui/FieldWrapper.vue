<template>
  <div class="field-wrapper">
    <Label v-if="label" :htmlFor="id">{{ label }}</Label>
    <slot :id="id" />
    <p v-if="description" class="field-description">{{ description }}</p>
    <p v-if="error" class="field-error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import Label from './Label.vue';
import { useId } from 'vue';

const props = defineProps<{
  label?: string
  description?: string
  error?: string
  id?: string
}>()

const id = props.id || useId()
</script>

<style scoped>
.field-wrapper {
  margin-bottom: 1rem; /* mb-4 */
}

.field-description {
  margin-top: 0.25rem; /* mt-1 */
  font-size: 0.875rem; /* text-sm */
  color: var(--sl-color-gray-3); /* text-gray-500 / dark:text-gray-400 */
}

.field-error {
  margin-top: 0.25rem; /* mt-1 */
  font-size: 0.875rem; /* text-sm */
  color: #dc2626; /* text-red-600 */
}
</style>
