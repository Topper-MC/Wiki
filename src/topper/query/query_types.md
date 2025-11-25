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

- `top_name`
  - **Format**:
    - `{{ globalPrefix }}<holder>;top_name;<position>{{ globalSuffix }}`
  - **Description:** The name of the player at the specified position.
  - **Argument:**
    - `<holder>`: The name of the Holder
    - `<position>`: The position of the player in the Holder
  - **Example:** 
    - `{{ globalPrefix }}money;top_name;1{{ globalSuffix }}`
      - Retrieve the name of the player at the first position in the Top Holder named `money`

- `top_key`
  - **Format**:
    - `{{ globalPrefix }}<holder>;top_key;<position>{{ globalSuffix }}`
  - **Description:** The UUID of the player at the specified position.
  - **Argument:**
    - `<holder>`: The name of the Holder
    - `<position>`: The position of the player in the Holder
  - **Example:**
    - `{{ globalPrefix }}money;top_key;1{{ globalSuffix }}`
      - Retrieve the UUID of the player at the first position in the Top Holder named `money`

- `top_value`
  - **Format**:
    - `{{ globalPrefix }}<holder>;top_value;<position>{{ globalSuffix }}`
    - `{{ globalPrefix }}<holder>;top_value;<position>;<format>{{ globalSuffix }}`
  - **Description:** The value of the player at the specified position.
  - **Argument:**
    - `<holder>`: The name of the Holder
    - `<position>`: The position of the player in the Holder
    - `<format>`: A number format pattern, see [Value Display](/topper/extra/value_display/) for more details on how to apply a format
  - **Example:**
    - `{{ globalPrefix }}money;top_value;1{{ globalSuffix }}`
      - Retrieve the value of the player at the first position in the Top Holder named `money`
    - `{{ globalPrefix }}money;top_value;1;#,###{{ globalSuffix }}`
      - Retrieve the formatted value of the player at the first position in the Top Holder named `money`, in the format of `#,###`

- `top_value_raw`
  - **Format**:
    - `{{ globalPrefix }}<holder>;top_value_raw;<position>{{ globalSuffix }}`
  - **Description:** The raw value of the player at the specified position.
  - **Argument:**
    - `<holder>`: The name of the Holder
    - `<position>`: The position of the player in the Holder
  - **Example:**
    - `{{ globalPrefix }}money;top_value_raw;1{{ globalSuffix }}`
      - Retrieve the raw value of the player at the first position in the Top Holder named `money`

- `top_rank`
  - **Format**:
    - `{{ globalPrefix }}<holder>;top_rank{{ globalSuffix }}`
    - `{{ globalPrefix }}<holder>;top_rank;<format>{{ globalSuffix }}`
  - **Description:** The rank of the player.
  - **Argument:**
    - `<holder>`: The name of the Holder
    - `<format>`: A number format pattern (e.g., `#,###` for thousands separator)
  - **Example:**
    - `{{ globalPrefix }}money;top_rank{{ globalSuffix }}`
      - Retrieve the rank of the player in the Top Holder named `money`
    - `{{ globalPrefix }}money;top_rank;#,###{{ globalSuffix }}`
      - Retrieve the formatted rank of the player in the Top Holder named `money`

- `top_size`
  - **Format**:
    - `{{ globalPrefix }}<holder>;top_size{{ globalSuffix }}`
  - **Description:** The amount of entries in the Top Holder.
  - **Argument:**
    - `<holder>`: The name of the Holder
  - **Example:**
    - `{{ globalPrefix }}money;top_size{{ globalSuffix }}`
      - Retrieve the amount of entries in the Top Holder named `money`

- `value`
  - **Format**:
    - `{{ playerPrefix }}<holder>;value{{ playerSuffix }}`
    - `{{ playerPrefix }}<holder>;value;<format>{{ playerSuffix }}`
  - **Description:** The value of the player.
  - **Argument:**
    - `<holder>`: The name of the Holder
    - `<format>`: A number format pattern, see [Value Display](/topper/extra/value_display/) for more details on how to apply a format
  - **Example:**
    - `{{ playerPrefix }}money;value{{ playerSuffix }}`
      - Retrieve the raw value of the player in the Top Holder named `money`
    - `{{ playerPrefix }}money;value;#,###{{ playerSuffix }}`
      - Retrieve the formatted value of the player in the Top Holder named `money`

- `value_raw`
  - **Format**:
    - `{{ playerPrefix }}<holder>;value_raw{{ playerSuffix }}`
  - **Description:** The raw value of the player.
  - **Argument:**
    - `<holder>`: The name of the Holder
  - **Example:**
    - `{{ playerPrefix }}money;value_raw{{ playerSuffix }}`
      - Retrieve the raw value of the player in the Top Holder named `money`
