// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
// import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(ElementUI)
// 引入muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
// Vue.use(Vuex)
// var store = new Vuex.Store({
// 	state: {
// 		show: false
// 	}
// })

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
