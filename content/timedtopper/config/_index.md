+++
title = "Config"
weight = 1
+++

```yaml
# The type of storage the plugin will use to store the value
# Available: YAML, SQLITE, MYSQL
storage-type: yaml

# The settings for each holder
#
# EXAMPLE SETTING
# holders:
#   money_daily: # The holder name
#     top: money # The top holder it will be based on
#     cron: "0/30 * * ? * * *" # The cron expression for the holder indicating when it will be reset
#     rewards: # The rewards for the holder
#       ?: # Reward for all players
#         - "give {name} dirt 1"
#       1: # Reward for the top 1 player
#         - "give {name} diamond 1"
#       2: # Reward for the top 2 player
#         - "give {name} iron 1"
#
# CRON EXPRESSION
# You can use https://www.freeformatter.com/cron-expression-generator-quartz.html to generate the cron expression
# Here are some examples:
# - DAILY: 0 0 0 * * ? *
# - WEEKLY: 0 0 0 ? * 2 *
# - MONTHLY: 0 0 0 1 * ? *
# - HOURLY: 0 0 0/1 * * ? *
#
# REWARD PLACEHOLDERS
# {name} - The name of the player
# {uuid} - The UUID of the player
# {rank} - The rank of the player
holders: {}

task:
  save:
    # How many entries should be saved per tick
    entry-per-tick: 10
    # How many ticks should the plugin wait before saving the leaderboard
    delay: 0
```
