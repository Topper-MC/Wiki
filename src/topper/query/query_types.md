<script setup>
defineProps({
    globalPrefix: {
        type: String,
        default: '',
    },
    globalSuffix: {
        type: String,
        default: '',
    },
    playerPrefix: {
        type: String,
        default: '',
    },
    playerSuffix: {
        type: String,
        default: '',
    }
})
</script>

| Type            | Argument              | Description                                                  | Example                                                       | Explanation                                                                                      |
|-----------------|-----------------------|--------------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| `top_name`      | `<position>`          | The name of the player at the specified position.            | `{{ globalPrefix }}money;top_name;1{{ globalSuffix }}`        | Retrieve the name of the player at the first position in the Top Holder named `money`            |
| `top_key`       | `<position>`          | The UUID of the player at the specified position.            | `{{ globalPrefix }}money;top_key;1{{ globalSuffix }}`         | Retrieve the UUID of the player at the first position in the Top Holder named `money`            |
| `top_value`     | `<position>`          | The value of the player at the specified position.           | `{{ globalPrefix }}money;top_value;1{{ globalSuffix }}`       | Retrieve the value of the player at the first position in the Top Holder named `money`           |
| `top_value`     | `<position>;<format>` | The formatted value of the player at the specified position. | `{{ globalPrefix }}money;top_value;1;#,###{{ globalSuffix }}` | Retrieve the formatted value of the player at the first position in the Top Holder named `money` |
| `top_value_raw` | `<position>`          | The raw value of the player at the specified position.       | `{{ globalPrefix }}money;top_value_raw;1{{ globalSuffix }}`   | Retrieve the raw value of the player at the first position in the Top Holder named `money`       |
| `top_rank`      |                       | The rank of the player.                                      | `{{ globalPrefix }}money;top_rank{{ globalSuffix }}`          | Retrieve the rank of the player in the Top Holder named `money`                                  |
| `top_rank`      | `<format>`            | The formatted rank of the player.                            | `{{ globalPrefix }}money;top_rank;#,###{{ globalSuffix }}`    | Retrieve the formatted rank of the player in the Top Holder named `money`                        |
| `top_size`      |                       | The amount of entries in the Top Holder.                     | `{{ globalPrefix }}money;top_size{{ globalSuffix }}`          | Retrieve the amount of entries in the Top Holder named `money`                                   |
| `value`         |                       | The value of the player.                                     | `{{ playerPrefix }}money;value{{ playerSuffix }}`             | Retrieve the value of the player in the Top Holder named `money`                                 |
| `value`         | `<format>`            | The formatted value of the player.                           | `{{ playerPrefix }}money;value;#,###{{ playerSuffix }}`       | Retrieve the formatted value of the player in the Top Holder named `money`                       |
| `value_raw`     |                       | The raw value of the player.                                 | `{{ playerPrefix }}money;value_raw{{ playerSuffix }}`         | Retrieve the raw value of the player in the Top Holder named `money`                             |