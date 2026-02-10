<template>
  <span>{{ value }}</span>
</template>

<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { holder, position } from '../../stores/queryStore';

const props = defineProps<{
  field: 'holder' | 'position';
}>();

const value = useStore(props.field === 'holder' ? holder : position);
</script>
