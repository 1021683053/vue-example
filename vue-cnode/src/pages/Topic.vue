<template>
    <div class="topic" v-show="complate">
        <h3 class="title">{{title}}</h3>
        <div class="markdown-body" v-html="markdown">
        </div>
        <ul v-if="replies.length>0" class="replys">
            <li v-for="item of replies">
                <div class="person">
                    <div class="pic">
                        <img :src="item.author.avatar_url">
                    </div>
                    <a class="nickname" href="">{{item.author.loginname}}</a>
                    <span class="time">{{item.create_at}}</span>
                </div>
                
                <div class="markdown-body" v-html="markup(item.content)"></div>
            </li>
        </ul>
    </div>
</template>
<script>
import {get_topic} from '../apis/cnode';
import marked from 'marked';
import '../lib/highlight.pack';

const hljs = window.hljs;
marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});
export default{
    name: 'topic',
    data(){
        return {
            title: '',
            content: '',
            replies: [],
            complate: false
        };
    },
    computed:{
        markdown(){
            return this.markup(this.content);
        }
    },
    created(){
        let id = this.$route.params.id;
        return get_topic(id)
            .then(data=>{
                this.title = data.title;
                this.content = data.content;
                this.replies = data.replies;
                this.complate = true;
            });
    },
    methods:{
       markup(marktxt){
            return marked(marktxt, {
                sanitize: true,
                gfm: true
            })
       } 
    },
    mounted(){
        console.log('XXXXX-mounted')
    }
}
</script>
<style lang="less" scoped>
[v-cloak]{
    display: none;
}
.topic .title{
    padding: 10px 20px;
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5em;
    background: #19be6b;
}
.markdown-body{
    padding: 20px;
    font-size: 16px;
}
.replys{
    border-top: 20px #ccc solid;
    li{
        border-bottom: 1px solid #f3f3f3;
        padding: 10px 20px;
    }
    .person{
        width: 100%;
        -webkit-box-sizing: border-box;
        display: -webkit-box;
    }
    .pic{
        width: 40px;
        height: 40px;
        border-radius: 40px;
        box-shadow: 0 0 5px #333;
        overflow: hidden;
    }
    .pic img{
        display: block;
        width: 40px;
        height: 40px;
    }
    .nickname{
        font-size: 14px;
        color: #19be6b;
        line-height: 40px;
        padding-left: 10px;
        font-weight: bold;
    }
    .time{
        line-height: 40px;
        padding-left: 10px;
    }
    .markdown-body{
        padding: 0;
        font-size: 14px;
        margin-top: 5px;
        padding-left: 20px;
    }

}
</style>