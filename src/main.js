// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Stone from 'vue-stone/src/index';
import router from './router';
import store from './store/';
import App from './App';

import './styles/common.css';

window.Vue = Vue;
Vue.config.productionTip = false;

/* 按需打包 vue-stone 组件库 */
Vue.use(Stone, {
  components: ['mask'],
});

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
