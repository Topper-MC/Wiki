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
    # Whether the placeholder should be parsed for online players only. Default is false (all players)
    online: <true/false>
    # Whether the placeholder should be parsed asynchronously. Default is false
    async: <true/false>
    # Whether to show errors when parsing the placeholder. Default is false
    show-errors: <true/false>
```

## Example

```yaml
holders:
  # Holder that shows the amount of money a player has
  # Use the Vault expansion: /papi ecloud download Vault
  money:
    type: placeholder
    placeholder: "%vault_eco_balance%"
  # Holder that shows the number of diamonds a player has mined
  # Use the Statistic expansion: /papi ecloud download Statistic
  diamonds:
    type: placeholder
    placeholder: "%statistic_mine_block:DIAMOND_ORE%"
    online: true # Only get the value for online players
```

## Frequently Asked Questions

### I set the placeholder but it is not showing the value in the Top Holder

- Make sure that the placeholder you are using is valid and that the plugin that provides the placeholder is installed and working correctly.
- Try running the command `/papi parse me <placeholder>` to see if the placeholder is working as expected.
- Check if the placeholder is for online players only. If so, set the `online` option to `true` in the configuration.
- Try setting the `show-errors` option to `true` to see if there are any errors when parsing the placeholder.
- If the placeholder is still not working, ask for help in the plugin's support channel or forum (remember to enable `show-errors` and provide the logs to them for better support).

### My placeholder gives a formatted value (e.g., 1,000.00 instead of 1000). Can I use it in the provider?

No, the placeholder provider only supports numerical values (only numbers and decimal points).
You must use a placeholder that returns a raw number without formatting, if possible.
If the plugin that provides the placeholder does not have an option to return a raw number, you can try using a different placeholder or ask the plugin developer to add support for raw numbers.