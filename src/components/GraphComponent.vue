<template>
  <g>
    <polygon
      :points="points">
    </polygon>
    <circle
      cx="100"
      cy="100"
      r="80">
    </circle>
    <axis-label
      v-for="(stat, index) in stats"
      :stat="stat"
      :index="index"
      :total="stats.length"
      :key="index">
    </axis-label>
  </g>
</template>

<script>
import { valueToPoint } from '@/utils/utils';
import AxisLabel from './AxisLabel.vue';

export default {
  props: ['stats'],
  computed: {
    points: function points() {
      const total = this.stats.length;
      return this.stats.map((stat, index) => {
        const point = valueToPoint(stat.value, index, total);
        return `${point.x},${point.y}`;
      }).join(' ');
    },
  },
  components: {
    AxisLabel,
  },
};

</script>
<style lang="less" scoped>
polygon {
    fill: #42b983;
    opacity: .75;
}

circle {
    fill: transparent;
    stroke: #999;
}

</style>
