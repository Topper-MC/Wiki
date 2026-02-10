<template>
  <form class="form-container">
    <form.Field name="name">
      <template #default="{ field, state }">
        <FieldWrapper label="Holder Name" description="The name of the holder" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="field.handleChange"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="statistic">
      <template #default="{ field, state }">
        <FieldWrapper label="Statistic" description="The name of the statistic" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="field.handleChange"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>
    
    <form.Field name="material" mode="array">
      <template #default="{ field, state }">
        <FieldWrapper label="Material" description="The name of the material. Used for some statistics that require an item.">
          <div v-for="(item, index) in state.value" :key="index" class="list-item">
            <Input
              :model-value="item"
              @update:model-value="(val) => field.handleChange((old) => old.map((v, i) => i === index ? val : v))"
            />
            <button type="button" @click="field.removeValue(index)" class="remove-btn">Remove</button>
          </div>
          <button type="button" @click="field.pushValue('')" class="add-btn">+ Add Material</button>
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="entity" mode="array">
      <template #default="{ field, state }">
        <FieldWrapper label="Entity" description="The name of the entity. Used for some statistics that require an entity.">
           <div v-for="(item, index) in state.value" :key="index" class="list-item">
            <Input
              :model-value="item"
              @update:model-value="(val) => field.handleChange((old) => old.map((v, i) => i === index ? val : v))"
            />
            <button type="button" @click="field.removeValue(index)" class="remove-btn">Remove</button>
          </div>
          <button type="button" @click="field.pushValue('')" class="add-btn">+ Add Entity</button>
        </FieldWrapper>
      </template>
    </form.Field>
  </form>

  <div class="language-yaml">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useStore } from '@tanstack/vue-form';
import Input from '../ui/Input.vue';
import FieldWrapper from '../ui/FieldWrapper.vue';

const form = useForm({
  defaultValues: {
    name: 'jump',
    statistic: 'JUMP',
    material: [] as string[],
    entity: [] as string[],
  },
});

const formState = useStore(form.store);

const code = computed(() => {
  const values = formState.value.values;
  let c = `holders:
  ${values.name}:
    type: statistic
    statistic: ${values.statistic}`;
    
  if (values.material && values.material.length) {
      if (values.material.length === 1) {
          c += `\n    material: ${values.material[0]}`;
      } else {
          c += `\n    material:\n      - ${values.material.join('\n      - ')}`;
      }
  }
  
  if (values.entity && values.entity.length) {
      if (values.entity.length === 1) {
          c += `\n    entity: ${values.entity[0]}`;
      } else {
          c += `\n    entity:\n      - ${values.entity.join('\n      - ')}`;
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

.list-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
}

.remove-btn {
  padding: 0.25rem 0.5rem;
  color: #ef4444; /* text-red-500 */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.remove-btn:hover {
  color: #b91c1c; /* text-red-700 */
}

.add-btn {
  font-size: 0.875rem;
  color: var(--sl-color-accent); /* text-indigo-600 approx */
  background: none;
  border: none;
  cursor: pointer;
}

.add-btn:hover {
    text-decoration: underline;
}
</style>
