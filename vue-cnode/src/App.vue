<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import FastClick from 'fastclick';
export default {
    name: 'app',
    beforeCreate(){
        FastClick.attach(document.body);
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
    max-width: 415px;
    min-height: 100vh;
    margin: 0 auto;
    background: #FFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
