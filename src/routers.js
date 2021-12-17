import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Display from '@/views/display'
import AddRecords from '@/views/addRecords'
import SearchRecords from '@/views/searchRecords'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
	{
	  path: '/display',
	  name: 'Display',
	  component: Display
	},
	{
		path: '/addRecords',
		name: 'AddRecords',
		component: AddRecords
	},
	{
		path: '/searchRecords',
		name: 'SearchRecords',
		component: SearchRecords
	}
  ]
})