<template>
    <div id="wrapper" class="wrapper">
        <sidebar></sidebar>
        <toolbar></toolbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Sidebar from '@/components/layout/sidebar'
    import Toolbar from '@/components/layout/toolbar'
    export default {
        name: 'Index',
        components: {
            sidebar: Sidebar,
            toolbar: Toolbar
        }
    }
</script>

<style>
    .wrapper{
        display: flex;
    }
</style>

