import { defineTranslations, type TranslationExtension } from 'fumadocs-core/i18n';
import { useTranslations } from '@fuma-translate/react';

const baseTranslations: Record<string, string> = {
  // General & Container
  configurationGenerator: 'Configuration Generator',
  usageGuidance: 'Usage Guidance',
  interactiveQueryPlayground: 'Interactive Query Playground',
  format: 'Format',
  syntax: 'Syntax',
  result: 'Result',
  description: 'Description',
  argument: 'Argument',
  arguments: 'Arguments',
  args: 'Args',
  queryAndFormat: 'Query & Format',
  liveExample: 'Live Example',
  global: 'Global',
  player: 'Player',
  none: 'None',
  example: 'Example',
  remove: 'Remove',

  // Holders & Placeholders
  holderName: 'Holder Name',
  holderDescription: 'The name of the holder',
  holderNameDescription: 'The name of the holder (e.g. money, exp)',
  placeholder: 'Placeholder',
  placeholderDescription: 'The placeholder used to get the value',
  valuePlaceholderDescription: 'The placeholder used to get the value',
  position: 'Position',
  positionDescription: 'The position in the leaderboard (must be >= 1)',
  onlineLabel: 'Parse for online players only',
  onlineDescription:
    'Whether the placeholder should be parsed only for players who are currently online in the server. When enabled, the plugin parses placeholder values for online players. When disabled, it parses for all players, including offline.',

  // Statistics
  statistic: 'Statistic',
  statisticDescription: 'The statistic used to get the value',
  statisticType: 'Statistic Type',
  statisticTypeDescription:
    'The type of the statistic (e.g. minecraft:custom, minecraft:mined)',
  material: 'Material',
  materialDescription: 'The material used to filter the statistic',
  entity: 'Entity',
  entityDescription: 'The entity used to filter the statistic',
  addMaterial: 'Add Material',
  addEntity: 'Add Entity',
  addStatistic: 'Add Statistic',

  // Query Section arguments
  'arg.holder': 'The name of the holder',
  'arg.position': 'The position in the leaderboard',
  'arg.match_position': 'The position to match',
  'arg.format': 'A format pattern (e.g., #,###)',
  'arg.time_format': 'A time format pattern (e.g., HH:mm:ss for hours:minutes:seconds)',
  'arg.end_time_format': 'A time format pattern (e.g., yyyy-MM-dd HH:mm:ss)',

  // Query descriptions
  'query.top_name.desc': 'The name of the player at the specified position.',
  'query.top_key.desc': 'The UUID of the player at the specified position.',
  'query.top_value.desc': 'The value of the player at the specified position.',
  'query.top_value_raw.desc': 'The raw value of the player at the specified position.',
  'query.top_rank.desc': "The player's rank (position number) in the specified Holder.",
  'query.top_size.desc': 'The amount of entries in the Holder.',
  'query.value.desc': 'The value of the player.',
  'query.value_raw.desc': 'The raw value of the player.',
  'query.remain_time.desc': 'The remaining time until the next reset.',
  'query.end_time.desc': 'The time of the next reset.',

  // Query example descriptions
  'query.top_name.example.0':
    'Retrieve the name of the player at position {position} in the Holder named {holder}',
  'query.top_key.example.0':
    'Retrieve the UUID of the player at position {position} in the Holder named {holder}',
  'query.top_value.example.0':
    'Retrieve the value of the player at position {position} in the Holder named {holder}',
  'query.top_value.example.1':
    'Retrieve the formatted value of the player at position {position} in the Holder named {holder}, in the format of `#,###`',
  'query.top_value_raw.example.0':
    'Retrieve the raw value of the player at position {position} in the Holder named {holder}',
  'query.top_rank.example.0':
    'Retrieve the rank of the player in the Holder named {holder}',
  'query.top_rank.example.1':
    'Retrieve the formatted rank of the player in the Holder named {holder}',
  'query.top_size.example.0':
    'Retrieve the amount of entries in the Holder named {holder}',
  'query.value.example.0':
    'Retrieve the value of the player in the Holder named {holder}',
  'query.value.example.1':
    'Retrieve the formatted value of the player in the Holder named {holder}',
  'query.value_raw.example.0':
    'Retrieve the raw value of the player in the Holder named {holder}',
  'query.remain_time.example.0':
    'Retrieve the remaining time in millis until the next reset of the Holder named {holder}',
  'query.remain_time.example.1':
    'Retrieve the remaining time until the next reset of the Holder named {holder}',
  'query.end_time.example.0':
    'Retrieve the next reset time in millis of the Holder named {holder}',
  'query.end_time.example.1':
    'Retrieve the next reset time of the Holder named {holder}',

  // Value Display - Decimal
  decimalSeparator: 'Decimal Separator',
  decimalSeparatorDescription:
    'The character used to separate the integer and fraction parts of a number',
  groupingSeparator: 'Grouping Separator',
  groupingSeparatorDescription:
    'The character used to separate groups of digits',
  groupingSize: 'Grouping Size',
  groupingSizeDescription: 'The number of digits in each group',
  maximumFractionDigits: 'Maximum Fraction Digits',
  maximumFractionDigitsDescription:
    'The maximum number of digits allowed in the fraction portion of a number',

  // Value Display - Time
  pattern: 'Pattern',
  patternDescription: 'The pattern used to format the time/duration',
  type: 'Type',
  typeDescription: 'The type of the time/duration (e.g. duration, time)',
  unit: 'Unit',
  unitDescription: 'The unit of the value to format (e.g. seconds, minutes)',

  // Value Display - Shorten
  customGroups: 'Custom Groups',
  customGroupsDescription:
    'Define custom shortening thresholds and their corresponding suffixes (e.g., 1000 with suffix k).',
  addGroup: 'Add Group',
  numberExample: 'Number (e.g., 1000)',
  suffixExample: 'Suffix (e.g., k)',
};

export const defaultFormTranslations: Record<string, string> = {};

for (const [key, value] of Object.entries(baseTranslations)) {
  defaultFormTranslations[key] = value;
  defaultFormTranslations[`ui.${key}`] = value;
}

export const formTranslationKeys = Object.keys(defaultFormTranslations);

export function formTranslations(): TranslationExtension<string> {
  return {
    keys: formTranslationKeys,
  };
}

/**
 * Translations API instance configured for Fumapress / Fumadocs workflow.
 * Wire this directly into `defineConfig({ translations })` in `press.config.tsx`.
 */
export const translations = defineTranslations()
  .extend(formTranslations())
  .add(defaultFormTranslations);

/**
 * Hook to access translations within form components using Fumadocs/Fumapress's @fuma-translate/react context.
 */
export function useFormI18n() {
  const t = useTranslations();

  return (key: string, fallback?: string): string => {
    if (!key) return fallback ?? '';

    // 1. Try key in context
    const translated = t(key);
    if (translated !== key) {
      return translated;
    }

    // 2. Try with or without 'ui.' prefix in context
    const altKey = key.startsWith('ui.') ? key.slice(3) : `ui.${key}`;
    const altTranslated = t(altKey);
    if (altTranslated !== altKey) {
      return altTranslated;
    }

    // 3. Fallback to defaultFormTranslations
    const def = defaultFormTranslations[key] ?? defaultFormTranslations[altKey];
    if (def !== undefined) {
      return def;
    }

    // 4. Return explicit fallback or key
    return fallback ?? key;
  };
}
