<template>
  <text
    :x="point.x"
    :y="point.y">
    {{ stat.label }}
  </text>
</template>
<script>
import { valueToPoint } from '@/utils/utils';

export default {
  props: {
    stat: Object,
    index: Number,
    total: Number,
  },
  computed: {
    point: function point() {
      return valueToPoint(
        +this.stat.value + 10,
        this.index,
        this.total,
      );
    },
  },
};
</script>
<style lang="less" scoped>
  text {
      font-family: Helvetica Neue, Arial, sans-serif;
      font-size: 10px;
      fill: #666;
  }
</style>
