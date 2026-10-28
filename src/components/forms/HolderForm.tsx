'use client';

import React, { useState } from 'react';
import { Card } from 'fumadocs-ui/components/card';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { useFormI18n } from '@/lib/i18n';
import type { FormConfig } from '@/utils/formTypes';

interface HolderFormProps {
  config: FormConfig;
  children?: (props: { values: Record<string, any>; code: string }) => React.ReactNode;
}

export default function HolderForm({ config, children }: HolderFormProps): React.JSX.Element {
  const [values, setValues] = useState<Record<string, any>>(config.defaults);
  const t = useFormI18n();

  const handleFieldChange = (name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const code = config.generateCode ? config.generateCode(values) : '';

  return (
    <Card
      title={t('ui.configurationGenerator', 'Configuration Generator')}
      className="my-6"
    >
      <div className="not-prose pt-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            {config.fields.map((f) => {
              if (f.type === 'text') {
                return (
                  <Field key={f.name}>
                    <FieldLabel htmlFor={f.name}>{t(f.labelKey)}</FieldLabel>
                    <Input
                      id={f.name}
                      type={f.inputType || 'text'}
                      value={values[f.name] || ''}
                      onChange={(e) => handleFieldChange(f.name, e.target.value)}
                    />
                    {f.descriptionKey && (
                      <FieldDescription>{t(f.descriptionKey)}</FieldDescription>
                    )}
                  </Field>
                );
              }

              if (f.type === 'checkbox') {
                return (
                  <Field key={f.name} orientation="horizontal">
                    <Checkbox
                      id={f.name}
                      checked={!!values[f.name]}
                      onCheckedChange={(checked) => handleFieldChange(f.name, checked)}
                    />
                    <FieldContent>
                      <FieldLabel htmlFor={f.name} className="cursor-pointer">
                        {t(f.labelKey)}
                      </FieldLabel>
                      {f.descriptionKey && (
                        <FieldDescription>{t(f.descriptionKey)}</FieldDescription>
                      )}
                    </FieldContent>
                  </Field>
                );
              }

              if (f.type === 'select') {
                return (
                  <Field key={f.name}>
                    <FieldLabel htmlFor={f.name}>{t(f.labelKey)}</FieldLabel>
                    <Select
                      value={values[f.name] || ''}
                      onValueChange={(val) => handleFieldChange(f.name, val)}
                    >
                      <SelectTrigger id={f.name} className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(f.options || []).map((opt) => (
                          <SelectItem key={opt.value} value={String(opt.value)}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {f.descriptionKey && (
                      <FieldDescription>{t(f.descriptionKey)}</FieldDescription>
                    )}
                  </Field>
                );
              }

              if (f.type === 'array') {
                return (
                  <Field key={f.name}>
                    <FieldLabel>{t(f.labelKey)}</FieldLabel>
                    <div className="space-y-2">
                      {(values[f.name] || []).map((item: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Input
                            value={item}
                            onChange={(e) => {
                              const next = [...(values[f.name] || [])];
                              next[index] = e.target.value;
                              handleFieldChange(f.name, next);
                            }}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              const next = values[f.name].filter((_: any, idx: number) => idx !== index);
                              handleFieldChange(f.name, next);
                            }}
                            className="text-destructive hover:bg-destructive/10 shrink-0"
                          >
                            {t('ui.remove', 'Remove')}
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const next = [...(values[f.name] || []), ''];
                          handleFieldChange(f.name, next);
                        }}
                      >
                        + {t(f.addLabelKey || '')}
                      </Button>
                    </div>
                    {f.descriptionKey && (
                      <FieldDescription>{t(f.descriptionKey)}</FieldDescription>
                    )}
                  </Field>
                );
              }

              if (f.type === 'object-array') {
                return (
                  <Field key={f.name}>
                    <FieldLabel>{t(f.labelKey)}</FieldLabel>
                    <div className="space-y-2">
                      {(values[f.name] || []).map((item: any, index: number) => (
                        <div key={index} className="flex items-center gap-2">
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
                            />
                          ))}
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              const next = values[f.name].filter((_: any, idx: number) => idx !== index);
                              handleFieldChange(f.name, next);
                            }}
                            className="text-destructive hover:bg-destructive/10 shrink-0"
                          >
                            {t('ui.remove', 'Remove')}
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const next = [...(values[f.name] || []), f.defaultItem || {}];
                          handleFieldChange(f.name, next);
                        }}
                      >
                        + {t(f.addLabelKey || '')}
                      </Button>
                    </div>
                    {f.descriptionKey && (
                      <FieldDescription>{t(f.descriptionKey)}</FieldDescription>
                    )}
                  </Field>
                );
              }

              return null;
            })}
          </FieldGroup>
        </form>

        {children ? (
          children({ values, code })
        ) : config.generateCode ? (
          <div className="pt-4">
            <DynamicCodeBlock
              lang={config.codeLang ?? 'yaml'}
              code={code}
              codeblock={{
                title: config.codeLang === 'yaml' ? 'holder.yml' : 'holder.json',
                allowCopy: true,
              }}
            />
          </div>
        ) : null}
      </div>
    </Card>
  );
}
