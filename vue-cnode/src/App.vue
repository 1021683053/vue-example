<template>
    <div id="app">
        <keep-alive include="home,tabs">
            <router-view ></router-view>
        </keep-alive>
    </div>
</template>

<script>
import FastClick from 'fastclick';
import './lib/iconfont';
export default {
    name: 'app',
    beforeCreate(){
        FastClick.attach(document.body);
        var w = document.documentElement.clientWidth;
        var basic = 401;
        if( w<basic ){
            var scale = w/basic;
            var viewport = document.querySelector("meta[name=viewport]");
            console.log(viewport);
            var content = "width=400, initial-scale="+scale+",maximum-scale=1, minimum-scale=0.2, user-scalable=no";
            viewport.setAttribute("content", content);
        }
    }
}
</script>

<style lang="less">
@import './less/index.less';
@import './less/lib/github-markdown.less';
body{
    background: #ccc;
}
[v-cloak]{
    display: none;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    max-width: 750px;
    min-height: 100vh;
    margin: 0 auto;
    background: #FFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
