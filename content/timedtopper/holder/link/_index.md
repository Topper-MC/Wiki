+++
title = "Link a Top Holder"
weight = 1
+++

First, you add some settings to link a Top Holder to this Timed Holder, which means the Timed Holder will listen to the Top Holder for value changes and updates.

```yaml
holders:
  jump_daily: # The timed holder name
    top: jump # The top holder it will be based on
```

This example will set that the Timed Holder `jump_daily` will listen to the Top Holder `jump` ([Click here if you don't know what `jump` is]({{% ref "topper/quickstart" %}})).

Continue reading to learn how to set up time settings.
