<template>
  <form class="form-container">
    <form.Field name="pattern">
      <template #default="{ field, state }">
        <FieldWrapper label="Pattern" description="The pattern describing the date and time format" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="field.handleChange"
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
            @update:model-value="field.handleChange"
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
            @update:model-value="field.handleChange"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>
  </form>

  <div class="language-text">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useStore } from '@tanstack/vue-form';
import Input from '../ui/Input.vue';
import Select from '../ui/Select.vue';
import FieldWrapper from '../ui/FieldWrapper.vue';

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

<style scoped>
.language-text {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow-x: auto;
    font-family: monospace;
}
</style>
