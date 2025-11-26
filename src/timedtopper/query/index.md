---
title: Query
---

<script setup>
import { ref } from 'vue'
import QueryTypes from "/topper/query/query_types.md";
import TimedQueryTypes from './query_types.md';

const queryFormData = ref({
    holder: 'money',
    position: '1'
})
</script>

# Query

The query system is the same as the one used in Topper, with the addition that the `<holder>` is the name of the Holder
specified in the configuration file of TimedTopper.

Refer to the [Topper Query](/topper/query/) page for more information.

## Types

::: details Click me to edit the example values

<Vueform v-model="queryFormData" sync>
    <TextElement name="holder" label="Holder Name" description="The name of the Holder used in examples" />
    <TextElement name="position" label="Position" input-type="number" description="The position used in examples" />
</Vueform>

:::

<QueryTypes :exampleHolder="queryFormData.holder" :examplePosition="queryFormData.position" />
<TimedQueryTypes :exampleHolder="queryFormData.holder" />
