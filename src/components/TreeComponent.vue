<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
      @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model">
      </item>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'item',
  props: {
    model: Object,
  },
  data: function data() {
    return {
      open: false,
    };
  },
  computed: {
    isFolder: function isFolder() {
      return this.model.children && this.model.children.length;
    },
  },
  methods: {
    toggle: function toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType: function changeType() {
      if (!this.isFolder) {
        this.$set(this.model, 'children', []);
        this.addChild();
        this.open = true;
      }
    },
    addChild: function addChild() {
      this.model.children.push({
        name: 'new stuff',
      });
    },
  },
};
</script>
