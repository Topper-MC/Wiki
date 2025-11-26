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
    exampleHolder: {
        type: String,
        default: 'money',
    }
});
</script>


### `remain_time`
- **Format**:
  - `{{ globalPrefix }}<holder>;remain_time{{ globalSuffix }}`
  - `{{ globalPrefix }}<holder>;remain_time;<format>{{ globalSuffix }}`
- **Description:** The remaining time until the next reset.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<format>`: A time format pattern (e.g., `HH:mm:ss` for hours:minutes:seconds)
- **Example:**
  - `{{ globalPrefix }}{{ exampleHolder }};remain_time{{ globalSuffix }}`
    - Retrieve the remaining time in millis until the next reset of the Holder named `{{ exampleHolder }}`
  - `{{ globalPrefix }}{{ exampleHolder }};remain_time;HH:mm:ss{{ globalSuffix }}`
    - Retrieve the remaining time until the next reset of the Holder named `{{ exampleHolder }}`

### `end_time`
- **Format**:
  - `{{ globalPrefix }}<holder>;end_time{{ globalSuffix }}`
  - `{{ globalPrefix }}<holder>;end_time;<format>{{ globalSuffix }}`
- **Description:** The time of the next reset.
- **Argument:**
  - `<holder>`: The name of the Holder
  - `<format>`: A date-time format pattern (e.g., `yyyy-MM-dd HH:mm:ss` for year-month-day hours:minutes:seconds)
- **Example:**
  - `{{ globalPrefix }}{{ exampleHolder }};end_time{{ globalSuffix }}`
    - Retrieve the time of the next reset in epoch millis of the Holder named `{{ exampleHolder }}`
  - `{{ globalPrefix }}{{ exampleHolder }};end_time;yyyy-MM-dd HH:mm:ss{{ globalSuffix }}`
    - Retrieve the time of the next reset of the Holder named `{{ exampleHolder }}`
