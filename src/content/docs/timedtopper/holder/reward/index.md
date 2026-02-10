---
title: Set up Reward
---


Now you will set the rewards to give to the players when the Timed Holder is reset.

## Format

```yaml
rewards:
  ?: # Rewards for all players in the holder
    - "command_1"
    - "command_2"
    - ...
  1: # Rewards for the 1st player
    - "command_1"
    - "command_2"
    - ...
  2: # Rewards for the 2nd player
    - "command_1"
    - "command_2"
    - ...
  3: # Rewards for the 3rd player
    - "command_1"
    - "command_2"
    - ...
  4: # Rewards for the 4th player
    - "command_1"
    - "command_2"
    - ...
  <more ranks>
```

`?`, `1`, `2`, `3`, etc. are optional. You don't have to set all of them.

## Reward Variable

The plugin provides some variables to apply in the reward commands

- `{name}`: The name of the player
- `{uuid}`: The UUID of the player
- `{rank}`: The rank of the player, starts from 1
- `{initial}`: The initial value of the player in the holder
- `{current}`: The current value of the player in the holder
- `{value}`: The value of the player in the holder - The distance between `{initial}` and `{current}`

## Example

```yaml
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
```
