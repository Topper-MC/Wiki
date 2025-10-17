+++
title = "Set the Group Mode"
weight = 3
+++

Group Mode represents a behavior that determines how the value of a member is assigned to the group value.

Setting the Group Mode can be done by setting the `mode` field of the Group Holder settings:

```yaml
holders:
  jump_group:
    top: jump

    <other group settings>

    mode: max
```

The available values for `mode` are:
- `default`: The value of any member of the group will be assigned to the group.
- `owner`: Only the value of the member will be assigned to the group.
- `min`: The value of the member will be assigned to the group only if it is less than the current group value.
- `max`: The value of the member will be assigned to the group only if it is greater than the current group value.
