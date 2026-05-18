---
title: LuckPerms
---


This page provides an overview of the support of [LuckPerms](https://luckperms.net/), "A permissions plugin for
Minecraft servers".

## Context

The plugin provides a [Context](https://luckperms.net/wiki/Context) for each holder, which can be used to apply
permissions based on the rank of the player in the board.

The format of the context key is as follows:

```
timedtopper_rank_<holder>
```

where `<holder>` is the name of the holder configured in the TimedTopper configuration file.

For example, if the holder is named `jump_daily`, the context key would be:

```
timedtopper_rank_jump_daily
```

Related commands in LuckPerms that deal with context has support for tab completion, allowing admins to get the
available contexts for a player.
