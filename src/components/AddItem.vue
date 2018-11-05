<template>
  <div @click.self="close" class="add-wrapper">
    <div class="add-content">
      text
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.dispatch('UiState/closeAdd');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.add-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: $dark-bcg;
  z-index: 100;
  .add-content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 50%;
    background-color: #fff;
  }
}
</style>
