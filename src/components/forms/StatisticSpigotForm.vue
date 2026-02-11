<template>
  <form class="form-container">
    <form.Field name="name">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('holderName')" :description="t('holderDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="statistic">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('statistic')" :description="t('statisticDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>
    
    <form.Field name="material" mode="array">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('material')" :description="t('materialDescription')">
          <div v-for="(item, index) in state.value" :key="index" class="list-item">
            <Input
              :model-value="item"
              @update:model-value="(val) => field.handleChange((old) => old.map((v, i) => i === index ? val as string : v))"
            />
            <button type="button" @click="field.removeValue(index)" class="remove-btn">{{ t('remove') }}</button>
          </div>
          <button type="button" @click="field.pushValue('')" class="add-btn">{{ t('addMaterial') }}</button>
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="entity" mode="array">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('entity')" :description="t('entityDescription')">
           <div v-for="(item, index) in state.value" :key="index" class="list-item">
            <Input
              :model-value="item"
              @update:model-value="(val) => field.handleChange((old) => old.map((v, i) => i === index ? val as string : v))"
            />
            <button type="button" @click="field.removeValue(index)" class="remove-btn">{{ t('remove') }}</button>
          </div>
          <button type="button" @click="field.pushValue('')" class="add-btn">{{ t('addEntity') }}</button>
        </FieldWrapper>
      </template>
    </form.Field>
  </form>

  <CodeBlock :code="code" lang="yaml" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useStore } from '@tanstack/vue-form';
import Input from '~/components/ui/Input.vue';
import FieldWrapper from '~/components/ui/FieldWrapper.vue';
import CodeBlock from '~/components/ui/CodeBlock.vue';
import { useClientI18n } from '~/utils/i18n';

const { t } = useClientI18n();

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
