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
      { type: 'text', name: 'statistic', labelKey: 'statistic', descriptionKey: 'statisticDescription' },
      { type: 'array', name: 'material', labelKey: 'material', descriptionKey: 'materialDescription', addLabelKey: 'addMaterial' },
      { type: 'array', name: 'entity', labelKey: 'entity', descriptionKey: 'entityDescription', addLabelKey: 'addEntity' },
    ],
    defaults: { name: 'jump', statistic: 'JUMP', material: [] as string[], entity: [] as string[] },
    codeLang: 'yaml',
    generateCode: (v) => {
      let c = `holders:\n  ${v.name}:\n    type: statistic\n    statistic: ${v.statistic}`;
      if (v.material?.length) {
        c += v.material.length === 1
          ? `\n    material: ${v.material[0]}`
          : `\n    material:\n      - ${v.material.join('\n      - ')}`;
      }
      if (v.entity?.length) {
        c += v.entity.length === 1
          ? `\n    entity: ${v.entity[0]}`
          : `\n    entity:\n      - ${v.entity.join('\n      - ')}`;
      }
      return c;
    },
  },
  fabric: {
    fields: [
      { type: 'text', name: 'name', labelKey: 'holderName', descriptionKey: 'holderDescription' },
      { type: 'text', name: 'statisticType', labelKey: 'statisticType', descriptionKey: 'statisticTypeDescription' },
      { type: 'array', name: 'statisticList', labelKey: 'statistic', descriptionKey: 'statisticDescription', addLabelKey: 'addStatistic' },
    ],
    defaults: { name: 'jump', statisticType: 'minecraft:custom', statisticList: ['minecraft:jump'] as string[] },
    codeLang: 'json',
    generateCode: (v) => {
      const holderObj: any = { type: 'statistic', 'statistic-type': v.statisticType };
      if (v.statisticList?.length > 0) {
        holderObj.statistic = v.statisticList.length === 1 ? v.statisticList[0] : v.statisticList;
      }
      return JSON.stringify({ holders: { [v.name]: holderObj } }, null, 2);
    },
  },
};

// ============================================================

const config = platformConfigs[props.platform];
</script>
