import Vue from 'vue'
import App from './App'
import share from '@/common/mpShare.js'

import wrap from '@/components/wrap.vue';
import gap from '@/components/gap.vue';

import Dialog from '@/wxcomponents/vant/dialog/dialog';
import Toast from '@/wxcomponents/vant/toast/toast';
import Notify from '@/wxcomponents/vant/notify/notify';




// 阻止产生生产消息
Vue.config.productionTip = false;
App.mpType = 'app';

//注册组件 用于demo展示
Vue.component('wrap', wrap)
Vue.component('gap', gap)

// 引入对小程序分享的mixin封装
Vue.mixin(share)
// 注册实例 全局方法
Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast;
Vue.prototype.$notify = Notify;

const app = new Vue({
	...App
})
app.$mount()
