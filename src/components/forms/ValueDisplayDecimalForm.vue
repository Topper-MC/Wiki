<template>
  <HolderForm :config="config" />
</template>

<script setup lang="ts">
import HolderForm from '~/components/forms/HolderForm.vue';
import type { FormConfig } from '~/utils/formTypes';

const config: FormConfig = {
  fields: [
    { type: 'text', name: 'decimalSeparator', labelKey: 'decimalSeparator', descriptionKey: 'decimalSeparatorDescription' },
    { type: 'text', name: 'groupingSeparator', labelKey: 'groupingSeparator', descriptionKey: 'groupingSeparatorDescription' },
    { type: 'text', name: 'groupingSize', labelKey: 'groupingSize', descriptionKey: 'groupingSizeDescription', inputType: 'number' },
    { type: 'text', name: 'maximumFractionDigits', labelKey: 'maximumFractionDigits', descriptionKey: 'maximumFractionDigitsDescription', inputType: 'number' },
  ],
  defaults: {
    decimalSeparator: '.',
    groupingSeparator: ',',
    groupingSize: '3',
    maximumFractionDigits: '2',
  },
  codeLang: 'text',
  generateCode: (v) => {
    const parts = [];
    if (v.decimalSeparator) parts.push(`decimalSeparator=${v.decimalSeparator}`);
    if (v.groupingSeparator) parts.push(`groupingSeparator=${v.groupingSeparator}`);
    if (v.groupingSize) parts.push(`groupingSize=${v.groupingSize}`);
    if (v.maximumFractionDigits) parts.push(`maximumFractionDigits=${v.maximumFractionDigits}`);
    const cfg = parts.join('&');
    const format = `decimal:${cfg}`;
    return `{value_${format}}\n<holder>;value;${format}\n<holder>;top_value;<position>;${format}`;
  },
};
</script>
