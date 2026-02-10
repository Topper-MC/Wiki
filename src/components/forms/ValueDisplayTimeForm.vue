<template>
  <Vueform v-model="formData" sync>
    <TextElement name="pattern" label="Pattern" description="The pattern describing the date and time format" />
    <SelectElement
        name="type"
        label="Type"
        :native="false"
        :items="['duration', 'time']"
        :canClear="false"
        description="The type of the time: duration or time"
    />
    <SelectElement
        name="unit"
        label="Unit"
        :native="false"
        :items="['ticks', 'nanoseconds', 'microseconds', 'milliseconds', 'seconds', 'minutes', 'hours', 'days']"
        :canClear="false"
        description="The unit of the time"
    />
  </Vueform>

  <div class="language-text">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
    pattern: 'HH:mm:ss',
    type: 'duration',
    unit: 'seconds',
});

const code = computed(() => {
    const config = `pattern=${formData.value.pattern}&type=${formData.value.type}&unit=${formData.value.unit}`;
    const format = `time:${config}`;

    return `{value_${format}}
<holder>;value;${format}
<holder>;top_value;<position>;${format}`;
});
</script>

<style scoped>
.language-text {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow-x: auto;
    font-family: monospace;
}
</style>
