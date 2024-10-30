+++
title = "Statistic"
weight = 1
+++

This is a provider that provides statistic values of a player to the Top Holder.

## Format

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

## Example

```yaml
holders:
  # Holder that shows the number of times a player has jumped
  jump:
    type: statistic
    statistic: JUMP
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
```
