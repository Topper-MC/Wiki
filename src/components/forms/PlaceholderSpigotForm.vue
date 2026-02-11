<template>
  <form class="form-container">
    <form.Field name="name">
      <template #default="{ field, state }">
        <FieldWrapper label="Holder Name" description="The name of the holder" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
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
            @update:model-value="(val) => field.handleChange(val as string)"
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
          @update:model-value="(val) => field.handleChange(val)"
          description="Whether the placeholder should be parsed only for players who are currently online in the server. When enabled, the plugin parses placeholder values for online players. When disabled, it parses for all players, including offline."
        >
          Parse for online players only
        </Checkbox>
      </template>
    </form.Field>
  </form>

  <CodeBlock :code="code" lang="yaml" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useStore } from '@tanstack/vue-form';
import Input from '~/components/ui/Input.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import FieldWrapper from '~/components/ui/FieldWrapper.vue';
import CodeBlock from '~/components/ui/CodeBlock.vue';

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
