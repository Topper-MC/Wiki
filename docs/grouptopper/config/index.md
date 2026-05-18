---
title: Config
---


```yaml

# Available: YAML, SQLITE, MYSQL
storage-type: sqlite
# The settings for each group holders
holders:
  jump_group: # The group holder name
    top: jump # The top holder it will be based on

    type: placeholder # Group settings
    owner: '%player_uuid%'
    display: '%player_name%'
    online: true
task:
  save:
    # How many entries should be saved per tick
    entry-per-tick: 10
    # How many ticks should the plugin wait before saving the leaderboard
    delay: 0
```
