export default {
  SET_ALL_ITEMS(state, items) {
    state.allItems = items;
  },
  SET_CURRENT_ITEM(state, item) {
    state.currentItem = item;
  },
  CLEAR_ITEMS(state) {
    state.allItems = [];
  },
  DELETE_ITEM(state, index) {
    state.allItems.splice(index, 1);
  }
}