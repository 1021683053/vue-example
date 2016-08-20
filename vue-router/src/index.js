var Vue = require('vue');
var Router = require('vue-router');

Vue.config.debug = true;
Vue.use(Router);

var router = new Router();
var Index = require('./index.vue');
// var Home = require('./home.vue');
// var Login = require('./login.vue');
router.map({
    '/home': {
        component: function(resolve){
            require(['./home.vue'], resolve);
        }
    },
    '/login': {
        component: function(resolve){
            require(['./login.vue'], resolve);
        }
    }
});

router.redirect({
    '*':"/home"
});

// var router = require('./router');
// 入口文件加载
// new Vue({
//     el: 'body',
//     components: {Index}
// });
router.start(Index, '#index');
