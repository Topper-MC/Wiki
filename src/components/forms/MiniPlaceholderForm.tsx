import HolderForm from './HolderForm';
import type { FormConfig } from '@site/src/utils/formTypes';

interface MiniPlaceholderFormProps {
  platform: 'spigot' | 'fabric';
}

const platformConfigs: Record<'spigot' | 'fabric', FormConfig> = {
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

export default function MiniPlaceholderForm({ platform }: MiniPlaceholderFormProps) {
  const config = platformConfigs[platform];
  return <HolderForm config={config} />;
}
