<template>
  <HolderForm :config="config" />
</template>

<script setup lang="ts">
import HolderForm from '~/components/forms/HolderForm.vue';
import type { FormConfig } from '~/utils/formTypes';

const config: FormConfig = {
  fields: [
    { type: 'text', name: 'pattern', labelKey: 'pattern', descriptionKey: 'patternDescription' },
    {
      type: 'select', name: 'type', labelKey: 'type', descriptionKey: 'typeDescription',
      options: [
        { label: 'duration', value: 'duration' },
        { label: 'time', value: 'time' },
      ],
    },
    {
      type: 'select', name: 'unit', labelKey: 'unit', descriptionKey: 'unitDescription',
      options: [
        { label: 'ticks', value: 'ticks' },
        { label: 'nanoseconds', value: 'nanoseconds' },
        { label: 'microseconds', value: 'microseconds' },
        { label: 'milliseconds', value: 'milliseconds' },
        { label: 'seconds', value: 'seconds' },
        { label: 'minutes', value: 'minutes' },
        { label: 'hours', value: 'hours' },
        { label: 'days', value: 'days' },
      ],
    },
  ],
  defaults: { pattern: 'HH:mm:ss', type: 'duration', unit: 'seconds' },
  codeLang: 'text',
  generateCode: (v) => {
    const cfg = `pattern=${v.pattern}&type=${v.type}&unit=${v.unit}`;
    const format = `time:${cfg}`;
    return `{value_${format}}\n<holder>;value;${format}\n<holder>;top_value;<position>;${format}`;
  },
};
</script>
