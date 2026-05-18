import HolderForm from './HolderForm';
import type { FormConfig } from '@site/src/utils/formTypes';

interface StatisticFormProps {
  platform: 'spigot' | 'fabric';
}

const platformConfigs: Record<'spigot' | 'fabric', FormConfig> = {
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

export default function StatisticForm({ platform }: StatisticFormProps) {
  const config = platformConfigs[platform];
  return <HolderForm config={config} />;
}
