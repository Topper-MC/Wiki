---
title: Query
---

<script setup>
import { ref } from 'vue'
import QueryTypes from './query_types.md'

const queryFormData = ref({
    holder: 'money',
    position: '1'
})
</script>

# Query

This page provides information about the query system, which is used to retrieve data from the Top Holder.

## Format

The format of a query is as follows:

```
<holder>;<type>;<args>
```

- `<holder>`: The Top Holder to query.
- `<type>`: The type of data to retrieve.
- `<args>`: Additional arguments for the query.

If the `<type>` does not require any arguments, the query can be simplified to:

```
<holder>;<type>
```

## Types

::: details Click me to edit the example values

<Vueform v-model="queryFormData" sync>
    <TextElement name="holder" label="Holder Name" description="The name of the Holder used in examples" />
    <TextElement name="position" label="Position" input-type="number" description="The position used in examples" />
</Vueform>

:::

<QueryTypes :exampleHolder="queryFormData.holder" :examplePosition="queryFormData.position" />
