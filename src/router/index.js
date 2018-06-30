import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index'
// import Detail from '@/components/detail'
import Index from '@/page/index'
import Detail from '@/page/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail/:id/',
      name: 'detail',
      component: Detail
    }
  ]
})
