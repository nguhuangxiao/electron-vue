<template>
    <div class="we-tab-pane"
         :id="`pane-${paneName}`"
         :aria-labelledby="`tab-${paneName}`"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WeTabPane",
        componentName: 'WeTabPane',
        props: {
            label: String,
            labelContent: Function,
            name: String,
        },
        computed: {
            paneName() {
                return this.name || this.index;
            }
        }
    }
</script>

<style scoped>

</style>