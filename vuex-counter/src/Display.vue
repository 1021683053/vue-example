<template >
    <div>
        <h3>Count is :{{count}}</h3>
    </div>
</template>

<script>
// import { getCount } from './getter';
export default {
    vuex: {
        getters: {
            count: function(state){
                return state.count;
            }
        }
    }
};
</script>
