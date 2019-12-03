<template>
    <div class="ngu-toolbar">
        <div class="flex">
            <div class="history-ico">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <auto-complate></auto-complate>
        </div>
    </div>
</template>

<script>
    import AutoComplate from '@/components/layout/toolbar/auto-complate'
    export default {
        name: "ToolbarIndex",
        components: {
            'auto-complate': AutoComplate
        }
    }
</script>

<style lang="less" scoped>
    .ngu-toolbar{
        flex: 1;
        height: 50px;
        line-height: 50px;
        background: #fff;
        .history-ico{
            >i{
                font-size: 20px;
                margin: 0 10px;
            }
        }
    }
</style>