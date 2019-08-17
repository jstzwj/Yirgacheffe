import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.config.productionTip = false

import Albums from './views/Albums.vue'
import Artists from './views/Artists.vue'

const routes = [
  { path: '/', component: Albums },
  { path: '/Albums', component: Albums },
  { path: '/Artists', component: Artists },
]


const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
