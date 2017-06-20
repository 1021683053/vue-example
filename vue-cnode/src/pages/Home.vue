<template>
    <div>
        <Tabs></Tabs>
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
    }
}
</script>
<style scoped>

</style>
