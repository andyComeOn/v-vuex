import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Father from '@/components/Father'
import Menu from '@/components/Menu'
import Menu1 from '@/components/Menu1'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Father',
			component: Father
		},
		{
			path: '/meun',
			name: 'Menu',
			component: Menu
		},
		{
			path: '/meun1',
			name: 'Menu1',
			component: Menu1
		},
	]
})
