'use client';

import React, { createContext, useContext, useId, useState } from 'react';
import { Card } from 'fumadocs-ui/components/card';
import {
  Badge,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from '@/components/ui';

type QueryType = 'global' | 'player';

interface QueryState {
  values: Record<string, string>;
  setValue(name: string, value: string): void;
  prefix: boolean;
  playerPrefix: string;
  playerSuffix: string;
  globalPrefix: string;
  globalSuffix: string;
}

interface DisplayLabels {
  player: React.ReactNode;
  global: React.ReactNode;
  syntax: React.ReactNode;
  result: React.ReactNode;
}

interface ItemRenderers {
  syntax(value: string): string;
  result(value: string): string;
}

const QueryContext = createContext<QueryState | null>(null);
const DisplayContext = createContext<DisplayLabels | null>(null);
const ItemContext = createContext<ItemRenderers | null>(null);

function useRequired<T>(value: T | null, error: string): T {
  if (value === null) throw new Error(error);
  return value;
}

function wrap(value: string, type: QueryType, query: QueryState): string {
  if (!query.prefix) return value;
  return type === 'player'
    ? `${query.playerPrefix}${value}${query.playerSuffix}`
    : `${query.globalPrefix}${value}${query.globalSuffix}`;
}

function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

interface QueryProps {
  children: React.ReactNode;
  defaults?: Record<string, string>;
  prefix?: boolean;
  playerPrefix?: string;
  playerSuffix?: string;
  globalPrefix?: string;
  globalSuffix?: string;
}

function QueryRoot({
  children,
  defaults = {},
  prefix = false,
  playerPrefix = '',
  playerSuffix = '',
  globalPrefix = '',
  globalSuffix = '',
}: QueryProps): React.JSX.Element {
  const [values, setValues] = useState(defaults);
  const setValue = (name: string, value: string) =>
    setValues((prev) => ({ ...prev, [name]: value }));

  return (
    <QueryContext.Provider
      value={{ values, setValue, prefix, playerPrefix, playerSuffix, globalPrefix, globalSuffix }}
    >
      <div className="not-prose my-6 space-y-4">{children}</div>
    </QueryContext.Provider>
  );
}

interface FormProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

function Form({ title, children }: FormProps): React.JSX.Element {
  return (
    <Card title={title} className="not-prose">
      <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">{children}</FieldGroup>
    </Card>
  );
}

interface FormItemProps {
  name: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  type?: string;
}

function FormItem({ name, label, description, type = 'text' }: FormItemProps): React.JSX.Element {
  const { values, setValue } = useRequired(
    useContext(QueryContext),
    '<Query.FormItem> must be rendered inside <Query>.'
  );
  const id = useId();

  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        value={values[name] ?? ''}
        onChange={(e) => setValue(name, e.target.value)}
      />
      {description !== undefined && <FieldDescription>{description}</FieldDescription>}
    </Field>
  );
}

interface ArgumentsProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

function Arguments({ label, children }: ArgumentsProps): React.JSX.Element {
  return (
    <div className="sm:col-span-2 pt-2.5 border-t border-fd-border/50 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fd-muted-foreground">
      <span className="font-medium text-fd-foreground/80 shrink-0">{label}:</span>
      {children}
    </div>
  );
}

interface ArgumentProps {
  name: string;
  children: React.ReactNode;
}

function Argument({ name, children }: ArgumentProps): React.JSX.Element {
  return (
    <span>
      <code className="font-semibold text-fd-foreground">&lt;{name}&gt;</code> {children}
    </span>
  );
}

interface DisplayProps {
  playerLabel: React.ReactNode;
  globalLabel: React.ReactNode;
  syntaxLabel: React.ReactNode;
  resultLabel: React.ReactNode;
  children: React.ReactNode;
}

function Display({
  playerLabel,
  globalLabel,
  syntaxLabel,
  resultLabel,
  children,
}: DisplayProps): React.JSX.Element {
  return (
    <DisplayContext.Provider
      value={{ player: playerLabel, global: globalLabel, syntax: syntaxLabel, result: resultLabel }}
    >
      <div className="rounded-xl border border-fd-border bg-fd-card/40 divide-y divide-fd-border overflow-hidden">
        {children}
      </div>
    </DisplayContext.Provider>
  );
}

interface DisplayItemProps {
  id: string;
  type: QueryType;
  description: React.ReactNode;
  args?: string[];
  children?: React.ReactNode;
}

function DisplayItem({
  id,
  type,
  description,
  args = [],
  children,
}: DisplayItemProps): React.JSX.Element {
  const query = useRequired(
    useContext(QueryContext),
    '<Query.DisplayItem> must be rendered inside <Query>.'
  );
  const labels = useRequired(
    useContext(DisplayContext),
    '<Query.DisplayItem> must be rendered inside <Query.Display>.'
  );
  const renderers: ItemRenderers = {
    syntax: (value) => wrap(value, type, query),
    result: (value) => wrap(fill(value, query.values), type, query),
  };

  return (
    <div className="p-3.5 space-y-2.5 transition-colors hover:bg-fd-muted/15">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-xs font-bold text-fd-foreground bg-fd-muted px-2 py-0.5 rounded border border-fd-border/70">
            {id}
          </span>
          <Badge
            variant={type === 'player' ? 'secondary' : 'outline'}
            className="text-[10px] h-4.5 px-1.5 font-normal"
          >
            {type === 'player' ? labels.player : labels.global}
          </Badge>
          {args.length > 0 && (
            <div className="flex items-center gap-1 text-[11px] text-fd-muted-foreground ml-1">
              {args.map((arg) => (
                <span
                  key={arg}
                  className="font-mono text-[10px] bg-fd-muted/60 text-fd-muted-foreground px-1 py-0.2 rounded border border-fd-border/40"
                >
                  &lt;{arg}&gt;
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-xs text-fd-muted-foreground sm:text-right leading-relaxed break-words">
          {description}
        </p>
      </div>

      <div className="space-y-1.5">
        <ItemContext.Provider value={renderers}>{children}</ItemContext.Provider>
      </div>
    </div>
  );
}

interface ExampleProps {
  syntax: string;
  result: string;
}

function Example({ syntax, result }: ExampleProps): React.JSX.Element {
  const labels = useRequired(
    useContext(DisplayContext),
    '<Query.Example> must be rendered inside <Query.Display>.'
  );
  const renderers = useRequired(
    useContext(ItemContext),
    '<Query.Example> must be rendered inside <Query.DisplayItem>.'
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 rounded-lg bg-fd-muted/25 border border-fd-border/40 text-xs items-center">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[10px] font-semibold text-fd-muted-foreground uppercase tracking-wider shrink-0 w-12">
          {labels.syntax}
        </span>
        <code className="font-mono text-xs text-fd-foreground break-all whitespace-normal">
          {renderers.syntax(syntax)}
        </code>
      </div>
      <div className="flex items-center gap-2 min-w-0 md:border-l md:border-fd-border/40 md:pl-3">
        <span className="text-[10px] font-semibold text-fd-primary uppercase tracking-wider shrink-0 w-12">
          {labels.result}
        </span>
        <code className="font-mono text-xs font-semibold text-fd-primary break-all whitespace-normal">
          {renderers.result(result)}
        </code>
      </div>
    </div>
  );
}

export {
  QueryRoot as Query,
  Form as QueryForm,
  FormItem as QueryFormItem,
  Arguments as QueryArguments,
  Argument as QueryArgument,
  Display as QueryDisplay,
  DisplayItem as QueryDisplayItem,
  Example as QueryExample,
};
