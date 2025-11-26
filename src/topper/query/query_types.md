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
    },
    exampleHolder: {
        type: String,
        default: 'money',
    },
    examplePosition: {
        type: String,
        default: '1',
    }
})
</script>

### `top_name`
- **Format**:
  - `{{ globalPrefix }}<holder>;top_name;<position>{{ globalSuffix }}`
- **Description:** The name of the player at the specified position.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<position>`: The position of the player in the Holder
- **Example:** 
  - `{{ globalPrefix }}{{ exampleHolder }};top_name;{{ examplePosition }}{{ globalSuffix }}`
    - Retrieve the name of the player at position {{ examplePosition }} in the Holder named `{{ exampleHolder }}`

### `top_key`
- **Format**:
  - `{{ globalPrefix }}<holder>;top_key;<position>{{ globalSuffix }}`
- **Description:** The UUID of the player at the specified position.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<position>`: The position of the player in the Holder
- **Example:**
  - `{{ globalPrefix }}{{ exampleHolder }};top_key;{{ examplePosition }}{{ globalSuffix }}`
    - Retrieve the UUID of the player at position {{ examplePosition }} in the Holder named `{{ exampleHolder }}`

### `top_value`
- **Format**:
  - `{{ globalPrefix }}<holder>;top_value;<position>{{ globalSuffix }}`
  - `{{ globalPrefix }}<holder>;top_value;<position>;<format>{{ globalSuffix }}`
- **Description:** The value of the player at the specified position.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<position>`: The position of the player in the Holder
  - `<format>`: A number format pattern, see [Value Display](/topper/extra/value_display/) for more details on how to apply a format
- **Example:**
  - `{{ globalPrefix }}{{ exampleHolder }};top_value;{{ examplePosition }}{{ globalSuffix }}`
    - Retrieve the value of the player at position {{ examplePosition }} in the Holder named `{{ exampleHolder }}`
  - `{{ globalPrefix }}{{ exampleHolder }};top_value;{{ examplePosition }};#,###{{ globalSuffix }}`
    - Retrieve the formatted value of the player at position {{ examplePosition }} in the Holder named `{{ exampleHolder }}`, in the format of `#,###`

### `top_value_raw`
- **Format**:
  - `{{ globalPrefix }}<holder>;top_value_raw;<position>{{ globalSuffix }}`
- **Description:** The raw value of the player at the specified position.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<position>`: The position of the player in the Holder
- **Example:**
  - `{{ globalPrefix }}{{ exampleHolder }};top_value_raw;{{ examplePosition }}{{ globalSuffix }}`
    - Retrieve the raw value of the player at position {{ examplePosition }} in the Holder named `{{ exampleHolder }}`

### `top_rank`
- **Format**:
  - `{{ globalPrefix }}<holder>;top_rank{{ globalSuffix }}`
  - `{{ globalPrefix }}<holder>;top_rank;<format>{{ globalSuffix }}`
- **Description:** The player's rank (position number) in the specified Holder.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<format>`: A number format pattern, see [Value Display](/topper/extra/value_display/) for more details on how to apply a format
- **Example:**
  - `{{ globalPrefix }}{{ exampleHolder }};top_rank{{ globalSuffix }}`
    - Retrieve the rank of the player in the Holder named `{{ exampleHolder }}`
  - `{{ globalPrefix }}{{ exampleHolder }};top_rank;#,###{{ globalSuffix }}`
    - Retrieve the formatted rank of the player in the Holder named `{{ exampleHolder }}`

### `top_size`
- **Format**:
  - `{{ globalPrefix }}<holder>;top_size{{ globalSuffix }}`
- **Description:** The amount of entries in the Holder.
- **Argument:**
  - `<holder>`: The name of the Holder
- **Example:**
  - `{{ globalPrefix }}{{ exampleHolder }};top_size{{ globalSuffix }}`
    - Retrieve the amount of entries in the Holder named `{{ exampleHolder }}`

### `value`
- **Format**:
  - `{{ playerPrefix }}<holder>;value{{ playerSuffix }}`
  - `{{ playerPrefix }}<holder>;value;<format>{{ playerSuffix }}`
- **Description:** The value of the player.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<format>`: A number format pattern, see [Value Display](/topper/extra/value_display/) for more details on how to apply a format
- **Example:**
  - `{{ playerPrefix }}{{ exampleHolder }};value{{ playerSuffix }}`
    - Retrieve the value of the player in the Holder named `{{ exampleHolder }}`
  - `{{ playerPrefix }}{{ exampleHolder }};value;#,###{{ playerSuffix }}`
    - Retrieve the formatted value of the player in the Holder named `{{ exampleHolder }}`

### `value_raw`
- **Format**:
  - `{{ playerPrefix }}<holder>;value_raw{{ playerSuffix }}`
- **Description:** The raw value of the player.
- **Argument:**
  - `<holder>`: The name of the Holder
- **Example:**
  - `{{ playerPrefix }}{{ exampleHolder }};value_raw{{ playerSuffix }}`
    - Retrieve the raw value of the player in the Holder named `{{ exampleHolder }}`
