<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Sidebar from '@/components/layout/sidebar'
    export default {
        name: 'Index',
        components: {
            sidebar: Sidebar
        }
    }
</script>

<style>

</style>

