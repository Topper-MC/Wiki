'use client';

import React, { createContext, useContext, useId, useState } from 'react';
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
import { generators, type GeneratorName } from './codegen';

interface FormState {
  values: Record<string, unknown>;
  setValue(name: string, value: unknown): void;
  removeLabel: React.ReactNode;
  code: string;
}

const FormContext = createContext<FormState | null>(null);

function useForm(): FormState {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('Form components must be rendered inside <ConfigForm>.');
  return ctx;
}

interface ConfigFormProps {
  title: React.ReactNode;
  removeLabel: React.ReactNode;
  defaults: Record<string, unknown>;
  generator: GeneratorName;
  codeLang?: string;
  codeTitle?: string;
  showCode?: boolean;
  columns?: 1 | 2;
  children: React.ReactNode;
}

export function ConfigForm({
  title,
  removeLabel,
  defaults,
  generator,
  codeLang,
  codeTitle,
  showCode = true,
  columns = 1,
  children,
}: ConfigFormProps): React.JSX.Element {
  const [values, setValues] = useState(defaults);
  const setValue = (name: string, value: unknown) =>
    setValues((prev) => ({ ...prev, [name]: value }));
  const generate = generators[generator];
  if (!generate) throw new Error(`Unknown form generator: ${generator}`);
  const code = generate(values);

  return (
    <FormContext.Provider value={{ values, setValue, removeLabel, code }}>
      <Card title={title} className="my-6">
        <div className="not-prose pt-2">
          <form onSubmit={(e) => e.preventDefault()}>
            <FieldGroup
              className={columns === 2 ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 items-start' : undefined}
            >
              {children}
            </FieldGroup>
          </form>
          {showCode && (
            <div className="pt-4">
              <DynamicCodeBlock
                lang={codeLang ?? 'yaml'}
                code={code}
                codeblock={{ title: codeTitle, allowCopy: true }}
              />
            </div>
          )}
        </div>
      </Card>
    </FormContext.Provider>
  );
}

interface FormTextProps {
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  type?: string;
}

export function FormText({ name, label, description, type = 'text' }: FormTextProps): React.JSX.Element {
  const { values, setValue } = useForm();
  const id = useId();

  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        value={String(values[name] ?? '')}
        onChange={(e) => setValue(name, e.target.value)}
      />
      {description !== undefined && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}

interface FormCheckboxProps {
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
}

export function FormCheckbox({ name, label, description }: FormCheckboxProps): React.JSX.Element {
  const { values, setValue } = useForm();
  const id = useId();

  return (
    <Field orientation="horizontal">
      <Checkbox
        id={id}
        checked={!!values[name]}
        onCheckedChange={(checked) => setValue(name, checked)}
      />
      <FieldContent>
        <FieldLabel htmlFor={id} className="cursor-pointer">
          {label}
        </FieldLabel>
        {description !== undefined && <FieldDescription>{description}</FieldDescription>}
      </FieldContent>
    </Field>
  );
}

interface FormSelectProps {
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  options: string[];
}

export function FormSelect({ name, label, description, options }: FormSelectProps): React.JSX.Element {
  const { values, setValue } = useForm();
  const id = useId();

  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Select value={String(values[name] ?? '')} onValueChange={(value) => setValue(name, value)}>
        <SelectTrigger id={id} className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description !== undefined && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}

interface FormArrayProps {
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  addLabel: React.ReactNode;
}

export function FormArray({ name, label, description, addLabel }: FormArrayProps): React.JSX.Element {
  const { values, setValue, removeLabel } = useForm();
  const list = Array.isArray(values[name]) ? (values[name] as string[]) : [];

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <div className="space-y-2">
        {list.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={item}
              onChange={(e) => {
                const next = [...list];
                next[index] = e.target.value;
                setValue(name, next);
              }}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setValue(name, list.filter((_, i) => i !== index))}
              className="text-destructive hover:bg-destructive/10 shrink-0"
            >
              {removeLabel}
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setValue(name, [...list, ''])}
        >
          + {addLabel}
        </Button>
      </div>
      {description !== undefined && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}

interface FormObjectArrayProps {
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  addLabel: React.ReactNode;
  subFields: { name: string; placeholder: string }[];
}

export function FormObjectArray({
  name,
  label,
  description,
  addLabel,
  subFields,
}: FormObjectArrayProps): React.JSX.Element {
  const { values, setValue, removeLabel } = useForm();
  const list = Array.isArray(values[name])
    ? (values[name] as Record<string, string>[])
    : [];

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <div className="space-y-2">
        {list.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {subFields.map((sub) => (
              <Input
                key={sub.name}
                placeholder={sub.placeholder}
                value={item[sub.name] ?? ''}
                onChange={(e) => {
                  const next = [...list];
                  next[index] = { ...next[index], [sub.name]: e.target.value };
                  setValue(name, next);
                }}
              />
            ))}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setValue(name, list.filter((_, i) => i !== index))}
              className="text-destructive hover:bg-destructive/10 shrink-0"
            >
              {removeLabel}
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() =>
            setValue(name, [...list, Object.fromEntries(subFields.map((sub) => [sub.name, '']))])
          }
        >
          + {addLabel}
        </Button>
      </div>
      {description !== undefined && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}

interface FormUsageProps {
  title: React.ReactNode;
  formatLabel: React.ReactNode;
  formatHint?: React.ReactNode;
  lineLabel: React.ReactNode;
  lineHint?: React.ReactNode;
  valueLabel: React.ReactNode;
  valueHint?: React.ReactNode;
  topValueLabel: React.ReactNode;
  topValueHint?: React.ReactNode;
}

export function FormUsage({
  title,
  formatLabel,
  formatHint,
  lineLabel,
  lineHint,
  valueLabel,
  valueHint,
  topValueLabel,
  topValueHint,
}: FormUsageProps): React.JSX.Element {
  const { code } = useForm();
  const rows = [
    { label: formatLabel, hint: formatHint, value: code },
    { label: lineLabel, hint: lineHint, value: `{value_${code}}` },
    { label: valueLabel, hint: valueHint, value: `<holder>;value;${code}` },
    { label: topValueLabel, hint: topValueHint, value: `<holder>;top_value;<position>;${code}` },
  ];

  return (
    <div className="sm:col-span-full overflow-hidden rounded-lg border border-fd-border/50 bg-fd-secondary/20">
      <div className="border-b border-fd-border/40 px-3 py-2 text-xs font-semibold text-fd-foreground/80">
        {title}
      </div>
      <div className="divide-y divide-fd-border/40">
        {rows.map((row, index) => (
          <div
            key={index}
            className="grid gap-1.5 px-3 py-2 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-start sm:gap-3"
          >
            <div>
              <span className="block text-xs font-medium text-fd-muted-foreground">{row.label}</span>
              {row.hint !== undefined && (
                <span className="block text-xs leading-snug text-fd-muted-foreground/70">
                  {row.hint}
                </span>
              )}
            </div>
            <code className="min-w-0 whitespace-pre-wrap break-all rounded bg-fd-secondary px-2 py-1 font-mono text-xs font-semibold text-fd-primary">
              {row.value}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
