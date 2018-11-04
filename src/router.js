import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main.vue';
import Active from '@/views/Active.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/active',
          name: 'active',
          component: Active,
        }
      ]
    },
    
  ]
})
