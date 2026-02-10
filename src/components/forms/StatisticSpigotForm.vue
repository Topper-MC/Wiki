<template>
  <Vueform v-model="formData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="statistic" label="Statistic" description="The name of the statistic" />
    <ListElement name="material" label="Material" description="The name of the material. Used for some statistics that require an item." :element="{ type: 'text' }" />
    <ListElement name="entity" label="Entity" description="The name of the entity. Used for some statistics that require an entity." :element="{ type: 'text' }" />
  </Vueform>

  <div class="language-yaml">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
    name: 'jump',
    statistic: 'JUMP',
    material: [] as string[],
    entity: [] as string[],
});

const code = computed(() => {
  let c = `holders:
  ${formData.value.name}:
    type: statistic
    statistic: ${formData.value.statistic}`;
    
  if (formData.value.material && formData.value.material.length) {
      if (formData.value.material.length === 1) {
          c += `\n    material: ${formData.value.material[0]}`;
      } else {
          c += `\n    material:\n      - ${formData.value.material.join('\n      - ')}`;
      }
  }
  
  if (formData.value.entity && formData.value.entity.length) {
      if (formData.value.entity.length === 1) {
          c += `\n    entity: ${formData.value.entity[0]}`;
      } else {
          c += `\n    entity:\n      - ${formData.value.entity.join('\n      - ')}`;
      }
  }
  
  return c;
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
