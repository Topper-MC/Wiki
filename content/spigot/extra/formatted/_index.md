+++
title = "Handle a formatted value"
+++

If the output of a `Value Provider` ([`Placeholder`]({{% ref "spigot/provider/placeholder" %}}) for example) is a formatted value and you are confident that you can get the raw value from it with a simple method of taking only numbers and the decimal separator, you can enable the `formatted` option in your Holder Setting.

```yml
holders:
  example-formatted-value-provider:
    <your other settings>
    formatted: true
    formatted-settings: # Optional settings for the formatted value
      decimal-separator: "." # Change this to the decimal separator of the formatted value
```
