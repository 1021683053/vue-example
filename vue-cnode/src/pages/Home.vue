<template>
    <div>
        <Tabs></Tabs>
        <!-- <Loading></Loading> -->
        <router-view></router-view>
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Items from '@/components/Items';
export default {
    name: 'home',
    data () {
        return {
        }
    },
    components:{
        Tabs
        // Loading
    }
}
</script>
<style scoped>

</style>
