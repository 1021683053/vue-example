<template>
  <div>
    <button @click="increment">Increment +1</button>
  </div>
</template>

<script>
var actions = require("./action");
export default {
    vuex: {
        actions: {
            increment: actions.incrementCounter
        }
    }
}
</script>
