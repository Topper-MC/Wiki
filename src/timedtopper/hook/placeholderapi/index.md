---
title: PlaceholderAPI
---

<script setup>
import { ref } from 'vue'
import QueryTypes from "/topper/query/query_types.md";
import TimedQueryTypes from "/timedtopper/query/query_types.md";

const queryFormData = ref({
    holder: 'money',
    position: '1'
})
</script>

# PlaceholderAPI

The plugin provides a PlaceholderAPI placeholder to allow you to query data from the Holder.

## Usage

```
%timedtopper_<query>%
```

Check the [Query](/timedtopper/query/) section for more information about how to set the `<query>`.

## Example

::: details Click me to edit the example values

<Vueform v-model="queryFormData" sync>
    <TextElement name="holder" label="Holder Name" description="The name of the Holder used in examples" />
    <TextElement name="position" label="Position" input-type="number" description="The position used in examples" />
</Vueform>

:::

<QueryTypes :exampleHolder="queryFormData.holder" :examplePosition="queryFormData.position" globalPrefix="%timedtopper_" globalSuffix="%" playerPrefix="%timedtopper_" playerSuffix="%" />
<TimedQueryTypes :exampleHolder="queryFormData.holder" globalPrefix="%timedtopper_" globalSuffix="%" />