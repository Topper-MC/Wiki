import { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import CodeBlock from '@theme/CodeBlock';
import Input from '@site/src/components/ui/Input';
import Select from '@site/src/components/ui/Select';
import Checkbox from '@site/src/components/ui/Checkbox';
import FieldWrapper from '@site/src/components/ui/FieldWrapper';
import type { FormConfig } from '@site/src/utils/formTypes';

// Centralised translation lookup for keys using native Docusaurus i18n
export function t(key: string): string {
  const mapping: Record<string, { id: string; message: string }> = {
    holderName: { id: 'ui.holderName', message: 'Holder Name' },
    holderNameDescription: { id: 'ui.holderNameDescription', message: 'The name of the Holder used in examples' },
    position: { id: 'ui.position', message: 'Position' },
    positionDescription: { id: 'ui.positionDescription', message: 'The position used in examples' },
    statistic: { id: 'ui.statistic', message: 'Statistic' },
    statisticDescription: { id: 'ui.statisticDescription', message: 'The name of the statistic' },
    material: { id: 'ui.material', message: 'Material' },
    materialDescription: { id: 'ui.materialDescription', message: 'The name of the material. Used for some statistics that require an item.' },
    entity: { id: 'ui.entity', message: 'Entity' },
    entityDescription: { id: 'ui.entityDescription', message: 'The name of the entity. Used for some statistics that require an entity.' },
    statisticType: { id: 'ui.statisticType', message: 'Statistic Type' },
    statisticTypeDescription: { id: 'ui.statisticTypeDescription', message: 'The type of the statistic (e.g., minecraft:custom, minecraft:mined, minecraft:killed)' },
    placeholder: { id: 'ui.placeholder', message: 'Placeholder' },
    placeholderDescription: { id: 'ui.placeholderDescription', message: 'The placeholder to check' },
    decimalSeparator: { id: 'ui.decimalSeparator', message: 'Decimal Separator' },
    decimalSeparatorDescription: { id: 'ui.decimalSeparatorDescription', message: 'The character used to separate the integer part from the fractional part' },
    groupingSeparator: { id: 'ui.groupingSeparator', message: 'Grouping Separator' },
    groupingSeparatorDescription: { id: 'ui.groupingSeparatorDescription', message: 'The character used to separate groups of digits (leave empty to disable)' },
    groupingSize: { id: 'ui.groupingSize', message: 'Grouping Size' },
    groupingSizeDescription: { id: 'ui.groupingSizeDescription', message: 'The number of digits in each group' },
    maximumFractionDigits: { id: 'ui.maximumFractionDigits', message: 'Maximum Fraction Digits' },
    maximumFractionDigitsDescription: { id: 'ui.maximumFractionDigitsDescription', message: 'The maximum number of digits in the fractional part (leave empty for unlimited)' },
    pattern: { id: 'ui.pattern', message: 'Pattern' },
    patternDescription: { id: 'ui.patternDescription', message: 'The pattern describing the date and time format' },
    type: { id: 'ui.type', message: 'Type' },
    typeDescription: { id: 'ui.typeDescription', message: 'The type of the time: duration or time' },
    unit: { id: 'ui.unit', message: 'Unit' },
    unitDescription: { id: 'ui.unitDescription', message: 'The unit of the time' },
    customGroups: { id: 'ui.customGroups', message: 'Custom Groups' },
    customGroupsDescription: { id: 'ui.customGroupsDescription', message: 'Define custom number and suffix pairs (leave empty to use default groups)' },
    remove: { id: 'ui.remove', message: 'Remove' },
    addMaterial: { id: 'ui.addMaterial', message: '+ Add Material' },
    addEntity: { id: 'ui.addEntity', message: '+ Add Entity' },
    addStatistic: { id: 'ui.addStatistic', message: '+ Add Statistic' },
    addGroup: { id: 'ui.addGroup', message: '+ Add Group' },
    copySuccess: { id: 'ui.copySuccess', message: 'Copied!' },
    copyError: { id: 'ui.copyError', message: 'Copy failed!' },
    copyCode: { id: 'ui.copyCode', message: 'Copy code' },
    numberExample: { id: 'ui.numberExample', message: 'Number (e.g., 1000)' },
    suffixExample: { id: 'ui.suffixExample', message: 'Suffix (e.g., k)' },
    holderDescription: { id: 'ui.holderDescription', message: 'The name of the holder' },
    valuePlaceholderDescription: { id: 'ui.valuePlaceholderDescription', message: 'The placeholder used to get the value' },
    onlineDescription: { id: 'ui.onlineDescription', message: 'Whether the placeholder should be parsed only for players who are currently online in the server. When enabled, the plugin parses placeholder values for online players. When disabled, it parses for all players, including offline.' },
    onlineLabel: { id: 'ui.onlineLabel', message: 'Parse for online players only' }
  };

  const item = mapping[key];
  if (item) {
    return translate({ id: item.id, message: item.message });
  }
  return key;
}

interface HolderFormProps {
  config: FormConfig;
  children?: (props: { values: Record<string, any>; code: string }) => React.ReactNode;
}

export default function HolderForm({ config, children }: HolderFormProps) {
  const [values, setValues] = useState<Record<string, any>>(config.defaults);

  const handleFieldChange = (name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const code = config.generateCode ? config.generateCode(values) : '';

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="form-container">
        {config.fields.map((f) => {
          if (f.type === 'text') {
            return (
              <FieldWrapper
                key={f.name}
                label={t(f.labelKey)}
                description={t(f.descriptionKey)}
              >
                {(id) => (
                  <Input
                    id={id}
                    type={f.inputType || 'text'}
                    value={values[f.name] || ''}
                    onChange={(e) => handleFieldChange(f.name, e.target.value)}
                  />
                )}
              </FieldWrapper>
            );
          }

          if (f.type === 'checkbox') {
            return (
              <div key={f.name} style={{ marginBottom: '1rem' }}>
                <Checkbox
                  id={f.name}
                  checked={!!values[f.name]}
                  onChange={(e) => handleFieldChange(f.name, e.target.checked)}
                  description={t(f.descriptionKey)}
                >
                  {t(f.labelKey)}
                </Checkbox>
              </div>
            );
          }

          if (f.type === 'select') {
            return (
              <FieldWrapper
                key={f.name}
                label={t(f.labelKey)}
                description={t(f.descriptionKey)}
              >
                {(id) => (
                  <Select
                    id={id}
                    value={values[f.name] || ''}
                    options={f.options || []}
                    onChange={(e) => handleFieldChange(f.name, e.target.value)}
                  />
                )}
              </FieldWrapper>
            );
          }

          if (f.type === 'array') {
            return (
              <FieldWrapper
                key={f.name}
                label={t(f.labelKey)}
                description={t(f.descriptionKey)}
              >
                {() => (
                  <div>
                    {(values[f.name] || []).map((item: string, index: number) => (
                      <div key={index} className="list-item">
                        <Input
                          value={item}
                          onChange={(e) => {
                            const next = [...(values[f.name] || [])];
                            next[index] = e.target.value;
                            handleFieldChange(f.name, next);
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const next = values[f.name].filter((_: any, idx: number) => idx !== index);
                            handleFieldChange(f.name, next);
                          }}
                          className="remove-btn"
                        >
                          {t('remove')}
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        const next = [...(values[f.name] || []), ''];
                        handleFieldChange(f.name, next);
                      }}
                      className="add-btn"
                    >
                      {t(f.addLabelKey || '')}
                    </button>
                  </div>
                )}
              </FieldWrapper>
            );
          }

          if (f.type === 'object-array') {
            return (
              <FieldWrapper
                key={f.name}
                label={t(f.labelKey)}
                description={t(f.descriptionKey)}
              >
                {() => (
                  <div>
                    {(values[f.name] || []).map((item: any, index: number) => (
                      <div key={index} className="list-item">
                        {(f.subFields || []).map((sub) => (
                          <Input
                            key={sub.name}
                            placeholder={t(sub.placeholderKey)}
                            value={item[sub.name] || ''}
                            onChange={(e) => {
                              const next = [...(values[f.name] || [])];
                              next[index] = { ...next[index], [sub.name]: e.target.value };
                              handleFieldChange(f.name, next);
                            }}
                            className="flex-1"
                          />
                        ))}
                        <button
                          type="button"
                          onClick={() => {
                            const next = values[f.name].filter((_: any, idx: number) => idx !== index);
                            handleFieldChange(f.name, next);
                          }}
                          className="remove-btn"
                        >
                          {t('remove')}
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        const next = [...(values[f.name] || []), f.defaultItem || {}];
                        handleFieldChange(f.name, next);
                      }}
                      className="add-btn"
                    >
                      {t(f.addLabelKey || '')}
                    </button>
                  </div>
                )}
              </FieldWrapper>
            );
          }

          return null;
        })}
      </form>

      {children ? (
        children({ values, code })
      ) : config.generateCode ? (
        <div style={{ marginTop: '1.5rem' }}>
          <CodeBlock language={config.codeLang} title={config.codeLang === 'yaml' ? 'holder.yml' : 'holder.json'}>
            {code}
          </CodeBlock>
        </div>
      ) : null}
    </div>
  );
}
