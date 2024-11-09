+++
title = "Change default values"
+++

You can change the default values, returned by some queries and commands, by adding some settings to your holder settings.

```yaml
holders:
  jump:
    <your other settings>
    null-name: "---" # Default value for the name
    null-uuid: "---" # Default value for the uuid
    null-value: "---" # Default value for the value
    line: "&7[&b{index}&7] &b{name} &7- &b{value}" # Default format for the top line in the top list
```
