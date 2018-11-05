<template>
  <div class="active-wrapper">
    <item-popup v-if="itemPopupVisibility"></item-popup>
    <div v-for="(item, index) of data" :key="index">
      <todo-item :iData="data[index]"></todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
import ItemPopup from '@/components/ItemPopup.vue';

export default {
  components: {
    TodoItem,
    ItemPopup,
  },
  props: ['data'],
  computed: {
    itemPopupVisibility() {
      return this.$store.getters['UiState/getItemPopupVisibility'];
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/cssGlobals.scss';

  .active-wrapper {
    height: 85%;
    width: 90%;
    margin: 0 auto;
    padding: 3px 0;
    background-color: $main-bcg;
    overflow-y: auto;
  }
</style>
