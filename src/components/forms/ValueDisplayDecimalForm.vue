<template>
  <Vueform v-model="formData" sync>
    <TextElement name="decimalSeparator" label="Decimal Separator" description="The character used to separate the integer part from the fractional part" />
    <TextElement name="groupingSeparator" label="Grouping Separator" description="The character used to separate groups of digits (leave empty to disable)" />
    <TextElement name="groupingSize" label="Grouping Size" input-type="number" description="The number of digits in each group" />
    <TextElement name="maximumFractionDigits" label="Maximum Fraction Digits" input-type="number" description="The maximum number of digits in the fractional part (leave empty for unlimited)" />
  </Vueform>

  <div class="language-text">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
    decimalSeparator: '.',
    groupingSeparator: ',',
    groupingSize: '3',
    maximumFractionDigits: '2',
});

const code = computed(() => {
    const parts = [];
    if (formData.value.decimalSeparator) parts.push(`decimalSeparator=${formData.value.decimalSeparator}`);
    if (formData.value.groupingSeparator) parts.push(`groupingSeparator=${formData.value.groupingSeparator}`);
    if (formData.value.groupingSize) parts.push(`groupingSize=${formData.value.groupingSize}`);
    if (formData.value.maximumFractionDigits) parts.push(`maximumFractionDigits=${formData.value.maximumFractionDigits}`);
    
    const config = parts.join('&');
    const format = `decimal:${config}`;
    
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
