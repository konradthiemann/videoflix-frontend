// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from '../router';
import pinia from '../store/index';

createApp(App).use(router).use(pinia).mount('#app');