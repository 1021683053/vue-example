import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
const Items = r => require.ensure([], () => r(require('@/components/Items')), 'Items')
import Topic from '@/pages/Topic';

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition){
        let top = savedPosition && savedPosition.y || 0;
        console.log(top);
        window.document.body.scrollTop = top;
        // if( savedPosition ){
        //     return savedPosition;
        // }else{
        //     return { x: 0, y: 0 }
        // }
    },
    routes: [
        {
            path: '/',
            redirect: '/home/all'
        },
        {
            path: '/home/',
            name: 'Home',
            component: Home,
            children: [
                {
                    name: 'Tab',
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
