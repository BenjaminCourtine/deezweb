import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Search from '@/components/Search.vue';
import Favorites from '@/components/Favorites.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'search', path: '/search', component: Search },
    { name: 'favorites', path: '/favorites', component: Favorites },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
