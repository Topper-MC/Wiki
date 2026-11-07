export type FormValues = Record<string, unknown>;

type ShortenGroup = { number: string; suffix: string };

const text = (value: unknown): string => (value == null ? '' : String(value));

const textList = (value: unknown): string[] => (Array.isArray(value) ? value.map(text) : []);

export const generators = {
  placeholderSpigot: (v) =>
    `holders:\n  ${text(v.name)}:\n    type: placeholder\n    placeholder: "${text(v.placeholder)}"\n    online: ${text(v.online)}`,

  placeholderFabric: (v) =>
    JSON.stringify(
      { holders: { [text(v.name)]: { type: 'placeholder', placeholder: text(v.placeholder) } } },
      null,
      2
    ),

  miniPlaceholderSpigot: (v) =>
    `holders:\n  ${text(v.name)}:\n    type: mini-placeholder\n    placeholder: "${text(v.placeholder)}"`,

  miniPlaceholderFabric: (v) =>
    JSON.stringify(
      { holders: { [text(v.name)]: { type: 'mini-placeholder', placeholder: text(v.placeholder) } } },
      null,
      2
    ),

  statisticSpigot: (v) => {
    let code = `holders:\n  ${text(v.name)}:\n    type: statistic\n    statistic: ${text(v.statistic)}`;
    const material = textList(v.material);
    const entity = textList(v.entity);
    if (material.length) {
      code +=
        material.length === 1
          ? `\n    material: ${material[0]}`
          : `\n    material:\n      - ${material.join('\n      - ')}`;
    }
    if (entity.length) {
      code +=
        entity.length === 1
          ? `\n    entity: ${entity[0]}`
          : `\n    entity:\n      - ${entity.join('\n      - ')}`;
    }
    return code;
  },

  statisticFabric: (v) => {
    const holder: Record<string, unknown> = {
      type: 'statistic',
      'statistic-type': text(v.statisticType),
    };
    const statistics = textList(v.statisticList);
    if (statistics.length > 0) {
      holder.statistic = statistics.length === 1 ? statistics[0] : statistics;
    }
    return JSON.stringify({ holders: { [text(v.name)]: holder } }, null, 2);
  },

  valueDisplayDecimal: (v) => {
    const parts: string[] = [];
    if (text(v.decimalSeparator)) parts.push(`decimalSeparator=${text(v.decimalSeparator)}`);
    if (text(v.groupingSeparator)) parts.push(`groupingSeparator=${text(v.groupingSeparator)}`);
    if (text(v.groupingSize)) parts.push(`groupingSize=${text(v.groupingSize)}`);
    if (text(v.maximumFractionDigits)) parts.push(`maximumFractionDigits=${text(v.maximumFractionDigits)}`);
    return `decimal:${parts.join('&')}`;
  },

  valueDisplayTime: (v) =>
    `time:pattern=${text(v.pattern)}&type=${text(v.type)}&unit=${text(v.unit)}`,

  valueDisplayShorten: (v) => {
    // <FormObjectArray> only writes string values for these sub-fields.
    const groups = Array.isArray(v.customGroups) ? (v.customGroups as ShortenGroup[]) : [];
    const pairs = groups
      .map((group) => `${text(group.number)}=${text(group.suffix)}`)
      .filter((pair) => pair !== '=');
    return pairs.length > 0 ? `shorten:${pairs.join('&')}` : 'shorten';
  },
} satisfies Record<string, (values: FormValues) => string>;

export type GeneratorName = keyof typeof generators;
