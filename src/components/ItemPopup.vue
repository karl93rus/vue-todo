<template>
  <div @click.self="closePopup" class="ip-wrapper">
    <div class="ip-content">
      <div class="ip-content-header">
        <p>Header</p>
      </div>
      <div class="ip-content-desc">
        <p>Description</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$store.dispatch('UiState/closeItemPOpup');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.ip-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: $dark-bcg;
  z-index: 100;
  .ip-content {
    position: relative;
    height: 60%;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    background-color: #fff;
    &-header {
      margin: 0;
      padding: 12px;
      font-size: $text-size;
    }
    &-desc {
      margin: 0;
      padding: 12px;
      font-size: $text-size-small;
    }
  }
}
</style>
