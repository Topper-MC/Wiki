<template>
  <form @submit.prevent="form.handleSubmit" class="form-container">
    <form.Field name="holder">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('holderName')" :description="t('holderNameDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(val as string)"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>

    <form.Field name="position">
      <template #default="{ field, state }">
        <FieldWrapper :label="t('position')" :description="t('positionDescription')" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
          <Input
            :id="field.name"
            type="number"
            :model-value="state.value"
            @update:model-value="(val) => field.handleChange(String(val))"
            @blur="field.handleBlur"
          />
        </FieldWrapper>
      </template>
    </form.Field>
  </form>
</template>

<script setup lang="ts">
import { useForm, useStore } from '@tanstack/vue-form';
import { holder, position } from '~/stores/queryStore';
import Input from '~/components/ui/Input.vue';
import FieldWrapper from '~/components/ui/FieldWrapper.vue';
import { watch } from 'vue';
import { useClientI18n } from '~/utils/i18n';

const { t } = useClientI18n();

const form = useForm({
  defaultValues: {
    holder: holder.get(),
    position: position.get(),
  },
  onSubmit: async ({ value }) => {
    holder.set(value.holder);
    position.set(value.position);
  },
});

const formState = useStore(form.store);

watch(() => formState.value.values, (values) => {
  holder.set(values.holder);
  position.set(values.position);
}, { deep: true });
</script>

<style scoped>
/* No specific styles needed as FieldWrapper handles margins */
</style>
