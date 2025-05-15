+++
title = "Config"
weight = 1
+++

```yaml
# The type of storage the plugin will use to store the value
# Available: YAML, SQLITE, MYSQL
storage-type: yaml

# The settings for each holder
holders: {}

task:
  save:
    # How many entries should be saved per tick
    entry-per-tick: 10
    # How many ticks should the plugin wait before saving the leaderboard
    delay: 0
```
