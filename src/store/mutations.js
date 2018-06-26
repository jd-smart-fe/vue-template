import * as types from './mutation-types';

export default {
  /* count */
  [types.SET_COUNT]: (state, payload) => {
    state.count = payload;
  },

};
