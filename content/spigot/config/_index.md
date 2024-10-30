+++
title = "Config"
weight = 3
+++

```yaml
# The type of storage the plugin will use to store the value
# Available: YAML, JSON, SQLITE, MYSQL
storage-type: yaml

# The settings for the Top Holders
holders: {}

# Should the plugin load all offline players when the server starts
load-all-offline-players: false
task:
  save:
    # How many entries should be saved per tick
    entry-per-tick: 10
    # How many ticks should the plugin wait before saving the leaderboard
    delay: 0
  update:
    # How many entries should be updated per tick
    entry-per-tick: 10
    # How many ticks should the plugin wait before updating the leaderboard
    delay: 0
```
