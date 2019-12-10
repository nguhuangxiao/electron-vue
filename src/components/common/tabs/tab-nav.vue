<script>
    import TabBar from './tab-bar';
    export default {
        name: "TabNav",
        components: {
            TabBar
        },
        inject: ['rootTabs'],
        data() {
            return {

            }
        },
        props: {
            panes: Array
        },
        render() {
            let {
                panes
            } = this;
            const tabs = this._l(panes, (pane) => {
                const tabLabelContent = pane.$options.propsData.label || pane.label;
                return (
                    <div class="we-tabs__item">
                        {tabLabelContent}
                    </div>
                )
            })
            return (
                <div class="we-tabs__nav">
                    {<tab-bar></tab-bar>}
                    {tabs}
                </div>
            )
        },
        methods: {
            clickHandle() {

            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
    .we-tabs__nav{
        position: relative;
    }
    .we-tabs__item{
        padding: 0 20px;
        height: 40px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 40px;
        display: inline-block;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        position: relative;
    }
</style>