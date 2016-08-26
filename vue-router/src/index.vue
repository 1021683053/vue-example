<template>
    <div>
        <h3>Hello World!</h3>
        <h4 class="message">{{message}}</h4>
        <h5>Liweifeng first vue app!</h5>
        <a v-link="{ path: '/home' }">Go to Home</a>
        <a v-link="{ path: '/login' }">Go to Login</a>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message: 'Hello from vue-loader!'
            }
        }
    }
</script>

<style>
    .message{
        color: #CCC;
    }
    h5{
        font-size: 28px;
    }
</style>
