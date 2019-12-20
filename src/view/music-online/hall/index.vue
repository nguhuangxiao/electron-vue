<template>
    <div>
        <tab v-model="active" type="card" :options="tabItem"></tab>
        <div class="banner">
            <carousel  type="card">
                <carousel-item :key="index" v-for="(item,index) in slideItem">
                    <img :src="item.url" style="max-width: 100%;"/>
                </carousel-item>
            </carousel>
        </div>

    </div>
</template>

<script>
    import Tab from '@/components/common/tabs'
    import Carousel from '@/components/common/carousel/main'
    import CarouselItem from '@/components/common/carousel/item'
    export default {
        name: "HallIndex",
        components: {
            'tab': Tab,
            'carousel': Carousel,
            'carousel-item': CarouselItem
        },
        data() {
            return {
                active: 'jx',
                tabItem: [
                    {label: "精选", value: "jx"},
                    {label: "歌手", value: "gs"},
                    {label: "排行", value: "ph"},
                    {label: "电台", value: "dt"},
                    {label: "分类歌单", value: "flgd"},
                    {label: "有声", value: "ys"},
                    {label: "数字专辑", value: "szzj"}
                ],
                slideItem: [
                    {url: 'https://img.mukewang.com/5df730d90001051418720764.jpg',label: 'pic1'},
                    {url: 'https://imgessl.kugou.com/commendpic/20190109/20190109104155147376.jpg',label: 'pic2'},
                    {url: 'https://imgessl.kugou.com/commendpic/20190611/20190611101938392990.jpg',label: 'pic3'},
                    {url: 'https://imgessl.kugou.com/commendpic/20191216/20191216235112325048.jpg',label: 'pic4'},
                    {url: 'https://imgessl.kugou.com/commendpic/20191217/20191217001403498843.jpg',label: 'pic5'}
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .banner{
        margin: 20px;
    }
</style>