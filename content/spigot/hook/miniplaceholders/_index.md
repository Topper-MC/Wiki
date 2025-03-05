+++
title = "MiniPlaceholders"
+++

> [!NOTE]
> Install [MiniPlaceholders](https://modrinth.com/plugin/miniplaceholders)

The plugin provides a MiniPlaceholders placeholder to allow you to query data from the Top Holder.

## Usage

```
<topper_global:<query>>
<topper_player:<query>>
```

Check the [Query]({{% ref "spigot/query" %}}) section for more information about how to set the `<query>`.

## Example

```
<topper_global:money;top_name;1>
<topper_global:money;top_value;1>
<topper_global:money;top_value;1;#,###>
<topper_player:money;top_rank>
```
