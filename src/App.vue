<template>
  <div>
    <CheckBoxList v-model="checklist"
                  :options="options"></CheckBoxList>
    checked values: {{ checklist }}
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import CheckBoxList from '@/components/CheckBoxList.vue';

  export default defineComponent({
    components: {
      CheckBoxList,
    },
    data() {
      return {
        checklist: [],
        options: [{ label: 'test1', value: 1 }, { label: 'test2', value: 2 }],
      };
    },
  });
</script>