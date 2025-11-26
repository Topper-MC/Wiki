---
title: MiniPlaceholders
---

<script setup>
import { ref } from 'vue'
import QueryTypes from '/topper/query/query_types.md'

const queryFormData = ref({
    holder: 'money',
    position: '1'
})
</script>

# MiniPlaceholders

> [!NOTE]
> Install [MiniPlaceholders](https://modrinth.com/plugin/miniplaceholders)

The plugin provides a MiniPlaceholders placeholder to allow you to query data from the Top Holder.

## Usage

```
<topper_global:<query>>
<topper_player:<query>>
```

Check the [Query](/topper/query/) section for more information about how to set the `<query>`.

## Example

::: details Click me to edit the example values

<Vueform v-model="queryFormData" sync>
    <TextElement name="holder" label="Holder Name" description="The name of the Holder used in examples" />
    <TextElement name="position" label="Position" input-type="number" description="The position used in examples" />
</Vueform>

:::

<QueryTypes :exampleHolder="queryFormData.holder" :examplePosition="queryFormData.position" globalPrefix="<topper_global:" globalSuffix=">" playerPrefix="<topper_player:" playerSuffix=">" />
