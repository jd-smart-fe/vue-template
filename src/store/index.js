import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';
import getters from './getters';

Vue.use(Vuex);

const state = {
  count: 0,
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});

