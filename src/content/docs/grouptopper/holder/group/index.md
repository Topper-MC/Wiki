---
title: Set up Group settings
type: chapter
tableOfContents:
    minHeadingLevel: 2
    maxHeadingLevel: 2
---

Now you will set up some settings for the type of Group.

Continue reading to learn how to set up based on the Group plugin you desire.
Below is a list of supported Group plugins.

## BentoBox

> [!NOTE]
> Requires [BentoBox](https://bentobox.world/) and one or more Gamemode addons

### Format

```yaml
type: bentobox
gamemode: <gamemode> # the name of the gamemode
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: bentobox
        gamemode: bskyblock
```

## BetterTeams

> [!NOTE]
> Requires [BetterTeams](https://www.spigotmc.org/resources/17129/)

> [!TIP]
> It's recommended to enable `singleOwner` in the BetterTeams configuration to
> avoid unexpected behavior when checking for group ownership.

### Format

```yaml
type: betterteams
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: betterteams
```

## FactionsBridge

> [!NOTE]
> Requires [FactionsBridge](https://www.spigotmc.org/resources/89716/)

### Format

```yaml
type: factionsbridge
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: factionsbridge
```

## FactionsUUID

> [!NOTE]
> Requires [FactionsUUID](https://www.spigotmc.org/resources/1035/)

### Format

```yaml
type: factionsuuid
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: factionsuuid
```

## HuskTowns

> [!NOTE]
> Requires [HuskTowns](https://www.spigotmc.org/resources/92672/)

### Format

```yaml
type: husktowns
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: husktowns
```

## KingdomsX

> [!NOTE]
> Requires [KingdowsX](https://www.spigotmc.org/resources/77670/)

### Format

```yaml
type: kingdoms
kingdoms-type: <KINGDOM/NATION> # The type of the kingdoms to get, KINGDOM for the kingdom of the player, NATION for the capital kingdom of the nation of the player
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: kingdoms
        kingdoms-type: KINGDOM
```

## Lands

> [!NOTE]
> Requires [Lands](https://www.spigotmc.org/resources/53313/)

### Format

```yaml
type: lands
lands-type: <LAND/NATION> # The type of the kingdoms to get, KINGDOM for the kingdom of the player, NATION for the capital kingdom of the nation of the player
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: lands
        lands-type: LAND
```

## mcMMO

> [!NOTE]
> Requires [mcMMO](https://www.spigotmc.org/resources/64348/)

### Format

```yaml
type: mcmmo
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: mcmmo
```

## Parties

> [!NOTE]
> Requires [Parties](https://www.spigotmc.org/resources/3709/)

### Format

```yaml
type: parties
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: parties
```

## PlaceholderAPI

> [!NOTE]
> Requires [PlaceholderAPI](https://placeholderapi.com/) and some placeholders
> to fetch the required group values

### Format

```yaml
type: placeholder
owner: "<owner-placeholder>" # The placeholder to get the owner of the group (could be player name or uuid)
display: "<display-placeholder>" # The placeholder to get the display name of the group
online: <true/false> # Whether or not to handle the value for online players only
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: placeholder
        owner: "%player_uuid%"
        display: "%player_name%"
        online: true
```

## SimpleClans

> [!NOTE]
> Requires [SimpleClans](https://www.spigotmc.org/resources/71242/)

### Format

```yaml
type: simpleclans
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: simpleclans
```

## SuperiorSkyblock

> [!NOTE]
> Requires [SuperiorSkyblock2](https://www.spigotmc.org/resources/87411/)

### Format

```yaml
type: superiorskyblock
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: superiorskyblock
```

## Towny

> [!NOTE]
> Requires [Towny](https://townyadvanced.github.io/)

### Format

```yaml
type: towny
```

### Example

```yaml
holders:
    jump_group:
        top: jump

        type: towny
```
