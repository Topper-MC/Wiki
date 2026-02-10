---
title: Link a Top Holder
---


First, you add some settings to link a Top Holder to this Group Holder, which means the Group Holder will listen to the
Top Holder for value changes and updates.

```yaml
holders:
  jump_group: # The group holder name
    top: jump # The top holder it will be based on
```

This example will set that the Group Holder `jump_group` will listen to the Top Holder
`jump` ([Click here if you don't know what `jump` is](/topper/quickstart/)).

> [NOTE]
> **Link a holder from TimedTopper**
> If you want to use a holder from [**TimedTopper**](/timedtopper/), you can set the `top-type` field to `timedtopper`.
> Then you can set the `top` field to the name of the holder you want to use.
>
> ```yaml
> holders:
>   jump_group:
>     top-type: timedtopper # The type of the top holder. In this case, it will use TimedTopper
>     top: jump # The top holder it will be based on
> ```
>

Continue reading to learn how to set up group settings.
