+++
title = "Statistic"
weight = 1
+++

This is a provider that provides statistic values of a player to the Top Holder.

## Format

{{< tabs groupid="platform" >}}
{{% tab title="SpigotMC" %}}
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

* Available values for `<statistic>` can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Statistic.html)
* Available values for `<material>` can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)
* Available values for `<entity>` can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)
{{% /tab %}}
{{% tab title="FabricMC" %}}
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
{{% /tab %}}
{{< /tabs >}}

## Behavior

{{< tabs groupid="platform" >}}
{{% tab title="SpigotMC" %}}
* If the `statistic` is a Generic type, the `material` and `entity` fields are ignored. The provider will return the value of the statistic for the player.

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
{{% /tab %}}
{{% tab title="FabricMC" %}}
* If the `statistic-type` is not specified, it will default to `minecraft:custom`.
* If the `statistic-type` is `minecraft:custom`, the value of the `statistic` field will be one of the [Custom statistic names](https://minecraft.wiki/w/Statistics)
* If the `statistic-type` is one of the ITEM types (e.g. `minecraft:broken`, `minecraft:crafted`, `minecraft:used`, `minecraft:picked_up`, etc.), the value of the `statistic` field will be one of the [Items](https://minecraft.wiki/w/Java_Edition_data_values)
* If the `statistic-type` is one of the ENTITY types (e.g. `minecraft:killed`, `minecraft:killed_by`, etc.), the value of the `statistic` field will be one of the [Entities](https://minecraft.wiki/w/Java_Edition_data_values)
* If the `statistic-type` is one of the BLOCK types (e.g. `minecraft:mined`, `minecraft:broken`, etc.), the value of the `statistic` field will be one of the [Blocks](https://minecraft.wiki/w/Java_Edition_data_values)
{{% /tab %}}
{{< /tabs >}}

## Example

{{< tabs groupid="platform" >}}
{{% tab title="SpigotMC" %}}
```yaml
holders:
  # Holder that shows the number of times a player has jumped
  jump:
    type: statistic
    statistic: JUMP
  # Holder that shows the number of blocks mined by a player
  mine:
    type: statistic
    statistic: MINE_BLOCK
  # Holder that shows the number of times a player has killed a zombie
  zombie:
    type: statistic
    statistic: KILL_ENTITY
    entity: ZOMBIE
  # Holder that shows the number of times a player has mined diamond ore
  diamond:
    type: statistic
    statistic: MINE_BLOCK
    material: DIAMOND_ORE
  # Holder that shows the number of times a player has mined diamond ore or gold ore
  diamond_or_gold:
    type: statistic
    statistic: MINE_BLOCK
    material:
      - DIAMOND_ORE
      - GOLD_ORE
  # Holder that shows the number of times a player has killed a zombie or a skeleton
  zombie_or_skeleton:
    type: statistic
    statistic: KILL_ENTITY
    entity:
      - ZOMBIE
      - SKELETON
```
{{% /tab %}}
{{% tab title="FabricMC" %}}
```json
{
  "holders": {
    // Holder that shows the number of times a player has jumped
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump"
    },
    // Holder that shows the number of times a player has mined a block
    "mine": {
      "type": "statistic",
      "statistic-type": "minecraft:mined"
    },
    // Holder that shows the number of times a player has killed a zombie
    "zombie": {
      "type": "statistic",
      "statistic-type": "minecraft:killed",
      "statistic": "minecraft:zombie"
    },
    // Holder that shows the number of times a player has mined diamond ore
    "diamond": {
      "type": "statistic",
      "statistic-type": "minecraft:mined",
      "statistic": "minecraft:diamond_ore"
    },
    // Holder that shows the number of times a player has mined diamond ore or gold ore
    "diamond_or_gold": {
      "type": "statistic",
      "statistic-type": "minecraft:mined",
      "statistic": [
        "minecraft:diamond_ore",
        "minecraft:gold_ore"
      ]
    },
    // Holder that shows the number of times a player has killed a zombie or a skeleton
    "zombie_or_skeleton": {
      "type": "statistic",
      "statistic-type": "minecraft:killed",
      "statistic": [
        "minecraft:zombie",
        "minecraft:skeleton"
      ]
    }
  }
}
```
{{% /tab %}}
{{< /tabs >}}
