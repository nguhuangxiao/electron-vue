<template>
    <div class="we-carousel"
         @mouseenter.stop="handleMouseEnter"
         @mouseleave.stop="handleMouseLeave"
    >
        <div class="we-carousel__container" :style="{height: height}">
            <transition
                name="carousel-arrow-left"
            >
                <button
                    v-show="hover"
                    type="button"
                    @mouseenter="handleButtonEnter('left')"
                    @mouseleave="handleButtonLeave"
                    @click.stop="throttledArrowClick(activeIndex - 1)"
                    class="we-carousel__arrow we-carousel__arrow--left">
                    <i class="fa fa-angle-left"></i>
                </button>
            </transition>
            <transition
                    name="carousel-arrow-right"
            >
                <button
                    v-show="hover"
                    type="button"
                    @mouseenter="handleButtonEnter('right')"
                    @mouseleave="handleButtonLeave"
                    @click.stop="throttledArrowClick(activeIndex + 1)"
                    class="we-carousel__arrow we-carousel__arrow--right">
                    <i class="fa fa-angle-right"></i>
                </button>
            </transition>
            <slot></slot>
        </div>
        <ul class="we-carousel__indicators">
            <li
                v-for="(item, index) in items"
                :key="index"
                :class="[
                'we-carousel__indicator',
                { 'is-active': index === activeIndex }]"
                @click.stop="handleIndicatorClick(index)"
            >
                <button class="we-carousel__button">
                    <span>{{ item.label }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {throttle} from 'throttle-debounce';
    const carouselType = ['card'];
    export default {
        name: "WeCarousel",
        data() {
            return {
                activeIndex: -1,
                items: [],
                hover: false
            }
        },
        props: {
            initialIndex: {
                type: Number,
                default: 0
            },
            interval: Number,
            height: String,
            autoplay: {
                type: Boolean,
                default: true
            },
            loop: {
                type: Boolean,
                default: true
            },
            type: String
        },
        methods: {
            handleMouseEnter() {
                this.hover = true;
            },
            handleMouseLeave() {
                this.hover = false;
            },
            handleButtonEnter() {

            },
            handleButtonLeave() {

            },
            handleIndicatorClick(index) {
                this.activeIndex = index;
            },
            setActiveItem(index) {
                index = Number(index)
                let length = this.items.length;
                const oldIndex = this.activeIndex;
                if (index < 0) {
                    this.activeIndex = this.loop ? length - 1 : 0;
                } else if (index >= length) {
                    this.activeIndex = this.loop ? 0 : length - 1;
                } else {
                    this.activeIndex = index;
                }
                if (oldIndex === this.activeIndex) {
                    this.resetItemPosition(oldIndex);
                }
            },
            updateItems() {
                this.items = this.$children.filter((child) => child.$options.name === 'WeCarouseItem');
            },
            //重置子项的位置
            resetItemPosition(oldValue) {
                this.items.forEach((item, index) => {
                    item.translateItem(index, this.activeIndex, oldValue)
                })
            }
        },
        watch: {
            items(val) {
                if (val.length > 0) this.setActiveItem(this.initialIndex);
            },
            activeIndex(newValue, oldValue) {
                this.resetItemPosition(oldValue);
            }
        },
        created() {
            this.throttledArrowClick = throttle(300, true, index => {
                this.setActiveItem(index);
            });
        },
        mounted() {
            this.updateItems();
            this.$nextTick(() => {
                if(this.initialIndex < this.items.length && this.initialIndex >= 0) {
                    this.activeIndex = this.initialIndex
                }
            })
        }
    }
</script>

<style scoped lang="less">
    .we-carousel{
        position: relative;
        overflow-x: hidden;
    }
    .we-carousel__container{
        position: relative;
        height: 300px;
    }
    .we-carousel__indicators{
        position: absolute;
        list-style: none;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        padding: 0;
        z-index: 2;
        .we-carousel__button{
            display: block;
            opacity: .48;
            width: 30px;
            height: 2px;
            background-color: #fff;
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
            cursor: pointer;
            transition: .3s;
        }
        .we-carousel__indicator{
            display: inline-block;
            padding: 12px 4px;
            background: transparent;
        }
        .we-carousel__indicator.is-active button{
            opacity: 1;
        }
    }
    .we-carousel__arrow {
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        height: 36px;
        width: 36px;
        cursor: pointer;
        transition: .3s;
        border-radius: 50%;
        background-color: rgba(31,45,61,.11);
        color: #fff;
        position: absolute;
        top: 50%;
        z-index: 10;
        transform: translateY(-50%);
        text-align: center;
        font-size: 12px;
        >i{color: #fff;font-size: 18px;}
    }
    .we-carousel__arrow:hover {
        background-color: rgba(31,45,61,.23);
    }
    .we-carousel__arrow--left{
        left: 16px;
    }
    .we-carousel__arrow--right{
        right: 16px;
    }
    .carousel-arrow-left-enter,
    .carousel-arrow-left-leave-active {
        transform: translateY(-50%) translateX(-10px);
        opacity: 0;
    }

    .carousel-arrow-right-enter,
    .carousel-arrow-right-leave-active {
        transform: translateY(-50%) translateX(10px);
        opacity: 0;
    }
</style>