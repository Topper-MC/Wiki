---
title: Link a Top Holder
---

First, you add some settings to link a Top Holder to this Group Holder, which
means the Group Holder will listen to the Top Holder for value changes and
updates.

Once you set it up, continue to the next page to learn how to set up group settings.

## Topper

```yaml
holders:
  jump_group: # The group holder name
    top: jump # The top holder it will be based on
```

This example will set that the Group Holder `jump_group` will listen to the Top
Holder `jump`
([Click here if you don't know what `jump` is](../../../topper/quickstart/)).

> [!NOTE] **Link a holder from TimedTopper** 
> 
> If you want to use a holder from
> [**TimedTopper**](../../../timedtopper/), you can set the `top-type` field to
> `timedtopper`. Then you can set the `top` field to the name of the holder you
> want to use.
>
> ```yaml
> holders:
>   jump_group:
>     top-type: timedtopper # The type of the top holder. In this case, it will use TimedTopper
>     top: jump # The top holder it will be based on
> ```

## ajLeaderboards

```yaml
holders:
  jump_group:
    plugin: ajleaderboards
    board: "statistic_jump"
```

This example will set that the Group Holder `jump_group` will listen to the board called `statistic_jump`.

> [!NOTE]
> `statistic_jump` is the name of the board when you register the placeholder `%statistic_jump%` to ajLeaderboards via the command `/ajlb add statistic_jump`.
>
> If you want to listen to another board, simply change the `board` value to the name of that board.

You can also specify the type of time the Group Holder will listen too, by adding the `timed-type` option:
```yaml {5}
holders:
  jump_group:
    plugin: ajleaderboards
    board: "statistic_jump"
    timed-type: ALLTIME # ALLTIME, HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY
```

## XLeaderboards

```yaml
holders:
  jump_group:
    plugin: xleaderboards
    top: jump
```

This example will set that the Group Holder `jump_group` will listen to the leaderboard called `jump`.

> [!NOTE]
> `jump` is the name of the board when you register the placeholder `%statistic_jump%` to XLeaderboards via its config:
> ```yaml
> tops:
>   jump:
>     placeholder: "%statistic_jump%"
>     name: "Jump"
> ```
> 
> If you want to listen to another board, simply change the `top` value to the name of that leaderboard.

You can also specify the type of time the Group Holder will listen too, by adding the `time-type` option:
```yaml {5}
holders:
  jump_group:
    plugin: xleaderboards
    top: jump
    time-type: PERMANENT # DAILY, WEEKLY, MONTHLY, PERMANENT
```