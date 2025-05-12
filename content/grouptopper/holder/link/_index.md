+++
title = "Link a Top Holder"
weight = 1
+++

First, you add some settings to link a Top Holder to this Group Holder, which means the Group Holder will listen to the Top Holder for value changes and updates.

```yaml
holders:
  jump_group: # The group holder name
    top: jump # The top holder it will be based on
```

This example will set that the Group Holder `jump_group` will listen to the Top Holder `jump` ([Click here if you don't know what `jump` is]({{% ref "spigot/quickstart" %}})).

Continue reading to learn how to set up group settings.
