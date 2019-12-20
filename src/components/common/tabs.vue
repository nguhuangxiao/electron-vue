<template>
    <div class="we-tabs">
        <div class="we-tabs__nav" ref="nav">
            <div class="we-tabs__active__bar" id="tab-active__bar"></div>
            <div
                :class="setStyle(item)"
                v-for="(item, index) in options"
                :key="index"
                @click="changeTab(item)"
            >{{item.label}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: {
            value: String,
            options: Array
        },
        data() {
            return {

            }
        },
        computed: {
            setStyle() {
                return  function (item) {
                    return this.value === item.value ? 'we-tab__item is-active' : 'we-tab__item'
                }
            }
        },
        methods: {
            changeTab(item) {
                this.$emit('input', item.value)
            },
            scrollActiveBar() {
                let offset = 0;
                let width = 0;
                if(!this.$el){
                    return
                }
                const activeTab = this.$el.querySelector('.is-active');
                const tabStyles = window.getComputedStyle(activeTab);
                width = parseFloat(tabStyles.width) - parseFloat(tabStyles.paddingLeft) - parseFloat(tabStyles.paddingRight);
                offset = parseFloat(activeTab.offsetLeft + parseFloat(tabStyles.paddingLeft))
                const dom = document.getElementById("tab-active__bar");
                dom.style.transform = `translateX(${offset}px)`
                dom.style.width = `${width}px`
            }
        },
        watch: {
            value() {
                this.$nextTick(() => {
                    this.scrollActiveBar()
                });
            }
        },
        mounted() {
            this.scrollActiveBar()
        }
    }
</script>

<style scoped lang="less">
    .we-tabs{
        background: #fff;
        display: flex;
        justify-content: center;
    }
    .we-tabs .we-tabs__nav{
        list-style: none;
        display: flex;
        position: relative;
    }
    .we-tab__item{
        padding: 0 20px;
        height: 40px;
        box-sizing: border-box;
        line-height: 40px;
        display: inline-block;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        position: relative;
    }
    .we-tab__item:nth-child(2){
        padding-left: 0;
    }
    .we-tab__item:last-child{
        padding-right: 0;
    }
    .we-tabs__active__bar{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background-color: #409eff;
        z-index: 1;
        transition: transform .3s cubic-bezier(.645,.045,.355,1);
        list-style: none;
    }
</style>