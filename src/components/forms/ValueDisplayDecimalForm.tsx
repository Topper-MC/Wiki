import HolderForm from './HolderForm';
import ValueDisplayOutput from './ValueDisplayOutput';
import type { FormConfig } from '@site/src/utils/formTypes';

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
};

const getFormat = (v: any) => {
  const parts = [];
  if (v.decimalSeparator) parts.push(`decimalSeparator=${v.decimalSeparator}`);
  if (v.groupingSeparator) parts.push(`groupingSeparator=${v.groupingSeparator}`);
  if (v.groupingSize) parts.push(`groupingSize=${v.groupingSize}`);
  if (v.maximumFractionDigits) parts.push(`maximumFractionDigits=${v.maximumFractionDigits}`);
  const cfg = parts.join('&');
  return `decimal:${cfg}`;
};

export default function ValueDisplayDecimalForm() {
  return (
    <HolderForm config={config}>
      {({ values }) => <ValueDisplayOutput code={getFormat(values)} />}
    </HolderForm>
  );
}
