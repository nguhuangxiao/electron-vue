<template>
    <div id="wrapper" class="wrapper">
        <sidebar></sidebar>
        <div class="ngu-container">
            <toolbar></toolbar>
            <router-view></router-view>
        </div>
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
    .ngu-container{
        flex: 1;
    }
</style>

