<template>
    <div id="app">
        <router-view></router-view>
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
body{
    background: #ccc;
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
