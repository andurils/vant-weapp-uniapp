import Vue from 'vue'
import App from './App'

// VANT 全局组件
// import '@/utils/vantRegister';
 
// 自定义组件  用于demo展示
// import wrap from '@/components/wrap'; 
// Vue.component('wrap', wrap)
 



// 阻止产生生产消息
Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue({
	...App
})
app.$mount()
