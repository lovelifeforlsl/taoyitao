import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Mint from 'mint-ui';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible';

Vue.use(Vant);
// Vue.use(Mint);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
