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
      { type: 'text', name: 'placeholder', labelKey: 'placeholder', descriptionKey: 'placeholderDescription' },
    ],
    defaults: { name: 'money', placeholder: '<vault_eco_balance>' },
    codeLang: 'yaml',
    generateCode: (v) =>
      `holders:\n  ${v.name}:\n    type: mini-placeholder\n    placeholder: "${v.placeholder}"`,
  },
  fabric: {
    fields: [
      { type: 'text', name: 'name', labelKey: 'holderName', descriptionKey: 'holderDescription' },
      { type: 'text', name: 'placeholder', labelKey: 'placeholder', descriptionKey: 'placeholderDescription' },
    ],
    defaults: { name: 'money', placeholder: '<vault_eco_balance>' },
    codeLang: 'json',
    generateCode: (v) =>
      JSON.stringify({ holders: { [v.name]: { type: 'mini-placeholder', placeholder: v.placeholder } } }, null, 2),
  },
};

// ============================================================

const config = platformConfigs[props.platform];
</script>
