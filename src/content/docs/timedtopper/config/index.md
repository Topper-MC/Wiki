---
title: Config
---


```yaml

# Available: YAML, SQLITE, MYSQL
storage-type: yaml

# The settings for each holder
holders:
  jump_daily:
    top: jump
    cron: DAILY
    rewards:
      ?:
        - give {name} stone 1
      1:
        - give {name} diamond 1
        - say {name} got a diamond for jumping the most
      2:
        - give {name} iron 1
        - say {name} got iron for jumping the second most

task:
  save:
    # How many entries should be saved per tick
    entry-per-tick: 10
    # How many ticks should the plugin wait before saving the leaderboard
    delay: 0
```
