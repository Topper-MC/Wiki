<template>
  <form class="form-container">
    <form.Field name="decimalSeparator">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('decimalSeparator')" :description="t('decimalSeparatorDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="groupingSeparator">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('groupingSeparator')" :description="t('groupingSeparatorDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="groupingSize">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('groupingSize')" :description="t('groupingSizeDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            type="number"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="maximumFractionDigits">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('maximumFractionDigits')" :description="t('maximumFractionDigitsDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            type="number"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
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
    decimalSeparator: '.',
    groupingSeparator: ',',
    groupingSize: '3',
    maximumFractionDigits: '2',
  },
});

const formState = useStore(form.store);

const code = computed(() => {
    const values = formState.value.values;
    const parts = [];
    if (values.decimalSeparator) parts.push(`decimalSeparator=${values.decimalSeparator}`);
    if (values.groupingSeparator) parts.push(`groupingSeparator=${values.groupingSeparator}`);
    if (values.groupingSize) parts.push(`groupingSize=${values.groupingSize}`);
    if (values.maximumFractionDigits) parts.push(`maximumFractionDigits=${values.maximumFractionDigits}`);
    
    const config = parts.join('&');
    const format = `decimal:${config}`;
    
    return `{value_${format}}
<holder>;value;${format}
<holder>;top_value;<position>;${format}`;
});
</script>
