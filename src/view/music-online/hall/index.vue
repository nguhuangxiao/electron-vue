<template>
    <div>
        <tab v-model="active" type="card" :options="tabItem"></tab>
        <div class="wrapper-main">
            <div class="banner">
                <carousel height="260px" type="card">
                    <carousel-item :key="index" v-for="(item,index) in slideItem">
                        <img :src="item.url" style="max-width: 100%;max-height: 100%;"/>
                    </carousel-item>
                </carousel>
            </div>
            <!--为你推荐的歌单-->
            <div class="songs-sheet-for-you">
                <div class="title">为你推荐的歌单</div>
                <div class="label-list">
                    <div class="sm">清音乐</div>
                    <div class="sm">儿歌</div>
                    <div class="sm">经典</div>
                    <div class="sm">官方歌曲</div>
                    <div class="sm">情歌</div>
                    <div class="sm">网络歌曲</div>
                    <div class="sm">背景音乐</div>
                    <div class="sm">全部分类</div>
                </div>
                <div class="songs-sheet">
                    <div class="sheet-box">
                        <song-cover v-for="(item,index) in songSheetItem" :key="index" :item="item"></song-cover>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import Tab from '@/components/common/tabs'
    import Carousel from '@/components/common/carousel/main'
    import CarouselItem from '@/components/common/carousel/item'
    import SongCover from '@/components/view/song-cover'
    export default {
        name: "HallIndex",
        components: {
            'tab': Tab,
            'carousel': Carousel,
            'carousel-item': CarouselItem,
            'song-cover': SongCover
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
                    {url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1916712.jpg',label: 'pic1'},
                    {url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1917218.jpg',label: 'pic2'},
                    {url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1919002.jpg',label: 'pic3'},
                    {url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1921502.jpg',label: 'pic4'},
                    {url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1921354.jpg',label: 'pic5'}
                ],
                songSheetItem: [
                    {
                        cover: 'http://p.qpic.cn/music_cover/O9FbmkBn7CWyTWMfweTS58eAezmlKfCUuYONlusqBeibw3bfLuq1LHA/600?n=1',
                        label: '跟着节奏抖起来',
                        singer: '房东的猫'
                    },
                    {
                        cover: 'http://p.qpic.cn/music_cover/O9FbmkBn7CWyTWMfweTS58eAezmlKfCUuYONlusqBeibw3bfLuq1LHA/600?n=1',
                        label: '跟着节奏抖起来',
                        singer: '房东的猫'
                    },
                    {
                        cover: 'http://p.qpic.cn/music_cover/O9FbmkBn7CWyTWMfweTS58eAezmlKfCUuYONlusqBeibw3bfLuq1LHA/600?n=1',
                        label: '跟着节奏抖起来',
                        singer: '房东的猫'
                    },
                    {
                        cover: 'http://p.qpic.cn/music_cover/O9FbmkBn7CWyTWMfweTS58eAezmlKfCUuYONlusqBeibw3bfLuq1LHA/600?n=1',
                        label: '跟着节奏抖起来',
                        singer: '房东的猫'
                    },
                    {
                        cover: 'http://p.qpic.cn/music_cover/O9FbmkBn7CWyTWMfweTS58eAezmlKfCUuYONlusqBeibw3bfLuq1LHA/600?n=1',
                        label: '跟着节奏抖起来',
                        singer: '房东的猫'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .songs-sheet-for-you{
        .label-list{
            display: flex;
            justify-content: center;
            .sm{
                width: 95px;
                height: 29px;
                background: #fff;
                text-align: center;
                line-height: 29px;
                margin: 0 6px;
            }
            .sm:first-child{margin-left: 0}
            .sm:last-child{margin-right: 0}
        }
    }
    .songs-sheet{
        margin-top: 30px;

        .sheet-box{
            display: flex;
            justify-content: center;
        }
    }
</style>