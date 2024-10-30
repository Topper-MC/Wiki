+++
title = "Query"
weight = 5
+++

This page provides information about the query system, which is used to retrieve data from the Top Holder.

## Format

The format of a query is as follows:

```
<holder>;<type>;<args>
```

- `<holder>`: The Top Holder to query.
- `<type>`: The type of data to retrieve.
- `<args>`: Additional arguments for the query.

If the `<type>` does not require any arguments, the query can be simplified to:

```
<holder>;<type>
```

## Types

| Type | Argument | Description | Example | Explanation |
| --- | --- | --- | --- | --- |
| `top_name` | `<position>` | The name of the player at the specified position. | `money;top_name;1` | Retrieve the name of the player at the first position in the Top Holder named `money` |
| `top_key` | `<position>` | The UUID of the player at the specified position. | `money;top_key;1` | Retrieve the UUID of the player at the first position in the Top Holder named `money` |
| `top_value` | `<position>` | The value of the player at the specified position. | `money;top_value;1` | Retrieve the value of the player at the first position in the Top Holder named `money` |
| `top_value` | `<position>;<format>` | The formatted value of the player at the specified position. | `money;top_value;1;#,###` | Retrieve the formatted value of the player at the first position in the Top Holder named `money` |
| `top_value_raw` | `<position>` | The raw value of the player at the specified position. | `money;top_value_raw;1` | Retrieve the raw value of the player at the first position in the Top Holder named `money` |
| `top_rank` | | The rank of the player. | `money;top_rank` | Retrieve the rank of the player in the Top Holder named `money` |
| `value` | | The value of the player. | `money;value` | Retrieve the value of the player in the Top Holder named `money` |
| `value` | `<format>` | The formatted value of the player. | `money;value;#,###` | Retrieve the formatted value of the player in the Top Holder named `money` |
| `value_raw` | | The raw value of the player. | `money;value_raw` | Retrieve the raw value of the player in the Top Holder named `money` |
