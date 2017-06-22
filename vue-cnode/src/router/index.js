import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
const Items = r => require.ensure([], () => r(require('@/components/Items')), 'Items')
// const Topic = r => require.ensure([], () => r(require('@/components/Topic')), 'Topic')
import Topic from '@/pages/Topic';

// const Items = resolve => require(['@/components/Items'], resolve)

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if( savedPosition ){
            return savedPosition;
        }else{
            return { x: 0, y: 0 }
        }
    },
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
        },
        {
            path: '/topic/:id',
            name: 'Topic',
            component: Topic
        }
    ]
})
