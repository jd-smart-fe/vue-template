import * as types from './mutation-types';

/* 设置count */
export const setCount = (({ commit, state }, count) => {
  commit(types.SET_COUNT, count);
});
