<template>
  <div class="item-wrapper">
    <div class="item-content">
      <p class="item-header">{{ iData.itemHeader }}</p>
      <p class="item-text">{{ iData.itenText }}</p>
    </div>
    <div class="item-controls">
      <img src="../assets/edit.png" alt="edit">
      <img src="../assets/delete.png" alt="edit">
    </div>
  </div>
</template>

<script>
export default {
  props: ['iData'],
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

.item-wrapper {
  display: grid;
  grid-template-columns: 85% 15%;
  position: relative;
  width: 100%;
  height: 80px;
  margin: 6px 0;
  box-shadow: 0px 3px 2px rgb(122, 122, 122);
  border-radius: 8px;
  .item-content {
    cursor: pointer;
    .item-header {
      margin: 2px;
      font-size: 1.25rem;
      font-weight: bold;
    }
    .item-text {
      margin: 2px;
    }
  }
  .item-controls {
    border-left: 1px solid $main-color;
    img {
      position: relative;
      height: 22px;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 30px;
      cursor: pointer;
    }
  }
}
</style>
