import Vue from 'vue';
require('./assets/base.css');
require('keen-ui/dist/keen-ui.css');
// require('')
import Index from './Index.vue';
new Vue({
    el: 'body',
    components: {
        Index
    }
});
