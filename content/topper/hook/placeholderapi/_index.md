+++
title = "PlaceholderAPI"
+++

The plugin provides a PlaceholderAPI placeholder to allow you to query data from the Top Holder.

## Usage

{{< tabs groupid="platform" >}}
{{% tab title="SpigotMC" %}}
> [!NOTE]
> Install [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)

```
%topper_<query>%
```
{{% /tab %}}
{{% tab title="FabricMC" %}}
> [!NOTE]
> The placeholders are provided by [Text Placeholder API](https://modrinth.com/mod/placeholder-api)
> It's bundled in the mod, you don't need to install it separately.

```
%topper:query <query>%
```
{{% /tab %}}
{{< /tabs >}}

Check the [Query]({{% ref "topper/query" %}}) section for more information about how to set the `<query>`.

## Example

{{< tabs groupid="platform" >}}
{{% tab title="SpigotMC" %}}
```
%topper_money;top_name;1%
%topper_money;top_value;1%
%topper_money;top_value;1;#,###%
%topper_money;top_rank%
```
{{% /tab %}}
{{% tab title="FabricMC" %}}
```
%topper:query money;top_name;1%
%topper:query money;top_value;1%
%topper:query money;top_value;1;#,###%
%topper:query money;top_rank%
```
{{% /tab %}}
{{< /tabs >}}
