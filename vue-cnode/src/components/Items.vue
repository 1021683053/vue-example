<template>
    <ul class="items">
        <li v-for="item of items">
            <h3>{{item.title}}</h3>
            <div class="content">
                <img :src="item.author && item.author.avatar_url">
            </div>
        </li>
    </ul>
</template>
<script>
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';
export default{
    data(){
        return {

        }
    },
    computed: {
        ...mapState('tabs', {
            active: state=> state.active
        }),
        ...mapState('items', {
            items: state=> state.items
        })
    },
    methods:{
        ...mapActions('items', {
            push_items: 'push_items',
            new_items: 'new_items'
        })
    },
    mounted(){
        this.push_items({
            tab: this.active,
            page: 1,
            limit: 20
        })
    },
    watch: {
        active(){
            this.new_items({
                tab: this.active,
                page: 1,
                limit: 20
            })
        }
    } 


}
</script>
<style lang="less" scoped>
.items{
    li{
        padding: 10px;
        border-bottom: 1px solid #e9eaec;
    }
    h3{
        font-size: 16px;
        font-weight: bold;
    }
    .content{
        padding-top: 10px;
    }
    .content img{
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        box-shadow: 0 0 5px #ccc;
    }
}
</style>