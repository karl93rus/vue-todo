export default {
  SHOW_SIGN_UP(state) {
    state.signUpVisibility = true;
  },
  CLOSE_SIGN_UP(state) {
    state.signUpVisibility = false;
  },
  SHOW_ITEM_POPUP(state) {
    state.itemPopupVisibility = true;
  },
  CLOSE_ITEM_POPUP(state) {
    state.itemPopupVisibility = false;
  },
  OPEN_ADD(state) {
    state.addItemVisibility = true;
  },
  CLOSE_ADD(state) {
    state.addItemVisibility = false;
  }
}