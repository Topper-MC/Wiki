import type { QueryDefinition } from '@site/src/components/QuerySection';

export const topperDefinitions: QueryDefinition[] = [
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

export const timedDefinitions: QueryDefinition[] = [
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

export const timedArgDescriptions: Record<string, React.ReactNode> = {
  holder: <li><code>&lt;holder&gt;</code>: The name of the Holder</li>,
  time_format: <li><code>&lt;format&gt;</code>: A time format pattern (e.g., <code>HH:mm:ss</code> for hours:minutes:seconds)</li>,
  end_time_format: <li><code>&lt;format&gt;</code>: A time format pattern (e.g., <code>yyyy-MM-dd HH:mm:ss</code>)</li>,
};
