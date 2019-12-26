import Vue from 'vue';

import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'; // Default lang is Chinese
import './assets/scss/_var.scss';
Vue.use(Element, { locale });

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
