<template>
  <label :for="htmlFor" class="form-label">
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  htmlFor?: string
}>()
</script>

<style scoped>
.form-label {
  display: block;
  font-size: 0.875rem; /* text-sm */
  line-height: 1.25rem;
  font-weight: 500; /* font-medium */
  color: var(--sl-color-text-accent); /* Using Starlight variable for better theme integration */
  margin-bottom: 0.25rem; /* mb-1 */
}

/* Fallback if starlight vars not available or different theme */
:where(html[data-theme='light']) .form-label {
    color: #374151; /* text-gray-700 */
}

:where(html[data-theme='dark']) .form-label {
    color: #d1d5db; /* text-gray-300 */
}
</style>
