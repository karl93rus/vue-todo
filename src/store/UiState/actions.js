export default {
  showSignUp({ commit }) {
    commit('SHOW_SIGN_UP');
  },
  closeSignUp({ commit }) {
    commit('CLOSE_SIGN_UP');
  },
  showItemPOpup({ commit }) {
    commit('SHOW_ITEM_POPUP');
  },
  closeItemPOpup({ commit }) {
    commit('CLOSE_ITEM_POPUP');
  },
  openAdd({ commit }) {
    commit('OPEN_ADD');
  },
  closeAdd({ commit }) {
    commit('CLOSE_ADD');
  }
}