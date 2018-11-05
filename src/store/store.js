import Vue from 'vue';
import Vuex from 'vuex';

import UiState from './UiState';
import Items from './Items';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    UiState,
    Items,
  }
})
