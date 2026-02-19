<template>
  <HolderForm :config="config" />
</template>

<script setup lang="ts">
import HolderForm from '~/components/forms/HolderForm.vue';
import type { FormConfig } from '~/utils/formTypes';

const config: FormConfig = {
  fields: [
    {
      type: 'object-array',
      name: 'customGroups',
      labelKey: 'customGroups',
      descriptionKey: 'customGroupsDescription',
      addLabelKey: 'addGroup',
      subFields: [
        { name: 'number', placeholderKey: 'numberExample' },
        { name: 'suffix', placeholderKey: 'suffixExample' },
      ],
      defaultItem: { number: '', suffix: '' },
    },
  ],
  defaults: {
    customGroups: [] as { number: string; suffix: string }[],
  },
  codeLang: 'text',
  generateCode: (v) => {
    let format = 'shorten';
    const validGroups = (v.customGroups || []).filter((g: any) => g && g.number && g.suffix);
    if (validGroups.length > 0) {
      const cfg = validGroups.map((g: any) => `${g.number}=${g.suffix}`).join('&');
      format = `shorten:${cfg}`;
    }
    return `{value_${format}}\n<holder>;value;${format}\n<holder>;top_value;<position>;${format}`;
  },
};
</script>
