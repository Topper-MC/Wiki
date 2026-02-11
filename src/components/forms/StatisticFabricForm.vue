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

    <form.Field name="statisticType">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('statisticType')" :description="t('statisticTypeDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="statistic" mode="array">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('statistic')" :description="t('statisticDescription')">
           <div v-for="(item, index) in state.value" :key="index" class="list-item">
            <Input
              :model-value="item"
              @update:model-value="(val) => field.handleChange((old) => old.map((v, i) => i === index ? val as string : v))"
            />
            <button type="button" @click="field.removeValue(index)" class="remove-btn">{{ t('remove') }}</button>
          </div>
          <button type="button" @click="field.pushValue('')" class="add-btn">{{ t('addStatistic') }}</button>
        </FieldWrapper>
      </template>
    </form.Field>
  </form>

  <CodeBlock :code="code" lang="json" />
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
    statisticType: 'minecraft:custom',
    statistic: ['minecraft:jump'] as string[],
  },
});

const formState = useStore(form.store);

const code = computed(() => {
    const values = formState.value.values;
    const holderObj: any = {
        type: 'statistic',
        'statistic-type': values.statisticType
    };
    
    if (values.statistic && values.statistic.length > 0) {
        if (values.statistic.length === 1) {
            holderObj.statistic = values.statistic[0];
        } else {
            holderObj.statistic = values.statistic;
        }
    }

    const obj = {
        holders: {
            [values.name]: holderObj
        }
    };
    
    return JSON.stringify(obj, null, 2);
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
