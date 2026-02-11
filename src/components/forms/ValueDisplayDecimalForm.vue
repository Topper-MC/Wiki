<template>
  <form class="form-container">
    <form.Field name="decimalSeparator">
      <template #default="{ field, state }">
        <FieldWrapper label="Decimal Separator" description="The character used to separate the integer part from the fractional part" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
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
        <FieldWrapper label="Grouping Separator" description="The character used to separate groups of digits (leave empty to disable)" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
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
        <FieldWrapper label="Grouping Size" description="The number of digits in each group" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
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
        <FieldWrapper label="Maximum Fraction Digits" description="The maximum number of digits in the fractional part (leave empty for unlimited)" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
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
