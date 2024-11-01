+++
title = "PlaceholderAPI"
weight = 3
+++

The plugin provides a PlaceholderAPI placeholder to allow you to query data from the Holder.

## Usage

```
%timedtopper_<query>%
```

Check the [Query]({{% ref "timedtopper/query" %}}) section for more information about how to set the `<query>`.

## Example

```
%timedtopper_money;top_name;1%
%timedtopper_money;top_value;1%
%timedtopper_money;top_value;1;#,###%
%timedtopper_money;top_rank%
%timedtopper_money;remain_time;HH:mm:ss%
%timedtopper_money;end_time;yyyy-MM-dd HH:mm:ss%
```
