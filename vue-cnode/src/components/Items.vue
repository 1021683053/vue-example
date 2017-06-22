<template>
    <div>
        <ul class="items">
            <li v-for="item of items">
                <router-link :to="{path:'/topic/'+item.id}">
                    <h3>{{item.title}}</h3>
                    <div class="head">
                        <img :src="item.author && item.author.avatar_url">
                        <p class="name">
                            {{item.author && item.author.loginname}}
                        </p>
                    </div>
                    <div v-if="item.top || item.good" class="tag">
                        <svg class="icon" aria-hidden="true">
                            <use v-if="item.top" xlink:href="#icon-ding"></use>
                            <use v-else-if="item.good" xlink:href="#icon-jing"></use>
                        </svg>
                    </div>
                </router-link>
            </li>
        </ul>
        <div v-if="!isEnd" class="loading">
            <keep-alive>
                <Loading v-if="isLoading"></Loading>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import Loading from '@/components/Loading';
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';
export default{
    name: 'items',
    data(){
        return {
            params:{
                tab: '',
                page: 1,
                limit: 10
            },
            isEnd: false,
            isLoading: false
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
        }),
        roll(event){

            if( this.isLoading ){
                return;
            }

            // 获取窗口可视范围的高度
            function getClientHeight(){  
                var clientHeight=0;  
                if(document.body.clientHeight&&document.documentElement.clientHeight){  
                    var clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
                }else{  
                    var clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
                }  
                return clientHeight;  
            }

            // 获取窗口滚动条高度
            function getScrollTop(){  
                var scrollTop=0;  
                if(document.documentElement&&document.documentElement.scrollTop){  
                    scrollTop=document.documentElement.scrollTop;  
                }else if(document.body){  
                    scrollTop=document.body.scrollTop;  
                }  
                return scrollTop;  
            }

            // 获取文档内容实际高度
            function getScrollHeight(){  
                return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);  
            }

            // 窗口可视范围的高度
            let height=getClientHeight(),
            // 窗口滚动条高度
            theight=getScrollTop(),
            // 窗口可视范围的高度
            rheight=getScrollHeight(),
            bheight=rheight-theight-height;

            // 判断是否为最后一页数据
            if( bheight <=100 && !this.isEnd ){
                this.params.page++;
                this.isLoading = true;
                this.push_items(this.params)
                    .then((data)=>{
                        if( data.length<10 ){
                            this.isEnd = true;
                        }
                        this.isLoading = false;
                    });
            }

        }
    },
    created(){
        this.params.tab = this.active;
        this.new_items(this.params);
    },
    activated(){
        window.addEventListener('scroll', this.roll, false);
    },
    deactivated(){
        window.removeEventListener('scroll', this.roll, false);
    },
    watch: {
        active(){
            if( !this.active ){
                return;
            }
            this.params.tab = this.active;
            this.params.page = 1;
            this.isEnd = false;
            this.new_items(this.params);
        }
    },
    components:{
        Loading
    }
}
</script>
<style lang="less" scoped>
.items{
    li{
        padding: 10px;
        border-bottom: 1px solid #e9eaec;
        position: relative;
    }
    h3{
        font-size: 16px;
        font-weight: bold;
        overflow: hidden;
    }
    .head{
        padding-top: 10px;
        width: 60px;
    }
    .head p{
        text-align: center;
        font-size: 14px;
        padding: 5px 0;
    }
    .head img{
        display: block;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        box-shadow: 0 0 5px #ccc;
    }
    .tag{
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .tag svg{
        width: 40px;
        height: 40px;
        fill: #ff9900;
    }
}
.loading{
    height: 50px;
}
</style>