+++
title = "Value Display"
+++

Some places like [`{value}` in `line`]({{% ref "topper/extra/provider#default-values" %}}) and [the `value` and `top_value` queries]({{% ref "topper/query" %}}) can be expanded to format the value in a more readable way. This is done by specifying some settings for them like:

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
| `pattern` | The pattern describing the date and time format. There are short forms to `pattern` (see [Short Form](#short-form)) | `HH:mm:ss` | `pattern=HH:mm:ss` |
| `type` | The type of the time: `duration` or `time` | `duration` | `type=duration` |
| `unit` | The unit of the time: `ticks`, `nanoseconds`, `microseconds`, `milliseconds`, `seconds`, `minutes`, `hours`, `days` | `seconds` | `unit=seconds` |

Example: `playtime;value;time:pattern=HH:mm:ss&type=duration&unit=ticks`

#### Short Form

There are some short forms to the `pattern` for conveniently defining the format without remembering too much of the syntax.

Depending on the `type` of the time, there are different short forms. Here is a list of the different short forms based on the `type`:
- `type=duration`
  - `pattern=default`: Use the format `HH:mm:ss`
  - `pattern=word`: Use a format that describes the duration in words (e.g. `1 day 1 hour 2 minutes 30 seconds`)
  - `pattern=short`: Use the format `H:mm:ss`
  - `pattern=short-word`: Use the format `d'd 'H'h 'm'm 's's'` (e.g. `1d 1h 2m 30s`)
- `type=time`
  - The available short forms of the `pattern` can be found in the **Predefined Formatters** of the [`DateTimeFormatter`](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html)
  - For example, if you want to use `ISO_LOCAL_DATE`, the setting will be `pattern=ISO_LOCAL_DATE`

### Shorten

> Format: `shorten`

This is a format that shorten the number to the nearest "number group" (e.g. `1000` will be `1k`)

The default behavior will support the following groups:
- `1,000` to `1k`
- `1,000,000` to `1M`
- `1,000,000,000` to `1B`
- `1,000,000,000,000` to `1T`

You can also define a list of custom groups by specifying them as settings in pair of number and suffix.
For example: `shorten:1000=k&100000=hk&1000000=m` would shorten the number based on the following groups:
- `1,000` to `1k`
- `100,000` to `1hk`
- `1,000,000` to `1m`

Example:
- `money:value:shorten`
- `money:value:shorten:1000=k&100000=hk&1000000=m`
