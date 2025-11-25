---
title: Placeholder
---

<script setup>
import { ref } from 'vue';

const formData = ref({
    name: 'money',
    placeholder: '%vault_eco_balance%',
    online: true,
});

const fabricFormData = ref({
    name: 'level',
    placeholder: '%playerex:level%',
});
</script>

# Placeholder

This is a provider that allows you to use PlaceholderAPI placeholders as values in the Top Holder.

## Format

:::tabs key:platform
== SpigotMC
> [!NOTE]
> Requires [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

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

== FabricMC
> [!NOTE]
> The placeholders are provided by [Text Placeholder API](https://modrinth.com/mod/placeholder-api)
> 
> You can check its wiki for more information: [Wiki](https://placeholders.pb4.eu/)

```json
{
  "holders": {
    "<holder-name>": {
      // The type of the provider
      "type": "placeholder",
      // The placeholder used to get the value
      "placeholder": "<placeholder>"
    }
  }
}
```

:::

## Example

:::tabs key:platform
== SpigotMC

<Vueform v-model="formData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="placeholder" label="Placeholder" description="The placeholder used to get the value" />
    <CheckboxElement name="online" description="Whether the placeholder should be parsed only for players who are currently online in the server. When enabled, the plugin parses placeholder values for online players. When disabled, it parses for all players, including offline.">
        Parse for online players only
    </CheckboxElement>
</Vueform>

```yaml-vue
holders:
  {{ formData.name }}:
    type: placeholder
    placeholder: "{{ formData.placeholder }}"
    online: {{ formData.online }}
```

== FabricMC

<Vueform v-model="fabricFormData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="placeholder" label="Placeholder" description="The placeholder used to get the value" />
</Vueform>

```json-vue
{
  "holders": {
    "{{ fabricFormData.name }}": {
      "type": "placeholder",
      "placeholder": "{{ fabricFormData.placeholder }}"
    }
  }
}
```

:::
