---
title: MiniPlaceholder
---

<script setup>
import { ref } from 'vue';

const formData = ref({
    name: 'money',
    placeholder: '<vault_eco_balance>',
});
</script>

# MiniPlaceholder

> [!NOTE]
> Requires [MiniPlaceholders](https://modrinth.com/plugin/miniplaceholders)

This is a provider that allows you to use MiniPlaceholders placeholders as values in the Top Holder.

## Format

:::tabs key:platform
== SpigotMC

```yaml
holders:
  <holder-name>:
    # The type of the provider
    type: mini-placeholder
    # The placeholder used to get the value
    placeholder: <placeholder>
```

== FabricMC

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

:::

## Example

<Vueform v-model="formData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="placeholder" label="Placeholder" description="The placeholder used to get the value" />
</Vueform>

:::tabs key:platform
== SpigotMC

```yaml-vue
holders:
  {{ formData.name }}:
    type: mini-placeholder
    placeholder: "{{ formData.placeholder }}"
```

== FabricMC

```json-vue
{
  "holders": {
    "{{ formData.name }}": {
      "type": "mini-placeholder",
      "placeholder": "{{ formData.placeholder }}"
    }
  }
}
```

:::
