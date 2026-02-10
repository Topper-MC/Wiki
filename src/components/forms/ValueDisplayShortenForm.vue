<template>
  <Vueform v-model="formData" sync>
    <ListElement
        name="customGroups"
        description="Define custom number and suffix pairs (leave empty to use default groups)"
        :object="{
            label: 'Group',
            schema: {
                number: { type: 'text', placeholder: 'Number (e.g., 1000)' },
                suffix: { type: 'text', placeholder: 'Suffix (e.g., k)' },
            }
        }"
    />
  </Vueform>

  <div class="language-text">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
    customGroups: [] as { number: string, suffix: string }[],
});

const code = computed(() => {
    let format = 'shorten';
    
    // Check if there are valid custom groups
    const validGroups = formData.value.customGroups.filter(g => g && g.number && g.suffix);
    
    if (validGroups.length > 0) {
        const config = validGroups.map(g => `${g.number}=${g.suffix}`).join('&');
        format = `shorten:${config}`;
    }

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
