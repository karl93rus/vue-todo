import axios from 'axios';

export default {
  async loadAllItems({ commit }) {
    try {
      const items = await axios.get('/');
      console.log('loadAllItems Action', items.data);
      commit('SET_ALL_ITEMS', items.data);
    } catch (error) {
      console.log(error);
    }
  }
}