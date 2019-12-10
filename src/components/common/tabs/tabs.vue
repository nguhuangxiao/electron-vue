<script>
    import TabNav from './tab-nav';
    export default {
        name: "WeTabs",
        components: {
            TabNav
        },
        props: {
            type: String,
            activeName: String,
            value: {}
        },
        provide() {
            return {
                rootTabs: this
            };
        },
        data() {
            return {
                currentName: this.value || this.activeName,
                panes: []
            };
        },
        render() {
            let {
                panes
            } = this
            const navData = {
                props: {
                    panes,
                },
                ref: 'nav'
            };
            const header = (
                <tab-nav {...navData}></tab-nav>
            );
            const panels = (
                <div class="we-tabs__content">
                    {this.$slots.default}
                </div>
            );
            return (
                <div class="we-tabs">
                    { header ? [header, panels] : null}
                </div>
            )
        },
        methods: {
            calcPaneInstances(isForceUpdate = false) {
                if (this.$slots.default) {
                    const paneSlots = this.$slots.default.filter(vnode => vnode.tag &&
                        vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'WeTabPane');
                    // update indeed

                    const panes = paneSlots.map(({ componentInstance }) => componentInstance);
                    console.log(panes)
                    const panesChanged = !(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]));
                    if (isForceUpdate || panesChanged) {
                        this.panes = panes;
                    }
                } else if (this.panes.length !== 0) {
                    this.panes = [];
                }

            },
            clickHandle() {

            }
        },
        created() {

        },
        mounted() {
            this.calcPaneInstances()
        }
    }
</script>

<style scoped>

</style>