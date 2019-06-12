import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 使用iview
import iView from 'iview'; // 使用 iview
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);
// 使用mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
