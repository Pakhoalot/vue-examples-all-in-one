<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';

export default {
  props: ['options', 'value'],
  mounted: function mounted() {
    $(this.$el)
      .select2({ data: this.options })
      .val(this.value)
      .trigger('change')
      .on('change', () => {
        this.$emit('input', this.value);
      });
  },
  watch: {
    value: function value(value) {
      $(this.$el)
        .val(value)
        .trigger('change');
    },
    options: function options(options) {
      $(this.$el).empty().select2({ data: options });
    },
  },
  destroyed: function destroyed() {
    $(this.$el).off().select2('destroy');
  }
};
</script>

<style lang="less" scoped>
// @import (css) 'select2';

select {
  min-width: 300px;
}
</style>
