<template>
  <div id="app" @touchmove.prevent>
  <draggable-header-view>
    <template slot="header">
      <h1>Elastic Draggable SVG Header</h1>
      <p>with <a href="http://vuejs.org">Vue.js</a> + <a href="http://dynamicsjs.com">dynamics.js</a></p>
    </template>
    <template slot="content">
    <!-- eslint-disable -->    
      <p>Note this is just an effect demo - there are of course many additional details if you want to use this in production, e.g. handling responsive sizes, reload threshold and content scrolling. Those are out of scope for this quick little hack. However, the idea is that you can hide them as internal details of a Vue.js component and expose a simple Web-Component-like interface.</p>
    </template>
  </draggable-header-view>
</div>
</template>
<script>
import ElasticHeaderComponent from '@/components/ElasticHeaderComponent.vue';

export default {
  components: {
    'draggable-header-view': ElasticHeaderComponent,
  },
};
</script>
