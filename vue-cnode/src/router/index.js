import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
// import Items from '@/components/Items';
const Items = r => require.ensure([], () => r(require('@/components/Items')), 'Home')
// const Items = resolve => require(['@/components/Items'], resolve)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            // component: Home
            redirect: '/home/all'
        },
        {
            path: '/home/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: ':tab',
                    component: Items
                }
            ]
        }
    ]
})
