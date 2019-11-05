import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Profile = ()=> import('@/components/Profile')
const User = ()=> import('@/components/User')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      redirect: HelloWorld
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Profile/:id',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
