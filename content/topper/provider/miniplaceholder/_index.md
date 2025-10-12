+++
title = "MiniPlaceholder"
weight = 3
+++

> [!NOTE]
> Requires [MiniPlaceholders](https://modrinth.com/plugin/miniplaceholders)

This is a provider that allows you to use MiniPlaceholders placeholders as values in the Top Holder.

## Format

{{< tabs groupid="platform" >}}
{{% tab title="SpigotMC" %}}
```yaml
holders:
  <holder-name>:
    # The type of the provider
    type: mini-placeholder
    # The placeholder used to get the value
    placeholder: <placeholder>
```
{{% /tab %}}
{{% tab title="FabricMC" %}}
```json
{
  "holders": {
    "<holder-name>": {
      // The type of the provider
      "type": "mini-placeholder",
      // The placeholder used to get the value
      "placeholder": "<placeholder>"
    }
  }
}
```
{{% /tab %}}
{{< /tabs >}}

## Example

{{< tabs groupid="platform" >}}
{{% tab title="SpigotMC" %}}
```yaml
holders:
  # Holder that shows the amount of money a player has
  # Use the Vault expansion: https://modrinth.com/plugin/miniplaceholders-vault-expansion
  money:
    type: mini-placeholder
    placeholder: "<vault_eco_balance>"
```
{{% /tab %}}
{{% tab title="FabricMC" %}}
```json
{
  "holders": {
    "money": {
      "type": "mini-placeholder",
      "placeholder": "<vault_eco_balance>"
    }
  }
}
```
{{% /tab %}}
{{< /tabs >}}
