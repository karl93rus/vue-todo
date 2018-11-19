export default {
  getAllItems(state) {
    return state.allItems.reverse();
  },
  getCurrentItem(state) {
    return state.currentItem;
  }
}