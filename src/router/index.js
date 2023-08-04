import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/views/program-relation/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProgramRelation',
      component: Demo
    }
  ]
})
