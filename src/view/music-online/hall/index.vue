<template>
    <tab v-model="active" type="card">
        <tab-pane label="精选" name="jx"></tab-pane>
        <tab-pane label="歌手" name="gs"></tab-pane>
        <tab-pane label="排行" name="ph"></tab-pane>
        <tab-pane label="电台" name="dt"></tab-pane>
        <tab-pane label="分类歌单" name="flgd"></tab-pane>
        <tab-pane label="有声" name="ys"></tab-pane>
        <tab-pane label="数字专辑" name="szzj"></tab-pane>
    </tab>
</template>

<script>
    import Tab from '@/components/common/tabs/tabs'
    import TabPane from '@/components/common/tabs/tab-pane'
    export default {
        name: "HallIndex",
        components: {
            'tab': Tab,
            'tab-pane': TabPane
        },
        data() {
            return {
                active: 'jx'
            }
        }
    }
</script>

<style scoped>

</style>