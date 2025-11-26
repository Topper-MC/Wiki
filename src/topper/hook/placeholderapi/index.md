---
title: PlaceholderAPI
---

<script setup>
import { ref } from 'vue'
import QueryTypes from '/topper/query/query_types.md'

const queryFormData = ref({
    holder: 'money',
    position: '1'
})
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

::: details Click me to edit the example values

<Vueform v-model="queryFormData" sync>
    <TextElement name="holder" label="Holder Name" description="The name of the Holder used in examples" />
    <TextElement name="position" label="Position" input-type="number" description="The position used in examples" />
</Vueform>

:::

:::tabs key:platform
== SpigotMC

<QueryTypes :exampleHolder="queryFormData.holder" :examplePosition="queryFormData.position" globalPrefix="%topper_" globalSuffix="%" playerPrefix="%topper_" playerSuffix="%" />

== FabricMC

<QueryTypes :exampleHolder="queryFormData.holder" :examplePosition="queryFormData.position" globalPrefix="%topper:query " globalSuffix="%" playerPrefix="%topper:query " playerSuffix="%" />

:::
