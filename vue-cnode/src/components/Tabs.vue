<template>
    <ul class="ui-tiled">
        <li v-for="tab of tabs" :class="active == tab.tag? 'active' :'' " @click="change(tab.tag)"> {{tab.zh}}</li>
    </ul>
</template>
<script>
import {mapGetters, mapState, mapMutations} from 'vuex';
export default{
    data(){
        return {};
    },
    computed: {
        ...mapState('tabs', {
            tabs: state=> state.tabs,
            active: state=> state.active
        })
    },
    mounted(){
        console.log( this.tabs );
    },
    methods: {
        ...mapMutations('tabs', {
            change_tab: 'change_tab'
        }),
        change(tag){
            this.change_tab(tag);
        }
    }
}
</script>
<style lang="less" scoped>
ul{
    border-bottom: 1px solid #19be6b;
    li{
        height: 60px;
        font-size: 18px;
        cursor: pointer;
        color: #333;
        font-weight: bold;
    }
    li.active{
        color: #19be6b;
    }
}
</style>