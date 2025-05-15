+++
title = "Query"
weight = 3
+++

The query system is the same as the one used in Topper, with the addition that the `<holder>` is the name of the Holder speficied in the configuration file of TimedTopper.

Refer to the [Topper Query]({{% ref "spigot/query" %}}) page for more information.

## New Types

| Type | Argument | Description | Example | Explanation |
| --- | --- | --- | --- | --- |
| `remain_time` | | The remaining time in millis until the next reset. | `money;remain_time` | Retrieve the remaining time in millis until the next reset of the Holder named `money` |
| `remain_time` | `<format>` | The remaining time until the next reset. | `money;remain_time;HH:mm:ss` | Retrieve the remaining time until the next reset of the Holder named `money` |
| `end_time` | | The time of the next reset in epoch millis. | `money;end_time` | Retrieve the time of the next reset in epoch millis of the Holder named `money` |
| `end_time` | `<format>` | The time of the next reset. | `money;end_time;yyyy-MM-dd HH:mm:ss` | Retrieve the time of the next reset of the Holder named `money` |
