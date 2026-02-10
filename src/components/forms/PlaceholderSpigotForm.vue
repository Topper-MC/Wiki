<template>
  <form class="form-container">
    <form.Field name="name">
      <template #default="{ field, state }">
        <FieldWrapper label="Holder Name" description="The name of the holder" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="field.handleChange"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="placeholder">
      <template #default="{ field, state }">
        <FieldWrapper label="Placeholder" description="The placeholder used to get the value" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="field.handleChange"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="online">
      <template #default="{ field, state }">
        <Checkbox
          :id="field.name"
          :model-value="state.value"
          @update:model-value="field.handleChange"
          description="Whether the placeholder should be parsed only for players who are currently online in the server. When enabled, the plugin parses placeholder values for online players. When disabled, it parses for all players, including offline."
        >
          Parse for online players only
        </Checkbox>
      </template>
    </form.Field>
  </form>

  <div class="language-yaml">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useStore } from '@tanstack/vue-form';
import Input from '../ui/Input.vue';
import Checkbox from '../ui/Checkbox.vue';
import FieldWrapper from '../ui/FieldWrapper.vue';

const form = useForm({
  defaultValues: {
    name: 'money',
    placeholder: '%vault_eco_balance%',
    online: true,
  },
});

const formState = useStore(form.store);

const code = computed(() => {
  const values = formState.value.values;
  return `holders:
  ${values.name}:
    type: placeholder
    placeholder: "${values.placeholder}"
    online: ${values.online}`;
});
</script>

<style scoped>
.language-yaml {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    overflow-x: auto;
    font-family: monospace;
}
</style>
