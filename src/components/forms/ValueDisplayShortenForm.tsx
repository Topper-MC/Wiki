import HolderForm from './HolderForm';
import ValueDisplayOutput from './ValueDisplayOutput';
import type { FormConfig } from '@site/src/utils/formTypes';

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
};

const getFormat = (v: any) => {
  let format = 'shorten';
  const validGroups = (v.customGroups || []).filter((g: any) => g && g.number && g.suffix);
  if (validGroups.length > 0) {
    const cfg = validGroups.map((g: any) => `${g.number}=${g.suffix}`).join('&');
    format = `shorten:${cfg}`;
  }
  return format;
};

export default function ValueDisplayShortenForm() {
  return (
    <HolderForm config={config}>
      {({ values }) => <ValueDisplayOutput code={getFormat(values)} />}
    </HolderForm>
  );
}
