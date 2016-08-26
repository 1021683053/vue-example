<template>
    <div>
        <Display></Display>
        <Increment></Increment>
    </div>
</template>
<script>
var Display = require('./Display.vue');
var Increment = require('./Increment.vue');
var store = require('./store');

export default{
    components: {
        Display: Display,
        Increment: Increment
    },
    store: store
}
</script>
