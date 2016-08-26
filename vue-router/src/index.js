var Vue = require('vue');
var Router = require('vue-router');

Vue.config.debug = true;
Vue.use(Router);

var router = new Router({});
// var Root = Vue.extend({});

var Index = require("./index.vue");
var Root = Vue.extend(Index);

// router.map({
//     '/home': {
//         component: function(resolve){
//             require(['./home.vue'], resolve);
//         }
//     },
//     '/login': {
//         component: function(resolve){
//             require(['./login.vue'], resolve);
//         }
//     }
// });

// 同步获取
var Home = require('./home.vue');
var Login = require('./login.vue');

router.map({
    '/home': {
        component: Home
    },
    '/login': {
        component: Login
    },
});

router.redirect({
    '*':"/home"
});

router.start(Root, '#index');
