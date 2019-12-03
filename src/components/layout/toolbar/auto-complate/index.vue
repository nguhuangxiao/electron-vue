<template>
    <div class="ngu-autocomplate">
        <div class="search">
            <i class="fa fa-search left" v-if="!focus"></i>
            <input type="text" placeholder="搜索音乐、MV、歌单、歌曲、用户" class="el-input" ref="el-input"
                @focus="_focus"
                @blur="_blur">
            <i class="fa fa-search right" v-if="focus"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Autocomplate',
        data() {
            return {
                focus: false,
            }
        },
        methods: {
            _focus() {
                this.focus = true;
                this.$nextTick(() => {
                    this.$refs['el-input'].focus()
                })
            },
            _blur(e) {
                console.log(e)
                console.log(this.focus)
                this.$nextTick(() => {
                    this.focus = false;
                })
            }
        },
        mounted() {

        },
        watch: {

        }
    };
</script>

<style lang="less" scoped>
.ngu-autocomplate{
    height: 24px;
    display: flex;
    align-items: center;
    background: #ebebeb;
    padding: 0px 18px;
    border-radius: 10px;
    .search{
        .el-input{
            height: 24px;
            border: none;
            outline: none;
            background: transparent;
            font-size: 12px;
            width: 195px;
            padding: 0 5px;
        }
    }
}
</style>