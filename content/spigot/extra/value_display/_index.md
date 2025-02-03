+++
title = "Value Display"
+++

Some places like [`{value}` in `line`]({{% ref "spigot/extra/default_value" %}}) and [the `value` and `top_value` queries]({{% ref "spigot/query" %}}) can be expanded to format the value in a more readable way. This is done by specifying some settings for them like:

- `{value_<format>}`
- `<holder>;value;<format>`
- `<holder>;top_value;<position>;<format>`

The following section will guide you through the available formats to replace `<format>`, we will use the `<holder>;value;<format>` query as an example.

## Available Formats

### Decimal Format

> Format: `decimal:setting1=value1&setting2=value2`

| Setting | Description | Default | Example |
| --- | --- | --- | --- |
| `decimalSeparator` | The character used to separate the integer part from the fractional part | `.` | `decimalSeparator=.` |
| `groupingSeparator` | The character used to separate groups of digits to the left of the decimal separator | | `groupingSeparator=,` |
| `groupingSize` | The number of digits in each group to the left of the decimal separator | | `groupingSize=3` |
| `maximumFractionDigits` | The maximum number of digits allowed in the fractional part of the number | | `maximumFractionDigits=2` |

Example: `jump;value;decimal:decimalSeparator=,&groupingSeparator=.&groupingSize=3&maximumFractionDigits=2`

### Time Format

> Format: `time:setting1=value1&setting2=value2`

| Setting | Description | Default | Example |
| --- | --- | --- | --- |
| `pattern` | The pattern describing the date and time format | `HH:mm:ss` | `pattern=HH:mm:ss` |
| `type` | The type of the time: `duration` or `time` | `duration` | `type=duration` |
| `unit` | The unit of the time: `ticks`, `nanoseconds`, `microseconds`, `milliseconds`, `seconds`, `minutes`, `hours`, `days` | `seconds` | `unit=seconds` |

Example: `playtime;value;time:pattern=HH:mm:ss&type=duration&unit=ticks`
