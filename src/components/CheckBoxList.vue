<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate"
                 :model-value="checkAll"
                 @change="handleCheckAllChange">All</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group :model-value="state"
                       @update:modelValue="onUpdate">
      <el-checkbox v-for="option in options"
                   :label="option.value"
                   :key="option.value">{{ option.label }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed, ref } from 'vue';

  interface IOption {
    label: string;
    value: string | number;
  }

  export default defineComponent({
    props: {
      modelValue: {
        type: Array,
        required: true,
        default: () => [],
      },
      options: {
        type: Array as PropType<IOption[]>,
        required: true,
        default: () => [],
      },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const state = ref([]);
      const checkAll = computed(() => props.modelValue.length > 0 && props.modelValue.length === props.options.length);
      const isIndeterminate = computed(() => props.modelValue.length > 0 && !checkAll.value);

      const onUpdate = (value: any[]) => {
        state.value = value;
        emit('update:modelValue', value);
      };

      const handleCheckAllChange = () => onUpdate(checkAll.value ? [] : props.options.map(t => t.value));

      return {
        state,
        checkAll,
        isIndeterminate,
        onUpdate,
        handleCheckAllChange,
      };
    },
  });
</script>