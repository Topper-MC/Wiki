+++
title = "Set time interval"
weight = 2
+++

Now you will set the duration of the Timed Holder. When the duration of the Timed Holder is over, the holder will be reset.

## Format

```yaml
cron: <cron-expression>
```

The `cron` is a **QUARTZ** expression, which is usually an expression with 7 parts.

You can go to [this page](https://www.freeformatter.com/cron-expression-generator-quartz.html) to generate your own `cron` expression.

### Built-in

The plugin provides some built-in `cron` expressions in case you don't want to make the expression yourself:

- `HOURLY`: The holder would be reset at the start of the next hour
- `DAILY`: The holder would be reset at the start of the next day
- `WEEKLY`: The holder would be reset at the start of the next week
- `MONTHLY`: The holder would be reset at the start of the next month
- `YEARLY`: The holder would be reset at the start of the next year

## Example

```yaml
holders:
  # The holder that resets every day
  jump_daily:
    top: jump
    cron: DAILY
  # The holder that resets every month
  jump_monthly:
    top: jump
    cron: MONTHLY
  # The holder that resets every half of the month
  jump_custom_time:
    top: jump
    cron: 0 0 0 1,15 * ? *
```
