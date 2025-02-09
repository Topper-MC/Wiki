+++
title = "Ignored Permission"
+++

You can specify a set of permissions so that the Holder will skip updating the value of the player if they have one of the permissions.

```yaml
holders:
  jump:
    <your other settings>
    ignore-permission: exclude.permission
```

> [!NOTE]
> In some Value Providers like [Placeholder]({{% ref "spigot/provider/placeholder" %}}), you may need to ensure that it would take the value of online players only (For example, by setting `online` to `true` in [Placeholder Value Provider]({{% ref "spigot/provider/placeholder" %}}))
