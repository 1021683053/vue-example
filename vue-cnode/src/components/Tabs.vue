<template>
    <ul class="ui-tiled">
        <li v-for="tab of tabs" :class="active == tab.tag? 'active' :'' "> 
        <router-link :to="{path:'/home/'+tab.tag}">{{tab.zh}}</router-link>
    </li>
    </ul>
</template>
<script>
import {mapGetters, mapState, mapMutations} from 'vuex';
export default{
    name: 'tabs',
    data(){
        return {};
    },
    computed: {
        ...mapState('tabs', {
            tabs: state=> state.tabs,
            active: state=> state.active
        })
    },
    created(){
        let tab = this.$route.params.tab;
        if( !tab ){
            this.$router.push({path: '/home/'+this.tabs[0].tag});
            return;
        }
        this.change_tab(tab);
    },
    watch:{
        '$route'($route, $routed){

            if( $route.path == $routed.path || !$route.params.tab ){
                return;
            }
            let tab = $route.params.tab;
            this.change_tab(tab);
        }
    },
    methods: {
        ...mapMutations('tabs', {
            change_tab: 'change_tab'
        })
    }
}
</script>
<style lang="less" scoped>
ul{
    border-bottom: 1px solid #19be6b;
    li a{
        display: block;
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        cursor: pointer;
        color: #333;
        font-weight: bold;
    }
    li.active a{
        color: #19be6b;
    }
}
</style>