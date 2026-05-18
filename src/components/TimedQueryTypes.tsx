import React from 'react';
import QueryVar from '@site/src/components/forms/QueryVar';
import QueryCode from '@site/src/components/QueryCode';

export interface TimedQueryTypesProps {
  type?: 'remain_time' | 'end_time';
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
  args: ('holder' | 'time_format' | 'end_time_format')[];
  examples: QueryExample[];
}

const definitions: QueryDefinition[] = [
  {
    id: 'remain_time',
    type: 'global',
    description: 'The remaining time until the next reset.',
    formats: [
      '<holder>;remain_time',
      '<holder>;remain_time;<format>',
    ],
    args: ['holder', 'time_format'],
    examples: [
      {
        format: ['holder', ';remain_time'],
        desc: ['Retrieve the remaining time in millis until the next reset of the Holder named ', 'holder'],
      },
      {
        format: ['holder', ';remain_time;HH:mm:ss'],
        desc: ['Retrieve the remaining time until the next reset of the Holder named ', 'holder'],
      },
    ],
  },
  {
    id: 'end_time',
    type: 'global',
    description: 'The time of the next reset.',
    formats: [
      '<holder>;end_time',
      '<holder>;end_time;<format>',
    ],
    args: ['holder', 'end_time_format'],
    examples: [
      {
        format: ['holder', ';end_time'],
        desc: ['Retrieve the next reset time in millis of the Holder named ', 'holder'],
      },
      {
        format: ['holder', ';end_time;yyyy-MM-dd HH:mm:ss'],
        desc: ['Retrieve the next reset time of the Holder named ', 'holder'],
      },
    ],
  },
];

const ARG_DESCRIPTIONS: Record<string, React.ReactNode> = {
  holder: <li><code>&lt;holder&gt;</code>: The name of the Holder</li>,
  time_format: <li><code>&lt;format&gt;</code>: A time format pattern (e.g., <code>HH:mm:ss</code> for hours:minutes:seconds)</li>,
  end_time_format: <li><code>&lt;format&gt;</code>: A time format pattern (e.g., <code>yyyy-MM-dd HH:mm:ss</code>)</li>,
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

export default function TimedQueryTypes(props: TimedQueryTypesProps) {
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
