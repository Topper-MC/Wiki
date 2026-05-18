import HolderForm from './HolderForm';
import type { FormConfig } from '@site/src/utils/formTypes';

interface PlaceholderFormProps {
  platform: 'spigot' | 'fabric';
}

const platformConfigs: Record<'spigot' | 'fabric', FormConfig> = {
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

export default function PlaceholderForm({ platform }: PlaceholderFormProps) {
  const config = platformConfigs[platform];
  return <HolderForm config={config} />;
}
