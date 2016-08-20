var VueRouter = require('vue-router');
var router = new VueRouter();
var Home = require('home.vue');
var Login = require('login.vue');
router.map({
    '/home': {
        component: Home
    },
    'login': {
        component: Login
    }
});

export default router;
