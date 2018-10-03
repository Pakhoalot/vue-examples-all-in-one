<template>
  <div id="demo">
    <form id="search">
      <label for="query">Search</label>
      <input type="text"
             name="query"
             v-model="gridComponent.filterKey">
    </form>
    <grid-component
      v-bind="gridComponent">
    </grid-component>
  </div>
</template>

<script>
import GridComponent from '@/components/GridComponent.vue';

export default {
  components: {
    GridComponent,
  },
  data() {
    return {
      gridComponent: {
        filterKey: '',
        columns: ['name', 'power'],
        data: [
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 },
        ],
      },
    };
  },
};
</script>
