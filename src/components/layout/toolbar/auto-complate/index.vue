<template>
    <div class="ngu-autocomplate"
         v-clickoutside="close"
    >
        <div class="search">
            <i class="fa fa-ico fa-search left" v-show="!activated"></i>
            <input type="text" id="global-music-search" placeholder="搜索音乐、MV、歌单、歌曲、用户" class="el-input" ref="el-input"
                   @focus="_focus"
                   @keydown.native.tab="close"
            >
            <i class="fa fa-ico fa-search right" v-show="activated"></i>
        </div>
        <div class="complate-list ngu-modal" v-show="suggesetVisible">
            <ul class="hot-search">
                <div class="ts">热门搜索</div>
                <li><span class="hs-name">冰雪奇缘</span><span class="hs-num">23万</span></li>
                <li><span class="hs-name">冰雪奇缘</span><span class="hs-num">23万</span></li>
            </ul>
            <ul class="history-search">
                <div class="ts">搜索历史<span class="clear-history">清空</span></div>
                <li>后生仔</li>
                <li>后生仔</li>
                <li>后生仔</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Clickoutside from '@/utils/clickoutside';
    import Popper from '@/mixins/popper';
    export default {
        name: 'Autocomplate',
        mixins: [Popper],
        data() {
            return {
                activated: false,
                disabled: false
            }
        },
        directives: { Clickoutside },
        computed: {
            suggesetVisible() {
                return this.activated && !this.disabled
            }
        },
        methods: {
            _focus() {
                this.activated = true;
                this.$nextTick(() => {
                    this.$refs['el-input'].focus()
                })
            },
            close() {
                this.activated = false;
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
        position: relative;
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
        .complate-list{
            position: absolute;
            background: #fff;
            width: 470px;
            height: 350px;
            top: 25px;
            left: 0;
            display: flex;
            box-shadow: 0px 0px 5px #d9d9d9;
            >ul{
                flex: 1;
                list-style: none;
                line-height: normal;
                padding: 0 6px;
                .ts{
                    display: flex;
                    justify-content: space-between;
                    padding: 14px 8px;
                    border-bottom: 1px solid #ededed;
                    margin-bottom: 5px;
                }
                >li{
                    padding: 4px 14px;
                    display: flex;
                    justify-content: space-between;
                    color: @font-color-minor;
                }
                >li:hover{
                    background: @color-active-item;
                }

            }
            .hot-search{
                border-right: 1px solid #d9d9d9;
                .hs-num{color: @font-color-tips;}
            }
            .history-search{
                .clear-history{
                    color: @font-color-minor;
                }
            }
        }
    }
</style>