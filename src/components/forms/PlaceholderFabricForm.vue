<template>
  <Vueform v-model="formData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="placeholder" label="Placeholder" description="The placeholder used to get the value" />
  </Vueform>

  <div class="language-json">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
    name: 'level',
    placeholder: '%playerex:level%',
});

const code = computed(() => {
    const obj = {
        holders: {
            [formData.value.name]: {
                type: 'placeholder',
                placeholder: formData.value.placeholder
            }
        }
    };
    return JSON.stringify(obj, null, 2);
});
</script>

<style scoped>
.language-json {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow-x: auto;
    font-family: monospace;
}
</style>
