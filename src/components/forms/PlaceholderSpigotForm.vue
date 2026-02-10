<template>
  <Vueform v-model="formData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="placeholder" label="Placeholder" description="The placeholder used to get the value" />
    <CheckboxElement name="online" description="Whether the placeholder should be parsed only for players who are currently online in the server. When enabled, the plugin parses placeholder values for online players. When disabled, it parses for all players, including offline.">
        Parse for online players only
    </CheckboxElement>
  </Vueform>

  <div class="language-yaml">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
    name: 'money',
    placeholder: '%vault_eco_balance%',
    online: true,
});

const code = computed(() => {
  return `holders:
  ${formData.value.name}:
    type: placeholder
    placeholder: "${formData.value.placeholder}"
    online: ${formData.value.online}`;
});
</script>

<style scoped>
.language-yaml {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow-x: auto;
    font-family: monospace;
}
</style>
