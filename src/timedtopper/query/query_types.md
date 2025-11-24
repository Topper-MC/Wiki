<script setup>
defineProps({
    globalPrefix: {
        type: String,
        default: '',
    },
    globalSuffix: {
        type: String,
        default: '',
    }
});
</script>

| Type          | Argument   | Description                                        | Example                                                                  | Explanation                                                                            |
|---------------|------------|----------------------------------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| `remain_time` |            | The remaining time in millis until the next reset. | `{{ globalPrefix }}money;remain_time{{ globalSuffix }}`                  | Retrieve the remaining time in millis until the next reset of the Holder named `money` |
| `remain_time` | `<format>` | The remaining time until the next reset.           | `{{ globalPrefix }}money;remain_time;HH:mm:ss{{ globalSuffix }}`         | Retrieve the remaining time until the next reset of the Holder named `money`           |
| `end_time`    |            | The time of the next reset in epoch millis.        | `{{ globalPrefix }}money;end_time{{ globalSuffix }}`                     | Retrieve the time of the next reset in epoch millis of the Holder named `money`        |
| `end_time`    | `<format>` | The time of the next reset.                        | `{{ globalPrefix }}money;end_time;yyyy-MM-dd HH:mm:ss{{ globalSuffix }}` | Retrieve the time of the next reset of the Holder named `money`                        |