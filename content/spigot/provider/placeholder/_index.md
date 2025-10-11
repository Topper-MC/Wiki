+++
title = "Placeholder"
weight = 2
+++

> [!NOTE]
> Requires [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

This is a provider that allows you to use PlaceholderAPI placeholders as values in the Top Holder.

## Format

```yaml
holders:
  <holder-name>:
    # The type of the provider
    type: placeholder
    # The placeholder used to get the value
    placeholder: <placeholder>
    # Whether the placeholder should be parsed for online players only (Those who are in the server). Default is true.
    # If set to false, the placeholder will be parsed for all players, even those who are offline.
    online: <true/false>
```

## Example

```yaml
holders:
  # Holder that shows the number of diamonds a player has mined
  # Use the Statistic expansion: /papi ecloud download Statistic
  diamonds:
    type: placeholder
    placeholder: "%statistic_mine_block:DIAMOND_ORE%"
  # Holder that shows the amount of money a player has
  # Use the Vault expansion: /papi ecloud download Vault
  money:
    type: placeholder
    placeholder: "%vault_eco_balance%"
    online: false # Get the value for all players, even those who are offline.
```
