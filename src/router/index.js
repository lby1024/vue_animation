import Vue from 'vue'
import Router from 'vue-router'
import A from '../page/a.vue'
import B from '../page/b.vue'
import C from '../page/c.vue'
import D from '../page/d.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'a',
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: B
    },
    {
      path: '/c',
      name: 'c',
      component: C
    },
    {
      path: '/d',
      name: 'd',
      component: D
    }
  ]
})
