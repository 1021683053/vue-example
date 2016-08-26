var Vue = require('vue');
var Router = require('vue-router');

Vue.config.debug = true;
Vue.use(Router);

var router = new Router({
    
});
// var Root = Vue.extend({});

var Index = require("./index.vue");
var Root = Vue.extend(Index);

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

router.start(Root, '#index');
