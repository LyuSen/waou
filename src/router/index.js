import Vue from 'vue'
import Router from 'vue-router'
import shareShop from '@/page/shareShop'
import secKill from '@/page/secKill'
import personCenter from '@/page/personCenter'
import detail from '@/components/detailPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'secKill',
      redirect: '/secKill'
    },
    {
      path: '/secKill',
      name: 'secKill',
      component: secKill
    },
    {
      path: '/shareShop',
      name: 'shareShop',
      component: shareShop
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter
    },
    {
      path:'/shopdetail',
      component:detail
    }
  ]
})
