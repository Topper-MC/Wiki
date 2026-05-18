import React from 'react';
import QueryVar from '@site/src/components/forms/QueryVar';
import QueryCode from '@site/src/components/QueryCode';

export interface QueryTypesProps {
  type?: 'top_name' | 'top_key' | 'top_value' | 'top_value_raw' | 'top_rank' | 'top_size' | 'value' | 'value_raw';
  prefix?: boolean;
  playerPrefix?: string;
  playerSuffix?: string;
  globalPrefix?: string;
  globalSuffix?: string;
  holder?: string;
  position?: string;
}

type Segment = string | 'holder' | 'position' | { code: string };

interface QueryExample {
  format: Segment[];
  desc: Segment[];
}

interface QueryDefinition {
  id: string;
  type: 'global' | 'player';
  description: string;
  formats: string[];
  args: ('holder' | 'position' | 'format')[];
  examples: QueryExample[];
}

const definitions: QueryDefinition[] = [
  {
    id: 'top_name',
    type: 'global',
    description: 'The name of the player at the specified position.',
    formats: ['<holder>;top_name;<position>'],
    args: ['holder', 'position'],
    examples: [
      {
        format: ['holder', ';top_name;', 'position'],
        desc: ['Retrieve the name of the player at position ', 'position', ' in the Holder named ', 'holder'],
      },
    ],
  },
  {
    id: 'top_key',
    type: 'global',
    description: 'The UUID of the player at the specified position.',
    formats: ['<holder>;top_key;<position>'],
    args: ['holder', 'position'],
    examples: [
      {
        format: ['holder', ';top_key;', 'position'],
        desc: ['Retrieve the UUID of the player at position ', 'position', ' in the Holder named ', 'holder'],
      },
    ],
  },
  {
    id: 'top_value',
    type: 'global',
    description: 'The value of the player at the specified position.',
    formats: [
      '<holder>;top_value;<position>',
      '<holder>;top_value;<position>;<format>',
    ],
    args: ['holder', 'position', 'format'],
    examples: [
      {
        format: ['holder', ';top_value;', 'position'],
        desc: ['Retrieve the value of the player at position ', 'position', ' in the Holder named ', 'holder'],
      },
      {
        format: ['holder', ';top_value;', 'position', ';#,###'],
        desc: ['Retrieve the formatted value of the player at position ', 'position', ' in the Holder named ', 'holder', ', in the format of ', { code: '#,###' }],
      },
    ],
  },
  {
    id: 'top_value_raw',
    type: 'global',
    description: 'The raw value of the player at the specified position.',
    formats: ['<holder>;top_value_raw;<position>'],
    args: ['holder', 'position'],
    examples: [
      {
        format: ['holder', ';top_value_raw;', 'position'],
        desc: ['Retrieve the raw value of the player at position ', 'position', ' in the Holder named ', 'holder'],
      },
    ],
  },
  {
    id: 'top_rank',
    type: 'global',
    description: "The player's rank (position number) in the specified Holder.",
    formats: [
      '<holder>;top_rank',
      '<holder>;top_rank;<format>',
    ],
    args: ['holder', 'format'],
    examples: [
      {
        format: ['holder', ';top_rank'],
        desc: ['Retrieve the rank of the player in the Holder named ', 'holder'],
      },
      {
        format: ['holder', ';top_rank;#,###'],
        desc: ['Retrieve the formatted rank of the player in the Holder named ', 'holder'],
      },
    ],
  },
  {
    id: 'top_size',
    type: 'global',
    description: 'The amount of entries in the Holder.',
    formats: ['<holder>;top_size'],
    args: ['holder'],
    examples: [
      {
        format: ['holder', ';top_size'],
        desc: ['Retrieve the amount of entries in the Holder named ', 'holder'],
      },
    ],
  },
  {
    id: 'value',
    type: 'player',
    description: 'The value of the player.',
    formats: [
      '<holder>;value',
      '<holder>;value;<format>',
    ],
    args: ['holder', 'format'],
    examples: [
      {
        format: ['holder', ';value'],
        desc: ['Retrieve the value of the player in the Holder named ', 'holder'],
      },
      {
        format: ['holder', ';value;#,###'],
        desc: ['Retrieve the formatted value of the player in the Holder named ', 'holder'],
      },
    ],
  },
  {
    id: 'value_raw',
    type: 'player',
    description: 'The raw value of the player.',
    formats: ['<holder>;value_raw'],
    args: ['holder'],
    examples: [
      {
        format: ['holder', ';value_raw'],
        desc: ['Retrieve the raw value of the player in the Holder named ', 'holder'],
      },
    ],
  },
];

const ARG_DESCRIPTIONS: Record<string, React.ReactNode> = {
  holder: <li><code>&lt;holder&gt;</code>: The name of the Holder</li>,
  position: <li><code>&lt;position&gt;</code>: The position of the player in the Holder</li>,
  format: (
    <li>
      <code>&lt;format&gt;</code>: A number format pattern, see <a href="/Wiki/topper/extra/value_display/">Value Display</a> for more details on how to apply a format
    </li>
  ),
};

function renderSegments(segments: Segment[], codeMode = false) {
  return segments.map((seg, idx) => {
    if (seg === 'holder') {
      return codeMode ? <QueryVar key={idx} field="holder" /> : <code key={idx}><QueryVar key={idx} field="holder" /></code>;
    }
    if (seg === 'position') {
      return <QueryVar key={idx} field="position" />;
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

export default function QueryTypes(props: QueryTypesProps) {
  return (
    <>
      {definitions.map((def) => {
        if (props.type && props.type !== def.id) return null;
        return (
          <div key={def.id}>
            {props.type ? null : (props.prefix ? <h3><code>{def.id}</code></h3> : <h3 id={def.id}><code>{def.id}</code></h3>)}
            <ul>
              <li>
                <strong>Format</strong>:
                <ul>
                  {def.formats.map((fmt, idx) => (
                    <li key={idx}>
                      <QueryCode p={props} type={def.type}>
                        {fmt}
                      </QueryCode>
                    </li>
                  ))}
                </ul>
              </li>
              <li><strong>Description</strong>: {def.description}</li>
              {def.args.length > 0 && (
                <li>
                  <strong>Argument</strong>:
                  <ul>
                    {def.args.map((arg, idx) => <React.Fragment key={idx}>{ARG_DESCRIPTIONS[arg]}</React.Fragment>)}
                  </ul>
                </li>
              )}
              <li>
                <strong>Example</strong>:
                <ul>
                  {def.examples.map((ex, idx) => (
                    <li key={idx}>
                      <QueryCode p={props} type={def.type}>
                        {renderSegments(ex.format, true)}
                      </QueryCode>
                      <ul>
                        <li>{renderSegments(ex.desc, false)}</li>
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
