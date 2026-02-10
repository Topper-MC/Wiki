<template>
  <Vueform v-model="formData" sync @change="updateStore">
    <TextElement name="holder" label="Holder Name" description="The name of the Holder used in examples" />
    <TextElement name="position" label="Position" input-type="number" description="The position used in examples" />
  </Vueform>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { holder, position } from '../../stores/queryStore';

const formData = ref({
    holder: holder.get(),
    position: position.get(),
});

const updateStore = () => {
    holder.set(formData.value.holder);
    position.set(formData.value.position);
};

// Sync store changes back to form if needed (though mostly one-way here)
// But good practice if multiple forms existed
// Sync store changes back to form
watch(formData, (newData) => {
    holder.set(newData.holder);
    position.set(newData.position);
}, { deep: true });
</script>
