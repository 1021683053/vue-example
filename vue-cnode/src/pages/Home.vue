<template>
    <div>
        <Tabs></Tabs>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
export default {
    name: 'home',
    data () {
        return {
        }
    },
    components:{
        Tabs
    }
}
</script>
<style scoped>

</style>
