+++
title = "Config"
weight = 3
+++

```yaml
# The type of storage the plugin will use to store the value
# Available: FLAT, YAML, JSON, SQLITE, NEW-SQLITE, MYSQL
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
    # How many times should the plugin skip updating the value for the entry if it fails to update
    # This is useful to let the plugin prioritize other active entries
    max-skips: 1
    # How many ticks should the plugin wait before applying the updated value to the entry
    # Since the holder is updated partially, this is useful to prevent the plugin from applying the value too early
    # and to allow the plugin to apply the value in larger batches, creating the illusion of a single update
    set-delay: 20
```
