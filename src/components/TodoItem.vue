<template>
  <div class="item-wrapper">
    <div class="item-content">
      <p @click="openDetails" class="item-header">{{ iData.header }}</p>
      <p class="item-text">{{ iData.content }}</p>
    </div>
    <div class="item-controls">
      <img src="../assets/edit.png" alt="edit">
      <img @click.self="deleteItem({  })" src="../assets/delete.png" alt="edit">
    </div>
  </div>
</template>

<script>
export default {
  props: ['iData'],
  data() {
    return {
      
    }
  },
  methods: {
    openDetails() {
      console.log(this.iData);
      this.$store.dispatch('Items/loadCurrent', this.iData);
      this.$store.dispatch('UiState/showItemPOpup');
    },
    deleteItem() {
      console.log('Delete METHOD IN');
      this.$store.dispatch('Items/deleteItem', this.iData._id);
      console.log('Delete METHOD DELETED!');
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
  transition: .3s;
  &:hover {
    box-shadow: 0px 3px 2px $main-color;
  }
  .item-content {
    .item-header {
      margin: 2px;
      font-size: 1.25rem;
      font-weight: bold;
      color: $main-color;
      cursor: pointer;
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
      transition: .3s;
      &:hover {
        transform: translateY(-66%);
      }
    }
  }
}
</style>
