---
title: Query
---

<script setup>
import QueryTypes from './query_types.md'
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

<QueryTypes />
