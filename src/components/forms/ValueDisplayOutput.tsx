'use client';

import React from 'react';
import { Card } from 'fumadocs-ui/components/card';
import { useFormI18n } from '@site/src/lib/i18n';

interface ValueDisplayOutputProps {
  code: string;
}

export default function ValueDisplayOutput({ code }: ValueDisplayOutputProps): React.JSX.Element {
  const t = useFormI18n();

  return (
    <Card
      title={t('ui.usageGuidance', 'Usage Guidance')}
      className="my-6"
    >
      <div className="space-y-3 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-fd-secondary/20 border border-fd-border/50 text-sm">
          <span className="text-xs text-fd-muted-foreground font-medium">
            Format String (Use in <code className="px-1.5 py-0.5 rounded bg-fd-secondary text-fd-foreground font-mono text-xs">default-value-display</code>)
          </span>
          <code className="px-2 py-1 rounded bg-fd-secondary font-mono text-xs font-semibold text-fd-primary">{code}</code>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-fd-secondary/20 border border-fd-border/50 text-sm">
          <span className="text-xs text-fd-muted-foreground font-medium">
            In <code className="px-1.5 py-0.5 rounded bg-fd-secondary text-fd-foreground font-mono text-xs">line</code> (as placeholder)
          </span>
          <code className="px-2 py-1 rounded bg-fd-secondary font-mono text-xs font-semibold text-fd-primary">{`{value_${code}}`}</code>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-fd-secondary/20 border border-fd-border/50 text-sm">
          <span className="text-xs text-fd-muted-foreground font-medium">
            In <code className="px-1.5 py-0.5 rounded bg-fd-secondary text-fd-foreground font-mono text-xs">value</code> query
          </span>
          <code className="px-2 py-1 rounded bg-fd-secondary font-mono text-xs font-semibold text-fd-primary">{`<holder>;value;${code}`}</code>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-fd-secondary/20 border border-fd-border/50 text-sm">
          <span className="text-xs text-fd-muted-foreground font-medium">
            In <code className="px-1.5 py-0.5 rounded bg-fd-secondary text-fd-foreground font-mono text-xs">top_value</code> query
          </span>
          <code className="px-2 py-1 rounded bg-fd-secondary font-mono text-xs font-semibold text-fd-primary">{`<holder>;top_value;<position>;${code}`}</code>
        </div>
      </div>
    </Card>
  );
}
