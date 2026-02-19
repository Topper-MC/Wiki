<template>
  <form class="form-container">
    <template v-for="f in config.fields" :key="f.name">
      <!-- Text input -->
      <form.Field v-if="f.type === 'text'" :name="f.name">
        <template #default="{ field, state }">
          <FieldWrapper :label="t(f.labelKey)" :description="t(f.descriptionKey)" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
            <Input :id="field.name" :type="f.inputType" :model-value="state.value" @update:model-value="(val) => field.handleChange(val as string)" @blur="field.handleBlur" />
          </FieldWrapper>
        </template>
      </form.Field>

      <!-- Checkbox -->
      <form.Field v-else-if="f.type === 'checkbox'" :name="f.name">
        <template #default="{ field, state }">
          <Checkbox :id="field.name" :model-value="state.value" @update:model-value="(val) => field.handleChange(val)" :description="t(f.descriptionKey)">
            {{ t(f.labelKey) }}
          </Checkbox>
        </template>
      </form.Field>

      <!-- Select dropdown -->
      <form.Field v-else-if="f.type === 'select'" :name="f.name">
        <template #default="{ field, state }">
          <FieldWrapper :label="t(f.labelKey)" :description="t(f.descriptionKey)" :error="state.meta.errors ? state.meta.errors.join(', ') : undefined">
            <Select :id="field.name" :model-value="state.value" :options="f.options!" @update:model-value="(val) => field.handleChange(val as string)" @blur="field.handleBlur" />
          </FieldWrapper>
        </template>
      </form.Field>

      <!-- String array (dynamic list of text inputs) -->
      <form.Field v-else-if="f.type === 'array'" :name="f.name" mode="array">
        <template #default="{ field, state }">
          <FieldWrapper :label="t(f.labelKey)" :description="t(f.descriptionKey)">
            <div v-for="(item, index) in (state.value as string[])" :key="index" class="list-item">
              <Input
                :model-value="item"
                @update:model-value="(val) => field.handleChange((old: string[]) => old.map((v: string, i: number) => i === index ? val as string : v))"
              />
              <button type="button" @click="field.removeValue(index)" class="remove-btn">{{ t('remove') }}</button>
            </div>
            <button type="button" @click="field.pushValue('')" class="add-btn">{{ t(f.addLabelKey!) }}</button>
          </FieldWrapper>
        </template>
      </form.Field>

      <!-- Object array (dynamic list of multi-field entries) -->
      <form.Field v-else-if="f.type === 'object-array'" :name="f.name" mode="array">
        <template #default="{ field, state }">
          <FieldWrapper :label="t(f.labelKey)" :description="t(f.descriptionKey)">
            <div v-for="(_item, index) in (state.value as any[])" :key="index" class="list-item">
              <template v-for="sub in f.subFields" :key="sub.name">
                <form.Field :name="`${f.name}[${index}].${sub.name}`">
                  <template #default="{ field: subField, state: subState }">
                    <Input
                      :placeholder="t(sub.placeholderKey)"
                      :model-value="subState.value as string"
                      @update:model-value="(val) => subField.handleChange(val as string)"
                      @blur="subField.handleBlur"
                      class="flex-1"
                    />
                  </template>
                </form.Field>
              </template>
              <button type="button" @click="field.removeValue(index)" class="remove-btn">{{ t('remove') }}</button>
            </div>
            <button type="button" @click="field.pushValue(f.defaultItem || {})" class="add-btn">{{ t(f.addLabelKey!) }}</button>
          </FieldWrapper>
        </template>
      </form.Field>
    </template>
  </form>

  <CodeBlock :code="code" :lang="config.codeLang" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useStore } from '@tanstack/vue-form';
import Input from '~/components/ui/Input.vue';
import Select from '~/components/ui/Select.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import FieldWrapper from '~/components/ui/FieldWrapper.vue';
import CodeBlock from '~/components/ui/CodeBlock.vue';
import { useClientI18n } from '~/utils/i18n';
import type { FormConfig } from '~/utils/formTypes';

const { t } = useClientI18n();

const props = defineProps<{
  config: FormConfig;
}>();

const config = props.config;
const form = useForm({ defaultValues: config.defaults });
const formState = useStore(form.store);
const code = computed(() => config.generateCode(formState.value.values));
</script>

<style scoped>
.list-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
}

.flex-1 {
  flex: 1;
}

.remove-btn {
  padding: 0.25rem 0.5rem;
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.remove-btn:hover {
  color: #b91c1c;
}

.add-btn {
  font-size: 0.875rem;
  color: var(--sl-color-accent);
  background: none;
  border: none;
  cursor: pointer;
}

.add-btn:hover {
  text-decoration: underline;
}
</style>
