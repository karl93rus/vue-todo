<template>
  <div class="active-wrapper">
    <div v-for="(item, index) of itemsArray" :key="index">
      <todo-item :iData="itemData"></todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      itemsArray: [1, 2, 3, 4, 5, 6, 7],
      itemData: {
        itemHeader: 'Header',
        itenText: 'Content',
      }
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
