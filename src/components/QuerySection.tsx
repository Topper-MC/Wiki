import React, { useState } from 'react';
import { translate } from '@docusaurus/Translate';
import Input from '@site/src/components/ui/Input';
import FieldWrapper from '@site/src/components/ui/FieldWrapper';

type Segment = string | 'holder' | 'position' | { code: string };

export interface QueryExample {
  format: Segment[];
  desc: Segment[];
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

const DEFAULT_ARG_DESCRIPTIONS: Record<string, React.ReactNode> = {
  holder: <li><code>&lt;holder&gt;</code>: The name of the Holder</li>,
  position: <li><code>&lt;position&gt;</code>: The position of the player in the Holder</li>,
  format: (
    <li>
      <code>&lt;format&gt;</code>: A number format pattern, see <a href="/Wiki/topper/extra/value_display/">Value Display</a> for more details on how to apply a format
    </li>
  ),
};

function renderSegments(
  segments: Segment[],
  holderValue: string,
  positionValue: string,
  codeMode = false,
) {
  return segments.map((seg, idx) => {
    if (seg === 'holder') {
      return codeMode ? (
        <span key={idx}>{holderValue}</span>
      ) : (
        <code key={idx}>{holderValue}</code>
      );
    }
    if (seg === 'position') {
      return <span key={idx}>{positionValue}</span>;
    }
    if (typeof seg === 'string') {
      return seg;
    }
    if (seg && typeof seg === 'object' && 'code' in seg) {
      return <code key={idx}>{seg.code}</code>;
    }
    return null;
  });
}

export default function QuerySection({
  definitions,
  args,
  prefix,
  playerPrefix,
  playerSuffix,
  globalPrefix,
  globalSuffix,
}: QuerySectionProps): React.JSX.Element {
  const [holderValue, setHolderValue] = useState('money');
  const [positionValue, setPositionValue] = useState('1');

  const argDescriptions = args ?? DEFAULT_ARG_DESCRIPTIONS;

  const labelHolder = translate({ id: 'ui.holderName', message: 'Holder Name' });
  const descHolder = translate({ id: 'ui.holderNameDescription', message: 'The name of the holder (e.g. money, exp)' });
  const labelPosition = translate({ id: 'ui.position', message: 'Position' });
  const descPosition = translate({ id: 'ui.positionDescription', message: 'The position in the leaderboard (must be >= 1)' });

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="form-container">
        <FieldWrapper label={labelHolder} description={descHolder}>
          {(id) => (
            <Input
              id={id}
              value={holderValue}
              onChange={(e) => setHolderValue(e.target.value)}
            />
          )}
        </FieldWrapper>
        <FieldWrapper label={labelPosition} description={descPosition}>
          {(id) => (
            <Input
              id={id}
              type="number"
              value={positionValue}
              onChange={(e) => setPositionValue(e.target.value)}
            />
          )}
        </FieldWrapper>
      </form>

      {definitions.map((def) => {
        const prefixStr = prefix ? (def.type === 'player' ? (playerPrefix ?? '') : (globalPrefix ?? '')) : '';
        const suffixStr = prefix ? (def.type === 'player' ? (playerSuffix ?? '') : (globalSuffix ?? '')) : '';

        return (
          <div key={def.id}>
            <h3><code>{def.id}</code></h3>
            <ul>
              <li>
                <strong>Format</strong>:
                <ul>
                  {def.formats.map((fmt, idx) => (
                    <li key={idx}>
                      <code>{prefixStr}{fmt}{suffixStr}</code>
                    </li>
                  ))}
                </ul>
              </li>
              <li><strong>Description</strong>: {def.description}</li>
              {def.args.length > 0 && (
                <li>
                  <strong>Argument</strong>:
                  <ul>
                    {def.args.map((arg, idx) => (
                      <React.Fragment key={idx}>{argDescriptions[arg]}</React.Fragment>
                    ))}
                  </ul>
                </li>
              )}
              <li>
                <strong>Example</strong>:
                <ul>
                  {def.examples.map((ex, idx) => (
                    <li key={idx}>
                      <code>{prefixStr}{renderSegments(ex.format, holderValue, positionValue, true)}{suffixStr}</code>
                      <ul>
                        <li>{renderSegments(ex.desc, holderValue, positionValue, false)}</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
