<template>
  <div class="code-block-container">
    <div class="code-block-header" v-if="title">
        <span class="code-block-title">{{ title }}</span>
    </div>
    <div class="code-block-content">
        <pre :class="`language-${lang}`"><code>{{ code }}</code></pre>
        <button class="copy-btn" @click="copyToClipboard" :title="copied ? 'Copied' : 'Copy'">
            <span v-if="!copied">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </span>
            <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </span>
        </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  code: string;
  lang?: string;
  title?: string;
}>();

const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
</script>

<style scoped>
.code-block-container {
  margin-top: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #1e1e1e; /* Dark background matching typical editors */
  border: 1px solid #333;
  position: relative;
}

.code-block-header {
    background-color: #2d2d2d;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #333;
    color: #e5e5e5;
    font-size: 0.875rem;
}

.code-block-content {
    position: relative;
}

pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto; /* Horizontal scroll for mobile */
  color: #e5e5e5;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  tab-size: 2;
}

.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #a3a3a3;
  transition: all 0.2s;
  padding: 0;
}

.copy-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}

/* Ensure code wraps if needed, or scrolls depending on preference. 
   Starlight usually scrolls. */
code {
    white-space: pre; 
}
</style>
