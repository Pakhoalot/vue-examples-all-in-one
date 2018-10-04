<template>
  <div>
    <p>Selected: {{ selected }}</p>
    <select2 :options="options" v-model="selected">
      <option disabled value="0">Select one</option>
    </select2>
  </div>
</template>
<script>
import WrapperComponent from '@/components/WrapperComponent.vue';

export default {
  components: {
    'select2': WrapperComponent,
  },
  data: function data() {
    return {
      selected: 2,
      options: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'World' },
      ],
    };
  },
};
</script>