<template>
  <form class="form-container">
    <form.Field name="customGroups" mode="array">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('customGroups')" :description="t('customGroupsDescription')">
           <div v-for="(item, index) in state.value" :key="index" class="list-item">
             <form.Field :name="`customGroups[${index}].number`">
               <template #default="{ field: numberField, state: numberState }">
                 <Input
                   :placeholder="t('numberExample')"
                   :model-value="numberState.value"
                   @update:model-value="(val) => numberField.handleChange(val as string)"
                   @blur="numberField.handleBlur"
                   class="flex-1"
                 />
               </template>
             </form.Field>
             <form.Field :name="`customGroups[${index}].suffix`">
               <template #default="{ field: suffixField, state: suffixState }">
                 <Input
                   :placeholder="t('suffixExample')"
                   :model-value="suffixState.value"
                   @update:model-value="(val) => suffixField.handleChange(val as string)"
                   @blur="suffixField.handleBlur"
                   class="flex-1"
                 />
               </template>
             </form.Field>
            <button type="button" @click="field.removeValue(index)" class="remove-btn">{{ t('remove') }}</button>
          </div>
          <button type="button" @click="field.pushValue({ number: '', suffix: '' })" class="add-btn">{{ t('addGroup') }}</button>
        </FieldWrapper>
      </template>
    </form.Field>
  </form>

  <CodeBlock :code="code" lang="text" />
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
    customGroups: [] as { number: string, suffix: string }[],
  },
});

const formState = useStore(form.store);

const code = computed(() => {
    let format = 'shorten';
    const values = formState.value.values;
    
    // Check if there are valid custom groups
    const validGroups = values.customGroups.filter(g => g && g.number && g.suffix);
    
    if (validGroups.length > 0) {
        const config = validGroups.map(g => `${g.number}=${g.suffix}`).join('&');
        format = `shorten:${config}`;
    }

    return `{value_${format}}
<holder>;value;${format}
<holder>;top_value;<position>;${format}`;
});
</script>

<style scoped>
.list-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
}

.flex-1 {
  flex: 1;
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
