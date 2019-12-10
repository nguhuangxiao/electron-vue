<template>
    <div class="we-tabs__active-bar"></div>
</template>

<script>
    export default {
        name: "TabBar",
        props: {
            tabs: Array
        },

        inject: ['rootTabs']
    }
</script>

<style scoped lang="less">
    .we-tabs__active-bar{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: #409EFF;
        z-index: 1;
        -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
        transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
        transition: transform .3s cubic-bezier(.645,.045,.355,1);
        transition: transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
        transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
        list-style: none;
    }
</style>