<template>
    <div>
        <Display></Display>
        <Increment></Increment>
    </div>
</template>
<script>
import Display from './Display.vue';
import Increment from './Increment.vue';
import store from './store';

export default{
    components: {
        Display: Display,
        Increment: Increment
    },
    store: store
}
</script>
