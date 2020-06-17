import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);



import LotteryClick from './views/lotteryClick.vue'
export default new Router({
    mode: 'history',
    routes: [{
        path: '*',
        redirect: 'LotteryInfo'
    }, {
        path: '/LotteryInfo',
        name: 'LotteryInfo',
        component: resolve => require(['./views/lotteryInfo.vue'], resolve),
    }, {
        path: '/LotteryClick',
        name: 'LotteryClick',
        component: LotteryClick
            // component: resolve => require(['./views/lotteryClick.vue'], resolve),
    }]
})