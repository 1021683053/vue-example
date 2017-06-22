<template>
    <div class="topic">
        <h3 class="title">{{title}}</h3>
        <div class="markdown-body" v-html="markdown">
        </div>
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
            content: ''
        };
    },
    computed:{
        markdown(){
            return this.markup(this.content);
        }
    },
    created(){
        let id = this.$route.params.id;
        get_topic(id)
            .then(data=>{
                console.log(data);
                this.title = data.title;
                this.content = data.content;
            });
    },
    methods:{
       markup(marktxt){
            return marked(marktxt, {
                sanitize: true,
                gfm: true
            })
       } 
    }
}
</script>
<style lang="less" scoped>
.topic .title{
    padding: 0 20px;
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    line-height: 50px;
    background: #19be6b;
}
.markdown-body{
    padding: 20px;
}
</style>