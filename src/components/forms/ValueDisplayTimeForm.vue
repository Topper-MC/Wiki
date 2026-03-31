<template>
  <HolderForm :config="config">
    <template #output="{ values }">
      <ValueDisplayOutput :code="getFormat(values)" />
    </template>
  </HolderForm>
</template>

<script setup lang="ts">
import HolderForm from '~/components/forms/HolderForm.vue';
import ValueDisplayOutput from '~/components/forms/ValueDisplayOutput.vue';
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
};

const getFormat = (v: any) => {
  const cfg = `pattern=${v.pattern}&type=${v.type}&unit=${v.unit}`;
  return `time:${cfg}`;
};
</script>
