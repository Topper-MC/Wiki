import { defineTranslations, type TranslationExtension } from 'fumadocs-core/i18n';
import { useTranslations } from '@fuma-translate/react';

const baseTranslations: Record<string, string> = {
  // General & Container
  configurationGenerator: 'Configuration Generator',
  usageGuidance: 'Usage Guidance',
  format: 'Format',
  description: 'Description',
  argument: 'Argument',
  args: 'Args',
  queryAndFormat: 'Query & Format',
  liveExample: 'Live Example',
  none: 'None',
  example: 'Example',
  remove: 'Remove',

  // Holders & Placeholders
  holderName: 'Holder Name',
  holderDescription: 'The name of the holder',
  placeholder: 'Placeholder',
  placeholderDescription: 'The placeholder used to get the value',
  valuePlaceholderDescription: 'The placeholder used to get the value',
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
