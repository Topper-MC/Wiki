---
title: PlaceholderAPI
---

# PlaceholderAPI

> [!NOTE]
> Requires [PlaceholderAPI](https://placeholderapi.com/) and some placeholders to fetch the required group values

## Format

```yaml
type: placeholder
owner: "<owner-placeholder>" # The placeholder to get the owner of the group (could be player name or uuid)
display: "<display-placeholder>" # The placeholder to get the display name of the group
online: <true/false> # Whether or not to handle the value for online players only
```

## Example

```yaml
holders:
  jump_group:
    top: jump

    type: placeholder
    owner: '%player_uuid%'
    display: '%player_name%'
    online: true
```
