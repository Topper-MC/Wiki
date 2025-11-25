---
title: Customize Value Provider
---

# Customize Value Provider

## Asynchronous Provider

You can set `async` to `true` to make the provider asynchronous, meaning it will be executed in a separate thread. This
can be useful if the provider is slow or if it performs a lot of calculations.

:::tabs key:platform
== SpigotMC

```yaml
holders:
  jump:
    type: statistic
    statistic: jump
    async: true # [!code focus]
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "async": true // [!code focus]
    }
  }
}
```

:::

## Default Values

You can change the default values, returned by some queries and commands, by adding some settings to your holder
settings.

:::tabs key:platform
== SpigotMC

```yaml
holders:
  jump:
    type: statistic
    statistic: jump
    default-value: null # [!code focus:5] # The default value of an entry. This will be used when a player joins the server the first time
    null-name: "---" # Default value for the name
    null-uuid: "---" # Default value for the uuid
    null-value: "---" # Default value for the value
    line: "&7[&b{index}&7] &b{name} &7- &b{value}" # Default format for the top line in the top list
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "default-value": null, // [!code focus:5]
      "null-name": "---",
      "null-uuid": "---",
      "null-value": "---",
      "line": "<gray>[<blue>{index}<gray>] <blue>{name} <gray>- <blue>{value}"
    }
  }
}
```

:::

## Reversed Leaderboard

By default, the leaderboard is measured by the player with the highest value first. If you want to change that (e.g.
show the player with the least value first), you can set `reverse` to `true`.

:::tabs key:platform
== SpigotMC

```yaml
holders:
  jump:
    type: statistic
    statistic: jump
    reverse: true # [!code focus]
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "reverse": true // [!code focus]
    }
  }
}
```

:::

## Handle Formatted Values

If the output of a `Value Provider` ([`Placeholder`](/topper/provider/placeholder/) for example) is a formatted value and
you are confident that you can get the raw value from it with a simple method of taking only numbers and the decimal
separator, you can enable the `formatted` option in your Holder Setting.

:::tabs key:platform
== SpigotMC

```yml
holders:
  example-formatted-value-provider:
    type: statistic
    statistic: jump
    formatted: true # [!code focus:3]
    formatted-settings: # Optional settings for the formatted value
      decimal-separator: "." # Change this to the decimal separator of the formatted value
```

== FabricMC

```json
{
  "holders": {
    "example-formatted-value-provider": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "formatted": true, // [!code focus:5]
      "formatted-settings": {
        // Optional settings for the formatted value
        "decimal-separator": "."
        // Change this to the decimal separator of the formatted value
      }
    }
  }
}
```

:::

## Ignore & Reset Permission

You can specify a set of permissions so that the Holder will skip updating the value of the player if they have one of
the permissions.

:::tabs key:platform
== SpigotMC

```yml
holders:
  jump:
    type: statistic
    statistic: jump
    ignore-permission: exclude.permission # [!code focus:1]

  jump-multiple:
    type: statistic
    statistic: jump
    ignore-permission: # [!code focus:3]
      - exclude.permission1
      - exclude.permission2
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "ignore-permission": "exclude.permission" // [!code focus:1]
    },
    "jump-multiple": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "ignore-permission": [ // [!code focus:3]
        "exclude.permission1",
        "exclude.permission2"
      ]
    }
  }
}
```

:::

You can also specify a set of permissions so that the Holder will reset the value of the player if they have one of the
permissions.

:::tabs key:platform
== SpigotMC

```yml
holders:
  jump:
    type: statistic
    statistic: jump
    reset-permission: reset.permission # [!code focus:1]

  jump-multiple:
    type: statistic
    statistic: jump
    reset-permission: # [!code focus:3]
      - reset.permission1
      - reset.permission2
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "reset-permission": "reset.permission" // [!code focus:1]
    },
    "jump-multiple": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "reset-permission": [ // [!code focus:3]
        "reset.permission1",
        "reset.permission2"
      ]
    }
  }
}
```

:::

## Show Errors

By default, any errors that occur during the execution of a provider will be truncated. If you want to show the errors
instead, you can set `show-errors` to `true`.

:::tabs key:platform
== SpigotMC

```yaml
holders:
  jump:
    type: statistic
    statistic: jump
    show-errors: true # [!code focus]
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "show-errors": true // [!code focus]
    }
  }
}
```

:::

You can also reset the value of the player if there is an error when updating the value.

:::tabs key:platform
== SpigotMC

```yaml
holders:
  jump:
    type: statistic
    statistic: jump
    reset-on-error: true # [!code focus]
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "type": "statistic",
      "statistic": "minecraft:jump",
      "reset-on-error": true // [!code focus]
    }
  }
}
```

:::
