<template>
  <Vueform v-model="formData" sync>
    <TextElement name="name" label="Holder Name" description="The name of the holder" />
    <TextElement name="statisticType" label="Statistic Type" description="The type of the statistic (e.g., minecraft:custom, minecraft:mined, minecraft:killed)" />
    <ListElement name="statistic" label="Statistic" description="The name of the statistic" :element="{ type: 'text' }" />
  </Vueform>

  <div class="language-json">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
    name: 'jump',
    statisticType: 'minecraft:custom',
    statistic: ['minecraft:jump'] as string[],
});

const code = computed(() => {
    const holderObj: any = {
        type: 'statistic',
        'statistic-type': formData.value.statisticType
    };
    
    if (formData.value.statistic && formData.value.statistic.length > 0) {
        if (formData.value.statistic.length === 1) {
            holderObj.statistic = formData.value.statistic[0];
        } else {
            holderObj.statistic = formData.value.statistic;
        }
    }

    const obj = {
        holders: {
            [formData.value.name]: holderObj
        }
    };
    
    return JSON.stringify(obj, null, 2);
});
</script>

<style scoped>
.language-json {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow-x: auto;
    font-family: monospace;
}
</style>
