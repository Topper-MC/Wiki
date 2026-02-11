<template>
  <form class="form-container">
    <form.Field name="pattern">
      <template #default="{ field, state }">
        <FieldWrapper label="Pattern" description="The pattern describing the date and time format" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="type">
      <template #default="{ field, state }">
        <FieldWrapper label="Type" description="The type of the time: duration or time" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Select
            :id="field.name"
            :model-value="state.value"
            :options="typeOptions"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="unit">
      <template #default="{ field, state }">
        <FieldWrapper label="Unit" description="The unit of the time" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Select
            :id="field.name"
            :model-value="state.value"
            :options="unitOptions"
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
import Select from '~/components/ui/Select.vue';
import FieldWrapper from '~/components/ui/FieldWrapper.vue';
import CodeBlock from '~/components/ui/CodeBlock.vue';

const typeOptions = [
  { label: 'duration', value: 'duration' },
  { label: 'time', value: 'time' },
];

const unitOptions = [
  { label: 'ticks', value: 'ticks' },
  { label: 'nanoseconds', value: 'nanoseconds' },
  { label: 'microseconds', value: 'microseconds' },
  { label: 'milliseconds', value: 'milliseconds' },
  { label: 'seconds', value: 'seconds' },
  { label: 'minutes', value: 'minutes' },
  { label: 'hours', value: 'hours' },
  { label: 'days', value: 'days' },
];

const form = useForm({
  defaultValues: {
    pattern: 'HH:mm:ss',
    type: 'duration',
    unit: 'seconds',
  },
});

const formState = useStore(form.store);

const code = computed(() => {
    const values = formState.value.values;
    const config = `pattern=${values.pattern}&type=${values.type}&unit=${values.unit}`;
    const format = `time:${config}`;

    return `{value_${format}}
<holder>;value;${format}
<holder>;top_value;<position>;${format}`;
});
</script>
