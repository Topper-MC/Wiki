<template>
  <div class="value-display-container">
    <div class="value-display-header">
      <span class="value-display-title">Generated Queries</span>
    </div>
    <div class="value-display-content">
      <div class="output-item">
        <span class="output-label">Format String</span>
        <code class="output-code">{{ code }}</code>
      </div>
      <div class="output-item">
        <span class="output-label">In default-line</span>
        <code class="output-code">{value_{{ code }}}</code>
      </div>
      <div class="output-item">
        <span class="output-label">In <code class="inline-code">value</code> query</span>
        <code class="output-code">&lt;holder&gt;;value;{{ code }}</code>
      </div>
      <div class="output-item">
        <span class="output-label">In <code class="inline-code">top_value</code> query</span>
        <code class="output-code">&lt;holder&gt;;top_value;&lt;position&gt;;{{ code }}</code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  code: string;
}>();
</script>

<style scoped>
.value-display-container {
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--sl-color-bg);
  border: 1px solid var(--sl-color-gray-5);
}

.value-display-header {
  background-color: var(--sl-color-gray-6);
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--sl-color-gray-5);
  color: var(--sl-color-white);
  font-size: 0.875rem;
  font-weight: 600;
}

.value-display-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.output-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.output-label {
  font-size: 0.875rem;
  color: var(--sl-color-gray-3);
  font-weight: 500;
}

.output-code {
  display: block;
  padding: 0.75rem 1rem;
  background-color: var(--sl-color-black);
  border: 1px solid var(--sl-color-gray-5);
  border-radius: 0.375rem;
  color: var(--sl-color-text);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  white-space: pre;
}

.inline-code {
  color: var(--sl-color-text-accent);
  background-color: transparent;
  padding: 0;
  font-size: 0.875rem;
}
</style>
