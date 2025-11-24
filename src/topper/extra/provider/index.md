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
    <your other settings>
    async: true
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "<your other settings>": "you other settings",
      "async": true
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
    <your other settings>
    default-value: null # The default value of an entry. This will be used when a player joins the server the first time
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
      "<your other settings>": "you other settings",
      "default-value": null,
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
    <your other settings>
    reverse: true
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "<your other settings>": "you other settings",
      "reverse": true
    }
  }
}
```

:::

## Handle Formatted Values

If the output of a `Value Provider` ([`Placeholder`](/topper/provider/placeholder/) for example) is a formatted value
and
you are confident that you can get the raw value from it with a simple method of taking only numbers and the decimal
separator, you can enable the `formatted` option in your Holder Setting.

:::tabs key:platform
== SpigotMC

```yml
holders:
  example-formatted-value-provider:
    <your other settings>
    formatted: true
    formatted-settings: # Optional settings for the formatted value
      decimal-separator: "." # Change this to the decimal separator of the formatted value
```

== FabricMC

```json
{
  "holders": {
    "example-formatted-value-provider": {
      "<your other settings>": "you other settings",
      "formatted": true,
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
    <your other settings>
    ignore-permission: exclude.permission

  jump-multiple:
    <your other settings>
    ignore-permission:
      - exclude.permission1
      - exclude.permission2
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "<your other settings>": "you other settings",
      "ignore-permission": "exclude.permission"
    },
    "jump-multiple": {
      "<your other settings>": "you other settings",
      "ignore-permission": [
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
    <your other settings>
    reset-permission: reset.permission

  jump-multiple:
    <your other settings>
    reset-permission:
      - reset.permission1
      - reset.permission2
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "<your other settings>": "you other settings",
      "reset-permission": "reset.permission"
    },
    "jump-multiple": {
      "<your other settings>": "you other settings",
      "reset-permission": [
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
    <your other settings>
    show-errors: true
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "<your other settings>": "you other settings",
      "show-errors": true
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
    <your other settings>
    reset-on-error: true
```

== FabricMC

```json
{
  "holders": {
    "jump": {
      "<your other settings>": "you other settings",
      "reset-on-error": true
    }
  }
}
```

:::
