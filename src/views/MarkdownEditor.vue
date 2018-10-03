<template>
  <div id="editor">
    <textarea v-model="content" name="content" id="content"></textarea>
    <div class="preview">
      <span v-html="markdown"></span>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  data: function data() {
    return {
      content: '',
    };
  },
  computed: {
    markdown: function markdown() {
      return marked(this.content, { breaks: true });
    },
  },
};
</script>

<style lang="less" scoped>
@edi-color: #333;
#editor {
  margin: 0;
  height: calc(100vh - 100px);
  color: @edi-color;
  textarea,
  .preview {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    padding: 20px;
  }
}
</style>

