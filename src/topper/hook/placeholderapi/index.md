---
title: PlaceholderAPI
---

<script setup>
import QueryTypes from '/topper/query/query_types.md'
</script>

# PlaceholderAPI

The plugin provides a PlaceholderAPI placeholder to allow you to query data from the Top Holder.

## Usage

:::tabs key:platform
== SpigotMC
> [!NOTE]
> Install [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

```
%topper_<query>%
```

== FabricMC
> [!NOTE]
> The placeholders are provided by [Text Placeholder API](https://modrinth.com/mod/placeholder-api)
> It's bundled in the mod, you don't need to install it separately.

```
%topper:query <query>%
```

:::

Check the [Query](/topper/query/) section for more information about how to set the `<query>`.

## Example

:::tabs key:platform
== SpigotMC

<QueryTypes globalPrefix="%topper_" globalSuffix="%" playerPrefix="%topper_" playerSuffix="%" />

== FabricMC

<QueryTypes globalPrefix="%topper:query " globalSuffix="%" playerPrefix="%topper:query " playerSuffix="%" />

:::
