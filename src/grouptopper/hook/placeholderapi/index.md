---
title: PlaceholderAPI
---

<script setup>
import QueryTypes from "/topper/query/query_types.md";
</script>

# PlaceholderAPI

The plugin provides a PlaceholderAPI placeholder to allow you to query data from the Group Holder.

## Usage

```
%grouptopper_<query>%
```

Check the [Query](/grouptopper/query/) for more information about how to set the `<query>`

## Example

<QueryTypes globalPrefix="%grouptopper_" globalSuffix="%" playerPrefix="%grouptopper_" playerSuffix="%" />