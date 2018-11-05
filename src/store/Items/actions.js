import axios from 'axios';

export default {
  clear({ commit }) {
    commit('CLEAR_ITEMS');
  },
  async loadAllItems({ commit }) {
    try {
      const items = await axios.get('/');
      commit('SET_ALL_ITEMS', items.data);
    } catch (error) {
      console.log(error);
    }
  },
  loadCurrent({ commit }, item) {
    commit('SET_CURRENT_ITEM', item);
  }
}