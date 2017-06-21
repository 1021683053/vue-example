<template>
    <div class="loading">
        <svg class="icon rotate" aria-hidden="true">
            <use xlink:href="#icon-loading"></use>
        </svg>
    </div>
</template>
<script>
export default{

}
</script>
<style lang="less" scoped>
.loading svg{
    display: block;
    padding: 10px 0;
    margin: 0 auto;
    width: 30px;
    height: 30px;
    fill: #dddee1;
}
.loading .rotate{
    animation: rotate 1.2s linear infinite;
}
@keyframes rotate {
    from {
        transform:rotate(0deg);
    }
    to{
        transform:rotate(360deg);
    }
}
</style>