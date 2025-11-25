---
title: Statistic
---

<script setup>
import { ref } from 'vue';

const spigotFormData = ref({
    name: 'jump',
    statistic: 'JUMP',
    material: [],
    entity: [],
});

const fabricFormData = ref({
    name: 'jump',
    statisticType: 'minecraft:custom',
    statistic: ['minecraft:jump'],
});
</script>

# Statistic

This is a provider that provides statistic values of a player to the Top Holder.

## Format

:::tabs key:platform
== SpigotMC

```yaml
holders:
  <holder-name>:
    # The type of the provider
    type: statistic
    # The name of the statistic
    statistic: <statistic>
    # The name of the material. Used for some statistics that require an item.
    material: <material>
    # The name of the entity. Used for some statistics that require an entity.
    entity: <entity>
```

* Available values for `<statistic>` can be
  found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Statistic.html)
* Available values for `<material>` can be
  found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)
* Available values for `<entity>` can be
  found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)
  == FabricMC

```json
{
  "holders": {
    "<holder-name>": {
      // The type of the provider
      "type": "statistic",
      // The type of the statistic
      "statistic-type": "<statistic-type>",
      // The name of the statistic
      "statistic": "<statistic>"
    }
  }
}
```

* The available `<statistic-type>` and `<statistic>` can be found [here](https://minecraft.wiki/w/Statistics)
  :::

## Behavior

:::tabs key:platform
== SpigotMC

* If the `statistic` is a Generic type, the `material` and `entity` fields are ignored. The provider will return the
  value of the statistic for the player.

* If the `statistic` is a Material type, the `material` field will be used:
    * If the `material` is not specified, the provider will return the value of the statistic for all materials.
    * If the `material` is specified, the provider will return the value of the statistic for the specified material.
    * The `material` field can be a string or a list of strings.

```yaml
material: STONE

material:
  - STONE
  - COBBLESTONE
```

* If the `statistic` is an Entity type, the `entity` field will be used:
    * If the `entity` is not specified, the provider will return the value of the statistic for all entities.
    * If the `entity` is specified, the provider will return the value of the statistic for the specified entity.
    * The `entity` field can be a string or a list of strings.

```yaml
entity: ZOMBIE

entity:
  - ZOMBIE
  - SKELETON
```

== FabricMC

* If the `statistic-type` is not specified, it will default to `minecraft:custom`.
* If the `statistic-type` is `minecraft:custom`, the value of the `statistic` field will be one of
  the [Custom statistic names](https://minecraft.wiki/w/Statistics)
* If the `statistic-type` is one of the ITEM types (e.g. `minecraft:broken`, `minecraft:crafted`, `minecraft:used`,
  `minecraft:picked_up`, etc.), the value of the `statistic` field will be one of
  the [Items](https://minecraft.wiki/w/Java_Edition_data_values)
* If the `statistic-type` is one of the ENTITY types (e.g. `minecraft:killed`, `minecraft:killed_by`, etc.), the value
  of the `statistic` field will be one of the [Entities](https://minecraft.wiki/w/Java_Edition_data_values)
* If the `statistic-type` is one of the BLOCK types (e.g. `minecraft:mined`, `minecraft:broken`, etc.), the value of the
  `statistic` field will be one of the [Blocks](https://minecraft.wiki/w/Java_Edition_data_values)
  :::

## Example

:::tabs key:platform
== SpigotMC

<Vueform v-model="spigotFormData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="statistic" label="Statistic" description="The name of the statistic" />
    <ListElement name="material" label="Material" description="The name of the material. Used for some statistics that require an item." :element="{ type: 'text' }" />
    <ListElement name="entity" label="Entity" description="The name of the entity. Used for some statistics that require an entity." :element="{ type: 'text' }" />
</Vueform>

```yaml-vue
holders:
  {{ spigotFormData.name }}:
    type: statistic
    statistic: {{ spigotFormData.statistic }}
{{ spigotFormData.material.length ? (spigotFormData.material.length === 1 ? '    material: ' + spigotFormData.material[0] : '    material:\n      - ' + spigotFormData.material.join('\n      - ')) : '' }}
{{ spigotFormData.entity.length ? (spigotFormData.entity.length === 1 ? '    entity: ' + spigotFormData.entity[0] : '    entity:\n      - ' + spigotFormData.entity.join('\n      - ')) : '' }}
```

== FabricMC

<Vueform v-model="fabricFormData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="statisticType" label="Statistic Type" description="The type of the statistic (e.g., minecraft:custom, minecraft:mined, minecraft:killed)" />
    <ListElement name="statistic" label="Statistic" description="The name of the statistic" :element="{ type: 'text' }" />
</Vueform>

```json-vue
{
  "holders": {
    "{{ fabricFormData.name }}": {
      "type": "statistic",
      "statistic-type": "{{ fabricFormData.statisticType }}"{{ fabricFormData.statistic.length ? ',' : '' }}
{{ fabricFormData.statistic.length ? ('      "statistic": ' + (fabricFormData.statistic.length === 1 ? '"' + fabricFormData.statistic[0] + '"' : JSON.stringify(fabricFormData.statistic))) : '' }}
    }
  }
}
```

:::
