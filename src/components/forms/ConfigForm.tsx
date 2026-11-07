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
            <FieldGroup>{children}</FieldGroup>
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
  lineLabel: React.ReactNode;
  valueLabel: React.ReactNode;
  topValueLabel: React.ReactNode;
}

export function FormUsage({
  title,
  formatLabel,
  lineLabel,
  valueLabel,
  topValueLabel,
}: FormUsageProps): React.JSX.Element {
  const { code } = useForm();
  const row =
    'space-y-1 p-2.5 rounded-lg bg-fd-secondary/20 border border-fd-border/50 text-sm';
  const term =
    'block text-xs text-fd-muted-foreground font-medium [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:bg-fd-secondary [&_code]:text-fd-foreground [&_code]:font-mono [&_code]:text-xs';
  const value =
    'block w-fit max-w-full whitespace-pre-wrap break-all rounded bg-fd-secondary px-2 py-1 font-mono text-xs font-semibold text-fd-primary';

  return (
    <Card title={title} className="my-6">
      <div className="space-y-3 pt-2">
        <div className={row}>
          <span className={term}>{formatLabel}</span>
          <code className={value}>{code}</code>
        </div>
        <div className={row}>
          <span className={term}>{lineLabel}</span>
          <code className={value}>{`{value_${code}}`}</code>
        </div>
        <div className={row}>
          <span className={term}>{valueLabel}</span>
          <code className={value}>{`<holder>;value;${code}`}</code>
        </div>
        <div className={row}>
          <span className={term}>{topValueLabel}</span>
          <code className={value}>{`<holder>;top_value;<position>;${code}`}</code>
        </div>
      </div>
    </Card>
  );
}
