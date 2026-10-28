'use client';

import React, { useState } from 'react';
import { Card } from 'fumadocs-ui/components/card';
import {
  Badge,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from '@/components/ui';
import { useFormI18n } from '@/lib/i18n';

export type Segment = string | 'holder' | 'position' | { code: string };

export interface QueryExample {
  format: string | Segment[];
  desc: string | Segment[];
}

export interface QueryDefinition {
  id: string;
  type: 'global' | 'player';
  description: string;
  formats: string[];
  args: string[];
  examples: QueryExample[];
}

interface QuerySectionProps {
  definitions: QueryDefinition[];
  args?: Record<string, React.ReactNode>;
  prefix?: boolean;
  playerPrefix?: string;
  playerSuffix?: string;
  globalPrefix?: string;
  globalSuffix?: string;
}

function renderFormat(
  format: string | Segment[],
  holder: string,
  position: string
): string {
  if (typeof format === 'string') {
    return format.replaceAll('{holder}', holder).replaceAll('{position}', position);
  }
  return format
    .map((seg) => {
      if (seg === 'holder') return holder;
      if (seg === 'position') return position;
      if (typeof seg === 'object' && seg !== null && 'code' in seg) return seg.code;
      return seg;
    })
    .join('');
}

export default function QuerySection({
  definitions,
  args,
  prefix = false,
  playerPrefix = '',
  playerSuffix = '',
  globalPrefix = '',
  globalSuffix = '',
}: QuerySectionProps): React.JSX.Element {
  const [holder, setHolder] = useState('money');
  const [position, setPosition] = useState('1');
  const t = useFormI18n();

  return (
    <div className="not-prose my-6 space-y-4">
      {/* Interactive Playground Card */}
      <Card
        title={t('ui.interactiveQueryPlayground', 'Interactive Query Playground')}
        className="not-prose"
      >
        <div className="pt-2 space-y-3">
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="query-holder">
                {t('ui.holderName', 'Holder Name')}
              </FieldLabel>
              <Input
                id="query-holder"
                value={holder}
                onChange={(e) => setHolder(e.target.value)}
              />
              <FieldDescription>
                {t('ui.holderNameDescription', 'The name of the holder (e.g. money, exp)')}
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="query-position">
                {t('ui.position', 'Position')}
              </FieldLabel>
              <Input
                id="query-position"
                type="number"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
              <FieldDescription>
                {t('ui.positionDescription', 'The position in the leaderboard (must be >= 1)')}
              </FieldDescription>
            </Field>
          </FieldGroup>

          {/* Quick Argument Reference */}
          <div className="pt-2.5 border-t border-fd-border/50 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-fd-muted-foreground">
            <span className="font-medium text-fd-foreground/80 shrink-0">
              {t('ui.arguments', 'Arguments')}:
            </span>
            <span>
              <code className="font-semibold text-fd-foreground">&lt;holder&gt;</code>{' '}
              {t('arg.holder', 'Holder name')}
            </span>
            <span>
              <code className="font-semibold text-fd-foreground">&lt;position&gt;</code>{' '}
              {t('arg.position', 'Leaderboard position')}
            </span>
            <span>
              <code className="font-semibold text-fd-foreground">&lt;format&gt;</code>{' '}
              {t('arg.format', 'Format pattern')}
            </span>
          </div>
        </div>
      </Card>

      {/* Simplified Query List */}
      <div className="rounded-xl border border-fd-border bg-fd-card/40 divide-y divide-fd-border overflow-hidden">
        {definitions.map((def) => {
          const pfx = prefix ? (def.type === 'player' ? playerPrefix : globalPrefix) : '';
          const sfx = prefix ? (def.type === 'player' ? playerSuffix : globalSuffix) : '';
          const description = t(`query.${def.id}.desc`, def.description);

          return (
            <div
              key={def.id}
              className="p-3.5 space-y-2.5 transition-colors hover:bg-fd-muted/15"
            >
              {/* Header: ID, Badge, Args, and Description */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-bold text-fd-foreground bg-fd-muted px-2 py-0.5 rounded border border-fd-border/70">
                    {def.id}
                  </span>
                  <Badge
                    variant={def.type === 'player' ? 'secondary' : 'outline'}
                    className="text-[10px] h-4.5 px-1.5 font-normal"
                  >
                    {def.type === 'player'
                      ? t('ui.player', 'Player')
                      : t('ui.global', 'Global')}
                  </Badge>
                  {def.args.length > 0 && (
                    <div className="flex items-center gap-1 text-[11px] text-fd-muted-foreground ml-1">
                      {def.args.map((arg) => {
                        const tag =
                          arg === 'time_format' || arg === 'end_time_format'
                            ? 'format'
                            : arg;
                        return (
                          <span
                            key={arg}
                            className="font-mono text-[10px] bg-fd-muted/60 text-fd-muted-foreground px-1 py-0.2 rounded border border-fd-border/40"
                          >
                            &lt;{tag}&gt;
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
                <p className="text-xs text-fd-muted-foreground sm:text-right leading-relaxed break-words">
                  {description}
                </p>
              </div>

              {/* Syntax & Live Result Pairs */}
              <div className="space-y-1.5">
                {def.examples.map((ex, idx) => {
                  const syntaxFmt = def.formats[idx] ?? def.formats[0];

                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2 rounded-lg bg-fd-muted/25 border border-fd-border/40 text-xs items-center"
                    >
                      {/* Left: Syntax */}
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[10px] font-semibold text-fd-muted-foreground uppercase tracking-wider shrink-0 w-12">
                          {t('ui.syntax', 'Syntax')}
                        </span>
                        <code className="font-mono text-xs text-fd-foreground break-all whitespace-normal">
                          {pfx}{syntaxFmt}{sfx}
                        </code>
                      </div>

                      {/* Right: Evaluated Result */}
                      <div className="flex items-center gap-2 min-w-0 md:border-l md:border-fd-border/40 md:pl-3">
                        <span className="text-[10px] font-semibold text-fd-primary uppercase tracking-wider shrink-0 w-12">
                          {t('ui.result', 'Result')}
                        </span>
                        <code className="font-mono text-xs font-semibold text-fd-primary break-all whitespace-normal">
                          {pfx}{renderFormat(ex.format, holder, position)}{sfx}
                        </code>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
