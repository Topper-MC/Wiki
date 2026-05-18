---
title: Config
---


```yaml

holders:
  player-name:
    type: player
    data-type: NAME
  jump:
    type: placeholder
    placeholder: '%statistic_jump%'
  mine:
    type: statistic
    statistic: mine_block
    material: diamond_ore

# The type of storage the plugin will use to store the value
# Available: FLAT, YAML, JSON, SQLITE, NEW-SQLITE, MYSQL
storage-type: flat
```
