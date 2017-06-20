<template>
    <div>
        <Tabs></Tabs>
        <Items></Items>
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
        Tabs,
        Items
    }
}
</script>
<style scoped>

</style>
