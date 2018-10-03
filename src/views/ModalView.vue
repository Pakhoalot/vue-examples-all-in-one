<template>
  <div id="app">
    <button
      id="show-modal"
      @click="showModal = true">
      Show Modal
    </button>
    <modal
      v-if="showModal"
      @close="showModal = false">
      <h3 slot="header">custom header</h3>
      <p slot="body">custom body</p>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  data: function data() {
    return {
      showModal: false,
    };
  },
};
</script>
