---
title: PlaceholderAPI
---

<script setup>
import QueryTypes from "/topper/query/query_types.md";
import TimedQueryTypes from "/timedtopper/query/query_types.md";
</script>

# PlaceholderAPI

The plugin provides a PlaceholderAPI placeholder to allow you to query data from the Holder.

## Usage

```
%timedtopper_<query>%
```

Check the [Query](/timedtopper/query/) section for more information about how to set the `<query>`.

## Example

<QueryTypes globalPrefix="%timedtopper_" globalSuffix="%" playerPrefix="%timedtopper_" playerSuffix="%" />
<TimedQueryTypes globalPrefix="%timedtopper_" globalSuffix="%" />