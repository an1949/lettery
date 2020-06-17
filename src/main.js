import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import $ from 'jquery'
import router from './route'
axios.defaults.baseURL = 'https://lottery-80122.firebaseio.com/';

// 配置VUE全局的axios，每个组件都可以使用
Vue.prototype.$axios = axios;
import { store } from './store/index'
Vue.config.productionTip = false

new Vue({
    $,
    axios,
    store,
    router,
    render: h => h(App),
}).$mount('#app')