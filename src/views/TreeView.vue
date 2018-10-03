<template>
  <div id="demo">
    <ul>
      <tree-component
        class="item"
        :model="treeData">
      </tree-component>
    </ul>
  </div>
</template>

<script>
import TreeComponent from '@/components/TreeComponent.vue';

const data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' },
          ],
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    TreeComponent,
  },
  data: function datas() {
    return {
      treeData: data,
    };
  },
};
</script>
