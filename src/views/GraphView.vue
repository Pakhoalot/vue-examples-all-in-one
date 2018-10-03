<template>
  <div id="demo">
  <!-- Use the component -->
  <svg width="200" height="200">
    <graph-component :stats="stats"></graph-component>
  </svg>
  <!-- controls -->
  <div class="panel">
    <div v-for="(stat,index) in stats" :key="index">
    <label>{{stat.label}}</label>
    <input type="range" v-model="stat.value" min="0" max="100">
    <span>{{stat.value}}</span>
    <button @click="remove(stat)" class="remove">X</button>
  </div>
  <form id="add">
    <input name="newlabel" v-model="newLabel">
    <button @click="add">Add a Stat</button>
  </form>
  </div>
  <pre id="raw">{{ stats }}</pre>
</div>
</template>
<script>
import GraphComponent from '@/components/GraphComponent.vue';

const stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 },
];

export default {
  components: {
    GraphComponent,
  },
  data: function data() {
    return {
      newLabel: '',
      stats,
    };
  },
  methods: {
    add: function add(e) {
      e.preventDefault();
      if (!this.newLabel) return;
      this.stats.push({
        label: this.newLabel,
        value: 100,
      });
      this.newLabel = '';
    },
    remove: function remove(stat) {
      if (this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1);
      } else {
        // alert('Can\'t delete more');
      }
    },
  },
};

</script>
<style lang="less" scoped>
label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}
#raw {
    position: absolute;
    top: 100px;
    left: 300px;
}
</style>
