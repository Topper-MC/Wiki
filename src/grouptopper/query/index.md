---
title: Query
---

<script setup>
import { ref } from 'vue'
import QueryTypes from "/topper/query/query_types.md";

const queryFormData = ref({
    holder: 'money',
    position: '1'
})
</script>

# Query

The query system is the same as the one used in Topper, with the addition that:

- the `<holder>` is the name of the Group Holder speficied in the configuration file of GroupTopper.
- the `top_name` query returns the name of the Group
- the `top_key` query returns the UUID of the owner of the Group

Refer to the [Topper Query](/topper/query/) page for more information.

## Types

<QueryTypes :exampleHolder="queryFormData.holder" :examplePosition="queryFormData.position" />
