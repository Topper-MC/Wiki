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

{{% notice style="info" title="Link a holder from GroupTopper" %}}
If you want to use a holder from [**GroupTopper**]({{% ref "grouptopper" %}}), you can set the `top-type` field to `grouptopper`. Then you can set the `top` field to the name of the holder you want to use.

```yaml
holders:
  jump_daily:
    top-type: grouptopper # The type of the top holder. In this case, it will use GroupTopper
    top: jump # The top holder it will be based on
```
{{% /notice %}}

Continue reading to learn how to set up time settings.
