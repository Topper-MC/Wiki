---
title: Query
---

This page provides information about the query system, which is used to retrieve data from the Cache Holder.

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

| Type   | Argument | Description                                         | Example                                          | Explanation                                                                                                            |
| ------ | -------- | --------------------------------------------------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `name` | `<name>` | Get the value of the player based on their `<name>` | `jump;name;HSGamer`                              | Retrieve the value of the player named `HSGamer` at the Cache Holder named `jump`                                      |
| `uuid` | `<uuid>` | Get the value of the player based on their `<uuid>` | `jump;uuid;7acc67dc-8b84-4f8d-b7ad-ec81e758f5a1` | Retrieve the value of the player with the UUID `7acc67dc-8b84-4f8d-b7ad-ec81e758f5a1` at the Cache Holder named `jump` |
