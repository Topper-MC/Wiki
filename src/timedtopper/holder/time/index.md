---
title: Set time interval
---

# Set time interval

Now you will set the duration of the Timed Holder. When the duration of the Timed Holder is over, the holder will be
reset.

## Format

```yaml
cron: <cron-expression>
```

### Built-in

The plugin provides some built-in `cron` expressions in case you don't want to make the expression yourself:

- `HOURLY`: The holder would be reset at the start of the next hour
- `DAILY`: The holder would be reset at the start of the next day
- `WEEKLY`: The holder would be reset at the start of the next week
- `MONTHLY`: The holder would be reset at the start of the next month
- `YEARLY`: The holder would be reset at the start of the next year

If your case is not covered in the built-in expressions, read the next section on how to customize your own `cron`

### Cron Expression

By default, the `cron` is a **QUARTZ** expression, which is usually an expression with 7 parts.

You can go to [this page](https://www.freeformatter.com/cron-expression-generator-quartz.html) to generate your own
`cron` expression.

If you don't use **Quartz** expression and want to use another cron format, you can set the `cron-type` option, along with your `cron` expression:
```yaml
cron-type: <cron-type>
cron: <cron-expression>
```

Available types for `cron-type` include:
- `CRON4J`: Go to [this page](https://www.sauronsoftware.it/projects/cron4j/manual.php) to learn the expression
- `QUARTZ`: The default type of this plugin.
- `UNIX`: Follow the UNIX cron expression. Go to [this page](https://crontab.guru/) to generate your own `cron` expression
- `SPRING`: The cron format from Spring Framework
- `SPRING53`: The cron format from Spring Framework, starting from version 5.3

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
  # The holder that resets every day (Use UNIX cron format)
  jump_custom_cron_type:
    top: jump
    cron-type: UNIX
    cron: 0 0 * * *
```
