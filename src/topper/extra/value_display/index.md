---
title: Value Display
---

<script setup>
import { ref } from 'vue';

const decimalFormData = ref({
    decimalSeparator: '.',
    groupingSeparator: ',',
    groupingSize: '3',
    maximumFractionDigits: '2',
});

const timeFormData = ref({
    pattern: 'HH:mm:ss',
    type: 'duration',
    unit: 'seconds',
});

const shortenFormData = ref({
    customGroups: [],
});
</script>

# Value Display

Some places like [`{value}` in `line`](/topper/extra/provider/#default-values) and [the `value` and
`top_value` queries](/topper/query/#types) allows you to apply a format to display the value in a more readable way. This is done by
specifying some settings for them like:

```
{value_<format>}
<holder>;value;<format>
<holder>;top_value;<position>;<format>
```

The following section will guide you through the available formats to replace `<format>`.

## Available Formats

### Decimal Format

> Format: `decimal:setting1=value1&setting2=value2`

| Setting                 | Description                                                                          | Default | Example                   |
|-------------------------|--------------------------------------------------------------------------------------|---------|---------------------------|
| `decimalSeparator`      | The character used to separate the integer part from the fractional part             | `.`     | `decimalSeparator=.`      |
| `groupingSeparator`     | The character used to separate groups of digits to the left of the decimal separator |         | `groupingSeparator=,`     |
| `groupingSize`          | The number of digits in each group to the left of the decimal separator              |         | `groupingSize=3`          |
| `maximumFractionDigits` | The maximum number of digits allowed in the fractional part of the number            |         | `maximumFractionDigits=2` |

#### Example

```-vue
{value_decimal:{{ ['decimalSeparator=' + decimalFormData.decimalSeparator, decimalFormData.groupingSeparator ? 'groupingSeparator=' + decimalFormData.groupingSeparator : '', decimalFormData.groupingSize ? 'groupingSize=' + decimalFormData.groupingSize : '', decimalFormData.maximumFractionDigits ? 'maximumFractionDigits=' + decimalFormData.maximumFractionDigits : ''].filter(Boolean).join('&') }}}
<holder>;value;decimal:{{ ['decimalSeparator=' + decimalFormData.decimalSeparator, decimalFormData.groupingSeparator ? 'groupingSeparator=' + decimalFormData.groupingSeparator : '', decimalFormData.groupingSize ? 'groupingSize=' + decimalFormData.groupingSize : '', decimalFormData.maximumFractionDigits ? 'maximumFractionDigits=' + decimalFormData.maximumFractionDigits : ''].filter(Boolean).join('&') }}
<holder>;top_value;<position>;decimal:{{ ['decimalSeparator=' + decimalFormData.decimalSeparator, decimalFormData.groupingSeparator ? 'groupingSeparator=' + decimalFormData.groupingSeparator : '', decimalFormData.groupingSize ? 'groupingSize=' + decimalFormData.groupingSize : '', decimalFormData.maximumFractionDigits ? 'maximumFractionDigits=' + decimalFormData.maximumFractionDigits : ''].filter(Boolean).join('&') }}
```

::: details Click me to edit the settings

<Vueform v-model="decimalFormData" sync>
    <TextElement name="decimalSeparator" label="Decimal Separator" description="The character used to separate the integer part from the fractional part" />
    <TextElement name="groupingSeparator" label="Grouping Separator" description="The character used to separate groups of digits (leave empty to disable)" />
    <TextElement name="groupingSize" label="Grouping Size" input-type="number" description="The number of digits in each group" />
    <TextElement name="maximumFractionDigits" label="Maximum Fraction Digits" input-type="number" description="The maximum number of digits in the fractional part (leave empty for unlimited)" />
</Vueform>

:::

### Time Format

> Format: `time:setting1=value1&setting2=value2`

| Setting   | Description                                                                                                         | Default    | Example            |
|-----------|---------------------------------------------------------------------------------------------------------------------|------------|--------------------|
| `pattern` | The pattern describing the date and time format. There are short forms to `pattern` (see [Short Form](#short-form)) | `HH:mm:ss` | `pattern=HH:mm:ss` |
| `type`    | The type of the time: `duration` or `time`                                                                          | `duration` | `type=duration`    |
| `unit`    | The unit of the time: `ticks`, `nanoseconds`, `microseconds`, `milliseconds`, `seconds`, `minutes`, `hours`, `days` | `seconds`  | `unit=seconds`     |

#### Example

```-vue
{value_time:pattern={{ timeFormData.pattern }}&type={{ timeFormData.type }}&unit={{ timeFormData.unit }}}
<holder>;value;time:pattern={{ timeFormData.pattern }}&type={{ timeFormData.type }}&unit={{ timeFormData.unit }}
<holder>;top_value;<position>;time:pattern={{ timeFormData.pattern }}&type={{ timeFormData.type }}&unit={{ timeFormData.unit }}
```

::: details Click me to edit the settings

<Vueform v-model="timeFormData" sync>
    <TextElement name="pattern" label="Pattern" description="The pattern describing the date and time format" />
    <SelectElement
        name="type"
        label="Type"
        :native="false"
        :items="['duration', 'time']"
        :canClear="false"
        description="The type of the time: duration or time"
    />
    <SelectElement
        name="unit"
        label="Unit"
        :native="false"
        :items="['ticks', 'nanoseconds', 'microseconds', 'milliseconds', 'seconds', 'minutes', 'hours', 'days']"
        :canClear="false"
        description="The unit of the time"
    />
</Vueform>

:::

#### Short Form

There are some short forms to the `pattern` for conveniently defining the format without remembering too much of the
syntax.

Depending on the `type` of the time, there are different short forms. Here is a list of the different short forms based
on the `type`:

- `type=duration`
    - `pattern=default`: Use the format `HH:mm:ss`
    - `pattern=word`: Use a format that describes the duration in words (e.g. `1 day 1 hour 2 minutes 30 seconds`)
    - `pattern=short`: Use the format `H:mm:ss`
    - `pattern=short-word`: Use the format `d'd 'H'h 'm'm 's's'` (e.g. `1d 1h 2m 30s`)
- `type=time`
    - The available short forms of the `pattern` can be found in the **Predefined Formatters** of the [
      `DateTimeFormatter`](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html)
    - For example, if you want to use `ISO_LOCAL_DATE`, the setting will be `pattern=ISO_LOCAL_DATE`

### Shorten

> Format: `shorten` or `shorten:number1=suffix1&number2=suffix2`

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

#### Example

```-vue
{value_shorten{{ shortenFormData.customGroups.filter(g => g && g.number && g.suffix).length > 0 ? ':' + shortenFormData.customGroups.filter(g => g && g.number && g.suffix).map(g => g.number + '=' + g.suffix).join('&') : '' }}}
<holder>;value;shorten{{ shortenFormData.customGroups.filter(g => g && g.number && g.suffix).length > 0 ? ':' + shortenFormData.customGroups.filter(g => g && g.number && g.suffix).map(g => g.number + '=' + g.suffix).join('&') : '' }}
<holder>;top_value;<position>;shorten{{ shortenFormData.customGroups.filter(g => g && g.number && g.suffix).length > 0 ? ':' + shortenFormData.customGroups.filter(g => g && g.number && g.suffix).map(g => g.number + '=' + g.suffix).join('&') : '' }}
```

::: details Click me to edit the custom groups

<Vueform v-model="shortenFormData" sync>
    <ListElement name="customGroups" label="Custom Groups" description="Define custom number and suffix pairs (leave empty to use default groups)">
        <template #default="{ index }">
            <ObjectElement :name="index" label="Group">
                <TextElement name="number" placeholder="Number (e.g., 1000)" />
                <TextElement name="suffix" placeholder="Suffix (e.g., k)" />
            </ObjectElement>
        </template>
    </ListElement>
</Vueform>

:::