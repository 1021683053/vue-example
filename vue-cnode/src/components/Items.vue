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
            params:{
                tab: '',
                page: 1,
                limit: 10
            },
            isEnd: false
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
        winroll(event){

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
            console.log( bheight );

            // 判断是否为最后一页数据
            if( bheight <=100 && !this.isEnd ){
                this.params.page++;
                this.push_items(this.params)
                    .then((data)=>{
                        if( data.length<10 ){
                            this.isEnd = true;
                        }
                    });
            }

        }
    },
    mounted(){
        this.params.tab = this.active;
        this.push_items(this.params);
        window.addEventListener('scroll', this.winroll, false);
    },
    watch: {
        active(){
            this.params.tab = this.active;
            this.params.page = 1;
            this.new_items(this.params);
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
        overflow: hidden;
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