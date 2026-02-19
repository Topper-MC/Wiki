<template>
  <HolderForm :config="config" />
</template>

<script setup lang="ts">
import HolderForm from '~/components/forms/HolderForm.vue';
import type { FormConfig } from '~/utils/formTypes';

const props = defineProps<{
  platform: string;
}>();

// ============================================================
// PLATFORM CONFIGURATION
// To add a new platform, add a new entry to `platformConfigs`.
// ============================================================

const platformConfigs: Record<string, FormConfig> = {
  spigot: {
    fields: [
      { type: 'text', name: 'name', labelKey: 'holderName', descriptionKey: 'holderDescription' },
      { type: 'text', name: 'placeholder', labelKey: 'placeholder', descriptionKey: 'valuePlaceholderDescription' },
      { type: 'checkbox', name: 'online', labelKey: 'onlineLabel', descriptionKey: 'onlineDescription' },
    ],
    defaults: { name: 'money', placeholder: '%vault_eco_balance%', online: true },
    codeLang: 'yaml',
    generateCode: (v) =>
      `holders:\n  ${v.name}:\n    type: placeholder\n    placeholder: "${v.placeholder}"\n    online: ${v.online}`,
  },
  fabric: {
    fields: [
      { type: 'text', name: 'name', labelKey: 'holderName', descriptionKey: 'holderDescription' },
      { type: 'text', name: 'placeholder', labelKey: 'placeholder', descriptionKey: 'placeholderDescription' },
    ],
    defaults: { name: 'level', placeholder: '%playerex:level%' },
    codeLang: 'json',
    generateCode: (v) =>
      JSON.stringify({ holders: { [v.name]: { type: 'placeholder', placeholder: v.placeholder } } }, null, 2),
  },
};

// ============================================================

const config = platformConfigs[props.platform];
</script>
