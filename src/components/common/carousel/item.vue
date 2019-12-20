<template>
    <div
        class="we-carousel__item"
        :class="{
            'is-active': active,
            'we-carousel__item--card': $parent.type === 'card',
            'is-in-stage': inStage,
            'is-animating': animating
        }"
        v-show="ready"
        :style="itemStyle"
    >
        <slot></slot>
    </div>
</template>

<script>
    const CARD_SCALE = 0.83;
    export default {
        name: "WeCarouseItem",
        props: {
            name: String,
        },
        data() {
            return {
                active: true,
                animating: false,
                translate: 0, // 卡片平移的距离
                scale: 1,
                inStage: false,
                ready: false
            }
        },
        computed: {
            itemStyle() {
                const value = `translateX(${this.translate}px) scale(${ this.scale })`
                const style = {
                    transform: value
                }
                return style
            }
        },
        methods: {
            processIndex(index, activeIndex, length) {
                console.log(index, activeIndex, length)
                // 活跃页是第一页，当前页是最后一页，返回-1。表示两者相邻且在左边
                if (activeIndex === 0 && index === length - 1) {
                    return -1;
                // 活跃页是最后一页，当前页是第一页， 返回总页数，这样相差也是1以内
                } else if (activeIndex === length - 1 && index === 0) {
                    return length;
                // 如果，当前页在活跃页前一页的前面，并且之间的间隔在一半页数即以上，则返回页数长度+1，这样它们会被置于最右侧
                } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
                    return length + 1;
                } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
                    return -2;
                }
                return index;
            },
            calcCardTranslate(index, activeIndex) {
                const parentWidth = this.$parent.$el.offsetWidth;
                if(this.inStage) {
                    return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
                }else if(index < activeIndex) {
                    return -(1 + CARD_SCALE) * parentWidth / 4;
                }else {
                    return (3 + CARD_SCALE) * parentWidth / 4;
                }
            },
            calcTranslate(index, activeIndex) {
                const parentWidth = this.$parent.$el.offsetWidth;
                return (index - activeIndex) * parentWidth;
            },
            //核心切换代码
            translateItem(index, activeIndex, oldIndex) {
                const length = this.$parent.items.length;
                const parentType = this.$parent.type;

                this.animating = index === activeIndex || index === oldIndex;

                if (index !== activeIndex && length > 2 && this.$parent.loop) {
                    index = this.processIndex(index, activeIndex, length);
                }
                if (parentType === 'card') {
                    this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
                    this.active = index === activeIndex;
                    this.translate = this.calcCardTranslate(index, activeIndex);
                    this.scale = this.active ? 1 : CARD_SCALE;
                } else {
                    this.active = index === activeIndex;
                    this.translate = this.calcTranslate(index, activeIndex);
                }


                this.ready = true;
            }
        },
        created() {
            this.$parent && this.$parent.updateItems();
        },

        destroyed() {
            this.$parent && this.$parent.updateItems();
        }
    }
</script>

<style scoped lang="less">
    .we-carousel__item{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-block;
        overflow: hidden;
        z-index: 0;
    }
    .we-carousel__item.is-animating{
        transition: transform .4s ease-in-out;
    }
    .we-carousel__item.is-active{
        z-index: 2;
    }
    .we-carousel__item--card{
        width: 50%;
    }
</style>